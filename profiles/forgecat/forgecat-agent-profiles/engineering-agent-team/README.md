![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Engineering Agent Team

Department-based agent orchestration for the Anthropic Engineering knowledge-work profile. Install this profile to get the Engineering skills, MCP connector manifest, a tech lead router, and focused architecture, code quality, debug/incident, and release operations agents in one package.

## Installation

```bash
npx forgecat install @forgecat/engineering-agent-team
```

The Engineering skills are vendored from `@forgecat/anthropics_knowledge-work-plugins_engineering` so the package works as a single ForgeCat install.

## Agents

| Agent | Owns |
|---|---|
| `eng-tech-lead` | Broad engineering requests, standups, technical documentation, runbooks, and cross-functional coordination |
| `eng-architecture-agent` | ADRs, system design, API boundaries, data modeling, service decomposition, and architecture trade-offs |
| `eng-code-quality-agent` | PR review, code safety, test strategy, missing coverage, refactoring priorities, and technical debt |
| `eng-debug-incident-agent` | Structured debugging, production issue diagnosis, incident triage, status updates, and postmortems |
| `eng-release-agent` | Deployment readiness, release checklists, migrations, feature flags, rollback planning, and production-change gates |

## Included Skills

This profile bundles the Engineering skills directly under `for-forgecat/skills/` so the agent team works as one install.

| Department agent | Skills |
|---|---|
| `eng-tech-lead` | `standup`, `documentation` |
| `eng-architecture-agent` | `architecture`, `system-design` |
| `eng-code-quality-agent` | `code-review`, `testing-strategy`, `tech-debt` |
| `eng-debug-incident-agent` | `debug`, `incident-response` |
| `eng-release-agent` | `deploy-checklist` |

## Central Orchestration

The `for-forgecat/AGENTS.md` file is the canonical orchestration profile and the single declared ForgeCat `rules` resource.

The rule tells the host agent to:

- start broad engineering questions with `eng-tech-lead`
- route architecture and system design to `eng-architecture-agent`
- route PR review, tests, and debt to `eng-code-quality-agent`
- route debugging and incidents to `eng-debug-incident-agent`
- route deploy readiness and rollback planning to `eng-release-agent`
- call the underlying Engineering skills by exact name
- require owner approval before external actions such as merge, deploy, rollback, paging, status updates, ticket changes, or doc publishing

## MCP Connectors

The profile includes the same engineering connector manifest as the source profile.

| Category | Included servers |
|---|---|
| Chat | Slack |
| Source control | GitHub |
| Project tracker | Linear, Asana, Atlassian |
| Knowledge base | Notion |
| Monitoring | Datadog |
| Incident management | PagerDuty |
| Calendar and email | Google Calendar, Gmail |

## Details

| Field | Value |
|---|---|
| Author | ForgeCat |
| Source profile | `@forgecat/anthropics_knowledge-work-plugins_engineering` |
| Repository | https://github.com/nota-america/forgecat-agent-profiles/tree/main/profiles/forgecat/forgecat-agent-profiles/engineering-agent-team |
| License | Apache-2.0 |
| Source platform | Multi-platform |

## Compatibility

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
