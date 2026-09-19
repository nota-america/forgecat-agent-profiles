"""Install only this profile's native binding through the host plugin manager."""
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import time


def files(root):
    result={}
    for p in sorted(root.rglob('*')):
        if '.git' in p.relative_to(root).parts or '__pycache__' in p.parts:continue
        if p.is_symlink():raise ValueError('native payload contains a symlink')
        if p.is_file():result[p.relative_to(root).as_posix()]=hashlib.sha256(p.read_bytes()).hexdigest()
    return result


def run(profile, action, native_home, agent):
    if profile.host not in ('openclaw','hermes'):raise ValueError('native plugins are only for OpenClaw and Hermes')
    if not native_home:raise ValueError('explicit --native-home is required')
    home=Path(native_home).expanduser().absolute()
    if home.resolve()!=home:raise ValueError('native home must not contain symlinks')
    if profile.host=='openclaw' and not agent:raise ValueError('--agent must identify the OpenClaw workspace owner')
    plugin_id='forgecat-gstack-'+profile.install_id
    target=home/('extensions' if profile.host=='openclaw' else 'plugins')/plugin_id
    if target.resolve()!=target:raise ValueError('native plugin target or ancestor contains a symlink')
    receipt=profile.owner/'native-install.json'
    env={**os.environ,'PYTHONDONTWRITEBYTECODE':'1'}
    if profile.host=='openclaw':
        env.update(OPENCLAW_STATE_DIR=str(home),OPENCLAW_CONFIG_PATH=str(home/'openclaw.json'))
        cli=['openclaw']
    else:
        env['HERMES_HOME']=str(home);cli=['hermes']
    plan={'host':profile.host,'id':plugin_id,'nativeHome':str(home),'target':str(target),'agent':agent,
          'activation':'Native manager review/consent remains in force. Restart native sessions after install/remove.'}
    if action=='native-plan':return plan
    def command(args,cwd=None):
        subprocess.run(args,cwd=cwd,env=env,check=True,stdout=sys.stderr)
    if action=='native-remove':
        if receipt.is_symlink() or not receipt.is_file():raise ValueError('no owned native installation receipt')
        record=json.loads(receipt.read_text())
        if record['target']!=str(target) or record['id']!=plugin_id:raise ValueError('native target differs from receipt')
        if not target.is_dir() or target.is_symlink() or files(target)!=record['files']:raise ValueError('native plugin changed or is missing; preserve and inspect it before removal')
        if profile.host=='openclaw' and not (sys.stdin.isatty() and sys.stderr.isatty()):
            raise ValueError('OpenClaw removal requires an interactive terminal for native confirmation')
        backup=profile.owner/('native-retired-'+str(time.time_ns()))
        shutil.copytree(target,backup,ignore=shutil.ignore_patterns('.git','__pycache__'))
        if profile.host=='openclaw':
            # The native uninstaller confirms before changing files or config.
            # Disabling first would change an installation even when cancelled.
            command(cli+['plugins','uninstall',plugin_id])
        else:
            command(cli+['plugins','disable',plugin_id])
            command(cli+['plugins','remove',plugin_id])
        if target.exists():raise ValueError('native removal cancelled or incomplete; installation receipt retained')
        os.rename(receipt,backup/'forgecat-removal-receipt.json')
        return {**plan,'removed':True,'recoveryCopy':str(backup),'restartRequired':True}
    profile.verify_runtime()
    if receipt.exists() or target.exists():raise ValueError('native binding exists; remove the owned previous binding first')
    if profile.host=='openclaw':
        config=json.loads((home/'openclaw.json').read_text())
        agents=config.get('agents',{})
        selected=next((a for a in agents.get('list',[]) if a.get('id')==agent),None)
        if selected is None:raise ValueError('selected OpenClaw agent is absent from this native configuration')
        workspace_value=selected.get('workspace') or agents.get('defaults',{}).get('workspace')
        if not isinstance(workspace_value,str) or not workspace_value.strip():raise ValueError('selected OpenClaw workspace is not explicitly configured')
        workspace=Path(workspace_value).expanduser().resolve()
        # This profile reference package lives inside the selected workspace.
        if not profile.package.resolve().is_relative_to(workspace):raise ValueError('profile reference payload is outside the selected agent workspace')
    else:
        workspace=home
        if not profile.package.resolve().is_relative_to(home):raise ValueError('Hermes profile must be installed under the selected native home')
    parent=Path(tempfile.mkdtemp(prefix='native-package-',dir=profile.owner))
    stage=parent/plugin_id;stage.mkdir(mode=0o700)
    prefix='refs/gstack-native/'+profile.host+'/'
    for relative,digest in profile.layout['nativeFiles'].items():
        if not relative.startswith(prefix):continue
        source=profile.verified_asset(relative,digest)
        dest=stage/relative[len(prefix):];dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(source,dest)
    binding={'host':profile.host,'sourceCommit':profile.layout['sourceCommit'],'layoutDigest':profile.digest,
             'controller':str(Path(__file__).with_name('profile.py')),'python':sys.executable,'runtime':str(profile.runtime),
             'stateRoot':str(profile.guard_state),'cacheRoot':str(profile.cache),'workspace':str(workspace),'agentId':agent}
    (stage/'binding.json').write_text(json.dumps(binding,indent=2)+'\n')
    if profile.host=='openclaw':
        manifest={'id':plugin_id,'name':'ForgeCat gstack runtime','version':'1.0.0','contracts':{'tools':['gstack_control']},'configSchema':{'type':'object','additionalProperties':False,'properties':{}}}
        (stage/'openclaw.plugin.json').write_text(json.dumps(manifest,indent=2)+'\n')
        (stage/'package.json').write_text(json.dumps({'name':plugin_id,'version':'1.0.0','type':'module','openclaw':{'extensions':['./index.js']}})+'\n')
        command(cli+['plugins','install',str(stage)])
    else:
        # Git is local-only; native install keeps its normal scanner and consent.
        (stage/'plugin.yaml').write_text(json.dumps({'name':plugin_id,'version':'1.0.0','description':'Session-bound gstack safety hooks and runtime paths.',
            'provides_tools':['gstack_control'],'provides_hooks':['pre_tool_call','on_session_finalize','on_session_reset']})+'\n')
        command(['git','init','--quiet'],stage)
        command(['git','add','.'],stage)
        command(['git','-c','user.name=ForgeCat local setup','-c','user.email=local@invalid','commit','--quiet','-m','Bind installed gstack runtime'],stage)
        commit=subprocess.check_output(['git','rev-parse','HEAD'],cwd=stage,text=True).strip()
        command(cli+['plugins','install',stage.as_uri(),'--ref',commit,'--no-enable'])
    if not target.is_dir():raise ValueError('native manager did not materialize the expected target')
    expected=files(stage);actual=files(target)
    if any(actual.get(p)!=digest for p,digest in expected.items()):raise ValueError('native plugin bytes differ from staged binding')
    record={**plan,'sourceCommit':profile.layout['sourceCommit'],'layoutDigest':profile.digest,'files':actual,'stage':str(stage),'status':'installed'}
    receipt.write_text(json.dumps(record,indent=2)+'\n')
    command(cli+['plugins','enable',plugin_id])
    record['status']='enabled';receipt.write_text(json.dumps(record,indent=2)+'\n')
    return {**plan,'installed':True,'restartRequired':True,'receipt':str(receipt)}
