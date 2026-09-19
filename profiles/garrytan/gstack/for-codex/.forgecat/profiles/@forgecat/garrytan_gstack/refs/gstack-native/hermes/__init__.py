"""Native Hermes entry: session-bound control and source-backed tool guards."""
import importlib.util
import json
from pathlib import Path
import sys

sys.dont_write_bytecode=True
ROOT=Path(__file__).resolve().parent


def load(name):
    spec=importlib.util.spec_from_file_location(name,ROOT/(name+'.py'))
    module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module);return module


def register(ctx):
    binding=json.loads((ROOT/'binding.json').read_text())
    load('gstack-home-hermes').register(ctx,binding['runtime'],binding['stateRoot'],binding['workspace'])
    schema={'name':'gstack_control','description':'Resolve the installed gstack workflow or manage this native session’s safety guard. Does not grant approvals or publish changes.',
        'parameters':{'type':'object','additionalProperties':False,'properties':{
            'operation':{'type':'string','enum':['context','status','activate','unfreeze','end','child-request']},
            'skill':{'type':'string'},'mode':{'type':'string','enum':['careful','freeze','guard']},
            'boundary':{'type':'string'},'prompt':{'type':'string'}},'required':['operation']}}
    def handler(args,**kwargs):
        try:
            session=kwargs.get('session_id')
            if not session:raise ValueError('native session identity is required')
            result=load('gstack-native-control').control(binding,session,args)
            return json.dumps({'ok':True,'result':result},ensure_ascii=False)
        except Exception as error:
            return json.dumps({'ok':False,'error':str(error)},ensure_ascii=False)
    ctx.register_tool(name='gstack_control',toolset='forgecat_gstack',schema=schema,handler=handler)
