---
name: guard
description: 'Full safety mode: destructive command warnings + directory-scoped edits.

  Combines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with

  /freeze (blocks edits outside a specified directory). Use for maximum safety

  when touching prod or debugging live systems. Use when asked to "guard mode",

  "full safety", "lock it down", or "maximum safety". (gstack)'
---

# guard

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill guard
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
