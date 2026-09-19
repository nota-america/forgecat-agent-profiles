---
name: retro
preamble-tier: 2
version: 2.0.0
description: Weekly engineering retrospective. (gstack)
allowed-tools:
- Bash
- Read
- Write
- Glob
- AskUserQuestion
triggers:
- weekly retro
- what did we ship
- engineering retrospective
gbrain:
  schema: 1
  context_queries:
  - id: prior-retros
    kind: filesystem
    glob: .context/retros/*.json
    sort: mtime_desc
    limit: 5
    render_as: '## Prior retros for this project'
  - id: recent-timeline
    kind: filesystem
    glob: ~/.gstack/projects/{repo_slug}/timeline.jsonl
    tail: 30
    render_as: '## Recent timeline events'
  - id: recent-learnings
    kind: filesystem
    glob: ~/.gstack/projects/{repo_slug}/learnings.jsonl
    tail: 10
    render_as: '## Recent learnings'
---

# retro

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill retro
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
