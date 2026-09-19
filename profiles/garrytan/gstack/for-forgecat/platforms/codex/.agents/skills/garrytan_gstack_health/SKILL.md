---
name: health
description: 'Code quality dashboard. Wraps existing project tools (type checker,
  linter,

  test runner, dead code detector, shell linter), computes a weighted composite

  0-10 score, and tracks trends over time. Use when: "health check",

  "code quality", "how healthy is the codebase", "run all checks",

  "quality score". (gstack)'
---

# health

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill health
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
