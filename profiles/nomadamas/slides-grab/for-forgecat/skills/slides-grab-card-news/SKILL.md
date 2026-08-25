---
name: slides-grab-card-news
description: Generate square Instagram-style card news by reusing the slides-grab workflow with card-news mode enabled. Defaults to per-slide PNG export.
metadata:
  short-description: Square card-news workflow on top of slides-grab (PNG by default)
---

# slides-grab Card News Skill

Use this when the user wants card news instead of a widescreen presentation.

## Goal
Reuse the existing slides-grab plan/design/export workflow, but generate **square** outputs optimized for Instagram posts. Per-slide PNG is the default export since Instagram and most card-news distribution channels consume images, not PDFs.

## Workflow
1. Reuse the normal outline process from `slides-grab-plan`.
2. During design and review, keep every card at **720pt x 720pt** and run:
   - `slides-grab validate --slides-dir <path> --mode card-news`
   - `slides-grab build-viewer --slides-dir <path> --mode card-news`
   - `slides-grab edit --slides-dir <path> --mode card-news`
3. During export, **default to per-slide PNG** for Instagram-ready output:
   - `slides-grab png --slides-dir <path> --slide-mode card-news --resolution 2160p`
   - Optional `--output-dir <path>/out-png` to choose the output folder (defaults to `<slides-dir>/out-png`).
4. Only produce PDF/PPTX/Figma when the user explicitly asks for it:
   - `slides-grab pdf --slides-dir <path> --slide-mode card-news --output <name>.pdf`
   - `slides-grab convert --slides-dir <path> --mode card-news --output <name>.pptx` (**experimental / unstable**)
   - `slides-grab figma --slides-dir <path> --mode card-news --output <name>-figma.pptx` (**experimental / unstable**)
5. Remind the user that PPTX/Figma exports remain experimental / unstable.

## Rules
- Optimize layouts for square Instagram-style card news, not 16:9 slides.
- Default the export to `slides-grab png --slide-mode card-news`; only switch to PDF/PPTX/Figma when the user explicitly requests it.
- Reuse existing design, viewer, editor, and export policy wherever possible.
- Do **not** implement SNS/Instagram publishing automation.
- Use the packaged CLI and bundled skills only.
