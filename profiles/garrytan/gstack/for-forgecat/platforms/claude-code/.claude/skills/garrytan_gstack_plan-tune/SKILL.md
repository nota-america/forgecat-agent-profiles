---
name: plan-tune
preamble-tier: 2
version: 1.0.0
description: 'Self-tuning question sensitivity + developer psychographic for gstack
  (v1: observational). (gstack)'
triggers:
- tune questions
- stop asking me that
- too many questions
- show my profile
- show my vibe
- developer profile
- turn off question tuning
allowed-tools:
- Bash
- Read
- Write
- Edit
- AskUserQuestion
- Glob
- Grep
---

# plan-tune

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill plan-tune
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
