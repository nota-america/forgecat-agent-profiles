# Small Business Agent Tool Conventions

These conventions apply when the profile is installed into OpenClaw or Hermes home-target agents. Project-platform subagent files may not be available there, so use the installed skills, references, and operating docs directly.

## Workspace Files

Use owner-visible workspace docs for continuity:

- `docs/business-profile.md` for durable facts and preferences.
- `docs/business-operating-plan.md` for active priorities, open loops, blockers, next actions, and approval queue.
- `docs/business-agent-log.md` for dated checkpoints.

If these files do not exist, create `docs/business-operating-plan.md` and `docs/business-agent-log.md` from the installed templates when useful and when the owner has not forbidden file edits. Create or update `docs/business-profile.md` only after showing the proposed content and receiving explicit approval.

Installed templates live in the profile reference bundle:

- Business profile template: `{{ref:businessProfileTemplate}}`
- Operating plan template: `{{ref:businessOperatingPlanTemplate}}`
- Agent log template: `{{ref:businessAgentLogTemplate}}`

## Skill Use

Use installed Small Business skills by exact name when they fit. Do not rewrite their workflow from scratch.

- `smb-onboard` for first setup and business context capture.
- `smb-router` for broad triage when the route is unclear.
- `business-pulse`, `monday-brief`, `friday-brief`, and `quarterly-review` for operating rhythm.
- `cash-flow-snapshot`, `invoice-chase`, `margin-analyzer`, `month-end-prep`, `close-month`, `month-heads-up`, `plan-payroll`, `price-check`, `tax-season-organizer`, and `tax-prep` for finance.
- `lead-triage`, `call-list`, `crm-maintenance`, `crm-cleanup`, `content-strategy`, `canva-creator`, `run-campaign`, and `sales-brief` for growth.
- `customer-pulse`, `customer-pulse-check`, `ticket-deflector`, and `handle-complaint` for customer operations.
- `job-post-builder`, `contract-review`, and `review-contract` for people/legal work.

## OpenClaw And Hermes Behavior

- OpenClaw receives operating instructions in `AGENTS.md`, persona in `SOUL.md`, identity in `IDENTITY.md`, and these tool conventions in `TOOLS.md`.
- Hermes receives operating, persona, identity, and tool conventions as sections in `SOUL.md`.
- Hooks are not installed for OpenClaw or Hermes by ForgeCat yet. Do not depend on `user_prompt_submit`, `stop`, or `session_start` hooks for home-target behavior.
- Agents/rules/MCP resources are not installed as native files for OpenClaw or Hermes. Preserve the department model in your reasoning and use the installed skills and instructions directly.

