---
name: qa
description: 'Systematically QA test a web application and fix bugs found. Runs QA
  testing,

  then iteratively fixes bugs in source code, committing each fix atomically and

  re-verifying. Use when asked to "qa", "QA", "test this site", "find bugs",

  "test and fix", or "fix what''s broken".

  Proactively suggest when the user says a feature is ready for testing

  or asks "does this work?". Three tiers: Quick (critical/high only),

  Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,

  fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only.
  (gstack)

  Voice triggers (speech-to-text aliases): "quality check", "test the app", "run QA".'
---

# qa

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill qa
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
