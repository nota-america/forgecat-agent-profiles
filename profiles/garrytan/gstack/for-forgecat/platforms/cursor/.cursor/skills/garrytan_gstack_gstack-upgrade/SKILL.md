---
name: gstack-upgrade
description: 'Upgrade gstack to the latest version. Detects global vs vendored install,

  runs the upgrade, and shows what''s new. Use when asked to "upgrade gstack",

  "update gstack", or "get latest version".

  Voice triggers (speech-to-text aliases): "upgrade the tools", "update the tools",
  "gee stack upgrade", "g stack upgrade".'
---

# gstack-upgrade

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill gstack-upgrade
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
