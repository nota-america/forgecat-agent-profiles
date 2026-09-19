---
name: ios-clean
description: 'Remove the DebugBridge SPM package and all #if DEBUG wiring from an
  iOS

  app. Cleans up StateServer, DebugOverlay, accessor codegen output, and

  app-side hooks installed by /ios-qa. This is a convenience wrapper —

  the structural Release-build guard (Package.swift conditional + CI

  swift build -c release check) is the safety-critical path.

  Use when asked to "clean the iOS debug bridge", "remove DebugBridge",

  or "strip the gstack iOS instrumentation". (gstack)

  Voice triggers (speech-to-text aliases): "clean the iOS debug bridge", "remove DebugBridge",
  "strip the gstack iOS instrumentation".'
---

# ios-clean

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill ios-clean
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
