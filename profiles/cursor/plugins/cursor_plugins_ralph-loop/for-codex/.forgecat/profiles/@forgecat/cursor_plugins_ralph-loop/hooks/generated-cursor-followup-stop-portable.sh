#!/bin/sh
set -eu

hook_input=$(cat)
project_dir=$(printf '%s' "$hook_input" | jq -er '.cwd | select(type == "string" and length > 0)' 2>/dev/null || pwd)
export CURSOR_PROJECT_DIR=$project_dir
handler_root=
for candidate in "$project_dir/.claude/skills" "$project_dir/.agents/skills"; do
  if [ -f "$candidate/ralph-loop/scripts/capture-response.sh" ] && [ -f "$candidate/ralph-loop/scripts/stop-hook.sh" ]; then
    if [ -n "$handler_root" ]; then
      echo "portable Cursor Stop adapter found multiple handler roots" >&2
      exit 1
    fi
    handler_root=$candidate
  fi
done
if [ -z "$handler_root" ]; then
  echo "portable Cursor Stop adapter could not find installed handlers" >&2
  exit 1
fi
last_message=$(printf '%s' "$hook_input" | jq -r '.last_assistant_message // empty')
if [ -n "$last_message" ]; then
  printf '%s' "$last_message" | jq -Rs '{"text": .}' | "$handler_root/ralph-loop/scripts/capture-response.sh"
fi
followup=$(printf '%s' "$hook_input" | "$handler_root/ralph-loop/scripts/stop-hook.sh")
if [ -z "$followup" ]; then
  exit 0
fi
reason=$(printf '%s' "$followup" | jq -er '.followup_message | select(type == "string" and length > 0)') || {
  echo "portable Cursor Stop adapter received invalid followup output" >&2
  exit 1
}
printf '%s' "$reason" | jq -Rs '{"decision":"block","reason": .}'
