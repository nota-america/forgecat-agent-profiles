---
name: freeze
version: 0.1.0
description: Restrict file edits to a specific directory for the session. (gstack)
triggers:
- freeze edits to directory
- lock editing scope
- restrict file changes
allowed-tools:
- Bash
- Read
- AskUserQuestion
hooks:
  PreToolUse:
  - matcher: Edit
    hooks:
    - type: command
      command: 'for p in "${CLAUDE_PROJECT_DIR:-.}/.claude/skills/garrytan_gstack/scripts/profile.py"
        "$HOME/.claude/skills/garrytan_gstack/scripts/profile.py"; do if [ -f "$p"
        ]; then exec python3 "$p" hook --host claude-code --handler freeze; fi; done;
        printf ''%s\n'' ''{"hookSpecificOutput": {"hookEventName": "PreToolUse", "permissionDecision":
        "deny", "permissionDecisionReason": "gstack profile controller is missing;
        repair the installation"}}'''
      statusMessage: Checking freeze boundary...
  - matcher: Write
    hooks:
    - type: command
      command: 'for p in "${CLAUDE_PROJECT_DIR:-.}/.claude/skills/garrytan_gstack/scripts/profile.py"
        "$HOME/.claude/skills/garrytan_gstack/scripts/profile.py"; do if [ -f "$p"
        ]; then exec python3 "$p" hook --host claude-code --handler freeze; fi; done;
        printf ''%s\n'' ''{"hookSpecificOutput": {"hookEventName": "PreToolUse", "permissionDecision":
        "deny", "permissionDecisionReason": "gstack profile controller is missing;
        repair the installation"}}'''
      statusMessage: Checking freeze boundary...
---

# freeze

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill freeze
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
