"""Development Hermes hook binding, not an auto-enabled plugin."""
import importlib.util
from pathlib import Path
import sys

sys.dont_write_bytecode = True
spec = importlib.util.spec_from_file_location('gstack_guard', Path(__file__).with_name('gstack-home-guard.py'))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


def register(ctx, runtime, state_root, workspace):
    guard = module.Guard(runtime, state_root, 'hermes')

    def before_tool_call(tool_name, args, session_id='', **kwargs):
        try:
            from tools.file_tools import _resolve_base_dir, _uses_container_paths
            task_id = kwargs.get('task_id') or 'default'
            _, _, scope = guard.load(session_id)
            if scope and not scope.get('closed') and (scope['careful'] or scope['freeze']) and _uses_container_paths(task_id):
                return {'action': 'block', 'message': 'gstack local guard requires a local filesystem backend'}
            cwd = str(_resolve_base_dir(task_id))
            answer = guard.check(session_id, tool_name, args, cwd)
            if answer['decision'] == 'allow':
                return None
            return {'action': {'ask': 'approve', 'deny': 'block'}[answer['decision']],
                    'message': answer.get('reason', 'gstack guard verification failed')}
        except Exception as error:
            # Hermes may ignore a hook exception. Return a block instead.
            return {'action': 'block', 'message': 'gstack guard verification failed: ' + str(error)}

    def session_end(session_id='', **kwargs):
        return guard.clear(session_id, end=True)

    ctx.register_hook('pre_tool_call', before_tool_call)
    ctx.register_hook('on_session_finalize', session_end)
    ctx.register_hook('on_session_reset', session_end)
    return guard
