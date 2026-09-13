#!/bin/sh
set -eu

hook_input=$(cat)
project_dir=${CURSOR_PROJECT_DIR:-.}
handler="$project_dir/.cursor/skills/ralph-loop/scripts/capture-response.sh"
if [ ! -f "$handler" ]; then
  echo "ordered Cursor afterAgentResponse adapter could not find installed handler" >&2
  exit 1
fi
state_dir="$project_dir/.cursor/ralph"
state_file="$state_dir/scratchpad.md"
iteration=$(sed -n 's/^iteration: *//p' "$state_file" 2>/dev/null || true)
printf '%s' "$hook_input" | "$handler"
case "$iteration" in
  ""|*[!0-9]*) exit 0 ;;
esac
if [ -f "$state_file" ]; then
  : > "$state_dir/.capture-complete-$iteration"
fi
