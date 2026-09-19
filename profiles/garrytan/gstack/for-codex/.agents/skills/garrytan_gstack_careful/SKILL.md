---
name: careful
description: 'Safety guardrails for destructive commands. Warns before rm -rf, DROP
  TABLE,

  force-push, git reset --hard, kubectl delete, and similar destructive operations.

  User can override each warning. Use when touching prod, debugging live systems,

  or working in a shared environment. Use when asked to "be careful", "safety mode",

  "prod mode", or "careful mode". (gstack)'
---

# careful

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill careful
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
