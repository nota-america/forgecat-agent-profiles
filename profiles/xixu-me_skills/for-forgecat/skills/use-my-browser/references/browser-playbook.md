# Browser Playbook

This playbook is the core page-action and base-protocol reference for live browser work. Load it after the skill entrypoint has already classified the task as `browser-required`.

## Live-browser capability gate

The capability gate is defined at the skill entrypoint and made executable in the dedicated capability matrix.

Use that matrix when capability still needs to be proven in the current session. This playbook assumes the task is already on the live-browser path and either:

- the capability gate has already been satisfied
- or the run has already been marked `blocked`

Operational consequences that still matter here:

- do not begin browser mutation until the required capability is actually available
- if capability is missing, stop the run as `blocked` instead of silently downgrading
- for `localhost` and `127.0.0.1`, only continue on a task-owned browser page rather than a generic static opener

## Default loop

Use this as the normal operating loop for live browser work:

1. Call `list_pages` and update your page ledger.
2. Create a task-owned page with `new_page` only when you need one.
3. Call `select_page(pageId, bringToFront=false)` before page work.
4. Call `take_snapshot` to understand the current page state.
5. Prefer MCP-native actions first.
6. Refresh page understanding after any action that could change the UI.
7. Use `evaluate_script` only when snapshot understanding is insufficient or the task is truly DOM-direct.

The loop is meant to stay lightweight. Do not over-operate once the evidence you need has been obtained.

Maintain a lightweight page ledger for ordinary browser runs. At minimum, track:

- the current `pageId`
- the best identifying URL or title
- whether the page was created by you
- whether it should be closed at task exit

If multi-owner coordination or `isolatedContext` boundaries become important, expand that ledger with the ownership reference instead of overloading this base protocol.

## Page lifecycle

### `list_pages`

Use `list_pages` at the start of browser work and whenever page inventory may have changed. Its job is to support the page ledger, not to become a constant polling habit.

### `new_page`

Use `new_page` for fresh task-owned investigation, for task-specific `isolatedContext`, or when you need to inspect a discovered link without disturbing the current flow.

Do not open a new page for every step. Reuse the current task-owned page when preserving in-page state matters.

### `select_page`

Treat `select_page(pageId, bringToFront=false)` as required protocol before every page-level action. Selection is not a convenience; it is how you keep the action tied to the right page.

### `take_snapshot`

Use `take_snapshot` as the default way to understand the page.

Take a fresh snapshot when:

- a page just opened
- a page just navigated
- a click or form submission may have changed the UI
- you need fresh `uid`s
- a previously targeted `uid` may have gone stale

Use `take_snapshot(verbose=true)` only when a structural question remains unanswered and the extra a11y-tree detail would change the next action.

### `navigate_page`

Use `navigate_page` for reload, back or forward history, or direct navigation to a known safe URL. Add `ignoreCache=true` only when stale cached assets or responses are the likely reason the view is wrong.

Use `handleBeforeUnload` only when navigation itself may trigger a native leave-page dialog. Use `initScript` only when the next navigation truly needs early-document instrumentation.

When positive evidence shows the target does not exist, stop there. A stop-loss task is complete once the absence has been demonstrated; do not switch routes just to "check one more time."

## When to use each key MCP tool

### `evaluate_script`

Use `evaluate_script` when you need DOM-level depth that the snapshot does not provide, including:

- extracting hidden or structured data
- inspecting dynamically generated URLs
- annotating the DOM for selector bridging
- cleaning up temporary bridge markers

`evaluate_script` should deepen page understanding, not replace MCP-native interaction by default.

Before broad DOM traversal, scope the query to the smallest trustworthy host or business container you can identify. Page-wide scraping is a fallback, not a default.

If the task is really about iframe traversal, Shadow DOM structure, lazy-loaded evidence, media state, or selector bridge mechanics, switch to the specialized reference.

### `wait_for`

Use `wait_for` after actions that should cause visible page changes but need time to settle, such as:

- search result loads
- modal openings
- validation messages
- upload completion states
- SPA route changes

Prefer waiting for meaningful text over fixed sleeps.

Prefer text that appears only after the action succeeds. If text is weak, confirm the state change through structured signals from `evaluate_script` such as `location.href`, element counts, `scrollHeight`, upload state, or media timestamps.

### Interaction-mode tools

