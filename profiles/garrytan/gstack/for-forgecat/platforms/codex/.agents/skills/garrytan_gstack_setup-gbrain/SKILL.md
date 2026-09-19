---
name: setup-gbrain
description: 'Set up gbrain for this coding agent: install the CLI, initialize a

  local PGLite or Supabase brain, register MCP, capture per-remote trust

  policy. One command from zero to "gbrain is running, and this agent

  can call it." Use when: "setup gbrain", "connect gbrain", "start

  gbrain", "install gbrain", "configure gbrain for this machine". (gstack)'
---

# setup-gbrain

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill setup-gbrain
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
