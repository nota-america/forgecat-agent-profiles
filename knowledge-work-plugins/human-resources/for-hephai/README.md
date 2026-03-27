*written by Hephai*

# Human Resources

Streamline people operations with Claude. Covers the full employee lifecycle — recruiting pipeline, interview prep, offer drafting, onboarding, performance reviews, compensation analysis, org planning, people reporting, and policy lookup. Connects to Slack, Notion, Atlassian, Microsoft 365, Google Calendar, and Gmail.

## Tags

- human-resources
- recruiting
- onboarding
- performance-management
- compensation

## Installation

```
npx hephai install human-resources
```

## Skills

| Skill | Description |
|---|---|
| `recruiting-pipeline` | Track and manage recruiting pipeline stages. Trigger with "recruiting update", "candidate pipeline", "how many candidates", "hiring status", or when the user discusses sourcing, screening, interviewing, or extending offers. `recruiting` |
| `interview-prep` | Create structured interview plans with competency-based questions and scorecards. Trigger with "interview plan for", "interview questions for", "how should we interview", "scorecard for", or when the user is preparing to interview candidates. `interviewing` |
| `draft-offer` | Draft an offer letter with comp details and terms. Use when a candidate is ready for an offer, assembling a total comp package (base, equity, signing bonus), writing the offer letter text itself, or prepping negotiation guidance for the hiring manager. `offers` |
| `onboarding` | Generate an onboarding checklist and first-week plan for a new hire. Use when someone has a start date coming up, building the pre-start task list (accounts, equipment, buddy), scheduling Day 1 and Week 1, or setting 30/60/90-day goals for a new team member. `onboarding` |
| `performance-review` | Structure a performance review with self-assessment, manager template, and calibration prep. Use when review season kicks off and you need a self-assessment template, writing a manager review for a direct report, prepping rating distributions and promotion cases for calibration, or turning vague feedback into specific behavioral examples. `performance` |
| `comp-analysis` | Analyze compensation — benchmarking, band placement, and equity modeling. Trigger with "what should we pay a [role]", "is this offer competitive", "model this equity grant", or when uploading comp data to find outliers and retention risks. `compensation` |
| `people-report` | Generate headcount, attrition, diversity, or org health reports. Use when pulling a headcount snapshot for leadership, analyzing turnover trends by team, preparing diversity representation metrics, or assessing span of control and flight risk across the org. `reporting` |
| `org-planning` | Headcount planning, org design, and team structure optimization. Trigger with "org planning", "headcount plan", "team structure", "reorg", "who should we hire next", or when the user is thinking about team size, reporting structure, or organizational design. `org-design` |
| `policy-lookup` | Find and explain company policies in plain language. Trigger with "what's our PTO policy", "can I work remotely from another country", "how do expenses work", or any plain-language question about benefits, travel, leave, or handbook rules. `policy` |

## MCPs

| Server | Transport | URL |
|---|---|---|
| Slack | `http` | https://mcp.slack.com/mcp |
| Google Calendar | `http` | https://gcal.mcp.claude.com/mcp |
| Gmail | `http` | https://gmail.mcp.claude.com/mcp |
| Notion | `http` | https://mcp.notion.com/mcp |
| Atlassian | `http` | https://mcp.atlassian.com/v1/mcp |
| Microsoft 365 | `http` | https://microsoft365.mcp.claude.com/mcp |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/human-resources |
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

# HR Plugin

A people operations plugin primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. Helps with recruiting, onboarding, performance management, policy guidance, and compensation analysis. Works with any HR team — standalone with your input, supercharged when you connect your HRIS, ATS, and other tools.

## Installation

```bash
claude plugins add knowledge-work-plugins/human-resources
```

## Commands

Explicit workflows you invoke with a slash command:

