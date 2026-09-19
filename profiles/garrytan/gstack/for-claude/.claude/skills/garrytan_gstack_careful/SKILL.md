---
name: careful
version: 0.1.0
description: Safety guardrails for destructive commands. (gstack)
triggers:
- be careful
- warn before destructive
- safety mode
allowed-tools:
- Bash
- Read
hooks:
  PreToolUse:
  - matcher: Bash
    hooks:
    - type: command
      command: 'for p in "${CLAUDE_PROJECT_DIR:-.}/.claude/skills/garrytan_gstack/scripts/profile.py"
        "$HOME/.claude/skills/garrytan_gstack/scripts/profile.py"; do if [ -f "$p"
        ]; then exec python3 "$p" hook --host claude-code --handler careful; fi; done;
        printf ''%s\n'' ''{"hookSpecificOutput": {"hookEventName": "PreToolUse", "permissionDecision":
        "ask", "permissionDecisionReason": "gstack profile controller is missing;
        repair the installation"}}'''
      statusMessage: Checking for destructive commands...
---

# careful

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill careful
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
