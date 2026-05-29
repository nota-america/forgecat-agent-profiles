#!/usr/bin/env bash
# SessionStart hook for the Superpowers profile.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROFILE_DIR="$(dirname "$SCRIPT_DIR")"
PROJECT_DIR="${CLAUDE_PROJECT_DIR:-${PWD}}"

detect_platform() {
  if [ -n "${FORGECAT_HOOK_PLATFORM:-}" ]; then
    printf '%s\n' "$FORGECAT_HOOK_PLATFORM"
    return 0
  fi
  if [ -n "${FORGECAT_PLATFORM:-}" ]; then
    printf '%s\n' "$FORGECAT_PLATFORM"
    return 0
  fi

  # Forgecat 0.2.2 passes the platform to _fc_wrap.sh but does not export it to
  # the user script. Keep one hook file by reading the parent wrapper argv when
  # the hook is launched through Forgecat.
  parent_args="$(ps -p "${PPID:-0}" -o args= 2>/dev/null || true)"
  case "$parent_args" in
    *"_fc_wrap.sh claude-code "*)
      printf 'claude-code\n'
      return 0
      ;;
    *"_fc_wrap.sh cursor "*)
      printf 'cursor\n'
      return 0
      ;;
    *"_fc_wrap.sh codex "*)
      printf 'codex\n'
      return 0
      ;;
  esac

  if [ -n "${CURSOR_PLUGIN_ROOT:-}" ]; then
    printf 'cursor\n'
  elif [ -n "${CLAUDE_PLUGIN_ROOT:-}" ] && [ -z "${COPILOT_CLI:-}" ]; then
    printf 'claude-code\n'
  elif [ -n "${CODEX_HOME:-}" ]; then
    printf 'codex\n'
  else
    printf 'unknown\n'
  fi
}

find_using_superpowers() {
  for candidate in \
    "$PROFILE_DIR/skills/using-superpowers/SKILL.md" \
    "$PROJECT_DIR/.claude/skills/using-superpowers/SKILL.md" \
    "$PROJECT_DIR/.agents/skills/using-superpowers/SKILL.md" \
    "$PROJECT_DIR/.cursor/skills/using-superpowers/SKILL.md"
  do
    if [ -f "$candidate" ]; then
      printf '%s\n' "$candidate"
      return 0
    fi
  done
  return 1
}

escape_for_json() {
  local s="$1"
  s="${s//\\/\\\\}"
  s="${s//\"/\\\"}"
  s="${s//$'\n'/\\n}"
  s="${s//$'\r'/\\r}"
  s="${s//$'\t'/\\t}"
  printf '%s' "$s"
}

warning_message=""
legacy_skills_dir="${HOME}/.config/superpowers/skills"
if [ -d "$legacy_skills_dir" ]; then
  warning_message="\n\n<important-reminder>IN YOUR FIRST REPLY AFTER SEEING THIS MESSAGE YOU MUST TELL THE USER: WARNING: Superpowers now uses agent skill directories. Custom skills in ~/.config/superpowers/skills will not be read. Move custom skills to ~/.claude/skills or ~/.agents/skills. To make this message go away, remove ~/.config/superpowers/skills</important-reminder>"
fi

if using_superpowers_path="$(find_using_superpowers)"; then
  using_superpowers_content="$(cat "$using_superpowers_path" 2>&1)"
else
  using_superpowers_content="Error reading using-superpowers skill from installed Forgecat profile."
fi

using_superpowers_escaped="$(escape_for_json "$using_superpowers_content")"
warning_escaped="$(escape_for_json "$warning_message")"
session_context="<EXTREMELY_IMPORTANT>\nYou have superpowers.\n\n**Below is the full content of your 'superpowers:using-superpowers' skill - your introduction to using skills. For all other skills, use the Skill tool:**\n\n${using_superpowers_escaped}\n\n${warning_escaped}\n</EXTREMELY_IMPORTANT>"

case "$(detect_platform)" in
  cursor)
    printf '{\n  "additional_context": "%s"\n}\n' "$session_context"
    ;;
  codex)
    printf '{\n  "additionalContext": "%s"\n}\n' "$session_context"
    ;;
  claude-code)
    printf '{\n  "hookSpecificOutput": {\n    "hookEventName": "SessionStart",\n    "additionalContext": "%s"\n  }\n}\n' "$session_context"
    ;;
  *)
    printf '{\n  "additionalContext": "%s"\n}\n' "$session_context"
    ;;
esac
