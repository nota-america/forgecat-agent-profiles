#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PLUGIN_ROOT="$ROOT_DIR/plugin"
export FORGECAT_PROFILE_DIR="$ROOT_DIR"
export CLAUDE_PLUGIN_ROOT="$PLUGIN_ROOT"
export PLUGIN_ROOT="$PLUGIN_ROOT"
export CLAUDE_MEM_MODES_DIR="$PLUGIN_ROOT/modes"

PAYLOAD_FILE="$(mktemp)"
cleanup() {
  rm -f "$PAYLOAD_FILE"
}
trap cleanup EXIT

cat >"$PAYLOAD_FILE" || true
[ -s "$PAYLOAD_FILE" ] || printf '{}' >"$PAYLOAD_FILE"

node "$PLUGIN_ROOT/scripts/version-check.js" 1>&2 || true
node "$PLUGIN_ROOT/scripts/bun-runner.js" "$PLUGIN_ROOT/scripts/worker-service.cjs" start </dev/null >/dev/null 2>&1 || true
exec node "$PLUGIN_ROOT/scripts/bun-runner.js" "$PLUGIN_ROOT/scripts/worker-service.cjs" hook claude-code context <"$PAYLOAD_FILE"
