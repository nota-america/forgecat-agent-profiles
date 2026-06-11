#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
if [[ "$ROOT_DIR" == *"/.forgecat/profiles/"* ]]; then
  WORKSPACE_ROOT="$(cd "$ROOT_DIR/../../../.." && pwd)"
else
  WORKSPACE_ROOT="${PWD}"
fi
PLUGIN_ROOT=""
for candidate in \
  "$ROOT_DIR/skills/how-it-works/runtime" \
  "$WORKSPACE_ROOT/.claude/skills/how-it-works/runtime" \
  "$WORKSPACE_ROOT/.agents/skills/how-it-works/runtime" \
  "$WORKSPACE_ROOT/.cursor/skills/how-it-works/runtime"
do
  if [ -f "$candidate/common.sh" ]; then
    PLUGIN_ROOT="$candidate"
    break
  fi
done
if [ -z "$PLUGIN_ROOT" ]; then
  echo "claude-mem: runtime assets not found" >&2
  exit 1
fi
source "$PLUGIN_ROOT/common.sh"
claude_mem_bootstrap_env

exec node "$PLUGIN_ROOT/scripts/bun-runner.js" "$PLUGIN_ROOT/scripts/worker-service.cjs" hook claude-code session-init
