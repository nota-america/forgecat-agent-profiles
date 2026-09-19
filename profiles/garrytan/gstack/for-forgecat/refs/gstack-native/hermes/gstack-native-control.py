"""Session-bound native control API shared by the two gstack plugins."""
import importlib.util
import json
from pathlib import Path
import subprocess
import sys

sys.dont_write_bytecode=True
ROOT=Path(__file__).resolve().parent


def load(name):
    spec=importlib.util.spec_from_file_location(name,ROOT/(name+'.py'))
    module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module);return module


def control(binding, session, request):
    guard=load('gstack-home-guard').Guard(binding['runtime'],binding['stateRoot'],binding['host'])
    operation=request.get('operation')
    if operation=='activate':return guard.activate(session,request['mode'],request.get('boundary'))
    if operation=='unfreeze':return guard.clear(session)
    if operation=='end':return guard.clear(session,end=True)
    if operation in ('context','status'):
        command=[binding['python'], '-B',binding['controller'],
                 'instructions' if operation=='context' else 'status','--host',binding['host'],'--cache-root',binding['cacheRoot']]
        if operation=='context':command+=['--skill',request.get('skill','gstack')]
        run=subprocess.run(command,text=True,capture_output=True,timeout=30,check=True)
        result=json.loads(run.stdout)
        if result['sourceCommit']!=binding['sourceCommit'] or result.get('layoutDigest')!=binding['layoutDigest']:
            raise ValueError('profile changed; re-run native setup before using the new workflows')
        result['session']=session
        result['guardScope']='this native session; activate separately in isolated children when required'
        return result
    if operation=='child-request':
        child=load('gstack-home-child')
        prompt=request.get('prompt')
        if not isinstance(prompt,str) or not prompt.strip():raise ValueError('complete source subtask prompt required')
        preface=('First call gstack_control with operation=context for the target skill to obtain this installation’s '
                 'runtime paths and environment. Do not assume shell variables from the parent persist. '
                 'Preserve the source task scope, consent exceptions, output format and GSTACK_SESSION_KIND=spawned prefix.\n\n')
        dispatch=child.documentation_dispatch(binding['host'],preface+prompt)
        if binding['host']=='hermes':dispatch['arguments']['goal']='Execute the complete source subtask in context and preserve its required output format.'
        return dispatch
    raise ValueError('unknown control operation')


if __name__=='__main__':
    try:
        binding=json.loads((ROOT/'binding.json').read_text())
        envelope=json.load(sys.stdin)
        result=control(binding,envelope['session'],envelope['request'])
        print(json.dumps({'ok':True,'result':result},ensure_ascii=False))
    except Exception as error:
        print(json.dumps({'ok':False,'error':str(error)},ensure_ascii=False))
        sys.exit(1)
