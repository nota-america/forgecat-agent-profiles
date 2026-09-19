---
name: plan-eng-review
description: 'Eng manager-mode plan review. Lock in the execution plan — architecture,

  data flow, diagrams, edge cases, test coverage, performance. Walks through

  issues interactively with opinionated recommendations. Use when asked to

  "review the architecture", "engineering review", or "lock in the plan".

  Proactively suggest when the user has a plan or design doc and is about to

  start coding — to catch architecture issues before implementation. (gstack)

  Voice triggers (speech-to-text aliases): "tech review", "technical review", "plan
  engineering review".'
---

# plan-eng-review

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill plan-eng-review
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
