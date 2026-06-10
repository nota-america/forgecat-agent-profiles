---
name: use-my-browser
description: Use when work depends on the user's live browser session or visible rendered state rather than static fetches, especially for browser debugging contexts or DevTools-selected elements or requests, logged-in dashboards or CMS flows, localhost apps, forms, uploads, downloads, media inspection, DOM or iframe inspection, Shadow DOM, or browser failures that look like soft 404s, auth walls, anti-bot checks, or rate limits.
---

Do not treat this skill as a generic browsing default. Route from the evidence you need, not from tool preference.

Every task must be classified before you choose a route:

- `static-capable`: the evidence can be produced without live browser state, visible confirmation, or page interaction
- `browser-required`: the evidence depends on rendered state, interaction, live session behavior, or browser-only structures

Only `static-capable` tasks may fall back to static retrieval, `curl`, or other non-browser paths. Once a task is `browser-required`, stay on the browser path and mark missing capability as `blocked` instead of silently downgrading.

## Prerequisite check

This skill is for work inside the user's live browser session, not for launching a separate fresh automation browser.

Before doing browser automation, confirm that your environment already has access to a live browser stack that can provide the capabilities the task depends on, such as page inventory, task-owned page creation, page selection, snapshots or visible-state reads, DOM inspection, text or form input, uploads, dialogs, console inspection, and network inspection. The exact stack does not matter here: confirm capability, not brand.

If the live browser stack is unavailable, do not attempt browser automation through this skill. Only `static-capable` work may fall back to static retrieval.

Live browser automation can trigger anti-bot or anti-automation defenses on some sites. Use browser interaction only when the task truly needs it, and avoid unnecessary repetitive actions once the needed evidence has been obtained.

## Experience loop

Treat site patterns as part of the browser protocol, not as optional background reading.

For `browser-required` work, run this loop:

1. As soon as the target domain is known, check whether a matching note already exists under [`references/site-patterns/`](./references/site-patterns/).
2. If a note exists, read it before the first meaningful browser mutation on that domain.
3. During the run, watch for verified site-specific facts that would change how a future run should operate.
4. Before you consider the task complete, decide whether the run produced a reusable fact, disproved an existing fact, or produced no reusable site-specific learning.
5. If the run verified something reusable or disproved an existing claim, update the matching note before finishing.

Do not create a domain note for one-off noise. Do not skip the end-of-run review just because the task itself succeeded.

Writeback is expected when a run verifies any of the following:

- a stable route shape or required query parameter
- a login, session inheritance, or `isolatedContext` quirk
- a reliable interaction primitive such as hover, keyboard entry, upload sequencing, or a selector bridge pattern
- a domain where DOM-generated links are reliable but hand-built URLs are not
- predictable anti-automation friction or a misleading platform error state
- a reusable media extraction or iframe / Shadow DOM access pattern

## Decision guide

Start with the outcome, not the tool. Make the user's goal explicit, define what counts as done, and choose the cheapest route that can still produce the right evidence.

Use this routing order:

1. Decide whether the task is `static-capable` or `browser-required`.
2. If the task is `static-capable`, load [`references/task-routing.md`](./references/task-routing.md) and stay on the cheapest route that still satisfies the evidence target.
3. If the task is `browser-required`, load [`references/browser-playbook.md`](./references/browser-playbook.md).
4. If browser-required capability is uncertain in a fresh host session, also load [`references/browser-capability-matrix.md`](./references/browser-capability-matrix.md).
5. If the user already has an active browser debugging context, such as a selected inspector element or network request, also load [`references/debug-handoff.md`](./references/debug-handoff.md).
6. If the browser-required task touches a logged-in dashboard, admin surface, CMS, editor, or any save / publish / update flow, also load [`references/control-plane-workflows.md`](./references/control-plane-workflows.md).
7. If the current failure shape suggests a soft 404, content-unavailable state, suspicious no-op interaction, auth wall, rate limit, or anti-automation defense, also load [`references/anti-automation-friction.md`](./references/anti-automation-friction.md).
8. If the browser-required task includes iframe, Shadow DOM, collapsed content, or lazy-loaded evidence, also load [`references/deep-dom.md`](./references/deep-dom.md).
9. If the important evidence lives in an image, audio clip, or video, also load [`references/media-inspection.md`](./references/media-inspection.md).
10. If browser work can be divided across independent page owners or sub-agents, also load [`references/parallel-browser-ownership.md`](./references/parallel-browser-ownership.md).
11. If you already know a reliable selector but need an MCP-native `uid` target, also load [`references/selector-bridge.md`](./references/selector-bridge.md).
12. If page actions leave state ambiguous, a page unexpectedly navigates, an old `uid` may have gone stale, or console / network inspection is now needed to explain the next browser decision, also load [`references/browser-recovery.md`](./references/browser-recovery.md).
13. If the target site already has a matching domain note under [`references/site-patterns/`](./references/site-patterns/), read that note before operating on the site.

