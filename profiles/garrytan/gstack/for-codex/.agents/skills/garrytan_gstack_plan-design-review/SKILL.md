---
name: plan-design-review
description: 'Designer''s eye plan review — interactive, like CEO and Eng review.

  Rates each design dimension 0-10, explains what would make it a 10,

  then fixes the plan to get there. Works in plan mode. For live site

  visual audits, use /design-review. Use when asked to "review the design plan"

  or "design critique".

  Proactively suggest when the user has a plan with UI/UX components that

  should be reviewed before implementation. (gstack)'
---

# plan-design-review

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill plan-design-review
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
