*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Slides Grab

Build, review, and export HTML or image-native slide decks with the seven portable Slides Grab skills.

## Tags

- slides
- presentations
- html
- image-generation
- design-review

## Installation

```bash
npx forgecat install @forgecat/nomadamas_slides-grab
```

## Runtime setup

Install the CLI version that matches the reviewed source commit, then install Chromium for Playwright:

```bash
npm install --global slides-grab@1.5.1
npx playwright install chromium
```

The ForgeCat profile installs the skills, templates, style data, and platform adapters. The npm package provides the `slides-grab` commands that render, validate, edit, and export decks.

## Skills

- **slides-grab** — End-to-end presentation workflow usable in Codex and Claude Code. Routes the user request to the HTML-mode or image-native-mode sub-skill, then runs the shared plan, design, and export stages. PDF and per-slide PNG are preferred; PPTX/Figma export is experimental / unstable.
- **slides-grab-card-news** — Generate square Instagram-style card news by reusing the slides-grab workflow with card-news mode enabled. Defaults to per-slide PNG export.
- **slides-grab-design** — Stage 2 design skill usable in Codex and Claude Code. Generate and iterate slide-XX.html files in the selected slides workspace.
- **slides-grab-export** — Stage 3 conversion skill usable in Codex and Claude Code. Convert approved HTML slides to PDF or per-slide PNG reliably, and to experimental / unstable PPTX/Figma outputs on a best-effort basis.
- **slides-grab-html** — HTML-mode presentation pipeline usable in Codex and Claude Code. Build semantic slide-XX.html files, generate bespoke hero/accent imagery with slides-grab image, run the design gate, and export. Use when the deck needs editable, searchable, accessible text or when no existing template must be matched pixel-for-pixel.
- **slides-grab-image** — Image-native presentation pipeline usable in Codex and Claude Code. Generate whole-slide raster images one slide at a time with slides-grab image, passing the reference template page as --reference so the model copies the layout and style and only swaps the content. Use when visual fidelity to an existing template matters more than editable text.
- **slides-grab-plan** — Stage 1 planning skill usable in Codex and Claude Code. Build and iterate slide-outline.md until explicit user approval.

## Platform adapters

- Claude Code receives the source `design-critic-agent` adapter.
- Codex receives the source `slides-grab-design-critic` adapter.
- Cursor, OpenClaw, and Hermes receive the seven portable skills without a generated agent. The skills run the same two review passes sequentially when a platform-specific subagent is unavailable.

Installation and component-aware runtime verification passed for the native adapters and shared skill fallback layout across all five platforms.

## Capability notes

PDF and per-slide PNG are the primary export formats. PPTX and Figma export are experimental.

The default image provider uses `god-tibo-imagen@0.2.0`, local Codex authentication, and an unsupported private backend. Image generation is verified separately from profile delivery. The CLI also supports provider-specific API keys and a local web-image fallback.

A fresh `slides-grab@1.5.1` install currently reports two high-severity transitive `npm audit` findings in `image-size` and `sharp`. The profile does not remediate those upstream runtime dependencies.

## Details

| Field | Value |
|---|---|
| Author | vkehfdl1 |
| Original repository | https://github.com/NomaDamas/slides-grab |
| Version | `0.1.0` |
| Original commit | b904568fc8a56e7ec8ca13fffdfcc6b1952c5284 |
| License | MIT |
| Source platform | multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Tested |
| Hermes | Tested |

## Dependencies

- `slides-grab`: `1.5.1`
- `playwright-chromium`: `required`
