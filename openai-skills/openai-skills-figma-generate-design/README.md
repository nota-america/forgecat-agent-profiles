# figma-generate-design

Use this skill alongside figma-use when the task involves translating an application page, view, or multi-section layout into Figma. Triggers: 'write to Figma', 'create in Figma from code', 'push page to Figma', 'take this app/page and build it in Figma', 'create a screen', 'build a landing page in Figma', 'update the Figma screen to match code'. This is the preferred workflow skill whenever the user wants to build or update a full page, screen, or view in Figma from code or a description. Discovers design system components, variables, and styles via search_design_system, imports them, and assembles screens incrementally section-by-section using design system tokens instead of hardcoded values.

## Role Tags
- Curated Skill
- Figma Generate Design

## Installation
```bash
npx hephai install openai-skills-figma-generate-design
```

## Skills
- **figma-generate-design** — Use this skill alongside figma-use when the task involves translating an application page, view, or multi-section layout into Figma. Triggers: 'write to Figma', 'create in Figma from code', 'push page to Figma', 'take this app/page and build it in Figma', 'create a screen', 'build a landing page in Figma', 'update the Figma screen to match code'. This is the preferred workflow skill whenever the user wants to build or update a full page, screen, or view in Figma from code or a description. Discovers design system components, variables, and styles via search_design_system, imports them, and assembles screens incrementally section-by-section using design system tokens instead of hardcoded values. `Figma Generate Design`

## MCPs
- **figma** — `https://mcp.figma.com/mcp` `streamable_http`

## Details
| Field | Value |
|---|---|
| Author | `OpenAI` |
| Version | `0.0.0` |
| Original repository | `https://github.com/openai/skills` |
| Original commit | `0e7823cca07bc2cbf34718a383f9ae92525be6a5` (2026-03-24 14:48:51) |
| License | `Apache-2.0` |
| Source platform | `codex` |

## Compatibility
### Platforms
| Platform | Status |
|---|---|
| Codex | Tested |

### Models
| Model | Role |
|---|---|
| `gpt-5.4` | recommended |
| `gpt-4o` | minimum |

## Dependencies
- None
