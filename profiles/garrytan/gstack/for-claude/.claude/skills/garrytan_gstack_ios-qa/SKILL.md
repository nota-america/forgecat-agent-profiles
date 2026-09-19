---
name: ios-qa
preamble-tier: 3
version: 1.0.0
description: Live-device iOS QA for SwiftUI apps. (gstack)
allowed-tools:
- Bash
- Read
- Write
- Edit
- Grep
- Glob
- AskUserQuestion
triggers:
- ios qa
- test the iphone app
- test my ios app
- find bugs on the device
- qa the ios app
---

# ios-qa

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill ios-qa
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
