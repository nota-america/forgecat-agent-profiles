---
name: context-restore
preamble-tier: 2
version: 1.0.0
description: Restore working context saved earlier by /context-save. (gstack)
allowed-tools:
- Bash
- Read
- Glob
- Grep
- AskUserQuestion
triggers:
- resume where i left off
- restore context
- where was i
- pick up where i left off
- context restore
---

# context-restore

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill context-restore
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
