---
name: skillify
description: 'Codify the most recent successful /scrape flow into a permanent

  browser-skill on disk. Future /scrape calls with the same intent run

  the codified script in ~200ms instead of re-driving the page. Walks

  back through the conversation, synthesizes script.ts + script.test.ts

  + fixture, runs the test in a temp dir, and asks before committing.

  Use when asked to "skillify", "codify", "save this scrape", or

  "make this permanent". (gstack)'
---

# skillify

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill skillify
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
