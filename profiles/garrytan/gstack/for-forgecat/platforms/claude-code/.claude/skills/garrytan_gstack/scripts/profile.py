#!/usr/bin/env python3
"""Prepare and inspect the source-pinned gstack runtime owned by this profile."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import shlex
import shutil
import stat
import subprocess
import sys
import tempfile
import time

sys.dont_write_bytecode = True
HERE = Path(__file__).resolve().parent


def sha(file):
    return hashlib.sha256(file.read_bytes()).hexdigest()


def safe_relative(value):
    p = Path(value)
    if p.is_absolute() or '..' in p.parts or not value:
        raise ValueError('invalid packaged relative path')
    return p


def private_dir(path):
    path = Path(path).absolute()
    if path.resolve() != path:
        raise ValueError('refusing symlink state directory')
    path.mkdir(parents=True, mode=0o700, exist_ok=True)
    info = path.lstat()
    if not stat.S_ISDIR(info.st_mode) or info.st_uid != os.getuid() or info.st_mode & 0o077:
        raise ValueError('cache must be an owned 0700 directory')
    return path


def package_root():
    # Canonical build tree, or ForgeCat's documented flat native skill layout.
    direct = HERE.parents[2]
    if (direct/'profile.yml').is_file() and (direct/'refs/gstack-runtime').is_dir():
        return direct
    base = HERE.parents[3] if HERE.parents[2].name in ('.claude','.cursor','.agents') else HERE.parents[2]
    installed = base/'.forgecat/profiles/@forgecat/garrytan_gstack'
    if not (installed/'refs/gstack-runtime').is_dir():
        raise ValueError('profile reference payload is absent; repair the exact ForgeCat installation')
    return installed


class Profile:
    def __init__(self, host, cache_root=None):
        self.layout = json.loads((HERE/'layout.json').read_text())
        if host not in self.layout['workflows']:
            raise ValueError('unknown platform')
        self.host = host
        self.package = package_root()
        self.install_id = hashlib.sha256(str(HERE).encode()).hexdigest()[:16]
        self.digest = hashlib.sha256(json.dumps(self.layout, sort_keys=True).encode()).hexdigest()
        cache = Path(cache_root) if cache_root else Path.home()/'.cache/forgecat-gstack'
        self.cache = private_dir(cache)
        self.owner = private_dir(self.cache/self.install_id)
        self.runtime = self.owner/(self.digest[:20]+'-'+host)
        self.asset_cache = self.owner/'external-assets'
        self.guard_state = self.owner/('guard-'+host)

    def verified_asset(self, relative, expected):
        path = self.package/safe_relative(relative)
        if path.is_symlink() or not path.resolve().is_relative_to(self.package.resolve()) or not path.is_file() or sha(path) != expected:
            raise ValueError('packaged asset is absent or modified: '+relative)
        return path

    def verify_runtime(self):
        if self.runtime.is_symlink() or not self.runtime.is_dir():
            raise ValueError('runtime is not prepared; run prepare explicitly')
        path = self.runtime/'forgecat-runtime.json'
        if path.is_symlink():raise ValueError('runtime receipt must be regular')
        seal=self.owner/(self.runtime.name+'.receipt-sha256')
        if seal.is_symlink() or not seal.is_file() or seal.read_text().strip()!=sha(path):
            raise ValueError('runtime ownership receipt changed or is missing')
        receipt=json.loads(path.read_text())
        if receipt.get('layoutDigest')!=self.digest or receipt.get('host')!=self.host:
            raise ValueError('runtime receipt does not match this installation')
        for row in receipt['sourceFiles']:
            file=self.runtime/safe_relative(row['path'])
            if file.resolve()!=file or file.is_symlink() or not file.is_file() or sha(file)!=row['sha256'] or (file.stat().st_mode&0o777)!=row['mode']:
                raise ValueError('runtime source changed: '+row['path'])
        return receipt

    def prepare(self):
        if self.runtime.exists():return self.verify_runtime()
        stage=Path(tempfile.mkdtemp(prefix='.prepare-',dir=self.owner))
        try:
            for row in self.layout['runtimeFiles']:
                source=self.verified_asset(row['path'],row['sha256'])
                dest=stage/safe_relative(row['source']);dest.parent.mkdir(parents=True,exist_ok=True)
                shutil.copyfile(source,dest);dest.chmod(row['mode'])
            for name,row in self.layout['workflows'][self.host].items():
                root=stage if name=='gstack' else stage/name
                root.mkdir(parents=True,exist_ok=True)
                source=self.verified_asset(row['path'],row['sha256'])
                (root/'SKILL.md').write_text('---\n'+json.dumps(row['frontmatter'],ensure_ascii=False)+'\n---\n\n'+source.read_text())
                prefix=Path(row['path']).parent
                for section in row['sections']:
                    data=self.package/safe_relative(section)
                    # Section hashes are bound separately in the layout ledger.
                    if sha(data)!=self.layout['supportHashes'][section]:raise ValueError('workflow support changed')
                    dest=root/Path(section).relative_to(prefix);dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(data,dest)
            # Original full setup installs into user skill/settings trees. This
            # managed runtime offers preparation/build through the controller.
            (stage/'setup').write_text('#!/bin/sh\necho "This is a ForgeCat-managed runtime. Use the installed profile entry helper: build --host '+self.host+' --allow-download" >&2\nexit 1\n')
            (stage/'setup').chmod(0o755)
            (stage/'bin/gstack-update-check').write_text('#!/bin/sh\necho "UPDATE_MANAGED: ForgeCat @forgecat/garrytan_gstack"\n')
            (stage/'bin/gstack-update-check').chmod(0o755)
            upgrade=stage/'gstack-upgrade/SKILL.md'
            upgrade.write_text('This runtime is managed by ForgeCat. Explain the update and obtain confirmation. On OpenClaw or Hermes, stop owned services, run the installed helper native-remove with the same native home/agent, and restart native sessions before updating. Use `forgecat update @forgecat/garrytan_gstack`, then obtain the new entry context and prepare/build that runtime; obtain consent for any new downloads. Reinstall its native binding afterward. Never run the upstream git/tarball updater against this managed runtime. Read the complete pinned changelog via `python3 \"$GSTACK_ROOT/bin/forgecat-asset.py\" changelog` using the NEW runtime environment. The helper rejects a source-version mismatch; missing cache requires explicit --allow-download consent.\n')
            (stage/'connect-chrome').mkdir(exist_ok=True)
            if (stage/'open-gstack-browser/SKILL.md').exists():
                shutil.copy2(stage/'open-gstack-browser/SKILL.md',stage/'connect-chrome/SKILL.md')
            receipt={'schema':1,'profile':self.layout['profile'],'sourceCommit':self.layout['sourceCommit'],
                     'layoutDigest':self.digest,'host':self.host,'controller':str(HERE/'profile.py'),'sourceFiles':[]}
            for file in sorted(stage.rglob('*')):
                if file.is_file():receipt['sourceFiles'].append({'path':file.relative_to(stage).as_posix(),'sha256':sha(file),'mode':file.stat().st_mode&0o777})
            (stage/'forgecat-runtime.json').write_text(json.dumps(receipt,indent=2)+'\n')
            seal=self.owner/(self.runtime.name+'.receipt-sha256')
            seal.write_text(sha(stage/'forgecat-runtime.json')+'\n')
            os.rename(stage,self.runtime)
            private_dir(self.asset_cache)
            return receipt
        except Exception:
            # Failed preparation is retained for diagnosis, not adopted later.
            raise

    def environment(self):
        return {'GSTACK_RUNTIME_ROOT':str(self.runtime),'GSTACK_ROOT':str(self.runtime),
                'GSTACK_ASSET_CACHE_ROOT':str(self.asset_cache),
                'PLAYWRIGHT_BROWSERS_PATH':str(self.owner/'browsers')}

    def download(self):
        self.verify_runtime();private_dir(self.asset_cache)
        env={**os.environ,**self.environment()}
        for asset in ('diagram','changelog'):
            subprocess.run([sys.executable,str(self.runtime/'bin/forgecat-asset.py'),asset,'--allow-download'],env=env,check=True,stdout=subprocess.DEVNULL)
        return {'downloaded':['diagram','changelog']}

    def build(self):
        self.verify_runtime()
        env={**os.environ,**self.environment()}
        commands=[['bun','install','--frozen-lockfile','--ignore-scripts'],['bun','run','vendor:xterm']]
        for source,output in [('browse/src/cli.ts','browse/dist/browse'),('browse/src/find-browse.ts','browse/dist/find-browse'),
                              ('design/src/cli.ts','design/dist/design'),('make-pdf/src/cli.ts','make-pdf/dist/pdf'),
                              ('bin/gstack-global-discover.ts','bin/gstack-global-discover')]:
            commands.append(['bun','build','--compile',source,'--outfile',output])
        commands += [['bash','scripts/build-cso.sh'],['bash','browse/scripts/build-node-server.sh'],
                     ['bash','scripts/write-version-files.sh','browse/dist/.version','design/dist/.version','make-pdf/dist/.version']]
        for command in commands:
            subprocess.run(command,cwd=self.runtime,env=env,check=True,stdout=sys.stderr)
        # No gen:skill-docs or upstream setup: neither may replace the bound workflows.
        self.verify_runtime()
        (self.runtime/'browse/dist/.build-complete').write_text('complete\n')
        outputs=[]
        for name in ['browse/dist/browse','browse/dist/find-browse','design/dist/design','make-pdf/dist/pdf','bin/gstack-global-discover','bin/gstack-cso-launcher']:
            file=self.runtime/name
            if not file.is_file():raise ValueError('build output missing: '+name)
            outputs.append({'path':name,'sha256':sha(file)})
        (self.runtime/'forgecat-build.json').write_text(json.dumps({'sourceCommit':self.layout['sourceCommit'],'outputs':outputs},indent=2)+'\n')
        return {'built':outputs,'browserDownload':'Use browser-install with explicit consent if the headless backend is needed.'}

    def instructions(self,skill):
        if skill not in self.layout['workflows'][self.host]:
            raise ValueError('upstream omits this outside-review wrapper on its own host')
        self.verify_runtime()
        env=self.environment()
        prefix=' '.join(f'{k}={shlex.quote(v)}' for k,v in env.items())
        path=self.runtime/('SKILL.md' if skill=='gstack' else skill+'/SKILL.md')
        return {'host':self.host,'skill':skill,'sourceCommit':self.layout['sourceCommit'],'layoutDigest':self.digest,'workflow':str(path),
                'runtime':str(self.runtime),'environment':env,'shellPrefix':prefix,
                'nativeControlRequired':self.host in ('openclaw','hermes'),
                'contract':str(HERE/'runtime-contract.md'),
                'readCompleteWorkflow':True}

    def clean(self):
        # Reversible quarantine, never recursive deletion of unknown user data.
        if not self.runtime.exists():return {'status':'absent'}
        self.verify_runtime()
        processes=subprocess.run(['ps','-eo','pid=,args='],text=True,capture_output=True,check=True).stdout
        if any(str(self.runtime) in line for line in processes.splitlines()):
            raise ValueError('a process still references this runtime; stop its own services first')
        registrations=self.owner/'native-install.json'
        if registrations.exists():raise ValueError('remove the native integration before quarantining its runtime')
        retired=private_dir(self.owner/'retired')
        target=retired/(self.runtime.name+'-'+str(time.time_ns()))
        os.rename(self.runtime,target)
        return {'status':'quarantined','path':str(target),'note':'Retained for recovery; no files were permanently deleted.'}


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('action',choices=['status','prepare','download-assets','build','browser-install','instructions','clean','hook','native-plan','native-install','native-remove'])
    parser.add_argument('--host',required=True)
    parser.add_argument('--skill',default='gstack')
    parser.add_argument('--cache-root');parser.add_argument('--allow-download',action='store_true')
    parser.add_argument('--handler',choices=['careful','freeze','timeline'])
    parser.add_argument('--native-home');parser.add_argument('--agent')
    args=parser.parse_args()
    try:
        profile=Profile(args.host,args.cache_root)
        if args.action=='status':
            result={'host':profile.host,'runtime':str(profile.runtime),'prepared':profile.runtime.is_dir(),'sourceCommit':profile.layout['sourceCommit'],'layoutDigest':profile.digest}
        elif args.action=='prepare':
            profile.prepare();result=profile.instructions('gstack')
        elif args.action=='instructions':result=profile.instructions(args.skill)
        elif args.action in ('download-assets','build','browser-install'):
            if not args.allow_download:raise ValueError('explicit --allow-download consent is required')
            if args.action=='download-assets':result=profile.download()
            elif args.action=='build':result=profile.build()
            else:
                profile.verify_runtime()
                subprocess.run(['bunx','--no-install','playwright','install','chromium'],cwd=profile.runtime,env={**os.environ,**profile.environment()},check=True,stdout=sys.stderr)
                result={'browserInstalled':True}
        elif args.action=='clean':result=profile.clean()
        elif args.action=='hook':
            profile.verify_runtime()
            if args.handler not in ('careful','freeze'):raise ValueError('unknown scoped hook handler')
            script=profile.runtime/args.handler/'bin'/('check-'+args.handler+'.sh')
            run=subprocess.run(['/bin/bash',str(script)],input=sys.stdin.read(),text=True,capture_output=True,env={**os.environ,**profile.environment()})
            if run.returncode:raise ValueError('source hook failed')
            print(run.stdout,end='');return
        else:
            import importlib.util
            spec=importlib.util.spec_from_file_location('native_install',HERE/'native-install.py')
            mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
            result=mod.run(profile,args.action,args.native_home,args.agent)
        print(json.dumps(result,ensure_ascii=False,indent=2))
    except Exception as error:
        if args.action=='hook':
            decision='ask' if args.handler=='careful' else 'deny'
            print(json.dumps({'hookSpecificOutput':{'hookEventName':'PreToolUse','permissionDecision':decision,'permissionDecisionReason':'gstack runtime unavailable: '+str(error)}}));return
        print('error: '+str(error),file=sys.stderr);sys.exit(1)


if __name__=='__main__':main()
