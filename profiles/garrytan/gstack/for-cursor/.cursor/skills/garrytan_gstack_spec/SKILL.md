---
name: spec
description: 'Turn vague intent into a precise, executable spec in five phases. Files
  the issue,

  optionally spawns a Claude Code agent in a fresh worktree, and lets /ship close

  the source issue on merge. Use when asked to "spec this out", "file an issue",

  "write up a ticket", "make this a GitHub issue", or "turn this into a backlog item".

  (gstack)'
---

# spec

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill spec
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
