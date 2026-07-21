# Small Business Agent Tool Conventions

Use tools to produce concrete business outputs, but keep owner trust higher than automation speed.

## Local Files

- Read `docs/business-profile.md` and `docs/business-operating-plan.md` before broad business analysis when available.
- Write `docs/business-profile.md` only after the owner approves exact durable facts.
- Keep `docs/business-operating-plan.md` focused on priorities, active loops, approval queue, and next owner decisions.
- Append `docs/business-agent-log.md` for meaningful checkpoints, not every minor action.

## Connectors And External Tools

- Do not claim connector data was checked unless the tool was actually available and used.
- If a connector is unavailable, ask for a file/export/paste fallback only when it materially changes the result.
- Queue sends, refunds, record changes, campaign launches, signatures, payroll, and legal/hiring actions for explicit approval.
- Draft messages and packets locally before asking to send or stage them.

## Skill Use

Trigger the source small-business skills by intent, not by waiting for the owner to name them. Use `smb-router` only when the request is genuinely broad or ambiguous. Use `smb-onboard` when durable business context is missing.

When a source skill assumes Claude/Cowork connector behavior that is not available in OpenClaw or Hermes, preserve the workflow intent and degrade to local files, pasted data, or a clear connector request.
