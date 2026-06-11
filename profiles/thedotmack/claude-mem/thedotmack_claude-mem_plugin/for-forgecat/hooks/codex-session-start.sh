#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PLUGIN_ROOT="$ROOT_DIR/skills/how-it-works/runtime"
source "$PLUGIN_ROOT/common.sh"
claude_mem_bootstrap_env
export CLAUDE_MEM_CODEX_HOOK=1

node "$PLUGIN_ROOT/scripts/version-check.js" 1>&2 || true
node "$PLUGIN_ROOT/scripts/bun-runner.js" "$PLUGIN_ROOT/scripts/worker-service.cjs" start </dev/null >/dev/null 2>&1 || true
exec node "$PLUGIN_ROOT/scripts/bun-runner.js" "$PLUGIN_ROOT/scripts/worker-service.cjs" hook codex context
