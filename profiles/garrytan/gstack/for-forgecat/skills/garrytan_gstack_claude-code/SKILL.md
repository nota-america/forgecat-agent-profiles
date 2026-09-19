---
name: claude-code
description: 'Claude Code CLI second opinion for non-Claude Code hosts. Review a diff,

  challenge a change for failure modes, or consult Claude with read-only repo

  access and session continuity. Use for "claude review", "claude challenge",

  "ask claude", or an explicit Claude Code second opinion. (gstack)'
---

# claude-code

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host <current-platform> --skill claude-code
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
