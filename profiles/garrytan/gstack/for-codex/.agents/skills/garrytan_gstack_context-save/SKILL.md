---
name: context-save
description: 'Save working context. Captures git state, decisions made, and remaining
  work

  so any future session can pick up without losing a beat.

  Use when asked to "save progress", "save state", "context save", or

  "save my work". Pair with /context-restore to resume later.

  Formerly /checkpoint — renamed because Claude Code treats /checkpoint as a

  native rewind alias in current environments, which was shadowing this skill.

  (gstack)'
---

# context-save

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill context-save
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
