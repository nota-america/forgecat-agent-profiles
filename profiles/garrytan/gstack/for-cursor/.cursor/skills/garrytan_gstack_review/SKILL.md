---
name: review
description: 'Pre-landing PR review. Analyzes diff against the base branch for SQL
  safety, LLM trust

  boundary violations, conditional side effects, and other structural issues. Use
  when

  asked to "review this PR", "code review", "pre-landing review", or "check my diff".

  Proactively suggest when the user is about to merge or land code changes. (gstack)'
---

# review

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill review
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
