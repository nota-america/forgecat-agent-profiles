---
name: learn
description: 'Manage project learnings. Review, search, prune, and export what gstack

  has learned across sessions. Use when asked to "what have we learned",

  "show learnings", "prune stale learnings", or "export learnings".

  Proactively suggest when the user asks about past patterns or wonders

  "didn''t we fix this before?"'
---

# learn

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill learn
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
