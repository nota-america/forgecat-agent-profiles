---
name: landing-report
description: 'Read-only queue dashboard for workspace-aware ship. Shows which VERSION
  slots

  are currently claimed by open PRs, which sibling Conductor workspaces have

  WIP work likely to ship soon, and what slot /ship would pick next. No

  mutations — just a snapshot. Use when asked to "landing report", "what''s in

  the queue", "show me open PRs", or "which version do I claim next". (gstack)'
---

# landing-report

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill landing-report
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
