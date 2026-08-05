*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# figma-create-new-file

Create a new blank Figma file. Use when the user wants to create a new Figma design or FigJam file, or when you need a new file before calling use_figma. Handles plan resolution via whoami if needed. Usage — /figma-create-new-file [editorType] [fileName] (e.g. /figma-create-new-file figjam My Whiteboard)

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags
- Curated Skill
- Figma Create New File

## Installation
```bash
npx forgecat install @forgecat/openai_skills_figma-create-new-file
```

## Skills
- **figma-create-new-file** — Create a new blank Figma file. Use when the user wants to create a new Figma design or FigJam file, or when you need a new file before calling use_figma. Handles plan resolution via whoami if needed. Usage — /figma-create-new-file [editorType] [fileName] (e.g. /figma-create-new-file figjam My Whiteboard) `Figma Create New File`

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
