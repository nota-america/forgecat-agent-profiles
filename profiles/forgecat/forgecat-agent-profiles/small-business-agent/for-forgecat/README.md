*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Small Business Agent

A single small-business operator profile built from the full Anthropic Small Business knowledge-work skill set. It is designed for owner-operators who want one root agent persona to onboard the business, keep track of current priorities, run business pulse checks, and call the right bundled skill when finance, growth, customer, people, legal, or operating work comes up.

This is intentionally not a multi-agent department team. The detailed operating behavior lives in root `AGENTS.md`; first-run onboarding is handled by those root instructions and the bundled `smb-onboard` skill instead of a separate helper agent.

## Installation

```bash
npx forgecat install @forgecat/small-business-agent
```

## What It Does

- Onboards a first-time owner into `docs/business-profile.md`.
- Reads `docs/business-profile.md`, `docs/business-operating-plan.md`, and `docs/business-agent-log.md` when they exist.
- Produces current-state checks and one recommended next action.
- Uses the full bundled Small Business skill set by exact skill name.
- Queues external actions for approval instead of sending, posting, paying, refunding, filing, updating, or publishing on its own.

## Operating Instructions

The root `AGENTS.md` file is the canonical operating manual. It is installed as ForgeCat `operating-instructions`, so supported platforms receive the detailed Small Business Agent instructions in their root `AGENTS.md`.

The operating manual tells the host agent to:

- treat root `AGENTS.md` as the main Small Business Agent persona
- keep onboarding inside the main agent flow instead of a separate helper agent
- ask one onboarding question instead of showing a menu when no business context exists
- preserve the exact `## Business context` heading in `docs/business-profile.md`
- use one central agent instead of department subagents
- run a bounded operating loop for broad business requests
- use bundled skills by exact name
- maintain operating-plan and agent-log files when useful
- require explicit owner approval before external actions touching money, customers, CRM, legal documents, HR, hiring, or public communications

## Included Skills

This profile bundles the full Small Business skill set directly under `skills/`.

| Area | Skills |
|---|---|
| Operating rhythm | `smb-router`, `smb-onboard`, `business-pulse`, `monday-brief`, `friday-brief`, `quarterly-review` |
| Finance | `cash-flow-snapshot`, `invoice-chase`, `margin-analyzer`, `month-end-prep`, `close-month`, `month-heads-up`, `plan-payroll`, `price-check`, `tax-season-organizer`, `tax-prep` |
| Growth and sales | `lead-triage`, `call-list`, `crm-maintenance`, `crm-cleanup`, `content-strategy`, `canva-creator`, `run-campaign`, `sales-brief` |
| Customer operations | `customer-pulse`, `customer-pulse-check`, `ticket-deflector`, `handle-complaint` |
| People and legal operations | `job-post-builder`, `contract-review`, `review-contract` |

## Workspace Files

The agent may use these owner-visible files:

| File | Purpose |
|---|---|
| `docs/business-profile.md` | Durable business facts, tools, owner preferences, and constraints |
| `docs/business-operating-plan.md` | Active priorities, open loops, next actions, blockers, and approval queue |
| `docs/business-agent-log.md` | Dated checkpoints of what the agent read, did, learned, queued, and left blocked |

The profile includes templates for these files under `reference/`.

## MCP Connectors

The profile includes the same small-business connector manifest as the source profile. Connector data is never invented; if a connector is missing, the agent must state the gap and use only supported fallback paths such as pasted context, exported files, or CSV upload.

## Details

| Field | Value |
|---|---|
| Author | ForgeCat |
| Source profile | `@forgecat/anthropics_knowledge-work-plugins_small-business` |
| Repository | https://github.com/nota-america/forgecat-agent-profiles/tree/main/profiles/forgecat/forgecat-agent-profiles/small-business-agent |
| License | Apache-2.0 |
| Source platform | Multi-platform |

## Compatibility

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
