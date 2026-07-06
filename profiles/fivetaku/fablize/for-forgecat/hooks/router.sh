#!/usr/bin/env bash
# fablize UserPromptSubmit router — when a task signal is detected, inject the relevant pack discipline as context.
# Routing: smallest matching pack only / overlap only when genuinely multi-category / mimic observable behavior only.
# Only verified packs are auto-routed.
# stdin: JSON {"prompt": "..."}. stdout: host-specific context output (only when a signal matches). Always exits 0.
set -uo pipefail

# Plugin root: prefer the runtime-injected var, else fall back to this script's location.
ROOT="${CLAUDE_PLUGIN_ROOT:-$(cd "$(dirname "$0")/.." && pwd)}"
if [ ! -d "$ROOT/packs" ]; then
  for candidate in "$ROOT/skills/fablize" "$PWD/.claude/skills/fablize" "$PWD/.cursor/skills/fablize" "$PWD/.agents/skills/fablize"; do
    if [ -d "$candidate/packs" ]; then ROOT="$candidate"; break; fi
  done
fi
PACKS="$ROOT/packs"

prompt="$(python3 -c 'import sys,json
try: print(json.load(sys.stdin).get("prompt",""))
except Exception: pass' 2>/dev/null || true)"
[ -z "${prompt:-}" ] && exit 0
low="$(printf '%s' "$prompt" | tr '[:upper:]' '[:lower:]')"

emit=""
add() { emit="${emit:+$emit
}$1"; }

# Debugging / root-cause → investigation-protocol
case "$low" in
  *debug*|*bug*|*error*|*traceback*|*"stack trace"*|*crash*|*failing*|*"not working"*)
    add "[fablize:investigation] Debugging/root-cause signal — follow $PACKS/investigation-protocol.txt: reproduce first, form 3+ competing hypotheses, gather evidence per hypothesis, trace the full causal chain, verify before/after, and report the hypotheses you rejected." ;;
esac
# Render/executable artifacts → verification-grounding
case "$low" in
  *html*|*svg*|*game*|*canvas*|*chart*|*render*|*website*|*webpage*)
    add "[fablize:grounding] Render/executable artifact signal — follow $PACKS/verification-grounding-pack.txt grounding loop: run it in the real renderer, observe the actual output, fix what the observation reveals, then re-run. A static check is not observation." ;;
esac

output_mode="${FABLIZE_HOOK_OUTPUT:-${FORGECAT_HOOK_PLATFORM:-${FORGECAT_PLATFORM_ID:-}}}"
case "$output_mode" in
  codex)
    [ -n "$emit" ] && printf '%s' "$emit" | python3 -c 'import json, sys
print(json.dumps({
  "hookSpecificOutput": {
    "hookEventName": "UserPromptSubmit",
    "additionalContext": sys.stdin.read()
  }
}, ensure_ascii=False))'
    ;;
  *)
    [ -n "$emit" ] && printf '%s\n' "$emit"
    ;;
esac
exit 0
