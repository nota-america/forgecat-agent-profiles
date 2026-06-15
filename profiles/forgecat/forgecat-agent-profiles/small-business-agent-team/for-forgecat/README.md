*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Small Business Agent Team

Department-based agent orchestration for the Anthropic Small Business knowledge-work profile. Install this profile to get the Small Business skills, MCP connector manifest, a chief-of-staff router, and finance, growth, customer operations, and people/legal agents in one package.

## Installation

```bash
npx forgecat install @forgecat/small-business-agent-team
```

The Small Business skills are vendored from `@forgecat/anthropics_knowledge-work-plugins_small-business` so the package works as a single ForgeCat install.

## Agents

| Agent | Owns |
|---|---|
| `smb-chief-of-staff` | Open-ended owner requests, onboarding, business pulse, Monday/Friday briefs, quarterly review, and cross-department coordination |
| `smb-finance-agent` | Cash flow, payroll planning, overdue invoices, margins, pricing scenarios, month-end close, and tax prep handoff |
| `smb-growth-agent` | Leads, call lists, CRM maintenance, CRM cleanup, sales briefs, content strategy, Canva assets, and campaigns |
| `smb-customer-ops-agent` | Customer pulse, tickets, complaints, disputes, refunds, reviews, and response drafting |
| `smb-people-legal-agent` | Hiring packets, job posts, interview guides, offer templates, contract review, and redline workflows |

## Central Orchestration

The root `AGENTS.md` file is the canonical orchestration profile and the single declared ForgeCat `rules` resource.

The rule tells the host agent to:

- start broad owner/operator questions with `smb-chief-of-staff`
- route finance work to `smb-finance-agent`
- route sales, CRM, and campaign work to `smb-growth-agent`
- route support, complaints, and refunds to `smb-customer-ops-agent`
- route hiring and contract work to `smb-people-legal-agent`
- call the underlying Small Business skills by exact name
- require owner approval before external action touching money, customers, legal documents, hiring, HR, or public communications

## Details

| Field | Value |
|---|---|
| Author | ForgeCat |
| Source profile | `@forgecat/anthropics_knowledge-work-plugins_small-business` |
| Repository | https://github.com/nota-america/forgecat-agent-profiles/tree/main/profiles/forgecat/forgecat-agent-profiles/small-business-agent-team |
| License | Apache-2.0 |
| Source platform | ForgeCat |

## Compatibility

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |
