*written by Hephai*

![Hephai](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)


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
npx forgecat install @hephai-nota/knowledge-work-plugins-human-resources
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
| Codex | Partial |
| Cursor | Partial |

## Dependencies

None
