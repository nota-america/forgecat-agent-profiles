# Browser Recovery

Load this reference only after the task is already `browser-required` and the run has entered ambiguity, failed interaction recovery, or console / network escalation.

This file is for recovering from stale assumptions inside the current browser run. It does not replace the base page-action protocol.

## Scope

Use this reference when any of the following is true:

- a click, fill, or upload did not produce the expected visible state
- an old `uid` may have gone stale after rerender or navigation
- the page navigated unexpectedly
- DOM extraction now looks contaminated or over-broad
- a selector bridge stopped working
- the page has a native interaction path, but the current action mode looks wrong
- console or network inspection is now needed to explain the next browser decision

## Core recovery rule

Recover from the current page state before branching into deeper tactics.

Use this order:

1. Re-select the intended page.
2. Refresh page understanding with a fresh snapshot.
3. Decide whether the old `uid`, page assumption, or extracted evidence is now stale.
4. Try one deliberate escalation that matches the strongest hypothesis.
5. Stop once the next browser decision is clear.

Do not stack retries, fresh tabs, console dives, and DOM rewrites all at once.

## Rerender and stale uid

If a click, fill, or upload fails:

- re-run `select_page(pageId, bringToFront=false)`
- take a fresh snapshot
- check whether the old `uid` disappeared after rerender or navigation
- reacquire a fresh target before trying the action again

Do not trust a pre-action `uid` after:

- route change
- modal open or close
- form validation that rewrites the region
- upload progress that swaps the control tree

If the page structure is still unclear after a fresh snapshot, use the smallest DOM read that can re-anchor the next action.

## Unexpected navigation

If the page navigates unexpectedly:

- update the page ledger if needed
- confirm that you still own the current page
- take a fresh snapshot before doing anything else
- decide whether the new page is the intended continuation or a drift state

If the new page positively demonstrates the target does not exist, stop there instead of forcing more navigation.

## Extraction contamination

If DOM extraction looks contaminated:

- stop trusting the broad result
- check for stylesheet blobs, extension noise, or unrelated widget text
- narrow the query to the real target container or host
- prefer host-level rendered text when the task is about what the user actually sees

Typical contamination cues:

- a huge stylesheet blob in extracted text
- extension-injected ids or element names
- unrelated widget text that does not match the current page goal

## Bridge recovery

If a selector bridge stops working:

- rebuild the bridge from the beginning
- prefer a fresh temporary `aria-label`
- remove stale markers before retrying when possible
- fall back to pure `evaluate_script` only when MCP-native interaction is genuinely unavailable

Do not keep retrying an old bridge target after the page has rerendered.

## Interaction-mode fallback

If the page is still awkward even though a native interaction path exists, switch modes deliberately:

- use `hover` for reveal-on-hover UI
- use `press_key` for keyboard-driven widgets or lazy-load scrolling
- use `drag` for real drag-and-drop widgets
- use `navigate_page` when the real action is back, forward, reload, or direct navigation

Change only one interaction mode at a time. The goal is to explain which mode matches the UI, not to brute-force every tool.

## Console and network escalation

Escalate into console or network inspection only after a user action still leaves the page state ambiguous.

Check the console first when:

- the page looks frozen
- validation never appears
- a widget disappears
- a script error is the likely cause

Check the network first when:

- a submit, save, search, or load should have produced a request
- the visible page state suggests a backend or routing failure

Use a light escalation pattern:

1. perform the user action
2. refresh page understanding if needed
3. inspect the console list or network list based on the stronger hypothesis
4. inspect one concrete message or request only if the list still leaves the cause unclear

Go deeper only when the extra detail could change the next browser decision.

Stay lightweight when:

- the page already recovered after a fresh snapshot
- one request status or one console error is enough to explain the behavior
- deeper debugging would not change the next action

## Stop conditions

Stop the recovery loop and report the limitation when:

- repeated fresh snapshots still do not produce a usable target
- page ownership or page identity is now ambiguous
- the current page no longer preserves the evidence needed for a safe retry
- deeper console or network inspection would not change the next browser decision

If the stronger explanation is now auth, soft 404, or anti-automation friction, return to the skill entrypoint and load the more specific reference from there instead of stretching this file into a general classifier.

## Boundary

This file is for recovery inside an already-classified browser run.

It does not own:

- route selection
- site-pattern discipline
- control-plane confirmation discipline
- capability proof

Once the recovery state is understood, return to the skill entrypoint for any additional specialized reference instead of turning this file into a second routing hub.
