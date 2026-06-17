#!/usr/bin/env bash
set -euo pipefail

if [ -f .understand-anything/config.json ] \
  && grep -q '"autoUpdate".*true' .understand-anything/config.json \
  && [ -f .understand-anything/meta.json ] \
  && [ -f .understand-anything/knowledge-graph.json ]; then
  stored_commit="$(node -p "JSON.parse(require('fs').readFileSync('.understand-anything/meta.json','utf8')).gitCommitHash" 2>/dev/null || true)"
  current_commit="$(git rev-parse HEAD 2>/dev/null || true)"
  if [ -n "$stored_commit" ] && [ -n "$current_commit" ] && [ "$stored_commit" != "$current_commit" ]; then
    profile_root="${CLAUDE_PLUGIN_ROOT:-${FORGECAT_PROFILE_DIR:-}}"
    prompt_path="${profile_root}/hooks/auto-update-prompt.md"
    if [ -f "$prompt_path" ]; then
      echo "[understand-anything] Knowledge graph is stale. You MUST read the file at ${prompt_path} and execute its instructions to check for structural changes and update the graph. Do not ask the user for confirmation - just do it."
    fi
  fi
fi
