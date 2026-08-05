*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# figma-code-connect-components

Connects Figma design components to code components using Code Connect mapping tools. Use when user says "code connect", "connect this component to code", "map this component", "link component to code", "create code connect mapping", or wants to establish mappings between Figma designs and code implementations. For canvas writes via `use_figma`, use `figma-use`.

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags
- Curated Skill
- Figma Code Connect Components

## Installation
```bash
npx forgecat install @forgecat/openai_skills_figma-code-connect-components
```

## Skills
- **figma-code-connect-components** — Connects Figma design components to code components using Code Connect mapping tools. Use when user says "code connect", "connect this component to code", "map this component", "link component to code", "create code connect mapping", or wants to establish mappings between Figma designs and code implementations. For canvas writes via `use_figma`, use `figma-use`. `Figma Code Connect Components`

## MCPs
- **figma** — `https://mcp.figma.com/mcp` `streamable_http`

## Details
| Field | Value |
|---|---|
| Author | `OpenAI` |
| Original repository | `https://github.com/openai/skills` |
| Version | `0.0.10` |
| Original commit | `0e7823cca07bc2cbf34718a383f9ae92525be6a5` (2026-03-24 14:48:51) |
| License | [LicenseRef-Figma-Developer-Terms](./LICENSE.TXT) |
| Source platform | `codex` |

## Compatibility
### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |

### Models
| Model | Role |
|---|---|
| `gpt-5.4` | recommended |
| `gpt-4o` | minimum |

## Dependencies
- None
