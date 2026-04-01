![Hephai](https://raw.githubusercontent.com/nota-america/agent-hub/main/assets/hephai_banner.png)


# Sales

Prospect, craft outreach, and build deal strategy faster with Claude. Covers account research, call prep, call summaries, personalized outreach drafting, daily briefings, pipeline review, competitive intelligence, sales asset creation, and forecasting. Connects to HubSpot, Close, Clay, ZoomInfo, Apollo, Outreach, Fireflies, Slack, Notion, and more.

## Tags

- sales
- pipeline
- outreach
- account-research
- forecasting

## Installation

```
npx hephai install @hephai-nota/knowledge-work-plugins-sales
```

## Skills

| Skill | Description |
|---|---|
| `account-research` | Research a company or person and get actionable sales intel. Works standalone with web search, supercharged when you connect enrichment tools or your CRM. Trigger with "research [company]", "look up [person]", "intel on [prospect]", "who is [name] at [company]", or "tell me about [company]". `research` |
| `call-prep` | Prepare for a sales call with account context, attendee research, and suggested agenda. Works standalone with user input and web research, supercharged when you connect your CRM, email, chat, or transcripts. Trigger with "prep me for my call with [company]", "I'm meeting with [company] prep me", "call prep [company]", or "get me ready for [meeting]". `call-prep` |
| `call-summary` | Process call notes or a transcript — extract action items, draft follow-up email, generate internal summary. Use when pasting rough notes or a transcript after a discovery, demo, or negotiation call, drafting a customer follow-up, logging the activity for your CRM, or capturing objections and next steps for your team. `follow-up` |
| `draft-outreach` | Research a prospect then draft personalized outreach. Uses web research by default, supercharged with enrichment and CRM. Trigger with "draft outreach to [person/company]", "write cold email to [prospect]", "reach out to [name]". `outreach` |
| `daily-briefing` | Start your day with a prioritized sales briefing. Works standalone when you tell me your meetings and priorities, supercharged when you connect your calendar, CRM, and email. Trigger with "morning briefing", "daily brief", "what's on my plate today", "prep my day", or "start my day". `briefing` |
| `pipeline-review` | Analyze pipeline health — prioritize deals, flag risks, get a weekly action plan. Use when running a weekly pipeline review, deciding which deals to focus on this week, spotting stale or stuck opportunities, auditing for hygiene issues like bad close dates, or identifying single-threaded deals. `pipeline` |
| `competitive-intelligence` | Research your competitors and build an interactive battlecard. Outputs an HTML artifact with clickable competitor cards and a comparison matrix. Trigger with "competitive intel", "research competitors", "how do we compare to [competitor]", "battlecard for [competitor]", or "what's new with [competitor]". `competitive-intel` |
| `create-an-asset` | Generate tailored sales assets (landing pages, decks, one-pagers, workflow demos) from your deal context. Describe your prospect, audience, and goal — get a polished, branded asset ready to share with customers. `assets` |
| `forecast` | Generate a weighted sales forecast with best/likely/worst scenarios, commit vs. upside breakdown, and gap analysis. Use when preparing a quarterly forecast call, assessing gap-to-quota from a pipeline CSV, deciding which deals to commit vs. call upside, or checking pipeline coverage against your number. `forecasting` |

## MCPs

| Server | Transport | URL |
|---|---|---|
| Slack | `http` | https://mcp.slack.com/mcp |
| HubSpot | `http` | https://mcp.hubspot.com/anthropic |
| Close | `http` | https://mcp.close.com/mcp |
| Clay | `http` | https://api.clay.com/v3/mcp |
| ZoomInfo | `http` | https://mcp.zoominfo.com/mcp |
| Notion | `http` | https://mcp.notion.com/mcp |
| Atlassian | `http` | https://mcp.atlassian.com/v1/mcp |
| Fireflies | `http` | https://api.fireflies.ai/mcp |
| Microsoft 365 | `http` | https://microsoft365.mcp.claude.com/mcp |
| Apollo | `http` | https://api.apollo.io/mcp |
| Outreach | `http` | https://mcp.outreach.io/mcp |
| Google Calendar | `http` | https://gcal.mcp.claude.com/mcp |
| Gmail | `http` | https://gmail.mcp.claude.com/mcp |
| SimilarWeb | `http` | https://mcp.similarweb.com/mcp |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/sales |
| Version | `0.0.0` |
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
