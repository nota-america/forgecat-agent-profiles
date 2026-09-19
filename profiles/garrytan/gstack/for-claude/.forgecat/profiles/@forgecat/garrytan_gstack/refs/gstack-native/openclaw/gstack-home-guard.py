#!/usr/bin/env python3
"""Development guard bridge. Native bindings must supply trusted session/cwd.

This does not register a plugin or infer activation from untrusted page text.
The caller serializes activation, checks and session-end for each session.
"""
import argparse
import hashlib
import json
import os
from pathlib import Path
import stat
import subprocess
import sys
import tempfile


def private_dir(path):
    path = Path(path).absolute()
    if path.resolve() != path:
        raise ValueError('state directory must not traverse symlinks')
    path.mkdir(mode=0o700, parents=True, exist_ok=True)
    info = path.lstat()
    if not stat.S_ISDIR(info.st_mode) or info.st_uid != os.getuid() or info.st_mode & 0o077:
        raise ValueError('state directory must be owned and mode 0700')
    return path


def regular(path):
    if path.exists() or path.is_symlink():
        info = path.lstat()
        if not stat.S_ISREG(info.st_mode) or info.st_uid != os.getuid():
            raise ValueError('refusing non-owned/non-regular state file')


def atomic_json(path, value):
    regular(path)
    fd, temporary = tempfile.mkstemp(prefix='.guard-', dir=path.parent)
    try:
        with os.fdopen(fd, 'w') as stream:
            json.dump(value, stream, sort_keys=True)
            stream.write('\n')
        os.replace(temporary, path)
    finally:
        if os.path.exists(temporary):
            os.unlink(temporary)


def patch_paths(value):
    if not isinstance(value, str):
        raise ValueError('patch text is missing')
    lines = value.strip().splitlines()
    if not lines or lines[0] != '*** Begin Patch' or lines[-1] != '*** End Patch':
        raise ValueError('unrecognized patch envelope')
    paths = []
    for line in lines[1:-1]:
        for prefix in ('*** Add File: ', '*** Update File: ', '*** Delete File: ', '*** Move to: '):
            if line.startswith(prefix):
                value = line[len(prefix):]
                if not value.strip():
                    raise ValueError('empty patch target')
                paths.append(value)
                break
        else:
            if line.startswith('*** ') and line != '*** End of File':
                raise ValueError('unrecognized patch directive')
    if not paths:
        raise ValueError('patch has no targets')
    return paths


