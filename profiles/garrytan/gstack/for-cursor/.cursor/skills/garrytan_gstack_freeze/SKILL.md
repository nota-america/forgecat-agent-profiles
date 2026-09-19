---
name: freeze
description: 'Restrict file edits to a specific directory for the session. Blocks
  Edit and

  Write outside the allowed path. Use when debugging to prevent accidentally

  "fixing" unrelated code, or when you want to scope changes to one module.

  Use when asked to "freeze", "restrict edits", "only edit this folder",

  or "lock down edits". (gstack)'
---

# freeze

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill freeze
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
