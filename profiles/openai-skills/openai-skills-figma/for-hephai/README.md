*written by Hephai*

![Hephai](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Figma

Use the Figma MCP server to fetch design context, screenshots, variables, and assets from Figma, and translate Figma nodes into implementation-ready code guidance.

## Tags
- Design-to-Code

## Installation

```bash
npx forgecat install @hephai-nota/openai-skills-figma
```

## Skills

- **figma** — Use the Figma MCP server to inspect Figma designs, fetch screenshots and variables, and support design-to-code workflows `design-to-code`

## MCPs

- **figma** — `https://mcp.figma.com/mcp` `streamable-http`

## Details

| Field | Value |
|---|---|
| Author | `OpenAI` |
| Original repository | `https://github.com/openai/skills` |
| Version | `0.0.1` |
| Original commit | `dc48aff` (2026-03-17) |
| License | `Apache-2.0` |
| Source platform | `codex` |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Codex | Tested |
| Claude Code | Partial |
| Cursor | Partial |

### Models

| Model | Role |
|---|---|
| `gpt-5.4` | recommended |
| `gpt-4o` | minimum |

## Dependencies

- `FIGMA_OAUTH_TOKEN`
