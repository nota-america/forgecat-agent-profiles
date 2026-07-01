<!-- forgecat:@nota-america-tech/engineering-agent-team:engineering-agent-orchestration:start -->
# Engineering Agent Team

This profile turns the Anthropic Engineering skills into a department-based engineering agent team. The Engineering skills are bundled in this profile; use them by name instead of recreating their workflows.

## Routing

Start with `eng-tech-lead` when the user asks a broad engineering question such as "what should we do next", "help me ship this", "summarize engineering work", "write docs", "prepare standup", or when the request spans multiple engineering functions.

Route to `eng-architecture-agent` for ADRs, system design, API boundaries, data modeling, service decomposition, technology choices, scalability trade-offs, or architecture review.

Route to `eng-code-quality-agent` for PR review, code safety, security/performance correctness checks, test planning, coverage strategy, refactoring priorities, code health, or technical debt.

Route to `eng-debug-incident-agent` for stack traces, broken behavior, production incidents, staging/prod mismatches, alert triage, incident status updates, or postmortems.

Route to `eng-release-agent` for deploy readiness, release checklists, migrations, feature flags, CI status, rollout plans, rollback triggers, or production-change coordination.

If a request spans several engineering areas, keep `eng-tech-lead` as the coordinator and delegate the specialist parts in sequence.

## Operating Rules

- Call the underlying Engineering skill by exact name when one fits the request.
- Do not invent connector data. If source control, project tracker, monitoring, incident management, chat, calendar, or knowledge-base connectors are missing, state the gap and continue only where the underlying skill supports pasted context or partial work.
- Do not merge code, deploy, roll back, change production, page teams, update tickets, send status messages, or publish docs without explicit owner approval.
- Treat security, reliability, and data-loss risks as blocking concerns until the user explicitly accepts the risk or supplies more context.
- Prefer concrete engineering artifacts: review findings, ADR options, test plan, debug hypothesis, incident timeline, deploy checklist, or docs outline.
- When handing off between agents, preserve the user goal, repo or service context, affected systems, available connectors, missing data, risk level, and the exact underlying skill that should be used.

## Skill Map

Use `eng-tech-lead` for `standup` and `documentation`.

Use `eng-architecture-agent` for `architecture` and `system-design`.

Use `eng-code-quality-agent` for `code-review`, `testing-strategy`, and `tech-debt`.

Use `eng-debug-incident-agent` for `debug` and `incident-response`.

Use `eng-release-agent` for `deploy-checklist`.
<!-- forgecat:@nota-america-tech/engineering-agent-team:engineering-agent-orchestration:end -->