- use `hover` for reveal-on-hover UI such as menus, tooltips, avatar cards, or hover action bars
- use `drag` for real drag-and-drop or reorder interactions when both source and target are identifiable
- use `press_key` when the semantic action is really a key press, such as focus movement, shortcuts, escape-to-close, or keyboard-driven scrolling
- use `type_text` after focus is already correct and the page needs keyboard-native entry, such as rich editors, masked fields, token inputs, or typeahead widgets

If all you need is to set a stable value in a standard field, `fill` or `fill_form` is usually cheaper and clearer than `type_text`.

### `emulate` and `resize_page`

Use `resize_page` when viewport size alone is the question.

Use `emulate` when the environment itself is part of the evidence, such as:

- mobile or touch behavior
- light or dark mode
- throttled network or CPU
- user-agent-sensitive rendering

Do not switch environment "just to be thorough." Change it only when the task depends on that state.

## Form, upload, dialog, and screenshot rules

### Forms

Start with `take_snapshot` to identify the right inputs.

Use `fill` or `fill_form` when direct value assignment is clean. Use `type_text` when the field reacts to each key or the page enables the next action only after typing events. Use `press_key` alongside either path when the next semantic action is really keyboard-based.

Refresh the snapshot after form interactions when validation, formatting, or conditional UI may have changed the page.

Do not force `fill_form` onto highly custom controls. If a page mixes ordinary fields with custom selects, uploads, or tokenized inputs, combine batched filling with targeted native actions instead of trying to make one call do everything.

Use `evaluate_script` only when the form is highly custom and MCP-native fill cannot target it reliably.

### Uploads

Use `take_snapshot` to find the file input or upload trigger.

Prefer `upload_file(uid)` over script-driven file manipulation.

If the upload target is not clearly actionable from the snapshot, switch to the selector bridge reference instead of improvising ad hoc upload targeting here.

After upload, take a fresh snapshot and wait for a meaningful confirmation state when the page does not already make success obvious.

### Dialogs

Use `handle_dialog` for native `alert`, `confirm`, or `prompt` dialogs.

Preferred sequence:

1. Perform the action expected to trigger the dialog.
2. Call `handle_dialog` immediately once it appears.
3. Provide `promptText` only when the flow really needs it.
4. Refresh page understanding after the dialog resolves.

Do not try to fight a native dialog with DOM scripting or random clicks.

### Screenshots

Use `take_screenshot` when the visual rendering matters more than the accessibility tree, such as charts, canvas, video frames, popup blocking, visual bugs, or layout confirmation.

Choose the narrowest screenshot that proves the point: element when one control is the evidence, page when layout context matters, and `fullPage=true` only when document-wide vertical context matters.

Do not use screenshots as the default understanding tool when a snapshot would answer the same question more directly.

## Post-run experience review

Before cleanup, return to the skill entrypoint's experience loop and site-pattern hard rules to decide whether the run should create, update, downgrade, or leave unchanged any domain note.

The playbook-specific consequence is timing: do that review before closing task-owned pages or discarding the current run context, while the evidence is still easy to inspect.

If the run has entered stale-`uid`, unexpected-navigation, contaminated-extraction, or console / network ambiguity territory, switch to the recovery reference before deciding the run is complete.

## Cleanup

Only close pages you created.

- close pages where `createdByMe=true` and `closeOnExit=true`
- leave user-owned pages alone
- if the browser host cannot close the last open page, do not force page closure

Refresh the page ledger after every new page, direct navigation, or page disappearance that could change ownership interpretation.

If a page drifts in inventory, is renumbered, or loses explicit ownership evidence:

- record the ambiguity
- stop cleanup for that page
- do not guess which page to close

Cleanup that remains incomplete because of ownership ambiguity is a concern to report, not a protocol violation.

## Host and upstream boundaries

Some browser-task rough edges belong in the skill, and some belong upstream in the host integration.

Skill-level workaround territory:

- choose better wait signals when text anchors are weak
- scope DOM traversal before scraping
- use selector bridge earlier for file uploads
- switch evidence sources explicitly for media tasks

Host or MCP integration territory:

- richer support for non-text wait primitives when no visible text exists
- more consistent exposure of hidden but actionable upload controls in snapshots
- better guardrails against extension-injected DOM noise

When the workaround is reusable and site-specific, record it in the matching site pattern when you can, but do not pretend the host limitation itself has been fixed by documentation alone.
