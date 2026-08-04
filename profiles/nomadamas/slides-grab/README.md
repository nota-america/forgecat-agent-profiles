![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# slides-grab

Agent-first presentation workflow for planning, designing, editing, and exporting HTML or image-native slides with shared Codex and Claude Code skills.

## Tags

- presentations
- slides
- html-slides
- image-native
- codex
- claude-code

## Installation

```bash
npx forgecat install @forgecat/nomadamas_slides-grab
```

Install the upstream runtime dependency in the workspace where you will create or export decks:

```bash
npm install slides-grab
npx playwright install chromium
```

The ForgeCat profile supplies the agent skills, design-review agents, co-installed templates, and design-style references. The `slides-grab` npm CLI supplies rendering, validation, editing, image generation, and export commands.

## Skills / Agents / Commands

- **slides-grab** — Routes presentation work to the HTML or image-native pipeline, then coordinates planning, design, and export. `skill`
- **slides-grab-card-news** — Produces square Instagram-style card-news slides with PNG export defaults. `skill`
- **slides-grab-design** — Builds and iterates slide HTML after the outline is approved. `skill`
- **slides-grab-export** — Exports approved slides to PDF or PNG, with best-effort PPTX and Figma outputs. `skill`
- **slides-grab-html** — Builds editable semantic HTML presentations with generated supporting imagery. `skill`
- **slides-grab-image** — Builds image-native presentations that prioritize visual fidelity to reference templates. `skill`
- **slides-grab-plan** — Creates and revises the presentation outline before design begins. `skill`
- **design-critic-agent** — Runs the Claude Code design gate before export. `agent`
- **slides-grab-design-critic** — Runs the Codex design gate before export. `agent`

## Details

| Field | Value |
|---|---|
| Author | vkehfdl1 |
| Original repository | https://github.com/NomaDamas/slides-grab |
| Version | `pending-registry-publish` |
| Original commit | `745c931c8f5556d8b9fdfe6718c8a507f6223935` |
| License | MIT |
| Source platform | multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |

Cursor remains partial because upstream directly targets Claude Code and Codex. No platform is promoted to tested until an exact published registry version passes a fresh install and component-aware runtime probe.

## Dependencies

- Node.js >= 20
- npm package: `slides-grab`
- Playwright Chromium: `npx playwright install chromium`
- Optional: `yt-dlp` for video download and supported model-provider authentication for generated imagery
