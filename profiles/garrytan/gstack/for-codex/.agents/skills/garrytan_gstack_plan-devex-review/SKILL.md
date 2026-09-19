---
name: plan-devex-review
description: 'Interactive developer experience plan review. Explores developer personas,

  benchmarks against competitors, designs magical moments, and traces friction

  points before scoring. Three modes: DX EXPANSION (competitive advantage),

  DX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).

  Use when asked to "DX review", "developer experience audit", "devex review",

  or "API design review".

  Proactively suggest when the user has a plan for developer-facing products

  (APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)

  Voice triggers (speech-to-text aliases): "dx review", "developer experience review",
  "devex review", "devex audit", "API design review", "onboarding review".'
---

# plan-devex-review

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill plan-devex-review
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