Treat the following as `browser-required` by default:

- `localhost`, `127.0.0.1`, or benchmark-style local fixtures
- uploads, downloads, drag-and-drop, hover, keyboard-native entry, or visible confirmation states
- same-origin iframe inspection, Shadow DOM inspection, `details` / collapsed evidence, or lazy-loaded content
- any task where "what the page visibly shows" is itself the evidence

The normal happy path for a common task is this entrypoint plus one or two references, not the entire reference set.

## Hard rules

- Use browser interaction only when live browser state is part of the evidence or required action.
- Once a task is `browser-required`, do not silently downgrade.
- Treat this file as the entrypoint and each reference file as a single-purpose authority. Do not duplicate rules across files.
- Keep reference loading one level deep. Decide the next file from this entrypoint instead of turning one reference into a hub that links to more references.
- Do not ask the user to log in just because a page looks restricted. First confirm whether the target content or action is actually blocked.
- Prefer site-generated DOM links over hand-built URLs once the page has shown you the path it expects.
- Prefer MCP-native actions over script-driven interaction when the task is genuinely an in-browser action.
- Only close pages you created.
- Prefer primary sources over aggregators or repeated secondary reporting.
- If a matching site pattern note exists, read it before the first meaningful browser mutation on that domain.
- Do not finish a `browser-required` task without explicitly checking whether the run should create, update, downgrade, or remove a site-pattern claim.
- If an existing site-pattern claim fails under comparable conditions, stop trusting it, fall back to the generic workflow, and update the note instead of retrying the stale assumption.
- Do not use `curl`, `Invoke-WebRequest`, or shell HTTP fetches for `browser-required` tasks.
- Do not treat a generic page-opening tool as evidence that localhost deep interaction is available.
- Do not switch routes just because a browser capability probe failed. Record the missing capability and stop.
- When the user indicates an active browser debugging context, prefer handoff from that current context over fresh reproduction from scratch.

## Reference index

- [`references/task-routing.md`](./references/task-routing.md): static retrieval vs live browser routing
- [`references/browser-playbook.md`](./references/browser-playbook.md): core page-action protocol and base browser loop
- [`references/browser-capability-matrix.md`](./references/browser-capability-matrix.md): capability proof for uncertain host sessions
- [`references/debug-handoff.md`](./references/debug-handoff.md): active debugging-context handoff
- [`references/control-plane-workflows.md`](./references/control-plane-workflows.md): logged-in dashboard / CMS save-publish discipline
- [`references/anti-automation-friction.md`](./references/anti-automation-friction.md): soft 404 / auth / anti-automation classification
- [`references/deep-dom.md`](./references/deep-dom.md): iframe, Shadow DOM, collapsed, or lazy-loaded evidence
- [`references/media-inspection.md`](./references/media-inspection.md): image, audio, and video evidence
- [`references/parallel-browser-ownership.md`](./references/parallel-browser-ownership.md): multi-owner browser coordination
- [`references/selector-bridge.md`](./references/selector-bridge.md): selector-to-`uid` bridging
- [`references/browser-recovery.md`](./references/browser-recovery.md): stale `uid`, navigation drift, and console / network escalation
- [`references/site-patterns/README.md`](./references/site-patterns/README.md): site-pattern note maintenance rules
- [site-patterns/{domain}.md](./references/site-patterns/): existing domain-specific operating knowledge
