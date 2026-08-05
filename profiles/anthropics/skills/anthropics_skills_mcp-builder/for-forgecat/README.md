*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Anthropic Skills — Mcp Builder

Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK).

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags

- anthropic
- skills
- mcp-builder

## Installation

```bash
npx forgecat install @forgecat/anthropics_skills_mcp-builder
```

## Skills

- **mcp-builder** — Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK). `skill`

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/skills |
| Version | `0.0.4` |
| Original commit | `5128e18` |
| License | [Apache-2.0](./skills/mcp-builder/LICENSE.txt) |
| Source platform | Claude Code |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |

## Dependencies

- None
