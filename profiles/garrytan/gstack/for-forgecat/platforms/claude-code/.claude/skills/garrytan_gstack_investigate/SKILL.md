---
name: investigate
preamble-tier: 2
version: 1.0.0
description: Systematic debugging with root cause investigation. (gstack)
allowed-tools:
- Bash
- Read
- Write
- Edit
- Grep
- Glob
- AskUserQuestion
- WebSearch
triggers:
- debug this
- fix this bug
- why is this broken
- root cause analysis
- investigate this error
hooks:
  PreToolUse:
  - matcher: Edit
    hooks:
    - type: command
      command: 'for p in "${CLAUDE_PROJECT_DIR:-.}/.claude/skills/garrytan_gstack/scripts/profile.py"
        "$HOME/.claude/skills/garrytan_gstack/scripts/profile.py"; do if [ -f "$p"
        ]; then exec python3 "$p" hook --host claude-code --handler freeze; fi; done;
        printf ''%s\n'' ''{"hookSpecificOutput": {"hookEventName": "PreToolUse", "permissionDecision":
        "deny", "permissionDecisionReason": "gstack profile controller is missing;
        repair the installation"}}'''
      statusMessage: Checking debug scope boundary...
  - matcher: Write
    hooks:
    - type: command
      command: 'for p in "${CLAUDE_PROJECT_DIR:-.}/.claude/skills/garrytan_gstack/scripts/profile.py"
        "$HOME/.claude/skills/garrytan_gstack/scripts/profile.py"; do if [ -f "$p"
        ]; then exec python3 "$p" hook --host claude-code --handler freeze; fi; done;
        printf ''%s\n'' ''{"hookSpecificOutput": {"hookEventName": "PreToolUse", "permissionDecision":
        "deny", "permissionDecisionReason": "gstack profile controller is missing;
        repair the installation"}}'''
      statusMessage: Checking debug scope boundary...
gbrain:
  schema: 1
  context_queries:
  - id: prior-investigations
    kind: list
    filter:
      type: timeline
      tags_contains: repo:{repo_slug}
      content_contains: investigate
    sort: updated_at_desc
    limit: 5
    render_as: '## Prior investigations in this repo'
  - id: project-learnings
    kind: filesystem
    glob: ~/.gstack/projects/{repo_slug}/learnings.jsonl
    tail: 10
    render_as: '## Recent learnings (patterns + pitfalls)'
  - id: recent-eureka
    kind: filesystem
    glob: ~/.gstack/analytics/eureka.jsonl
    tail: 5
    render_as: '## Recent eureka moments (cross-project)'
---

# investigate

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill investigate
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
