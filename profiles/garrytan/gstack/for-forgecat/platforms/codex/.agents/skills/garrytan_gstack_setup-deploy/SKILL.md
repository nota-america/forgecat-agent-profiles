---
name: setup-deploy
description: 'Configure deployment settings for /land-and-deploy. Detects your deploy

  platform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),

  production URL, health check endpoints, and deploy status commands. Writes

  the configuration to AGENTS.md so all future deploys are automatic.

  Use when: "setup deploy", "configure deployment", "set up land-and-deploy",

  "how do I deploy with gstack", "add deploy config".'
---

# setup-deploy

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill setup-deploy
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
