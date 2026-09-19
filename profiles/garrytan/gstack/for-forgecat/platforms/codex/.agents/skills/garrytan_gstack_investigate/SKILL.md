---
name: investigate
description: 'Systematic debugging with root cause investigation. Four phases: investigate,

  analyze, hypothesize, implement. Iron Law: no fixes without root cause.

  Use when asked to "debug this", "fix this bug", "why is this broken",

  "investigate this error", or "root cause analysis".

  Proactively invoke this skill (do NOT debug directly) when the user reports

  errors, 500 errors, stack traces, unexpected behavior, "it was working

  yesterday", or is troubleshooting why something stopped working. (gstack)'
---

# investigate

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill investigate
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
