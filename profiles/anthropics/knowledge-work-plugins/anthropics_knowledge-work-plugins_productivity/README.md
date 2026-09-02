*written by ForgeCat*

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

```bash
npx forgecat install @forgecat/anthropics_knowledge-work-plugins_productivity
```

## Skills

- **memory-management** — Two-tier memory system that makes Claude a true workplace collaborator. Decodes shorthand, acronyms, nicknames, and internal language so Claude understands requests like a colleague would. CLAUDE.md for working memory, memory/ directory for the full knowledge base.
- **start** — Initialize the productivity system and open the dashboard. Use when setting up the plugin for the first time, bootstrapping working memory from your existing task list, or decoding the shorthand (nicknames, acronyms, project codenames) you use in your todos.
- **task-management** — Simple task management using a shared TASKS.md file. Reference this when the user asks about their tasks, wants to add/complete tasks, or needs help tracking commitments.
- **update** — Sync tasks and refresh memory from your current activity. Use when pulling new assignments from your project tracker into TASKS.md, triaging stale or overdue tasks, filling memory gaps for unknown people or projects, or running a comprehensive scan to catch todos buried in chat and email.

## MCPs

| Server | Transport | URL |
|---|---|---|
| *(none)* | | |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/productivity |
| Version | `0.0.10` |
| Original commit | d2ba7f6 |
| License | Apache-2.0 |
| Source platform | claude-code |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Partial |
| Hermes | Partial |

## Dependencies

- None required to install this profile. Individual skills may require tools or credentials documented in their own `SKILL.md` files.
