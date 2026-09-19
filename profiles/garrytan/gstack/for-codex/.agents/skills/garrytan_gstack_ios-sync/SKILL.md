---
name: ios-sync
description: 'Regenerate the iOS debug bridge against the latest upstream gstack

  templates. Updates StateServer.swift, DebugOverlay.swift, Package.swift,

  and the typed @Observable state accessors. Use after you upgrade gstack

  or add new ViewModels/properties that need accessor coverage.

  Use when asked to "resync the iOS debug bridge", "regenerate iOS

  accessors", or "update the gstack iOS instrumentation". (gstack)

  Voice triggers (speech-to-text aliases): "resync the iOS debug bridge", "regenerate
  iOS accessors", "update the gstack iOS instrumentation".'
---

# ios-sync

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill ios-sync
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
