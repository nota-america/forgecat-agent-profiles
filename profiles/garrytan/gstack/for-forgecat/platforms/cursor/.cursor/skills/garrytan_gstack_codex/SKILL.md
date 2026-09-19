---
name: codex
description: 'OpenAI Codex CLI wrapper — three modes. Code review: independent diff
  review via

  codex review with pass/fail gate. Challenge: adversarial mode that tries to break

  your code. Consult: ask codex anything with session continuity for follow-ups.

  The "200 IQ autistic developer" second opinion. Use when asked to "codex review",

  "codex challenge", "ask codex", "second opinion", or "consult codex". (gstack)

  Voice triggers (speech-to-text aliases): "code x", "code ex", "get another opinion".'
---

# codex

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill codex
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
