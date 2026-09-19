---
name: document-generate
description: 'Generate missing documentation from scratch for a feature, module, or
  entire project.

  Uses the Diataxis framework (tutorial / how-to / reference / explanation) to produce

  complete, structured documentation. Can be invoked standalone or called by

  /document-release when it finds coverage gaps. Use when asked to "write docs",

  "generate documentation", "document this feature", "create a tutorial", or

  "explain this module". (gstack)'
---

# document-generate

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill document-generate
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
