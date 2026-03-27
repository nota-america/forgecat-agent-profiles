*written by Hephai*

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
npx hephai install sales
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

# Sales Plugin

A sales productivity plugin primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. Helps with prospecting, outreach, pipeline management, call preparation, and deal strategy. Works with any sales team — standalone with web search and your input, supercharged when you connect your CRM, email, and other tools.

## Installation

```bash
claude plugins add knowledge-work-plugins/sales
```

## Commands

Explicit workflows you invoke with a slash command:

| Command | Description |
|---|---|
| `/call-summary` | Process call notes or transcript — extract action items, draft follow-up, generate internal summary |
| `/forecast` | Generate a weighted sales forecast — upload CSV or describe your pipeline, set quota, get projections |
| `/pipeline-review` | Analyze pipeline health — prioritize deals, flag risks, get weekly action plan |

All commands work **standalone** (paste notes, upload CSV, or describe your situation) and get **supercharged** with MCP connectors.

## Skills

Domain knowledge Claude uses automatically when relevant:

| Skill | Description |
|---|---|
| `account-research` | Research a company or person — web search for company intel, key contacts, recent news, hiring signals |
| `call-prep` | Prepare for sales calls — account context, attendee research, suggested agenda, discovery questions |
| `daily-briefing` | Prioritized daily sales briefing — meetings, pipeline alerts, email priorities, suggested actions |
| `draft-outreach` | Research-first outreach — research the prospect, then draft personalized email and LinkedIn messages |
| `competitive-intelligence` | Research competitors — product comparison, pricing intel, recent releases, differentiation matrix, sales talk tracks |
| `create-an-asset` | Generate custom sales assets — landing pages, decks, one-pagers, workflow demos tailored to your prospect |

## Example Workflows

### After a Call

```
/call-summary
```

Paste your notes or transcript. Get a structured summary, action items with owners, and a draft follow-up email. If CRM is connected, offers to log the activity and create tasks.

### Weekly Forecast

```
/forecast
```

Upload a CSV export from your CRM (or paste your deals). Tell me your quota and timeline. Get a weighted forecast with best/likely/worst scenarios, commit vs. upside breakdown, and gap analysis.

### Pipeline Review

```
/pipeline-review
```

Upload a CSV or describe your pipeline. Get a health score, deal prioritization, risk flags (stale deals, past close dates, single-threaded), and a weekly action plan.

### Researching a Prospect

Just ask naturally:
```
Research Acme Corp before my call tomorrow
```

The `account-research` skill triggers automatically and gives you company overview, key contacts, recent news, and recommended approach.

### Drafting Outreach

```
Draft an email to the VP of Engineering at TechStart
```

The `draft-outreach` skill researches the prospect first, then generates personalized outreach with multiple angles.

### Competitive Intel

```
How do we compare to Competitor X?
```

The `competitive-intelligence` skill researches both companies and builds a differentiation matrix with talk tracks.

## Standalone + Supercharged

Every command and skill works without any integrations:

| What You Can Do | Standalone | Supercharged With |
|-----------------|------------|-------------------|
| Process call notes | Paste notes/transcript | Transcripts MCP (e.g. Gong, Fireflies) |
| Forecast pipeline | Upload CSV, paste deals | CRM MCP |
| Review pipeline | Upload CSV, describe deals | CRM MCP |
| Research prospects | Web search | Enrichment MCP (e.g. Clay, ZoomInfo) |
| Prep for calls | Describe meeting | CRM, Email, Calendar MCPs |
| Draft outreach | Web search + your context | CRM, Email MCPs |
| Competitive intel | Web search | CRM (win/loss data), Docs (battlecards) |

## MCP Integrations

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](CONNECTORS.md).

Connect your tools for a richer experience:

| Category | Examples | What It Enables |
|---|---|---|
| **CRM** | HubSpot, Close | Pipeline data, account history, contact records |
| **Transcripts** | Fireflies, Gong, Chorus | Call recordings, transcripts, key moments |
| **Enrichment** | Clay, ZoomInfo, Apollo | Company and contact data enrichment |
| **Chat** | Slack, Teams | Internal discussions, colleague intel |

See [CONNECTORS.md](CONNECTORS.md) for the full list of supported integrations, including email, calendar, and additional CRM options.

## Settings

Create a `settings.local.json` file to personalize:

- **Cowork**: Save it in any folder you've shared with Cowork (via the folder picker). The plugin finds it automatically.
- **Claude Code**: Save it at `sales/.claude/settings.local.json`.

```json
{
  "name": "Your Name",
  "title": "Account Executive",
  "company": "Your Company",
  "quota": {
    "annual": 1000000,
    "quarterly": 250000
  },
  "product": {
    "name": "Your Product",
    "value_props": [
      "Key value proposition 1",
      "Key value proposition 2"
    ],
    "competitors": [
      "Competitor A",
      "Competitor B"
    ]
  }
}
```

The plugin will ask you for this information interactively if it's not configured.
