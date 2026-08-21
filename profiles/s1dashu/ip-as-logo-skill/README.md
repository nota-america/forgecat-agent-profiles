*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# IP as Logo

Generate extremely simple, cute IP mascot images with rounded silhouettes, a constrained three-color palette, and lower-corner compositions.

## Tags

- agent-skill
- image-generation
- logo-design
- mascot

## Installation

```bash
npx forgecat install @forgecat/s1dashu_ip-as-logo-skill
```

## Skills

- **ip-as-logo:** Generate extremely simple, cute, personified square character images with rounded heavy forms, two purposeful character colors, one solid background color, and a dominant lower-corner composition. Use when creating an animal, creature, robot, ghost, plant, object, or other character image, including when the agent should infer three product-relevant directions and propose six independent candidates for approval.

## Details

| Field | Value |
|---|---|
| Author | s1dashu |
| Original repository | https://github.com/s1dashu/ip-as-logo-skill |
| Version | `0.1.2` |
| Original commit | b1bf517c54a407452cfaca98a54668cd052f8e63 |
| License | MIT |
| Source platform | agent-skills |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Tested |
| Hermes | Tested |

Profile parity passed exact private `0.1.2` install and component-aware runtime verification on Claude Code, Cursor, Codex, OpenClaw, and Hermes.

### Image generation capability

| Platform | Canary evidence |
|---|---|
| Claude Code | Profile behavior verified; no image generator was configured in the canary runtime. |
| Cursor | Profile behavior verified; image asset generation is not exposed by the current CLI ask/plan adapter. |
| Codex | Profile behavior and built-in ImageGen asset generation verified. |
| OpenClaw | Profile behavior and `image_generate` asset generation verified. |
| Hermes | Profile behavior verified; no image generator was configured in the canary runtime. |

## Dependencies

- A configured image-generation capability that can return generated images as assets
