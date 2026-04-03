![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)


# Enterprise Search

Search across all of your company's tools in one query — email, chat, documents, and wikis without switching between apps. Connects to Slack, Notion, Guru, Atlassian, Asana, Microsoft 365, Google Calendar, and Gmail.

## Tags

- enterprise-search
- knowledge-management
- cross-tool-search
- productivity

## Installation

```
npx forgecat install @forgecat/knowledge-work-plugins-enterprise-search
```

## Skills

| Skill | Description |
|---|---|
| `search` | Search across all connected sources in one query. Trigger with "find that doc about...", "what did we decide on...", "where was the conversation about...", or when looking for a decision, document, or discussion that could live in chat, email, cloud storage, or a project tracker. `search` |
| `digest` | Generate a daily or weekly digest of activity across all connected sources. Use when catching up after time away, starting the day and wanting a summary of mentions and action items, or reviewing a week's decisions and document updates grouped by project. `digest` |
| `search-strategy` | Query decomposition and multi-source search orchestration. Breaks natural language questions into targeted searches per source, translates queries into source-specific syntax, ranks results by relevance, and handles ambiguity and fallback strategies. `background` |
| `knowledge-synthesis` | Combines search results from multiple sources into coherent, deduplicated answers with source attribution. Handles confidence scoring based on freshness and authority, and summarizes large result sets effectively. `background` |
| `source-management` | Manages connected MCP sources for enterprise search. Detects available sources, guides users to connect new ones, handles source priority ordering, and manages rate limiting awareness. `background` |

## MCPs

| Server | Transport | URL |
|---|---|---|
| Slack | `http` | https://mcp.slack.com/mcp |
| Notion | `http` | https://mcp.notion.com/mcp |
| Guru | `http` | https://mcp.api.getguru.com/mcp |
| Atlassian | `http` | https://mcp.atlassian.com/v1/mcp |
| Asana | `http` | https://mcp.asana.com/v2/mcp |
| Microsoft 365 | `http` | https://microsoft365.mcp.claude.com/mcp |
| Google Calendar | `http` | https://gcal.mcp.claude.com/mcp |
| Gmail | `http` | https://gmail.mcp.claude.com/mcp |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/enterprise-search |
| Version | `0.0.4` |
| Original commit | d2ba7f6 |
| License | Apache-2.0 |
| Source platform | Claude Code plugin (Cowork) |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Codex | Partial |
| Cursor | Partial |

## Dependencies

None
