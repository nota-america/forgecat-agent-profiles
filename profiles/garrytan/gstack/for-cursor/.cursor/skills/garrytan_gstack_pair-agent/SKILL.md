---
name: pair-agent
description: 'Pair a remote AI agent with your browser. One command generates a setup
  key and

  prints instructions the other agent can follow to connect. Works with OpenClaw,

  Hermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent

  gets its own tab with full page access by default (the pairing ceremony is the

  trust boundary; --restrict narrows it).

  Use when asked to "pair agent", "connect agent", "share browser", "remote browser",

  "let another agent use my browser", or "give browser access". (gstack)

  Voice triggers (speech-to-text aliases): "pair agent", "connect agent", "share my
  browser", "remote browser access".'
---

# pair-agent

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill pair-agent
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
