---
name: gstack
description: 'Router for the gstack skill suite. Sends any gstack request to the right
  skill

  (planning, review, QA, shipping, debugging, docs, security, design). For browser/QA

  and dogfooding it points you at /browse. Use when you invoke gstack without a specific

  skill, or ask "which gstack skill fits this?". (gstack)'
---

# gstack

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill gstack
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
