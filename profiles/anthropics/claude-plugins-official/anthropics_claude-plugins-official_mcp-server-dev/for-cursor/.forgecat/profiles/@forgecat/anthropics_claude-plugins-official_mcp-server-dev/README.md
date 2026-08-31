*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# mcp-server-dev

Skills for designing and building MCP servers that work seamlessly with Claude — guides you through deployment models (remote HTTP, MCPB, local), tool design patterns, auth, and interactive MCP apps.

## Tags

- anthropic
- claude-official
- mcp-development

## Installation

```bash
npx forgecat install @forgecat/anthropics_claude-plugins-official_mcp-server-dev
```

## Skills

- **build-mcp-app** — This skill should be used when the user wants to build an "MCP app", add "interactive UI" or "widgets" to an MCP server, "render components in chat", build "MCP UI resources", make a tool that shows a "form", "picker", "dashboard" or "confirmation dialog" inline in the conversation, or mentions "apps SDK" in the context of MCP. Use AFTER the build-mcp-server skill has settled the deployment model, or when the user already knows they want UI widgets.
- **build-mcp-server** — This skill should be used when the user asks to "build an MCP server", "create an MCP", "make an MCP integration", "wrap an API for Claude", "expose tools to Claude", "make an MCP app", or discusses building something with the Model Context Protocol. It is the entry point for MCP server development — it interrogates the user about their use case, determines the right deployment model (remote HTTP, MCPB, local stdio), picks a tool-design pattern, and hands off to specialized skills.
- **build-mcpb** — This skill should be used when the user wants to "package an MCP server", "bundle an MCP", "make an MCPB", "ship a local MCP server", "distribute a local MCP", discusses ".mcpb files", mentions bundling a Node or Python runtime with their MCP server, or needs an MCP server that interacts with the local filesystem, desktop apps, or OS and must be installable without the user having Node/Python set up.

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/mcp-server-dev |
| Version | `0.0.5` |
| Original commit | `7e401ed` |
| License | Apache-2.0 |
| Source platform | Claude Code plugin |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

---
*written by original source*

# mcp-server-dev

Skills for designing and building MCP servers that work seamlessly with Claude.

## What's inside

Three skills that compose into a full build path:

| Skill | Purpose |
|---|---|
| **`build-mcp-server`** | Entry point. Interrogates the use case, picks deployment model (remote HTTP / MCPB / local stdio), picks tool-design pattern, routes to a specialized skill. |
| **`build-mcp-app`** | Adds interactive UI widgets (forms, pickers, confirm dialogs) rendered inline in chat. Works on remote servers and MCPB bundles. |
| **`build-mcpb`** | Packages a local stdio server with its runtime so users can install it without Node/Python. For servers that must touch the local machine. |

## How it works

`build-mcp-server` is the front door. It asks what you're connecting to, who'll use it, how big the action surface is, and whether you need in-chat UI. From those answers it recommends one of four paths:

- **Remote streamable-HTTP** (the default recommendation for anything wrapping a cloud API) — scaffolded inline
- **MCP app** — hands off to `build-mcp-app`
- **MCPB** — hands off to `build-mcpb`
- **Local stdio prototype** — scaffolded inline with an MCPB upgrade note

Each skill ships reference files for the parts that don't fit in the main instructions: auth flows (DCR/CIMD), tool-description writing, widget templates, manifest schemas, security hardening.

## Usage

Ask Claude to "help me build an MCP server" and the entry skill will trigger. Or invoke directly:

```
/mcp-server-dev:build-mcp-server
```
