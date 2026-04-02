![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)


# Operations

Optimize business operations with Claude. Covers process documentation, process optimization, runbooks, change management, vendor review, capacity planning, risk assessment, status reporting, and compliance tracking. Connects to Slack, Notion, Atlassian, Asana, ServiceNow, Microsoft 365, Google Calendar, and Gmail.

## Tags

- operations
- process-management
- change-management
- compliance
- vendor-management

## Installation

```
npx forgecat install @forgecat/knowledge-work-plugins-operations
```

## Skills

| Skill | Description |
|---|---|
| `process-doc` | Document a business process — flowcharts, RACI, and SOPs. Use when formalizing a process that lives in someone's head, building a RACI to clarify who owns what, writing an SOP for a handoff or audit, or capturing the exceptions and edge cases of how work actually gets done. `process` |
| `process-optimization` | Analyze and improve business processes. Trigger with "this process is slow", "how can we improve", "streamline this workflow", "too many steps", "bottleneck", or when the user describes an inefficient process they want to fix. `optimization` |
| `runbook` | Create or update an operational runbook for a recurring task or procedure. Use when documenting a task that on-call or ops needs to run repeatably, turning tribal knowledge into exact step-by-step commands, adding troubleshooting and rollback steps to an existing procedure, or writing escalation paths for when things go wrong. `runbook` |
| `change-request` | Create a change management request with impact analysis and rollback plan. Use when proposing a system or process change that needs approval, preparing a change record for CAB review, documenting risk and rollback steps before a deployment, or planning stakeholder communications for a rollout. `change-management` |
| `vendor-review` | Evaluate a vendor — cost analysis, risk assessment, and recommendation. Use when reviewing a new vendor proposal, deciding whether to renew or replace a contract, comparing two vendors side-by-side, or building a TCO breakdown and negotiation points before procurement sign-off. `vendor` |
| `capacity-plan` | Plan resource capacity — workload analysis and utilization forecasting. Use when heading into quarterly planning, the team feels overallocated and you need the numbers, deciding whether to hire or deprioritize, or stress-testing whether upcoming projects fit the people you have. `capacity` |
| `risk-assessment` | Identify, assess, and mitigate operational risks. Trigger with "what are the risks", "risk assessment", "risk register", "what could go wrong", or when the user is evaluating risks associated with a project, vendor, process, or decision. `risk` |
| `status-report` | Generate a status report with KPIs, risks, and action items. Use when writing a weekly or monthly update for leadership, summarizing project health with green/yellow/red status, surfacing risks and decisions that need stakeholder attention, or turning a pile of project tracker activity into a readable narrative. `reporting` |
| `compliance-tracking` | Track compliance requirements and audit readiness. Trigger with "compliance", "audit prep", "SOC 2", "ISO 27001", "GDPR", "regulatory requirement", or when the user needs help tracking, preparing for, or documenting compliance activities. `compliance` |

## MCPs

| Server | Transport | URL |
|---|---|---|
| Slack | `http` | https://mcp.slack.com/mcp |
| Google Calendar | `http` | https://gcal.mcp.claude.com/mcp |
| Gmail | `http` | https://gmail.mcp.claude.com/mcp |
| Notion | `http` | https://mcp.notion.com/mcp |
| Atlassian | `http` | https://mcp.atlassian.com/v1/mcp |
| Asana | `http` | https://mcp.asana.com/v2/mcp |
| ServiceNow | `http` | https://mcp.servicenow.com/mcp |
| Microsoft 365 | `http` | https://microsoft365.mcp.claude.com/mcp |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/operations |
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
