#!/bin/sh
set -eu

project_dir=${CLAUDE_PROJECT_DIR:-$(pwd -P)}
handler="$project_dir/.claude/skills/using-agent-skills/scripts/session-start.sh"
if [ ! -x "$handler" ]; then
  echo "delegated hook adapter could not find installed handler" >&2
  exit 1
fi
export CLAUDE_PLUGIN_ROOT="$project_dir"
"$handler" || true
