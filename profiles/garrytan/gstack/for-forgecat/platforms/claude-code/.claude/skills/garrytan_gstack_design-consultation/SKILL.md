---
name: design-consultation
preamble-tier: 3
version: 1.0.0
description: 'Design consultation: understands your product, researches the landscape,
  proposes a complete design system (aesthetic, typography, color, layout, spacing,
  motion), and generates font+color preview... (gstack)'
allowed-tools:
- Bash
- Read
- Write
- Edit
- Glob
- Grep
- AskUserQuestion
- WebSearch
triggers:
- design system
- create a brand
- design from scratch
gbrain:
  schema: 1
  context_queries:
  - id: existing-design-md
    kind: filesystem
    glob: DESIGN.md
    tail: 1
    render_as: '## Existing DESIGN.md (if any)'
  - id: prior-design-decisions
    kind: filesystem
    glob: ~/.gstack/projects/{repo_slug}/*-design-*.md
    sort: mtime_desc
    limit: 3
    render_as: '## Prior design decisions for this project'
  - id: brand-guidelines
    kind: list
    filter:
      type: ceo-plan
      tags_contains: repo:{repo_slug}
      content_contains: brand
    sort: updated_at_desc
    limit: 3
    render_as: '## Brand-related notes from CEO plans'
---

# design-consultation

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill design-consultation
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
