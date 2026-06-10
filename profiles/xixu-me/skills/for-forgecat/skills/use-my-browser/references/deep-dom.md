# Deep DOM

Load this reference only after the task has already been classified as `browser-required`. This file is the authority for iframe, Shadow DOM, collapsed content, and lazy-loaded evidence.

## Scope

Use this reference when the evidence depends on any of these structures:

- same-origin iframe
- Shadow DOM
- collapsed or `details`-hidden content
- lazy-loaded content that appears only after a state change

## Fixed operating order

1. Create or reuse one task-owned page.
2. Take a fresh snapshot and confirm the main container for the target page.
3. Locate the iframe host, shadow host, collapsed container, and lazy zone before extracting anything.
4. Extract each token together with the evidence location that produced it.
5. For lazy-loaded content, use the minimum trigger needed and record the retry count.
6. Once all evidence is collected, stop and clean up only clearly task-owned pages.

## same-origin iframe

Start by confirming whether the iframe is same-origin enough to inspect from the current page.

- Prefer visible rendered evidence first when the iframe already exposes the needed text.
- If visible evidence is insufficient, read from `contentDocument` or equivalent same-origin DOM access.
- Record both the iframe host and the inner evidence location so the later scorer can verify where the token came from.

If the iframe is cross-origin and the task still needs its internals, stop and report that boundary rather than inventing a DOM path.

## Shadow DOM

Shadow DOM is not a reason to skip the visible layer.

- First confirm what the user-visible host already proves.
- Enter `shadowRoot` only when the visible state is ambiguous or the token exists only in component internals.
- Keep the evidence path specific, such as host selector plus `shadowRoot` plus the terminal node or attribute.

## Collapsed content

Collapsed content should not be expanded by default.

- First try structural or DOM-level reading from the collapsed container itself.
- Only expand the section if the structure read is insufficient to prove the token.
- If expansion is necessary, do it once, capture the token, and stop.

This keeps the action count low and avoids treating every collapsed section as an interaction problem.

## Lazy-loaded content

Lazy-loaded evidence must follow a minimum-trigger strategy.

- Capture the initial state first.
- Use one deliberate trigger only: usually one targeted scroll or one specific state change.
- Re-read the lazy zone immediately after the trigger.
- Record the minimum retries needed as an integer. If the first trigger worked, the retry count is `1` trigger and `0` extra retries.

Do not keep scrolling just because the page moved. Once the token appears, stop.

## Evidence discipline

For each token, record:

- token kind
- token value
- where it was obtained from
- which evidence files prove it

This reference is about extraction discipline, not about generic cleanup, routing, or login judgment. Those remain in the entrypoint and the live-browser playbook.
