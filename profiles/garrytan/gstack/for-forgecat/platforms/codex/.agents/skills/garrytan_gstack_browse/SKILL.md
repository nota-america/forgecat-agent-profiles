---
name: browse
description: 'Drive a real browser through Aside: open a page, read it, click through
  a flow, take

  screenshots, check console errors. Use when asked to open a site, test a page, take
  a

  screenshot, or dogfood a flow. (gstack)

  Voice triggers (speech-to-text aliases): "open the browser", "look at this page".'
---

# browse

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill browse
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
