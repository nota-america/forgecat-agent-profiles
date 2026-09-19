---
name: design-html
description: 'Design finalization: generates production-quality Pretext-native HTML/CSS.

  Works with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,

  design review context from /plan-design-review, or from scratch with a user

  description. Text actually reflows, heights are computed, layouts are dynamic.

  30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns

  for each design type. Use when: "finalize this design", "turn this into HTML",

  "build me a page", "implement this design", or after any planning skill.

  Proactively suggest when user has approved a design or has a plan ready. (gstack)

  Voice triggers (speech-to-text aliases): "build the design", "code the mockup",
  "make it real".'
---

# design-html

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill design-html
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
