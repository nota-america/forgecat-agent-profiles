---
name: office-hours
preamble-tier: 3
version: 2.0.0
description: YC Office Hours — two modes. (gstack)
allowed-tools:
- Bash
- Read
- Grep
- Glob
- Write
- Edit
- AskUserQuestion
- WebSearch
triggers:
- brainstorm this
- is this worth building
- help me think through
- office hours
gbrain:
  schema: 1
  context_queries:
  - id: prior-sessions
    kind: list
    filter:
      type: ceo-plan
      tags_contains: repo:{repo_slug}
    sort: updated_at_desc
    limit: 5
    render_as: '## Prior office-hours sessions in this repo'
  - id: builder-profile
    kind: filesystem
    glob: ~/.gstack/builder-profile.jsonl
    tail: 1
    render_as: '## Your builder profile snapshot'
  - id: design-doc-history
    kind: filesystem
    glob: ~/.gstack/projects/{repo_slug}/*-design-*.md
    sort: mtime_desc
    limit: 3
    render_as: '## Recent design docs for this project'
  - id: prior-eureka
    kind: filesystem
    glob: ~/.gstack/analytics/eureka.jsonl
    tail: 5
    render_as: '## Recent eureka moments'
---

# office-hours

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill office-hours
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
