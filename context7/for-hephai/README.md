*written by Hephai*

# Context7

Up-to-date documentation lookup via Context7 MCP. Pull version-specific documentation and code examples directly from source repositories into your LLM context.

## Tags
- Docs Searcher

## Installation
```bash
npx hephai install context7
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
| Version | `0.0.0` |
| License | `MIT` |
| Author | `Upstash` |
| Original repository | `https://github.com/upstash/context7` |
| Converted path | `plugins/claude/context7/` |
| Original commit | `383e127` (2026-03-16) |
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

---
*Original README.md from source:*

# Context7 Plugin for Claude Code

Context7 solves a common problem with AI coding assistants: outdated training data and hallucinated APIs. Instead of relying on stale knowledge, Context7 fetches current documentation directly from source repositories.

## What's Included

This plugin provides:

- **MCP Server** - Connects Claude Code to Context7's documentation service
- **Skills** - Auto-triggers documentation lookups when you ask about libraries
- **Agents** - A dedicated `docs-researcher` agent for focused lookups
- **Commands** - `/context7:docs` for manual documentation queries

## Installation

Add the marketplace and install the plugin:

```bash
claude plugin marketplace add upstash/context7
claude plugin install context7-plugin@context7-marketplace
```

## Available Tools

### resolve-library-id

Searches for libraries and returns Context7-compatible identifiers.

```
Input: "next.js"
Output: { id: "/vercel/next.js", name: "Next.js", versions: ["v15.1.8", "v14.2.0", ...] }
```

### query-docs

Fetches documentation for a specific library, ranked by relevance to your question.

```
Input: { libraryId: "/vercel/next.js", query: "app router middleware" }
Output: Relevant documentation snippets with code examples
```

## Usage Examples

The plugin works automatically when you ask about libraries:

- "How do I set up authentication in Next.js 15?"
- "Show me React Server Components examples"
- "What's the Prisma syntax for relations?"

For manual lookups, use the command:

```
/context7:docs next.js app router
/context7:docs /vercel/next.js/v15.1.8 middleware
```

Or spawn the docs-researcher agent when you want to keep your main context clean:

```
spawn docs-researcher to look up Supabase auth methods
```

## Version Pinning

To get documentation for a specific version, include the version in the library ID:

```
/vercel/next.js/v15.1.8
/supabase/supabase/v2.45.0
```

The `resolve-library-id` tool returns available versions, so you can pick the one that matches your project.
