![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# slides-grab

Agent-first presentation workflow for planning, designing, visually editing, and exporting HTML slides with shared Codex and Claude Code skills.

## Tags

- presentations
- slides
- html-slides
- codex
- claude-code

## Installation

```bash
npx forgecat install @forgecat/nomadamas_slides-grab
```

After installing the profile, install the upstream runtime dependency in the workspace where you will create or export decks:

```bash
npm install slides-grab
npx playwright install chromium
```

The ForgeCat profile provides the agent skills and design-review agents. The `slides-grab` npm CLI provides rendering, validation, editor, image, PDF, PNG, PPTX, and Figma-export commands.

## Skills / Agents / Commands

- **slides-grab** — End-to-end presentation workflow usable in Codex and Claude Code. Use when making a full presentation from scratch — planning, designing slides, editing, and exporting. PDF and per-slide PNG are preferred; PPTX/Figma export is experimental / unstable. `skill`
- **slides-grab-card-news** — Generate square Instagram-style card news by reusing the slides-grab workflow with card-news mode enabled. Defaults to per-slide PNG export. `skill`
- **slides-grab-design** — Stage 2 design skill usable in Codex and Claude Code. Generate and iterate slide-XX.html files in the selected slides workspace. `skill`
- **slides-grab-export** — Stage 3 conversion skill usable in Codex and Claude Code. Convert approved HTML slides to PDF or per-slide PNG reliably, and to experimental / unstable PPTX/Figma outputs on a best-effort basis. `skill`
- **slides-grab-plan** — Stage 1 planning skill usable in Codex and Claude Code. Build and iterate slide-outline.md until explicit user approval. `skill`
- **design-critic-agent** — Run the slides-grab design gate before export. `agent`
- **slides-grab-design-critic** — Run the slides-grab design gate before export. `agent`

## Details

| Field | Value |
|---|---|
| Author | vkehfdl1 |
| Original repository | https://github.com/NomaDamas/slides-grab |
| Version | `pending-registry-publish` |
| Original commit | `c71fc4b39daff3f3a7a397332c82337c8f52bf27` |
| License | MIT |
| Source platform | multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |

Cursor is marked partial because the shared skill text can be inspected by ForgeCat-supported clients, but the upstream runtime adapters and documented install flow target Claude Code and Codex. Runtime export/editing features require the external `slides-grab` npm CLI.

## Dependencies

- Node.js >= 20
- npm package: `slides-grab`
- Playwright Chromium: `npx playwright install chromium`
- Optional: `yt-dlp` for video download, Codex/Claude CLI auth for interactive agent editing, image-provider credentials for generated imagery
