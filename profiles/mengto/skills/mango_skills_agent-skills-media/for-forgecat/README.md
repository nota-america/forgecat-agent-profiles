*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# MengTo Skills Media

Media asset retrieval skills for Aura Assets and Unsplash image selection workflows.

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags

- media
- assets
- images
- agent-skills

## Installation

```bash
npx forgecat install @forgecat/mango_skills_agent-skills-media
```

## Skills

- **aura-asset-images** — Use when you need high-quality stock-style images from Aura Assets (aura.build/assets) similar to Unsplash for design mockups and marketing: backgrounds, abstract wallpapers, architecture, portraits, and headshots. Includes a workflow for searching by tag on aura.build/assets and returns 5 real image URLs per category plus practical guidance for using different resolutions and aspect ratios. `skill`
- **unsplash-asset-images** — Use when you need to pick high-quality Unsplash images for product/design assets (avatars, headshots, portraits, large website backgrounds, and abstract wallpapers) and output real Unsplash URLs plus practical instructions for producing the right resolutions and aspect ratios (1:1, 4:5, 3:4, 16:9, 9:16). `skill`

## Details

| Field | Value |
|---|---|
| Author | Meng To |
| Original repository | https://github.com/MengTo/Skills/tree/main/agent-skills/media |
| Version | `pending-registry-publish` |
| Original commit | `25f872a94e3bbee85ecacba4041fa52c21cb0e44` |
| License | [MIT](./LICENSE) |
| Source platform | agent-skills |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- None
