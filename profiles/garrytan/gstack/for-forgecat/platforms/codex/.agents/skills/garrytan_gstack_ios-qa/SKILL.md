---
name: ios-qa
description: 'Live-device iOS QA for SwiftUI apps. Connects to a real iPhone via USB

  CoreDevice IPv6 tunnel, reads Swift source to understand every screen, then

  runs a vision-driven agent loop: screenshot → analyze → decide → act →

  verify → repeat. All interaction happens via HTTP to an embedded

  StateServer in the app under test. Optionally exposes the device over

  Tailscale so remote agents (OpenClaw, Codex, any HTTP-capable agent) can

  run iOS QA from anywhere without touching the hardware.

  Use when asked to "ios qa", "test my iPhone app", "find bugs on the device",

  or "qa the iOS app". (gstack)

  Voice triggers (speech-to-text aliases): "iOS quality check", "test the iPhone app",
  "run iOS QA".'
---

# ios-qa

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill ios-qa
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