class Guard:
    def __init__(self, runtime, state_root, platform):
        if platform not in ('openclaw', 'hermes'):
            raise ValueError('unsupported host')
        self.runtime = Path(runtime).resolve(strict=True)
        self.root = private_dir(state_root)
        self.platform = platform

    def paths(self, session):
        if not isinstance(session, str) or not session.strip() or len(session) > 4096:
            raise ValueError('native session identity is required')
        key = hashlib.sha256((self.platform + '\0' + session).encode()).hexdigest()
        folder = self.root / key
        return folder, folder / 'guard.json'

    def load(self, session):
        folder, record = self.paths(session)
        if not folder.exists() and not folder.is_symlink():
            return folder, record, None
        private_dir(folder)
        regular(record)
        if not record.exists():
            raise ValueError('guard state is incomplete')
        value = json.loads(record.read_text())
        if value.get('schema') != 1 or value.get('platform') != self.platform:
            raise ValueError('invalid guard state')
        return folder, record, value

    def activate(self, session, mode, boundary=None):
        if mode not in ('careful', 'freeze', 'guard'):
            raise ValueError('unknown guard mode')
        folder, record, value = self.load(session)
        value = value or {'schema': 1, 'platform': self.platform, 'careful': False, 'freeze': None}
        if value.get('closed'):
            raise ValueError('session has ended; require a new native session identity')
        if mode in ('freeze', 'guard'):
            if not isinstance(boundary, str) or not Path(boundary).is_absolute():
                raise ValueError('freeze requires an absolute existing directory')
            target = Path(boundary).resolve(strict=True)
            if not target.is_dir():
                raise ValueError('freeze boundary must be a directory')
            value['freeze'] = str(target)
        if mode in ('careful', 'guard'):
            value['careful'] = True
        private_dir(folder)
        # Write boundary before exposing active metadata; failed writes cannot
        # produce an active freeze with a missing source-handler state file.
        if value['freeze']:
            freeze_file = folder / 'freeze-dir.txt'
            regular(freeze_file)
            freeze_file.write_text(value['freeze'].rstrip('/') + '/\n')
            freeze_file.chmod(0o600)
        atomic_json(record, value)
        return value

    def clear(self, session, end=False):
        folder, record, value = self.load(session)
        if value is None:
            return {'inactive': True}
        value['freeze'] = None
        if end:
            value.update(careful=False, closed=True)
        atomic_json(record, value)
        target = folder / 'freeze-dir.txt'
        regular(target)
        if target.exists():
            target.unlink()
        return value

    def source_decision(self, folder, handler, payload, cwd):
        env = os.environ.copy()
        env['GSTACK_HOME'] = str(folder)
        result = subprocess.run(['/bin/bash', str(self.runtime / handler)],
                                input=json.dumps({'tool_input': payload}), text=True,
                                capture_output=True, cwd=cwd, env=env, timeout=15)
        if result.returncode:
            raise ValueError('source guard handler failed')
        value = json.loads(result.stdout)
        if value == {}:
            return {'decision': 'allow'}
        hook = value.get('hookSpecificOutput', {})
        decision = hook.get('permissionDecision')
        if hook.get('hookEventName') != 'PreToolUse' or decision not in ('allow', 'ask', 'deny'):
            raise ValueError('invalid source guard decision')
        return {'decision': decision, 'reason': hook.get('permissionDecisionReason', '')}

    def check(self, session, tool, arguments, cwd, explicit_paths=False):
        try:
            folder, _, value = self.load(session)
            if value is None or value.get('closed'):
                return {'decision': 'allow'}
            if not isinstance(arguments, dict) or not Path(cwd).is_absolute():
                raise ValueError('native arguments and absolute cwd are required')
            if value['careful'] and tool in ('exec', 'terminal'):
                if not isinstance(arguments.get('command'), str):
                    raise ValueError('native command is missing')
                if explicit_paths and (not isinstance(arguments.get('workdir'), str) or not Path(arguments['workdir']).is_absolute()):
                    raise ValueError('this native hook requires an explicit absolute command workdir')
                workdir = arguments.get('workdir', arguments.get('cwd', cwd))
                if not isinstance(workdir, str) or not workdir:
                    raise ValueError('native command workdir is invalid')
                workdir = Path(workdir).expanduser()
                cwd = str(workdir if workdir.is_absolute() else Path(cwd) / workdir)
                return self.source_decision(folder, 'careful/bin/check-careful.sh',
                                            {'command': arguments['command']}, cwd)
            if not value['freeze']:
                return {'decision': 'allow'}
            freeze_file = folder / 'freeze-dir.txt'
            regular(freeze_file)
            if not freeze_file.exists() or freeze_file.read_text() != value['freeze'].rstrip('/') + '/\n':
                raise ValueError('active freeze state is missing or changed')
            targets = []
            if tool in ('edit', 'write', 'write_file') or (tool == 'patch' and arguments.get('mode', 'replace') == 'replace'):
                target = arguments.get('path', arguments.get('file_path'))
                if not isinstance(target, str) or not target:
                    raise ValueError('native write target is missing')
                targets = [target]
            elif tool == 'apply_patch' or (tool == 'patch' and arguments.get('mode') == 'patch'):
                targets = patch_paths(arguments.get('input') if tool == 'apply_patch' else arguments.get('patch'))
            for target in targets:
                target = Path(target).expanduser()
                if explicit_paths and not target.is_absolute():
                    raise ValueError('this native hook requires an absolute file path; relative cwd is not exposed')
                absolute = str(target if target.is_absolute() else Path(cwd) / target)
                answer = self.source_decision(folder, 'freeze/bin/check-freeze.sh', {'file_path': absolute}, cwd)
                if answer['decision'] != 'allow':
                    return answer
            return {'decision': 'allow'}
        except (ValueError, OSError, KeyError, TypeError, subprocess.TimeoutExpired) as exc:
            return {'decision': 'deny', 'reason': 'gstack guard could not verify this call: ' + str(exc)}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--runtime', required=True)
    parser.add_argument('--state-root', required=True)
    parser.add_argument('--platform', required=True)
    args = parser.parse_args()
    request = json.load(sys.stdin)
    guard = Guard(args.runtime, args.state_root, args.platform)
    operation, session = request['operation'], request['session']
    if operation == 'activate':
        answer = guard.activate(session, request['mode'], request.get('boundary'))
    elif operation == 'check':
        answer = guard.check(session, request['tool'], request['arguments'], request['cwd'], request.get('explicit_paths', False))
    elif operation in ('unfreeze', 'end'):
        answer = guard.clear(session, end=operation == 'end')
    else:
        raise ValueError('unknown operation')
    print(json.dumps(answer))


if __name__ == '__main__':
    main()
