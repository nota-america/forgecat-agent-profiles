*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Context7

Up-to-date documentation lookup via Context7 MCP. Pull version-specific documentation and code examples directly from source repositories into your LLM context.

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags
- Docs Searcher

## Installation
```bash
npx forgecat install @forgecat/upstash_context7
```

## Agents
- **docs-researcher** — Lightweight agent for fetching library documentation without cluttering your main conversation context `sonnet` `research`

## Skills
- **context7-mcp** — Auto-triggers documentation lookups when the user asks about libraries, frameworks, API references, or needs code examples `docs`

## Commands
- **docs** — Look up documentation for any library `lookup`

## MCPs
- **context7** — `https://mcp.context7.com/mcp` `http`

## Details
| Field | Value |
|---|---|
| Author | `Upstash` |
| Original repository | `https://github.com/upstash/context7` |
| Version | `0.0.9` |
| Original commit | `383e127` (2026-03-16) |
| Converted path | `plugins/claude/context7/` |
| License | [MIT](./LICENSE) |
| Source platform | `claude-code` |

## Compatibility
### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

### Models
| Model | Role |
|---|---|
| `claude-4-opus` | recommended |
| `claude-4-sonnet` | minimum |

## Dependencies
- None
