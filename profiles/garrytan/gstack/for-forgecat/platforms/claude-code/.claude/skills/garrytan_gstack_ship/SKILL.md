---
name: ship
preamble-tier: 4
version: 1.0.0
description: 'Ship workflow: detect + merge base branch, run tests, review diff, bump
  VERSION, update CHANGELOG, commit, push, create PR. (gstack)'
allowed-tools:
- Bash
- Read
- Write
- Edit
- Grep
- Glob
- Agent
- AskUserQuestion
- WebSearch
triggers:
- ship it
- create a pr
- push to main
- deploy this
---

# ship

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill ship
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
