*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Small Business Agent Team

Department-based agent orchestration for the Anthropic Small Business knowledge-work profile. Install this profile to get the Small Business skills, MCP connector manifest, a chief-of-staff router, finance, growth, customer operations, and people/legal agents, plus a persistent workspace business profile and operating plan in one package.

## Installation

```bash
npx forgecat install @forgecat/small-business-agent-team
```

The Small Business skills are vendored from `@forgecat/anthropics_knowledge-work-plugins_small-business` so the package works as a single ForgeCat install.

## Agents

| Agent | Owns |
|---|---|
| `smb-chief-of-staff` | Open-ended owner requests, onboarding, `docs/business-profile.md`, `docs/business-operating-plan.md`, `docs/business-agent-log.md`, business pulse, Monday/Friday briefs, quarterly review, and cross-department coordination |
| `smb-finance-agent` | Cash flow, payroll planning, overdue invoices, margins, pricing scenarios, month-end close, tax prep handoff, and durable finance context updates |
| `smb-growth-agent` | Leads, call lists, CRM maintenance, CRM cleanup, sales briefs, content strategy, Canva assets, campaigns, and durable customer/offer context updates |
| `smb-customer-ops-agent` | Customer pulse, tickets, complaints, disputes, refunds, reviews, response drafting, and durable support-policy context updates |
| `smb-people-legal-agent` | Hiring packets, job posts, interview guides, offer templates, contract review, redline workflows, and durable people/legal context updates |

## Persistent Business Profile

The team reads and maintains `docs/business-profile.md` in the owner's workspace. First-session onboarding asks about the business, top headaches, tools, team size, and preferred cadence, then shows the profile draft before writing. Returning sessions read that file first so recommendations are customized to the owner's industry, tools, constraints, and current priorities.

The installed operating instructions include a business-profile template and preserve the exact `## Business context` heading used by the bundled router and skills.

## Bounded Autonomous Operation

The agent team is designed to do safe local operating work, not just route to a skill. For broad requests like "what should I focus on" or "help me with my business", the chief-of-staff agent reads the business profile, operating plan, and agent log, chooses one outcome, drafts or updates local artifacts, queues approval-gated actions, and leaves a checkpoint for the next session.

The workspace operating files are:

- `docs/business-profile.md` — durable business facts and owner preferences
- `docs/business-operating-plan.md` — active priorities, open loops, next actions, blockers, and approval queue
- `docs/business-agent-log.md` — dated record of what the agent read, did locally, learned, queued, and left blocked

The profile still requires explicit owner approval before touching money, customers, CRM records, public communications, legal/HR documents, or external systems.

## Automatic Agent Routing

The root instructions now treat the top-level assistant as a dispatcher. On Claude Code, matching business requests should immediately call the `Task` tool with the exact department agent name, such as `smb-finance-agent` for cash/payroll work or `smb-customer-ops-agent` for complaints and refunds. Broad or mixed requests go to `smb-chief-of-staff`, which coordinates follow-up department agents.

If a host cannot invoke subagents directly, it must say that and then follow the matching agent's instructions exactly instead of presenting a generic menu.

## Included Skills

This profile bundles the Small Business skills directly under `skills/` so the agent team works as one install.

| Department agent | Skills |
|---|---|
| `smb-chief-of-staff` | `smb-router`, `smb-onboard`, `business-pulse`, `monday-brief`, `friday-brief`, `quarterly-review` |
| `smb-finance-agent` | `cash-flow-snapshot`, `invoice-chase`, `margin-analyzer`, `month-end-prep`, `close-month`, `month-heads-up`, `plan-payroll`, `price-check`, `tax-season-organizer`, `tax-prep` |
| `smb-growth-agent` | `lead-triage`, `call-list`, `crm-maintenance`, `crm-cleanup`, `content-strategy`, `canva-creator`, `run-campaign`, `sales-brief` |
| `smb-customer-ops-agent` | `customer-pulse`, `customer-pulse-check`, `ticket-deflector`, `handle-complaint` |
| `smb-people-legal-agent` | `job-post-builder`, `contract-review`, `review-contract` |

## Central Orchestration

The root `AGENTS.md` file is the canonical orchestration profile and the single declared ForgeCat `rules` resource.

The rule tells the host agent to:

- start broad owner/operator questions with `smb-chief-of-staff`
- automatically delegate to the matching department agent instead of answering from the root context
- read `docs/business-profile.md` before broad routing
- start onboarding when no `## Business context` exists
- maintain `docs/business-operating-plan.md` and `docs/business-agent-log.md` for active work and resume state
- route finance work to `smb-finance-agent`
- route sales, CRM, and campaign work to `smb-growth-agent`
- route support, complaints, and refunds to `smb-customer-ops-agent`
- route hiring and contract work to `smb-people-legal-agent`
- call the underlying Small Business skills by exact name
- update the workspace business profile only after owner approval
- require owner approval before external action touching money, customers, legal documents, hiring, HR, or public communications

## Details

| Field | Value |
|---|---|
| Author | ForgeCat |
| Source profile | `@forgecat/anthropics_knowledge-work-plugins_small-business` |
| Repository | https://github.com/nota-america/forgecat-agent-profiles/tree/main/profiles/forgecat/forgecat-agent-profiles/small-business-agent-team |
| License | Apache-2.0 |
| Source platform | Multi-platform |

## Compatibility

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
