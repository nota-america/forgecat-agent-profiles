*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Small Business Agent

OpenClaw/Hermes home-agent profile for small-business operators. It repackages Anthropic's Small Business knowledge-work skills into a persistent operating agent that can onboard the owner, maintain durable business context, route broad requests automatically, and keep owner approvals explicit before money, customer, legal, hiring, or public actions.

Install:

```bash
npx forgecat install @forgecat/small-business-agent -p openclaw
npx forgecat install @forgecat/small-business-agent -p hermes
```

## What Changed From The Original Plugin

The original Anthropic package is a Claude/Cowork plugin with skills and MCP connectors. This package keeps the small-business skills, but changes the profile layer for OpenClaw and Hermes:

- Adds home-agent operating instructions, persona, identity, and tool conventions.
- Makes onboarding the default for first-session or vague "what can you do" requests.
- Uses `docs/business-profile.md`, `docs/business-operating-plan.md`, and `docs/business-agent-log.md` as owner-visible memory.
- Routes broad requests into finance, growth, customer operations, people/legal, or chief-of-staff operating modes automatically.
- Requires explicit owner approval before external actions or profile writes.

It intentionally does not ship Claude subagents, commands, MCP config, or hooks. OpenClaw and Hermes install home-level instructions and skills, so the agent behavior is expressed through those supported surfaces.

## Operating Files

The agent uses these workspace docs when available:

| File | Role |
|---|---|
| `docs/business-profile.md` | Durable facts about the business, owner preferences, tools, constraints, and approval rules. |
| `docs/business-operating-plan.md` | Current priorities, active loops, approval queue, and next-owner decisions. |
| `docs/business-agent-log.md` | Dated checkpoints for what was done, learned, queued, or blocked. |

For new owners, the agent should ask a compact onboarding interview, draft the profile update, and write it only after approval.

## Routing

| Owner intent | Agent mode | Primary skills |
|---|---|---|
| Get set up, catch me up, what should I focus on | Chief of staff | `smb-onboard`, `smb-router`, `business-pulse`, `monday-brief`, `friday-brief`, `quarterly-review` |
| Cash flow, payroll, invoices, margins, pricing, close, taxes | Finance | `cash-flow-snapshot`, `invoice-chase`, `margin-analyzer`, `month-end-prep`, `plan-payroll`, `tax-season-organizer` |
| Leads, pipeline, CRM, campaign, content, sales | Growth | `lead-triage`, `call-list`, `crm-maintenance`, `content-strategy`, `canva-creator`, `sales-brief` |
| Complaints, tickets, refunds, reviews, sentiment | Customer operations | `customer-pulse`, `ticket-deflector`, `handle-complaint` |
| Hiring, job posts, offers, contracts, redlines | People/legal | `job-post-builder`, `contract-review`, `review-contract` |

## Compatibility

| Platform | Status | Notes |
|---|---|---|
| OpenClaw | Partial | Installs supported home-agent instruction and skill surfaces. |
| Hermes | Partial | Installs supported home-agent instruction and skill surfaces. |

Partial status is intentional until a full runtime session verifies agent behavior in each host.

## Source

Based on Anthropic's `knowledge-work-plugins/small-business` profile, Apache-2.0 licensed.
