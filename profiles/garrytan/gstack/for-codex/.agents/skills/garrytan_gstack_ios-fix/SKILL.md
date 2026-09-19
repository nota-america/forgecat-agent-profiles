---
name: ios-fix
description: 'Autonomous iOS bug fixer. Takes a bug found by /ios-qa, reads the source,

  writes the fix, rebuilds, redeploys, and verifies the fix on the real

  device. Closes the loop: find bug → fix bug → confirm fix — zero human

  intervention. Captures the pre-bug state snapshot as a regression test

  fixture, so the bug can never recur silently.

  Use when /ios-qa reports a bug and you want it fixed automatically, or

  when asked to "fix this iOS bug", "patch the iPhone app", or "auto-fix

  the iOS issue". (gstack)

  Voice triggers (speech-to-text aliases): "fix the iOS bug", "patch the iPhone app",
  "auto-fix the iOS issue".'
---

# ios-fix

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill ios-fix
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
