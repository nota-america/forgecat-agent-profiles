*written by Hephai*

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
npx hephai install productivity
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
| Cursor | Partial |
| Codex | Partial |

## Dependencies

None

---
*Original README.md from source:*

# Productivity Plugin

A productivity plugin primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. Task management, workplace memory, and a visual dashboard — Claude learns your people, projects, and terminology so it can act like a colleague, not a chatbot.

## Installation

```
claude plugins add knowledge-work-plugins/productivity
```

## What It Does

This plugin gives Claude a persistent understanding of your work:

- **Task management** — A markdown task list (`TASKS.md`) that Claude reads, writes, and executes against. Add tasks naturally, and Claude tracks status, triages stale items, and syncs with external tools.
- **Workplace memory** — A two-tier memory system that teaches Claude your shorthand, people, projects, and terminology. Say "ask todd to do the PSR for oracle" and Claude knows exactly who, what, and which deal.
- **Visual dashboard** — A local HTML file that gives you a board view of your tasks and a live view of what Claude knows about your workplace. Edit from the board or the file — they stay in sync.

## Commands

| Command | What it does |
|---------|--------------|
| `/start` | Initialize tasks + memory, open the dashboard |
| `/update` | Triage stale items, check memory for gaps, sync from external tools if applicable |
| `/update --comprehensive` | Deep scan email, calendar, chat — flag missed todos and suggest new memories |

## Skills

| Skill | Description |
|-------|-------------|
| `memory-management` | Two-tier memory system — CLAUDE.md for working memory, memory/ directory for deep storage |
| `task-management` | Markdown-based task tracking using a shared TASKS.md file |

## Example Workflows

### Getting Started

```
You: /start

Claude: [Creates TASKS.md, CLAUDE.md, memory/ directory, and dashboard.html]
        [Opens the dashboard in your browser]
        [Asks about your role, team, and current priorities to seed memory]
```

### Adding Tasks Naturally

```
You: I need to review the budget proposal for Sarah by Friday,
     draft the Q2 roadmap after syncing with Greg, and follow up
     on the API spec from the Platform team

Claude: [Adds all three tasks to TASKS.md with context]
        [Dashboard updates automatically]
```

### Morning Sync

```
You: /update --comprehensive

Claude: [Scans email, calendar, and chat for new action items]
        [Flags: "Budget proposal review is due tomorrow — still open"]
        [Suggests: "New person mentioned in 3 threads: Jamie Park,
         Design Lead — add to memory?"]
        [Updates stale tasks and fills memory gaps]
```

### Workplace Shorthand

Once memory is populated, Claude decodes your shorthand instantly:

```
You: ask todd to do the PSR for oracle

Claude: "Ask Todd Martinez (Finance lead) to prepare the Pipeline
         Status Report for the Oracle Systems deal ($2.3M, closing Q2)"
```

No clarifying questions. No round trips.

## Data Sources

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](CONNECTORS.md).

Connect your communication and project management tools for the best experience. Without them, manage tasks and memory manually.

**Included MCP connections:**
- Chat (Slack) for team context and message scanning
- Email and calendar (Microsoft 365) for action item discovery
- Knowledge base (Notion) for reference documents
- Project tracker (Asana, Linear, Atlassian, monday.com, ClickUp) for task syncing
- Office suite (Microsoft 365) for documents

**Additional options:**
- See [CONNECTORS.md](CONNECTORS.md) for alternative tools in each category
