#!/bin/bash
# agent-skills session start hook
# Injects the using-agent-skills meta-skill into every new session.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROFILE_DIR="$(dirname "$SCRIPT_DIR")"
PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$PWD}"

find_meta_skill() {
  for candidate in \
    "$PROFILE_DIR/skills/using-agent-skills/SKILL.md" \
    "$PROJECT_DIR/.claude/skills/using-agent-skills/SKILL.md" \
    "$PROJECT_DIR/.agents/skills/using-agent-skills/SKILL.md"
  do
    [ -f "$candidate" ] && printf '%s\n' "$candidate" && return 0
  done
  return 1
}

if ! command -v jq >/dev/null 2>&1; then
  echo '{"priority": "INFO", "message": "agent-skills: jq is required for the session-start hook but was not found on PATH. Install jq to enable meta-skill injection. Skills remain available individually."}'
  exit 0
fi

if META_SKILL="$(find_meta_skill)"; then
  CONTENT="$(cat "$META_SKILL")"
  jq -cn \
    --arg message "agent-skills loaded. Use the skill discovery flowchart to find the right skill for your task.

$CONTENT" \
    '{priority: "IMPORTANT", message: $message}'
else
  echo '{"priority": "INFO", "message": "agent-skills: using-agent-skills meta-skill not found. Skills may still be available individually."}'
fi
