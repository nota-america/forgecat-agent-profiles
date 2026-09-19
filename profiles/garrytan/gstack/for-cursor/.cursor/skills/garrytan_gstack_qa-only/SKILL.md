---
name: qa-only
description: 'Report-only QA testing. Systematically tests a web application and produces
  a

  structured report with health score, screenshots, and repro steps — but never

  fixes anything. Use when asked to "just report bugs", "qa report only", or

  "test but don''t fix". For the full test-fix-verify loop, use /qa instead.

  Proactively suggest when the user wants a bug report without any code changes. (gstack)

  Voice triggers (speech-to-text aliases): "bug report", "just check for bugs".'
---

# qa-only

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill qa-only
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
