---
name: land-and-deploy
description: 'Land and deploy workflow. Merges the PR, waits for CI and deploy,

  verifies production health via canary checks. Takes over after /ship

  creates the PR. Use when: "merge", "land", "deploy", "merge and verify",

  "land it", "ship it to production". (gstack)'
---

# land-and-deploy

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill land-and-deploy
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