| Command | Description |
|---|---|
| `/draft-offer` | Draft an offer letter with compensation details, start date, and terms |
| `/onboarding` | Generate an onboarding checklist and first-week plan for a new hire |
| `/performance-review` | Structure a performance review — self-assessment prompts, manager template, calibration prep |
| `/policy-lookup` | Find and explain company policies — PTO, benefits, expense, travel, remote work |
| `/comp-analysis` | Analyze compensation data — benchmarking, band placement, equity refresh modeling |
| `/people-report` | Generate headcount, attrition, diversity, or org health reports |

All commands work **standalone** (provide context and details) and get **supercharged** with MCP connectors.

## Skills

Domain knowledge Claude uses automatically when relevant:

| Skill | Description |
|---|---|
| `recruiting-pipeline` | Track and manage recruiting pipeline — source, screen, interview, offer stages |
| `employee-handbook` | Answer questions about company policies, benefits, and procedures |
| `compensation-benchmarking` | Benchmark compensation against market data — base, equity, total comp |
| `org-planning` | Headcount planning, org design, and team structure optimization |
| `people-analytics` | Analyze workforce data — attrition trends, engagement signals, diversity metrics |
| `interview-prep` | Create structured interview plans — competency-based questions, scorecards, debrief templates |

## Example Workflows

### Drafting an Offer

```
/draft-offer
```

Tell me the role, level, location, and comp details. Get a complete offer letter draft with terms, equity breakdown, and benefits summary.

### Onboarding a New Hire

```
/onboarding
```

Provide the new hire's name, role, team, and start date. Get a comprehensive onboarding checklist, first-week calendar, tool access list, and buddy assignment template.

### Preparing for Performance Reviews

```
/performance-review
```

Get templates for self-assessments, manager reviews, and calibration. I'll help structure feedback that's specific, actionable, and fair.

### Understanding Benefits

Just ask naturally:
```
What's our parental leave policy?
```

The `employee-handbook` skill triggers automatically and searches your connected knowledge base for the answer.

### Compensation Benchmarking

```
/comp-analysis
```

Upload comp data or describe your bands. Get market comparisons, band placement analysis, and recommendations for adjustments.

## Standalone + Supercharged

Every command and skill works without any integrations:

| What You Can Do | Standalone | Supercharged With |
|-----------------|------------|-------------------|
| Draft offers | Provide details manually | HRIS, ATS for auto-fill |
| Onboarding checklists | Describe your process | HRIS, Knowledge base for templates |
| Performance reviews | Manual input | HRIS for review history |
| Policy lookup | Paste handbook content | Knowledge base |
| Comp analysis | Upload CSV, describe bands | Compensation data MCP |
| People reports | Upload data | HRIS for live data |

## MCP Integrations

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](CONNECTORS.md).

Connect your tools for a richer experience:

| Category | Examples | What It Enables |
|---|---|---|
| **HRIS** | Workday, BambooHR, Rippling | Employee data, org structure, PTO balances |
| **ATS** | Greenhouse, Lever, Ashby | Candidate pipeline, interview schedules, offer tracking |
| **Compensation** | Pave, Radford | Market benchmarks, comp band data |
| **Chat** | Slack, Teams | Team announcements, candidate coordination |
| **Calendar** | Google Calendar, Microsoft 365 | Interview scheduling, onboarding calendar |
| **Email** | Gmail, Microsoft 365 | Offer letters, candidate communications |

See [CONNECTORS.md](CONNECTORS.md) for the full list of supported integrations.

## Settings

Create a `settings.local.json` file to personalize:

- **Cowork**: Save it in any folder you've shared with Cowork (via the folder picker). The plugin finds it automatically.
- **Claude Code**: Save it at `human-resources/.claude/settings.local.json`.

```json
{
  "company": "Your Company",
  "headquarters": "City, State",
  "employeeCount": 500,
  "benefits": {
    "healthInsurance": "Provider Name",
    "pto": "Unlimited / X days",
    "parentalLeave": "X weeks"
  },
  "compensation": {
    "currency": "USD",
    "equityType": "RSU / Options",
    "vestingSchedule": "4 years, 1 year cliff"
  }
}
```

The plugin will ask you for this information interactively if it's not configured.
