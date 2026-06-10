# Site Patterns

Domain notes under this directory store reusable, verified operating knowledge for specific sites. They are for facts that future runs should not have to rediscover.

Store one note per domain as `references/site-patterns/{domain}.md`, and keep the filename aligned with the `domain` value in frontmatter.

## When to Create a Site Pattern Note

Create or update a domain note when you have verified site-specific behavior that changes how the skill should operate on that site, such as:

- login or session inheritance quirks
- stable route shapes or required query parameters
- predictable anti-automation friction
- reliable selectors or interaction patterns
- repeatable browser workflows that are specific to the domain

Do not create notes for one-off observations that have not been verified.

## Verified Facts Only

Record only verified facts, not guesses, intuitions, or "probably works" observations.

Good note content:

- "Opening a task page with `isolatedContext` loses the authenticated session on this domain."
- "The detail page is reachable only through the DOM-generated `href`; hand-built URLs produce a soft 404."

Bad note content:

- "This site might use React."
- "Looks like the upload dialog is flaky."

If the behavior is not yet verified, leave it out.

## Required Frontmatter

Every domain note should start with:

```markdown
---
domain: example.com
aliases: [Example]
updated: 2026-04-05
confidence: high
evidence: DOM href worked; hand-built URL soft-404ed
---
```

Use the real domain as `domain`. Keep `aliases` short and practical. Use `YYYY-MM-DD` for `updated`, and change it when the note changes meaningfully.

Use `confidence` to express how hard the current claim should steer future runs:

- `high`: verified more than once or strongly evidenced by the current run
- `medium`: verified once in a clean run and likely reusable
- `low`: weak but still useful signal; prefer as a hint, not as a default assumption

Use `evidence` as a short operational reason for why the claim currently deserves to exist. Keep it concise. It is not a transcript.

## Required Sections

Every domain note should contain these sections:

```markdown
## Platform traits

Facts about architecture, login behavior, routing, rendering, anti-automation friction, or content loading.

## Effective patterns

Verified URL shapes, interaction strategies, selectors, or browser workflows that reliably work.

## Known pitfalls

Things that fail, and why they fail.
```

Keep each point concrete and operational.

## End-of-Run Review

Every browser run that touches a domain should end with one quick question:

> Did this run verify a reusable fact, disprove a stored fact, or teach nothing domain-specific?

Use that answer to decide whether to create, update, downgrade, or leave the note alone.

If the run taught nothing reusable, do not force a note.

## Update Discipline

Treat the note as a reusable operating aid, not as a scratchpad.

- Add only reusable facts.
- Rewrite vague notes into clear operational statements.
- Remove or replace claims that later evidence disproves.
- Treat discovery dates as context markers, not guarantees that the behavior still works unchanged.
- If a stored pattern fails under comparable conditions, stop retrying it as if it were still true. Fall back to the generic workflow, then downgrade confidence, rewrite the claim, or delete it.
- Prefer one atomic fact per bullet. Future runs should be able to keep, rewrite, or remove one claim without touching unrelated claims.

If a note exists for the active domain, read it before operating on the site.
