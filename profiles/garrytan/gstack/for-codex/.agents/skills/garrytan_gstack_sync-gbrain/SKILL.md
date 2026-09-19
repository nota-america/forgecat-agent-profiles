---
name: sync-gbrain
description: 'Keep gbrain current with this repo''s code and refresh agent search

  guidance in AGENTS.md. Wraps the gstack-gbrain-sync orchestrator with

  state probing, native code-surface registration, capability checks,

  and a verdict block. Re-runnable, idempotent. Use when: "sync gbrain",

  "refresh gbrain", "re-index this repo", "gbrain search isn''t finding

  things". (gstack)'
---

# sync-gbrain

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill sync-gbrain
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
