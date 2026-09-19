---
name: design-review
description: 'Designer''s eye QA: finds visual inconsistency, spacing issues, hierarchy
  problems,

  AI slop patterns, and slow interactions — then fixes them. Iteratively fixes issues

  in source code, committing each fix atomically and re-verifying with before/after

  screenshots. For plan-mode design review (before implementation), use /plan-design-review.

  Use when asked to "audit the design", "visual QA", "check if it looks good", or
  "design polish".

  Proactively suggest when the user mentions visual inconsistencies or

  wants to polish the look of a live site. (gstack)'
---

# design-review

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill design-review
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
