---
name: plan-tune
description: 'Self-tuning question sensitivity + developer psychographic for gstack
  (v1: observational).

  Review which AskUserQuestion prompts fire across gstack skills, set per-question
  preferences

  (never-ask / always-ask / ask-only-for-one-way), inspect the dual-track

  profile (what you declared vs what your behavior suggests), and enable/disable

  question tuning. Conversational interface — no CLI syntax required.


  Use when asked to "tune questions", "stop asking me that", "too many questions",

  "show my profile", "what questions have I been asked", "show my vibe",

  "developer profile", or "turn off question tuning". (gstack)


  Proactively suggest when the user says the same gstack question has come up before,

  or when they explicitly override a recommendation for the Nth time.'
---

# plan-tune

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill plan-tune
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
