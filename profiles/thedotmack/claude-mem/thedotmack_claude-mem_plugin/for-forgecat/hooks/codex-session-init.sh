#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PLUGIN_ROOT="$ROOT_DIR/plugin"
source "$ROOT_DIR/hooks/common.sh"
claude_mem_bootstrap_env
export CLAUDE_MEM_CODEX_HOOK=1

exec node "$PLUGIN_ROOT/scripts/bun-runner.js" "$PLUGIN_ROOT/scripts/worker-service.cjs" hook codex session-init
