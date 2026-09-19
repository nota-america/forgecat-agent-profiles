---
name: plan-ceo-review
preamble-tier: 3
version: 1.0.0
description: CEO/founder-mode plan review. (gstack)
allowed-tools:
- Read
- Grep
- Glob
- Bash
- AskUserQuestion
- WebSearch
triggers:
- think bigger
- expand scope
- strategy review
- rethink this plan
gbrain:
  schema: 1
  context_queries:
  - id: prior-ceo-plans
    kind: filesystem
    glob: ~/.gstack/projects/{repo_slug}/ceo-plans/*.md
    sort: mtime_desc
    limit: 5
    render_as: '## Prior CEO plans for this project'
  - id: recent-design-docs
    kind: filesystem
    glob: ~/.gstack/projects/{repo_slug}/*-design-*.md
    sort: mtime_desc
    limit: 3
    render_as: '## Recent design docs for this project'
  - id: recent-reviews
    kind: list
    filter:
      type: timeline
      tags_contains: repo:{repo_slug}
      content_contains: plan-ceo-review
    sort: updated_at_desc
    limit: 5
    render_as: '## Recent CEO review activity'
---

# plan-ceo-review

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill plan-ceo-review
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
