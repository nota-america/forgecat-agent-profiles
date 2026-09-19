---
name: make-pdf
preamble-tier: 1
version: 1.0.0
description: Turn any markdown file into a publication-quality PDF. (gstack)
triggers:
- markdown to pdf
- generate pdf
- make pdf
- export pdf
allowed-tools:
- Bash
- Read
- AskUserQuestion
---

# make-pdf

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill make-pdf
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
