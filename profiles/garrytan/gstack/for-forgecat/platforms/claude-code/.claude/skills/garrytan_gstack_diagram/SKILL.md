---
name: diagram
preamble-tier: 1
version: 1.0.0
description: 'Turn an English description (or mermaid source) into a diagram triplet:
  the source, an editable .excalidraw file you can open on excalidraw.com, and rendered
  SVG + PNG. (gstack)'
allowed-tools:
- Bash
- Read
- Write
- AskUserQuestion
triggers:
- make a diagram
- draw a diagram
- create a flowchart
- diagram this
- visualize this flow
- architecture diagram
---

# diagram

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host claude-code --skill diagram
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
