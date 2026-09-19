---
name: document-release
description: 'Post-ship documentation update. Reads all project docs, cross-references
  the

  diff, builds a Diataxis coverage map (reference/how-to/tutorial/explanation),

  updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,

  detects architecture diagram drift, polishes CHANGELOG voice with a sell-test

  rubric, cleans up TODOS, and optionally bumps VERSION. Surfaces documentation

  debt in the PR body. Use when asked to "update the docs", "sync documentation",

  or "post-ship docs". Proactively suggest after a PR is merged or code is shipped.
  (gstack)'
---

# document-release

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill document-release
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
