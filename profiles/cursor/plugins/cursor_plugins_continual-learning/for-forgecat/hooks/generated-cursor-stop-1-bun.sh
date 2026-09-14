#!/bin/sh
set -eu

project_dir=${CURSOR_PROJECT_DIR:-.}
handler="$project_dir/.cursor/skills/continual-learning/scripts/continual-learning-stop.ts"
if [ ! -f "$handler" ]; then
  echo "Cursor Bun hook adapter could not find installed handler" >&2
  exit 1
fi
exec bun run "$handler"
