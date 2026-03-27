*written by Hephai*

# Figma

Use the Figma MCP server to fetch design context, screenshots, variables, and assets from Figma, and translate Figma nodes into implementation-ready code guidance.

## Tags
- Design-to-Code

## Installation

```bash
npx hephai install openai-skills-figma
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

---
*Original README.md from source:*

# Figma

Figma MCP integration packaged as a Hephai profile. This profile lets an agent inspect Figma designs, fetch screenshots and variables, and translate design nodes into implementation-ready UI guidance.

## Overview

The original source is an OpenAI Codex curated skill. It is not an agent pack; it is a single MCP-backed skill with reference docs and Codex-specific metadata. In Hephai, the core runtime parts are preserved as a standard skill plus MCP configuration.

## Components

### Skills (1)

- **figma** — Use the Figma MCP server to fetch design context, screenshots, variables, and assets from Figma, and to translate Figma nodes into production code. Trigger when a task involves Figma URLs, node IDs, design-to-code implementation, or Figma MCP setup and troubleshooting.

### References (2)

- **figma-mcp-config.md** — MCP setup, verification, and troubleshooting notes
- **figma-tools-and-prompts.md** — tool catalog and prompt patterns for Figma workflows

### MCPs (1)

- **figma** — Hosted MCP endpoint at `https://mcp.figma.com/mcp`

## Source

| Field | Value |
|---|---|
| Original repository | `https://github.com/openai/skills` |
| Converted path | `skills/.curated/figma/` |
| Author | OpenAI |
| License | Apache-2.0 |
| Original commit | `dc48aff` (2026-03-17) |
| Source platform | `codex` |

## Compatibility

### Platforms

| Platform | Status | Notes |
|---|---|---|
| Codex | Tested | Source platform used for conversion |

### Models

| Model | Role |
|---|---|
| `gpt-5.4` | recommended |
| `gpt-4o` | minimum |

## Files in This Profile

```
for-hephai/
├── profile.yml
├── README.md
├── mcp.jsonc
├── LICENSE.txt
└── skills/
    └── figma/
        ├── SKILL.md
        └── references/
            ├── figma-mcp-config.md
            └── figma-tools-and-prompts.md
```

## MCP Configuration

Current profile MCP config:

```jsonc
{
  "servers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp",
      "env": {
        "FIGMA_OAUTH_TOKEN": "${FIGMA_OAUTH_TOKEN}"
      }
      // "bearerTokenEnvVar": "FIGMA_OAUTH_TOKEN",
      // "headers": { "X-Figma-Region": "us-east-1" }
    }
  }
}
```

### Important Conversion Note

The original Codex metadata contained additional MCP semantics:

- `bearer_token_env_var = "FIGMA_OAUTH_TOKEN"`
- `http_headers = { "X-Figma-Region" = "us-east-1" }`

The current standard schema cannot fully express these fields, so they are preserved as commented extension fields in `mcp.jsonc`.

## Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `FIGMA_OAUTH_TOKEN` | Yes | Auth token for the hosted Figma MCP server |

## What Was Intentionally Left Out

The original Codex package also included:

- `agents/openai.yaml` — Codex UI metadata and dependency declaration
- `assets/` — Codex UI icons

These are platform-specific presentation files, not core runtime files for the Hephai standard profile. The core functionality is preserved through `profile.yml`, `SKILL.md`, `references/`, and `mcp.jsonc`.

## Typical Use Cases

- Turn a Figma node into implementation-ready UI guidance
- Pull screenshots and variables before coding a UI
- Verify design tokens or component mappings
- Troubleshoot Figma MCP setup issues using the included references

## Notes

- The full original skill folder is preserved separately in `openai-skills-figma-ori/`.
- This profile currently preserves Codex-only MCP fields as comments until the standard schema is extended.
