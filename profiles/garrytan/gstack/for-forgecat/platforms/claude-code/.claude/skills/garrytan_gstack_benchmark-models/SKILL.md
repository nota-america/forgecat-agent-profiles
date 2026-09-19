---
name: benchmark-models
preamble-tier: 1
version: 1.0.0
description: Cross-model benchmark for gstack skills. (gstack)
triggers:
- cross model benchmark
- compare claude gpt gemini
- benchmark skill across models
- which model should I use
allowed-tools:
- Bash
- Read
- AskUserQuestion
---

# benchmark-models

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill benchmark-models
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
