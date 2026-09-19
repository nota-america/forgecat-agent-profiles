---
name: design-shotgun
preamble-tier: 2
version: 1.0.0
description: 'Design shotgun: generate multiple AI design variants, open a comparison
  board, collect structured feedback, and iterate. (gstack)'
triggers:
- explore design variants
- show me design options
- visual design brainstorm
allowed-tools:
- Bash
- Read
- Glob
- Grep
- Agent
- AskUserQuestion
gbrain:
  schema: 1
  context_queries:
  - id: prior-approved-variants
    kind: filesystem
    glob: ~/.gstack/projects/{repo_slug}/designs/*/approved.json
    sort: mtime_desc
    limit: 5
    render_as: '## Prior approved design variants for this project'
  - id: design-md
    kind: filesystem
    glob: DESIGN.md
    tail: 1
    render_as: '## DESIGN.md (project design system)'
  - id: recent-design-docs
    kind: filesystem
    glob: ~/.gstack/projects/{repo_slug}/*-design-*.md
    sort: mtime_desc
    limit: 3
    render_as: '## Recent design docs'
---

# design-shotgun

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill design-shotgun
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
