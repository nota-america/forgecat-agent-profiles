---
name: design-consultation
description: 'Design consultation: understands your product, researches the landscape,
  proposes a

  complete design system (aesthetic, typography, color, layout, spacing, motion),
  and

  generates font+color preview pages. Creates DESIGN.md as your project''s design
  source

  of truth. For existing sites, use /plan-design-review to infer the system instead.

  Use when asked to "design system", "brand guidelines", or "create DESIGN.md".

  Proactively suggest when starting a new project''s UI with no existing

  design system or DESIGN.md. (gstack)'
---

# design-consultation

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill design-consultation
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
