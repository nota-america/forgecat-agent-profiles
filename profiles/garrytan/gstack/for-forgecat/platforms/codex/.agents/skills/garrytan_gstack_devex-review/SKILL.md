---
name: devex-review
description: 'Live developer experience audit. Actually TESTS the developer experience

  in the Aside browser: navigates docs, tries the getting started flow, times

  TTHW, screenshots error messages, evaluates CLI help text. Produces a DX

  scorecard with evidence. Compares against /plan-devex-review scores if they

  exist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to

  "test the DX", "DX audit", "developer experience test", or "try the

  onboarding". Proactively suggest after shipping a developer-facing feature. (gstack)

  Voice triggers (speech-to-text aliases): "dx audit", "test the developer experience",
  "try the onboarding", "developer experience test".'
---

# devex-review

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill devex-review
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
