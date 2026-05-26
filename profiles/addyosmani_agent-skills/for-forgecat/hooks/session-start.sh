#!/bin/bash
# agent-skills session start hook
# Injects the using-agent-skills meta-skill into every new session

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILLS_DIR="$(dirname "$SCRIPT_DIR")/skills"
META_SKILL="$SKILLS_DIR/using-agent-skills/SKILL.md"

if [ -f "$META_SKILL" ]; then
  if command -v jq >/dev/null 2>&1; then
    jq -Rs \
      --arg prefix "agent-skills loaded. Use the skill discovery flowchart to find the right skill for your task.\n\n" \
      '{priority: "IMPORTANT", message: ($prefix + .)}' \
      "$META_SKILL"
  else
    echo '{"priority": "IMPORTANT", "message": "agent-skills loaded. Use the skill discovery flowchart to find the right skill for your task."}'
  fi
else
  echo '{"priority": "INFO", "message": "agent-skills: using-agent-skills meta-skill not found. Skills may still be available individually."}'
fi
