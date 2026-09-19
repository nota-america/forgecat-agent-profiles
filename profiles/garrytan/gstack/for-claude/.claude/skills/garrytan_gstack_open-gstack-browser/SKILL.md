---
name: open-gstack-browser
preamble-tier: 1
version: 0.2.0
description: Launch GStack Browser — AI-controlled Chromium with the sidebar extension
  baked in.
triggers:
- open gstack browser
- launch chromium
- show me the browser
allowed-tools:
- Bash
- Read
- AskUserQuestion
---

# open-gstack-browser

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill open-gstack-browser
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
