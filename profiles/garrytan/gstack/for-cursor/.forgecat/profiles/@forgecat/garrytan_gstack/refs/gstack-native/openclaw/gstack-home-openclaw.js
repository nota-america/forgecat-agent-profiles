import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Development binding: registration/enablement belongs to reviewed host setup.
export function createGstackHooks({ python = 'python3', guardScript, runtime, stateRoot, workspace }) {
  const call = request => JSON.parse(execFileSync(python,
    ['-B', guardScript, '--runtime', runtime, '--state-root', stateRoot, '--platform', 'openclaw'],
    { input: JSON.stringify(request), encoding: 'utf8', timeout: 20000 }));
  return {
    activate(session, mode, boundary) { return call({ operation: 'activate', session, mode, boundary }); },
    unfreeze(session) { return call({ operation: 'unfreeze', session }); },
    beforeToolCall(event, context) {
      try {
        const check = (tool, args) => call({ operation: 'check', session: context.sessionId,
          tool, arguments: args, cwd: workspace, explicit_paths: true });
        let answer;
        if (event.toolName === 'apply_patch' && Array.isArray(event.derivedPaths) && event.derivedPaths.length > 0 &&
            event.derivedPaths.every(p => typeof p === 'string' && path.isAbsolute(p))) {
          answer = { decision: 'allow' };
          for (const target of event.derivedPaths) {
            answer = check('write', { path: target });
            if (answer.decision !== 'allow') break;
          }
        } else answer = check(event.toolName, event.params);
        if (answer.decision === 'allow') return {};
        if (answer.decision === 'deny') return { block: true, blockReason: answer.reason };
        if (answer.decision === 'ask') return { requireApproval: { title: 'gstack careful', description: answer.reason } };
        throw new Error('unrecognized guard response');
      } catch (error) {
        return { block: true, blockReason: 'gstack guard verification failed: ' + String(error) };
      }
    },
    sessionEnd(event, context) {
      return call({ operation: 'end', session: context.sessionId ?? event.sessionId });
    },
  };
}
