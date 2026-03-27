*written by Hephai*

# Engineering

Streamline engineering workflows with Claude. Covers standups, code review, architecture decisions, system design, debugging, incident response, deploy checklists, technical documentation, tech debt, and testing strategy. Connects to GitHub, Slack, PagerDuty, Datadog, Linear, and more.

## Tags

- engineering
- code-review
- incident-response
- architecture
- devops

## Installation

```
npx hephai install engineering
```

## Skills

| Skill | Description |
|---|---|
| `standup` | Generate a standup update from recent activity. Use when preparing for daily standup, summarizing yesterday's commits and PRs and ticket moves, formatting work into yesterday/today/blockers, or structuring a few rough notes into a shareable update. `standup` |
| `code-review` | Review code changes for security, performance, and correctness. Trigger with a PR URL or diff, "review this before I merge", "is this code safe?", or when checking a change for N+1 queries, injection risks, missing edge cases, or error handling gaps. `code-review` |
| `architecture` | Create or evaluate an architecture decision record (ADR). Use when choosing between technologies (e.g., Kafka vs SQS), documenting a design decision with trade-offs and consequences, reviewing a system design proposal, or designing a new component from requirements and constraints. `adr` |
| `system-design` | Design systems, services, and architectures. Trigger with "design a system for", "how should we architect", "system design for", "what's the right architecture for", or when the user needs help with API design, data modeling, or service boundaries. `system-design` |
| `debug` | Structured debugging session — reproduce, isolate, diagnose, and fix. Trigger with an error message or stack trace, "this works in staging but not prod", "something broke after the deploy", or when behavior diverges from expected and the cause isn't obvious. `debugging` |
| `incident-response` | Run an incident response workflow — triage, communicate, and write postmortem. Trigger with "we have an incident", "production is down", an alert that needs severity assessment, a status update mid-incident, or when writing a blameless postmortem after resolution. `incident` |
| `deploy-checklist` | Pre-deployment verification checklist. Use when about to ship a release, deploying a change with database migrations or feature flags, verifying CI status and approvals before going to production, or documenting rollback triggers ahead of time. `deploy` |
| `documentation` | Write and maintain technical documentation. Trigger with "write docs for", "document this", "create a README", "write a runbook", "onboarding guide", or when the user needs help with any form of technical writing — API docs, architecture docs, or operational runbooks. `docs` |
| `tech-debt` | Identify, categorize, and prioritize technical debt. Trigger with "tech debt", "technical debt audit", "what should we refactor", "code health", or when the user asks about code quality, refactoring priorities, or maintenance backlog. `refactoring` |
| `testing-strategy` | Design test strategies and test plans. Trigger with "how should we test", "test strategy for", "write tests for", "test plan", "what tests do we need", or when the user needs help with testing approaches, coverage, or test architecture. `testing` |

## MCPs

| Server | Transport | URL |
|---|---|---|
| Slack | `http` | https://mcp.slack.com/mcp |
| Linear | `http` | https://mcp.linear.app/mcp |
| Asana | `http` | https://mcp.asana.com/v2/mcp |
| Atlassian | `http` | https://mcp.atlassian.com/v1/mcp |
| Notion | `http` | https://mcp.notion.com/mcp |
| GitHub | `http` | https://api.github.com/mcp |
| PagerDuty | `http` | https://mcp.pagerduty.com/mcp |
| Datadog | `http` | https://mcp.datadoghq.com/mcp |
| Google Calendar | `http` | https://gcal.mcp.claude.com/mcp |
| Gmail | `http` | https://gmail.mcp.claude.com/mcp |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/engineering |
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

# Engineering Plugin

A software engineering plugin primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. Helps with standups, code review, architecture decisions, incident response, debugging, and technical documentation. Works with any engineering team — standalone with your input, supercharged when you connect your source control, project tracker, and monitoring tools.

## Installation

```bash
claude plugins add knowledge-work-plugins/engineering
```

## Commands

Explicit workflows you invoke with a slash command:

