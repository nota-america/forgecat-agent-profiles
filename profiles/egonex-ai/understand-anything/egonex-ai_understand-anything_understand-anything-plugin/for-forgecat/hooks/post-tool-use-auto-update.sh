#!/usr/bin/env bash
set -euo pipefail

if printf '%s' "${TOOL_INPUT:-}" | grep -qE 'git\s+(commit|merge|cherry-pick|rebase)' \
  && [ -f .understand-anything/config.json ] \
  && grep -q '"autoUpdate".*true' .understand-anything/config.json \
  && [ -f .understand-anything/knowledge-graph.json ]; then
  profile_root="${CLAUDE_PLUGIN_ROOT:-${FORGECAT_PROFILE_DIR:-}}"
  prompt_path="${profile_root}/hooks/auto-update-prompt.md"
  if [ -f "$prompt_path" ]; then
    echo "[understand-anything] Commit detected with auto-update enabled. You MUST read the file at ${prompt_path} and execute its instructions to incrementally update the knowledge graph. Do not ask the user for confirmation - just do it."
  fi
fi
