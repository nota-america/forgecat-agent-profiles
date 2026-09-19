---
name: make-pdf
description: 'Turn any markdown file into a publication-quality PDF. Proper 1in margins,

  intelligent page breaks, page numbers, cover pages, running headers, curly

  quotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft

  artifact — a finished artifact. Use when asked to "make a PDF", "export to

  PDF", "turn this markdown into a PDF", or "generate a document". (gstack)

  Voice triggers (speech-to-text aliases): "make this a pdf", "make it a pdf", "export
  to pdf", "turn this into a pdf", "turn this markdown into a pdf", "generate a pdf",
  "make a pdf from", "pdf this markdown".'
---

# make-pdf

Resolve `scripts/entry.py` relative to this SKILL.md, then invoke it by absolute path:

Set `SKILL_DIR` to the absolute directory containing this file, as supplied by skill discovery.

```sh
python3 "$SKILL_DIR/scripts/entry.py" instructions --host cursor --skill make-pdf
```

Use `claude-code`, `cursor`, `codex`, `openclaw`, or `hermes` for the current platform.
Follow the returned runtime contract and read the complete referenced workflow before acting.
Repeat the returned environment prefix on each shell call; variables do not persist between tool calls.
If setup is missing, explain the exact preparation command and obtain consent before downloads or builds.
Never silently use another gstack installation. Preserve the source workflow's questions and permission boundaries.
