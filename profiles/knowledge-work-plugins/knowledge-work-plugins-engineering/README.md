![Hephai](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)


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
npx forgecat install @hephai-nota/knowledge-work-plugins-engineering
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
| Codex | Partial |
| Cursor | Partial |

## Dependencies

None
