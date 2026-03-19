# Context7

Up-to-date documentation lookup via Context7 MCP. Pull version-specific documentation and code examples directly from source repositories into your LLM context.

## Agents (1)

- **docs-researcher** — Lightweight agent for fetching library documentation without cluttering your main conversation context `sonnet`

## Skills (1)

- **context7-mcp** — This skill should be used when the user asks about libraries, frameworks, API references, or needs code examples. Activates for setup questions, code generation involving libraries, or mentions of specific frameworks like React, Vue, Next.js, Prisma, Supabase, etc.

## Commands (1)

- **docs** — Look up documentation for any library

## Details

| | |
|---|---|
| Version | 0.0.0 |
| License | MIT |
| Original commit | `383e127` (2026-03-16) |

## Source

| | |
|---|---|
| Repository | https://github.com/upstash/context7 |
| Plugin path | `plugins/claude/context7/` |
| Author | Upstash |
| Source platform | Claude Code |

## Compatibility

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |

## Models

| Model | Role |
|---|---|
| claude-4-opus | recommended |
| claude-4-sonnet | minimum |

## MCPs

- **context7** — `https://mcp.context7.com/mcp` (HTTP)

## Dependencies

- None

