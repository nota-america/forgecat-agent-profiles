# Control-Plane Workflows

Load this reference only after the task is already `browser-required` and the target is a logged-in dashboard, admin surface, CMS, editor, or other control-plane workflow.

This file is for save, publish, update, upload, and settings-style work inside authenticated browser surfaces.

## Core posture

Control-plane work is not generic browsing. The page may look ordinary while every meaningful action changes real state.

Start by classifying the task as one of these:

- read-only inspection
- state-changing action

Read-only inspection can usually stop once the requested evidence is visible and stable.

State-changing work must not stop at "the click happened." It needs stronger confirmation.

## Write-safety rule

For state-changing actions, require:

- one visible confirmation signal
- plus one structural proof

Good visible confirmation signals include:

- toast or banner text
- a success badge or status chip
- a changed button state such as `Saved`, `Published`, or disabled busy state resolving to ready

Good structural proofs include:

- URL or route change that matches the intended result
- a stable state badge or saved timestamp after a fresh snapshot
- a newly visible row, card, or asset in the expected container
- one confirming network result when visible evidence is ambiguous

For destructive or externally visible actions such as publish, delete, send, or live settings changes, do not accept a single weak signal.

## Standard post-action sequence

After a save, publish, update, or upload action:

1. Refresh visible understanding with a fresh snapshot.
2. Check for one visible success signal.
3. Check for one structural proof that the state actually changed.
4. Inspect network or console only if the visible result is still ambiguous.

If the task is destructive or user-visible outside the current page, do not report success until both signals agree.

## Save and publish flows

For save or publish work:

- capture the relevant pre-action state first when the before/after difference matters
- trigger the action once
- wait for the smallest reliable confirmation signal
- re-snapshot before deciding the action succeeded

Do not stack repeated save or publish clicks just because the page looks busy.

If the page exposes both a draft state and a published state, name the state explicitly in notes and final output.

## Upload flows

Uploads inside control planes often mix hidden inputs, custom triggers, and delayed confirmation.

Use the existing upload protocol from the live-browser playbook as the base behavior.

Use the selector bridge when:

- the upload control is present in the DOM but not clearly actionable from the snapshot
- the file input exists but the visible trigger is custom
- MCP-native upload is the right action but the current snapshot does not surface a usable target

After upload, do not stop at "the file chooser accepted the file." Confirm that the control plane reflects the uploaded asset in the intended place.

Typical structural proofs after upload include:

- thumbnail or filename appears
- asset row appears in a table or picker
- status changes from pending to ready

## Ambiguous outcomes

If the UI says success but the structural proof is missing:

- distrust the success signal
- refresh understanding
- inspect the relevant request or console evidence only if needed

If the UI does not show success but the structural proof is already present:

- treat the action as provisionally successful
- report the mismatch instead of retrying blindly

Do not turn ambiguous state into brute-force retries.

## Read-only bias for high-risk surfaces

For social platforms, production dashboards, billing controls, or any surface where repeated mutations carry risk, default to the smallest read-only investigation that can still answer the question.

Escalate from read-only to state-changing actions only when the task explicitly requires it.

If the workflow is plausibly in a defensive or rate-limited state, return to the skill entrypoint and load the anti-automation reference from there.

## Boundary

This file defines confirmation discipline for authenticated control planes. It does not replace the ordinary browser protocol, upload mechanics, or selector bridge technique.

For the underlying page loop, uploads, and action targeting, return to the skill entrypoint and load the ordinary references instead of treating this file as a second hub.
