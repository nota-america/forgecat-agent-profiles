---
name: setup-browser-cookies
description: 'Import cookies from your real Chromium browser into the headless browse
  session.

  Opens an interactive picker UI where you select which cookie domains to import.

  Use before QA testing authenticated pages. Use when asked to "import cookies",

  "login to the site", or "authenticate the browser". (gstack)'
---

# setup-browser-cookies

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill setup-browser-cookies
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
