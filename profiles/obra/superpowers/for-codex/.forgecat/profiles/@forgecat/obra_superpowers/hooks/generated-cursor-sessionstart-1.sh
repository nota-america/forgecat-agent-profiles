#!/bin/sh
set -eu

project_dir=${CURSOR_PROJECT_DIR:-$(pwd -P)}
handler="$project_dir/.cursor/skills/using-superpowers/scripts/session-start.sh"
if [ ! -x "$handler" ]; then
  echo "delegated hook adapter could not find installed handler" >&2
  exit 1
fi
export CURSOR_PLUGIN_ROOT="$project_dir"
exec "$handler"
