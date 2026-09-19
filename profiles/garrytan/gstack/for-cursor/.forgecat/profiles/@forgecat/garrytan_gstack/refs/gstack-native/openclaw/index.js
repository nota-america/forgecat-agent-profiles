import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createGstackHooks } from './gstack-home-openclaw.js';

const root=path.dirname(fileURLToPath(import.meta.url));
export default function register(api) {
  const binding=JSON.parse(fs.readFileSync(path.join(root,'binding.json'),'utf8'));
  const hooks=createGstackHooks({python:binding.python,guardScript:path.join(root,'gstack-home-guard.py'),
    runtime:binding.runtime,stateRoot:binding.stateRoot,workspace:binding.workspace});
  const owns=context => context.agentId===binding.agentId;
  api.on('before_tool_call',(event,context)=>owns(context)?hooks.beforeToolCall(event,context):undefined);
  api.on('session_end',(event,context)=>owns(context)?hooks.sessionEnd(event,context):undefined);
  api.registerTool(context=> {
    if (!owns(context)) return null;
    return {
      name:'gstack_control',label:'Gstack runtime',description:'Resolve the installed gstack workflow or manage this session’s source-backed safety guard. Does not grant approvals or publish changes.',
      parameters:{type:'object',additionalProperties:false,properties:{
        operation:{type:'string',enum:['context','status','activate','unfreeze','end','child-request']},
        skill:{type:'string'},mode:{type:'string',enum:['careful','freeze','guard']},boundary:{type:'string'},prompt:{type:'string'}},required:['operation']},
      async execute(_id,request) {
        if (!context.sessionId) throw new Error('native session identity is required');
        const result=execFileSync(binding.python,['-B',path.join(root,'gstack-native-control.py')],
          {input:JSON.stringify({session:context.sessionId,request}),encoding:'utf8',timeout:30000});
        return {content:[{type:'text',text:result}]};
      },
    };
  },{names:['gstack_control']});
}
