---
name: scrape
preamble-tier: 1
version: 2.0.0
description: Pull data from a web page through the Aside browser — your real, already
  signed-in sessions. (gstack)
allowed-tools:
- Bash
- Read
- AskUserQuestion
triggers:
- scrape this page
- get data from
- pull from
- extract from
- what is on
---

# scrape

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill scrape
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
