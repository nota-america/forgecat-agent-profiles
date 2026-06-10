# Selector Bridge

`use-my-browser` keeps a lot of selector intuition, but the active live-browser stack acts on snapshot `uid`s. The selector bridge converts selector knowledge into MCP-native interaction without rebuilding a local executor.

Load this reference only when selector knowledge must be translated into snapshot-guided MCP actions such as `click` or `upload_file`.

## Why prefer MCP-native clicks

MCP-native clicks and uploads should win whenever possible because they act on the page as the live-browser stack understands it:

- they operate on the current accessibility tree rather than an assumed DOM reference
- they behave more like user interaction than `el.click()`
- they are better aligned with `upload_file`
- they keep page understanding and action in the same snapshot-driven protocol

Snapshot `uid`s come from the accessibility tree, so bridge strategies that produce stable accessible labels are more reliable than raw DOM-only markers.

## The six-step bridge

1. Use `evaluate_script` to locate the target element with the selector knowledge you already have.
2. Add a temporary unique bridge marker such as a task-specific `aria-label`, or a `data-*` marker paired with an accessible label you can later find in the snapshot.
3. Run `take_snapshot` to refresh the accessibility tree.
4. Find the matching `uid` in the snapshot.
5. Call `click(uid)` or `upload_file(uid)` with the MCP-native target.
6. Remove the temporary marker with `evaluate_script` once the action is complete.

## Marker strategy

Prefer a temporary `aria-label` when possible because the snapshot is accessibility-tree driven.

Use a `data-*` marker when:

- you need a DOM-only breadcrumb for cleanup
- the page already derives accessible text from nearby content
- you plan to use `evaluate_script` once more to confirm which node the snapshot entry refers to

Keep the marker:

- unique per task
- narrow in scope
- easy to remove

## Example bridge flow

1. Use `evaluate_script` to find `input[type="file"]` or a custom upload trigger.
2. Inject a temporary `aria-label` such as `umb-task-42-upload`.
3. Run `take_snapshot`.
4. Find the element whose accessible name is `umb-task-42-upload`.
5. Use `upload_file(uid)` or `click(uid)`.
6. Remove the temporary marker.

## When bridging is a good fit

Bridge selectors into snapshot `uid`s when:

- you already know a reliable CSS selector from site experience
- the page uses opaque class names but still exposes accessible controls after annotation
- you need `upload_file`, especially when the file input is present in the DOM but not clearly exposed in the snapshot
- you want a real MCP-native click instead of a script-level click

File upload is a first-class bridge case. In practice, upload controls are a priority bridge case. If the snapshot does not expose an actionable file input or upload trigger, prefer building the bridge immediately instead of retrying random clicks or falling back to DOM-only upload logic.

## When to skip the bridge and stay in `evaluate_script`

Stay in `evaluate_script` when the goal is understanding or extraction rather than user-like interaction, for example:

- reading hidden data structures
- walking Shadow DOM or iframe trees
- extracting generated links or media URLs
- inspecting canvas-adjacent state
- cleaning up temporary bridge markers
- handling pages where the accessibility tree does not expose a useful action target even after annotation

Do not build a bridge just to read text or metadata. Bridge for actions such as click or upload, not for extraction.

Do not use the selector bridge when the problem is fundamentally a DOM-read or DOM-write that `evaluate_script` can solve directly.

Do not treat `type_text` as a bridge substitute. The bridge solves target acquisition for MCP-native actions; `type_text` solves input-mode choice after the correct target is already focused.

## Failure recovery

If the bridge fails:

- re-run `select_page(pageId, bringToFront=false)`
- take a new snapshot
- confirm that the temporary marker still exists
- prefer a fresh `aria-label` marker if the old one was lost in a rerender
- if the page rerendered, rebuild the bridge from the selector instead of trusting the old marker
- remove stale bridge markers before creating a fresh one when possible
- fall back to pure `evaluate_script` only when MCP-native interaction is not viable for that page

Terminate the bridge attempt and stay in `evaluate_script` when:

- repeated fresh snapshots still do not expose a usable `uid`
- the annotated control is present in the DOM but never becomes actionable in the accessibility tree
- the task is really extraction, not interaction
- the page keeps rerendering away the marker faster than a stable bridge can be established

Say the decision out loud in run notes when it matters: rebuild the bridge if the page rerendered, and terminate the bridge attempt if fresh snapshots still never surface a usable `uid`.

Network and console inspection are also outside the bridge itself. Use them after the interaction when page behavior is ambiguous, not as part of the bridge construction flow.
