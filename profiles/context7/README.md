![Hephai](https://raw.githubusercontent.com/nota-america/agent-hub/main/assets/hephai_banner.png)

# Context7

Up-to-date documentation lookup via Context7 MCP. Pull version-specific documentation and code examples directly from source repositories into your LLM context.

## Tags
- Docs Searcher

## Installation
```bash
npx hephai install @hephai-nota/context7
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
| Version | `0.0.3` |
| Original commit | `383e127` (2026-03-16) |
| Converted path | `plugins/claude/context7/` |
| License | `MIT` |
| Source platform | `claude-code` |

## Compatibility
### Platforms
| Platform | Status |
|---|---|
| Claude Code | Tested |
| Codex | Partial |
| Cursor | Partial |

### Models
| Model | Role |
|---|---|
| `claude-4-opus` | recommended |
| `claude-4-sonnet` | minimum |

## Dependencies
- None
