*written by Hephai*

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
npx hephai install operations
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
| Cursor | Partial |
| Codex | Partial |

## Dependencies

None

---
*Original README.md from source:*

# Operations Plugin

A business operations plugin primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. Helps with vendor management, process documentation, change management, capacity planning, compliance tracking, and resource planning. Works with any ops team — standalone with your input, supercharged when you connect your ITSM, project tracker, and other tools.

## Installation

```bash
claude plugins add knowledge-work-plugins/operations
```

## Commands

Explicit workflows you invoke with a slash command:

| Command | Description |
|---|---|
| `/vendor-review` | Evaluate a vendor — cost analysis, risk assessment, contract summary, and renewal recommendation |
| `/process-doc` | Document a business process — flowcharts, RACI matrices, SOPs, and runbooks |
| `/change-request` | Create a change management request — impact analysis, rollback plan, approval routing |
| `/capacity-plan` | Plan resource capacity — workload analysis, headcount modeling, utilization forecasting |
| `/status-report` | Generate a status report — project updates, KPIs, risks, and action items for leadership |
| `/runbook` | Create or update an operational runbook — step-by-step procedures for recurring tasks |

All commands work **standalone** (provide context and details) and get **supercharged** with MCP connectors.

## Skills

Domain knowledge Claude uses automatically when relevant:

| Skill | Description |
|---|---|
| `vendor-management` | Evaluate, compare, and manage vendor relationships — contracts, performance, risk |
| `process-optimization` | Analyze and improve business processes — identify bottlenecks, reduce waste, streamline workflows |
| `change-management` | Plan and execute organizational or technical changes — communication, training, adoption |
| `risk-assessment` | Identify, assess, and mitigate operational risks — risk registers, impact analysis, controls |
| `compliance-tracking` | Track compliance requirements — audits, certifications, regulatory deadlines, policy adherence |
| `resource-planning` | Plan and optimize resource allocation — capacity, utilization, forecasting, budget |

## Example Workflows

### Evaluating a Vendor

```
/vendor-review
```

Provide the vendor name, contract details, or upload a proposal. Get a structured evaluation with cost analysis, risk flags, and a recommendation.

### Documenting a Process

```
/process-doc employee offboarding
```

Describe the process or walk me through it. Get a complete SOP with flowchart, RACI matrix, and step-by-step procedures.

### Submitting a Change Request

```
/change-request
```

Describe the change. Get an impact analysis, risk assessment, rollback plan, and communication template ready for approval.

### Planning Capacity

```
/capacity-plan
```

Upload team data or describe your resources. Get utilization analysis, bottleneck identification, and headcount recommendations.

### Leadership Status Report

```
/status-report
```

I'll pull updates from your connected tools (or ask you for input) and generate a polished status report with KPIs, risks, and next steps.

### Creating a Runbook

```
/runbook monthly close process
```

Walk me through the process once. I'll document it as a repeatable runbook with checklists, troubleshooting, and escalation paths.

## Standalone + Supercharged

Every command and skill works without any integrations:

| What You Can Do | Standalone | Supercharged With |
|-----------------|------------|-------------------|
| Vendor reviews | Provide details, upload proposals | Procurement, Knowledge base |
| Process documentation | Describe the process | Knowledge base (existing docs) |
| Change requests | Describe the change | ITSM, Project tracker |
| Capacity planning | Upload data, describe team | Project tracker (workload data) |
| Status reports | Provide updates manually | Project tracker, Chat, Calendar |
| Runbooks | Walk through the process | Knowledge base, ITSM |

## MCP Integrations

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](CONNECTORS.md).

Connect your tools for a richer experience:

| Category | Examples | What It Enables |
|---|---|---|
| **ITSM** | ServiceNow, Zendesk | Ticket management, change requests, incident tracking |
| **Project tracker** | Asana, Jira, monday.com | Project status, resource allocation, task tracking |
| **Knowledge base** | Notion, Confluence | Process docs, runbooks, policies |
| **Chat** | Slack, Teams | Team coordination, approvals, status updates |
| **Calendar** | Google Calendar, Microsoft 365 | Meeting scheduling, deadline tracking |
| **Email** | Gmail, Microsoft 365 | Vendor communications, approvals |

See [CONNECTORS.md](CONNECTORS.md) for the full list of supported integrations.

## Settings

Create a local settings file at `operations/.claude/settings.local.json` to personalize:

```json
{
  "company": "Your Company",
  "team": "Operations",
  "reportingCadence": "weekly",
  "approvalChain": ["Manager", "Director", "VP"],
  "complianceFrameworks": ["SOC 2", "ISO 27001"],
  "fiscalYearStart": "January"
}
```

The plugin will ask you for this information interactively if it's not configured.
