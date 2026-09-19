"""Interpret native child lifecycle events without treating dispatch as success.

No API calls, PR creation, Git writes or model calls. Host bindings supply run
identity, terminal status, and the child final text from native receipts.
"""
import json


def documentation_dispatch(platform, source_prompt):
    if not isinstance(source_prompt, str) or not source_prompt.strip():
        raise ValueError('complete source child prompt is required')
    if platform == 'openclaw':
        return {'tool': 'sessions_spawn', 'arguments': {
            'task': source_prompt, 'runtime': 'subagent', 'mode': 'run',
            'context': 'isolated', 'cleanup': 'keep'}}
    if platform == 'hermes':
        return {'tool': 'delegate_task', 'arguments': {
            'goal': 'Execute the source documentation task in context and return its required last-line JSON.',
            'context': source_prompt, 'role': 'leaf'}}
    raise ValueError('unknown native host')


def documentation_result(text):
    if not isinstance(text, str) or not text.strip():
        raise ValueError('child final text is missing')
    result = json.loads(text.strip().splitlines()[-1])
    if not isinstance(result, dict):
        raise ValueError('last line must be a JSON object')
    if not isinstance(result.get('files_updated'), list) or not all(isinstance(p, str) for p in result['files_updated']):
        raise ValueError('files_updated must be a string array')
    if result.get('commit_sha') is not None and not isinstance(result['commit_sha'], str):
        raise ValueError('commit_sha must be a string or null')
    if 'commit_sha' not in result or not isinstance(result.get('pushed'), bool) or not isinstance(result.get('documentation_section'), str):
        raise ValueError('incomplete documentation result')
    result.setdefault('decisions', [])  # source permits older children without this field
    if not isinstance(result['decisions'], list) or not all(isinstance(s, str) for s in result['decisions']):
        raise ValueError('decisions must be a string array')
    return result


class ChildGate:
    def __init__(self, run_id):
        if not isinstance(run_id, str) or not run_id:
            raise ValueError('native run identity is required')
        self.run_id = run_id
        self.terminal = False

    @classmethod
    def from_native_dispatch(cls, platform, receipt):
        if platform == 'openclaw':
            if receipt.get('status') != 'accepted':
                raise ValueError('OpenClaw did not accept the child')
            if not receipt.get('childSessionKey'):
                raise ValueError('OpenClaw child session identity is missing')
            return cls(receipt.get('runId'))
        if platform == 'hermes':
            if receipt.get('status') != 'dispatched':
                raise ValueError('Hermes did not dispatch the child')
            return cls(receipt.get('delegation_id'))
        raise ValueError('unknown native host')

    def consume_hermes_event(self, event):
        if event.get('type') != 'async_delegation' or event.get('delegation_id') != self.run_id:
            raise ValueError('not this native delegation completion')
        results = event.get('results')
        if not isinstance(results, list) or len(results) != 1:
            raise ValueError('documentation step expects exactly one child result')
        child = results[0]
        status = {'error': 'failed', 'interrupted': 'cancelled'}.get(child.get('status'), child.get('status'))
        return self.consume(self.run_id, status, child.get('summary'))

    def consume(self, run_id, status, final_text=None, stopped=False):
        if run_id != self.run_id:
            raise ValueError('completion belongs to a different child')
        if self.terminal:
            raise ValueError('child completion already consumed')
        if status in ('accepted', 'pending', 'running'):
            return {'next': 'wait', 'may_continue': False}
        if status == 'timeout' and not stopped:
            return {'next': 'stop-child-and-confirm', 'may_continue': False}
        if status in ('failed', 'cancelled') or (status == 'timeout' and stopped):
            self.terminal = True
            return {'next': 'source-failure-reconciliation', 'may_continue': False}
        if status != 'completed':
            raise ValueError('unrecognized native child state')
        self.terminal = True
        try:
            result = documentation_result(final_text)
        except (ValueError, TypeError, KeyError) as exc:
            return {'next': 'source-failure-reconciliation', 'may_continue': False, 'error': str(exc)}
        return {'next': 'source-result-reconciliation', 'may_continue': False, 'result': result}
