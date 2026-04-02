*written by Hephai*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)


# Productivity

Manage tasks, plan your day, and give Claude persistent memory of your work context. Syncs with your calendar, email, project trackers, and chat to keep everything organized. Connects to Slack, Notion, Asana, Linear, Atlassian, Monday, ClickUp, Microsoft 365, Google Calendar, and Gmail.

## Tags

- productivity
- task-management
- memory
- personal-assistant
- daily-planning

## Installation

```
npx forgecat install @hephai-nota/knowledge-work-plugins-productivity
```

## Skills

| Skill | Description |
|---|---|
| `start` | Initialize the productivity system and open the dashboard. Use when setting up the plugin for the first time, bootstrapping working memory from your existing task list, or decoding the shorthand (nicknames, acronyms, project codenames) you use in your todos. `setup` |
| `update` | Sync tasks and refresh memory from your current activity. Use when pulling new assignments from your project tracker into TASKS.md, triaging stale or overdue tasks, filling memory gaps for unknown people or projects, or running a comprehensive scan to catch todos buried in chat and email. `sync` |
| `memory-management` | Two-tier memory system that makes Claude a true workplace collaborator. Decodes shorthand, acronyms, nicknames, and internal language so Claude understands requests like a colleague would. CLAUDE.md for working memory, memory/ directory for the full knowledge base. `background` |
| `task-management` | Simple task management using a shared TASKS.md file. Reference this when the user asks about their tasks, wants to add/complete tasks, or needs help tracking commitments. `background` |

## MCPs

| Server | Transport | URL |
|---|---|---|
| Slack | `http` | https://mcp.slack.com/mcp |
| Notion | `http` | https://mcp.notion.com/mcp |
| Asana | `http` | https://mcp.asana.com/v2/mcp |
| Linear | `http` | https://mcp.linear.app/mcp |
| Atlassian | `http` | https://mcp.atlassian.com/v1/mcp |
| Microsoft 365 | `http` | https://microsoft365.mcp.claude.com/mcp |
| Monday | `http` | https://mcp.monday.com/mcp |
| ClickUp | `http` | https://mcp.clickup.com/mcp |
| Google Calendar | `http` | https://gcal.mcp.claude.com/mcp |
| Gmail | `http` | https://gmail.mcp.claude.com/mcp |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/productivity |
| Version | `0.0.1` |
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
