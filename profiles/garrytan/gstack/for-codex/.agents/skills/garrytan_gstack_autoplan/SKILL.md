---
name: autoplan
description: 'Auto-review pipeline — reads the full CEO, design, eng, and DX review
  skills from disk

  and runs them sequentially with auto-decisions using 6 decision principles. Surfaces

  taste decisions (close approaches, borderline scope, outside-review disagreements)
  at a final

  approval gate. One command, fully reviewed plan out.

  Use when asked to "auto review", "autoplan", "run all reviews", "review this plan

  automatically", or "make the decisions for me".

  Proactively suggest when the user has a plan file and wants to run the full review

  gauntlet without answering 15-30 intermediate questions. (gstack)

  Voice triggers (speech-to-text aliases): "auto plan", "automatic review".'
---

# autoplan

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill autoplan
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
