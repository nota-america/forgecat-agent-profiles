---
name: ios-design-review
description: 'Visual design audit for iOS apps on real hardware. Connects to a real

  iPhone via the same StateServer as /ios-qa, screenshots every screen,

  evaluates against Apple HIG, DESIGN.md, and design best practices. Scores

  each dimension 0-10 with "what would make it a 10" framing — mirrors

  /plan-design-review for browser. For plan-stage design review (before

  implementation), use /plan-design-review. For live web visual audits, use

  /design-review.

  Use when asked to "review the iOS design", "audit the iPhone app''s

  visuals", or "design QA the iOS app". (gstack)

  Voice triggers (speech-to-text aliases): "review the iOS design", "audit the iPhone
  app''s visuals", "design QA the iPhone app".'
---

# ios-design-review

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill ios-design-review
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
