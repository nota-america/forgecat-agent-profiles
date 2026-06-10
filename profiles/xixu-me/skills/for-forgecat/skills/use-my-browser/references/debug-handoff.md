# Debug Handoff

Load this reference only after the task is already `browser-required` and the user indicates that a manual browser debugging context is already open.

This file is for handoff from an active debugging session, not for generic browser triage from scratch.

## Scope

Use this reference when the user says or clearly implies any of the following:

- they already selected an element in an inspector panel such as Elements
- they already selected a request in a network panel
- they already have the broken page open and want the agent to continue from there
- they want investigation to start from the current live session rather than from a fresh repro

If the user has not indicated an active debugging context, stay with the normal browser workflow.

## Core rule

Prefer handoff from the current debugging context over replaying the entire issue.

The default order is:

1. Reuse the current browser session and page if possible.
2. Reuse the current debugging context if the host exposes it.
3. Re-anchor from the current page state if the debugging context is only partially exposed.
4. Reproduce from scratch only when the current context is missing, stale, or insufficient.

Do not jump straight to replaying the flow just because reproduction seems familiar.

## Selected element flow

When the user says they already selected an element in an inspector panel:

1. Stay on the current page or the closest current page match instead of opening a fresh repro page.
2. Read current visible state first with the normal snapshot path.
3. If the host exposes the current element selection directly, use that selection as the starting anchor.
4. If the host does not expose the selection directly, re-anchor from the current page state, not from a brand-new reproduction flow.
5. Only recreate the issue if the current DOM no longer contains a trustworthy anchor for the selected area.

The selected element is a starting clue, not a guarantee that the exact node is still valid. Favor the smallest re-anchoring step that preserves the user's current context.

## Selected request flow

When the user says they already selected a request in a network panel:

1. Prefer the currently selected request if the host exposes it.
2. If the host does not expose the current selection directly, inspect the current page session before replaying the action.
3. Use request metadata already visible in the current session to narrow the target request.
4. Re-trigger the action only if the current request cannot be identified or no longer exists.

If one concrete request already explains the failure, stop there. Do not recreate the request just to prove the same point twice.

## When to reproduce anyway

Reproduce from scratch only when one of these is true:

- the current page or tab can no longer be identified reliably
- the selected element or request is stale and cannot be re-anchored from current state
- the host does not expose enough of the current debugging context to continue safely
- the bug requires a fresh transition or timing sequence that the current page state no longer preserves

When you do reproduce, keep it minimal. Recreate only the smallest sequence needed to regain the missing evidence.

## Stop conditions

Stop treating this as a handoff and report the limitation when:

- there is no current page match for the user's described debugging context
- the user says a selection exists but the host exposes no selection signal and the current page provides no trustworthy anchor
- the selected request or selected element appears stale relative to the current page state
- the browser session has drifted too far from the original debugging context to support reliable continuation

In those cases, say that the active debugging context could not be reused and that a minimal fresh repro is now required.

## Boundary

This file changes where investigation starts. It does not replace the ordinary live-browser protocol.

For page actions, snapshots, uploads, or recovery, return to the skill entrypoint and load the ordinary browser protocol from there instead of turning this file into a second workflow hub.