| Command | Description |
|---|---|
| `/standup` | Generate a standup update from your recent activity — commits, PRs, tickets, and chat |
| `/review` | Review code changes — security, performance, style, and correctness |
| `/debug` | Structured debugging session — reproduce, isolate, diagnose, and fix |
| `/architecture` | Create or evaluate architecture decisions — ADR format with trade-off analysis |
| `/incident` | Run an incident response workflow — triage, communicate, mitigate, and write postmortem |
| `/deploy-checklist` | Pre-deployment checklist — verify tests, review changes, check dependencies, confirm rollback plan |

All commands work **standalone** (paste code, describe your system, upload files) and get **supercharged** with MCP connectors.

## Skills

Domain knowledge Claude uses automatically when relevant:

| Skill | Description |
|---|---|
| `code-review` | Review code for bugs, security issues, performance, and maintainability |
| `incident-response` | Triage and manage production incidents — status updates, runbooks, postmortems |
| `system-design` | Design systems and services — architecture diagrams, API design, data modeling |
| `tech-debt` | Identify, categorize, and prioritize technical debt — build a remediation plan |
| `testing-strategy` | Design test strategies — unit, integration, e2e coverage, test plan creation |
| `documentation` | Write and maintain technical documentation — READMEs, API docs, runbooks, onboarding guides |

## Example Workflows

### Morning Standup

```
/standup
```

If your tools are connected, I'll pull your recent commits, PR activity, and ticket updates. Otherwise, tell me what you worked on and I'll format it.

### Code Review

```
/review https://github.com/org/repo/pull/123
```

Share a PR link, paste a diff, or point to files. Get a structured review covering security, performance, correctness, and style.

### Debugging an Issue

```
/debug Users are getting 500 errors on the checkout page
```

Walk through a structured debugging process: reproduce, isolate, diagnose, fix. I'll help you think through it systematically.

### Architecture Decision

```
/architecture Should we use a message queue or direct API calls between services?
```

Get a structured ADR with options analysis, trade-offs, and a recommendation.

### Incident Response

```
/incident The payments service is returning 503s
```

Start an incident workflow: triage severity, draft communications, track timeline, and generate a postmortem when resolved.

### Pre-Deploy Check

```
/deploy-checklist auth-service v2.3.0
```

Get a customized deployment checklist based on your service and what's changing.

## Standalone + Supercharged

Every command and skill works without any integrations:

| What You Can Do | Standalone | Supercharged With |
|-----------------|------------|-------------------|
| Standup updates | Describe your work | Source control, Project tracker, Chat |
| Code review | Paste diff or code | Source control (pull PRs automatically) |
| Debug sessions | Describe the problem | Monitoring (pull logs and metrics) |
| Architecture decisions | Describe the system | Knowledge base (find prior ADRs) |
| Incident response | Describe the incident | Monitoring, Incident management, Chat |
| Deploy checklists | Describe the deploy | CI/CD, Source control |

## MCP Integrations

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](CONNECTORS.md).

Connect your tools for a richer experience:

| Category | Examples | What It Enables |
|---|---|---|
| **Source control** | GitHub, GitLab | PR diffs, commit history, branch status |
| **Project tracker** | Linear, Jira, Asana | Ticket status, sprint data, assignments |
| **Monitoring** | Datadog, New Relic | Logs, metrics, alerts, dashboards |
| **Incident management** | PagerDuty, Opsgenie | On-call schedules, incident tracking, paging |
| **Chat** | Slack, Teams | Team discussions, standup channels |
| **Knowledge base** | Notion, Confluence | ADRs, runbooks, onboarding docs |

See [CONNECTORS.md](CONNECTORS.md) for the full list of supported integrations.

## Settings

Create a local settings file at `engineering/.claude/settings.local.json` to personalize:

```json
{
  "name": "Your Name",
  "title": "Software Engineer",
  "team": "Your Team",
  "company": "Your Company",
  "techStack": ["Python", "TypeScript", "PostgreSQL", "AWS"],
  "defaultBranch": "main",
  "deployProcess": "canary"
}
```

The plugin will ask you for this information interactively if it's not configured.
