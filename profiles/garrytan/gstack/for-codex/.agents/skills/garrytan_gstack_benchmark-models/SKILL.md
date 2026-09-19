---
name: benchmark-models
description: 'Cross-model benchmark for gstack skills. Runs the same prompt through
  Claude,

  GPT (via Codex CLI), and Gemini side-by-side — compares latency, tokens, cost,

  and optionally quality via LLM judge. Answers "which model is actually best

  for this skill?" with data instead of vibes. Separate from /benchmark, which

  measures web page performance. Use when: "benchmark models", "compare models",

  "which model is best for X", "cross-model comparison", "model shootout". (gstack)

  Voice triggers (speech-to-text aliases): "compare models", "model shootout", "which
  model is best".'
---

# benchmark-models

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host codex --skill benchmark-models
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
