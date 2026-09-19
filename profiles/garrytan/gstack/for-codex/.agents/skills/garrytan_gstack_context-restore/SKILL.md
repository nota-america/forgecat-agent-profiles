---
name: context-restore
description: 'Restore working context saved earlier by /context-save. Loads the most
  recent

  saved state (preferring the current branch, falling back across branches) so

  you can pick up where you left off — even across Conductor workspace handoffs.

  Use when asked to "resume", "restore context", "where was I", or

  "pick up where I left off". Pair with /context-save.

  Formerly /checkpoint resume — renamed because Claude Code treats /checkpoint

  as a native rewind alias in current environments. (gstack)'
---

# context-restore

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill context-restore
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
