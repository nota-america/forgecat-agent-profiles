#!/bin/sh
set -eu

hook_input=$(cat)
project_dir=${CURSOR_PROJECT_DIR:-.}
handler="$project_dir/.cursor/skills/ralph-loop/scripts/stop-hook.sh"
if [ ! -f "$handler" ]; then
  echo "ordered Cursor Stop adapter could not find installed handler" >&2
  exit 1
fi
state_dir="$project_dir/.cursor/ralph"
state_file="$state_dir/scratchpad.md"
status=$(printf '%s' "$hook_input" | jq -r '.status // empty')
if [ "$status" = "completed" ] && [ -f "$state_file" ]; then
  iteration=$(sed -n 's/^iteration: *//p' "$state_file")
  case "$iteration" in
    ""|*[!0-9]*)
      echo "ordered Cursor Stop adapter found an invalid iteration" >&2
      exit 1
      ;;
  esac
  marker="$state_dir/.capture-complete-$iteration"
  attempts=0
  while [ ! -f "$marker" ] && [ "$attempts" -lt 100 ]; do
    sleep 0.05
    attempts=$((attempts + 1))
  done
  if [ ! -f "$marker" ]; then
    echo "ordered Cursor Stop adapter timed out waiting for afterAgentResponse" >&2
    exit 1
  fi
  rm -f "$marker"
fi
printf '%s' "$hook_input" | "$handler"
