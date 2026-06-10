# Media Inspection

Load this reference only after the task is already `browser-required` and the important evidence is in an image, audio clip, or video rather than ordinary page text.

The goal is to inspect the media with the lightest reliable method, not to default to broad screenshots.

## Extraction ladder

Start with the page-level media state and only escalate when that state is incomplete.

Preferred ladder:

1. Inspect the page-level media element and surrounding metadata.
2. Inspect discovered `<source>` URLs or media resource references.
3. Move to the media resource itself only when that gives a better answer than the page can.

That order keeps you aligned with the user-visible context while still giving you a path to more direct evidence when the page exposes it.

## Image, audio, and video handling

For images:

- confirm the visible container first
- inspect `src`, `srcset`, poster-like metadata, or linked media URLs when they matter
- use a screenshot only when rendered presentation is the evidence

For audio:

- inspect the player element, source URL, current playback state, and nearby labels or captions
- prefer direct source extraction when the page exposes it and the source itself answers the task better

For video:

- inspect `currentSrc`, `duration`, `currentTime`, `paused`, and source URLs with `evaluate_script`
- prefer controlled seeking through DOM state instead of manual scrubbing through unstable controls
- take targeted screenshots after deliberate seeks when the important evidence is a specific frame

Keep these facts in mind while inspecting media-heavy pages:

- content can already exist in the DOM while still being off-screen or visually hidden
- Shadow DOM and iframe boundaries can hide the real media host
- lazy-loaded media may not exist until the relevant region has been revealed or scrolled
- a page saying "not found" or "not available" can reflect the wrong route shape, missing parameters, or anti-automation behavior rather than true absence
- opening too many pages too quickly can look more automated than a smaller, deliberate page set

## Video seek and frame capture

For video-heavy tasks, treat the `<video>` element as the primary evidence source before escalating to full-page screenshots.

Use this sequence:

1. Confirm the player location and whether surrounding controls matter.
2. Inspect the video element's DOM state.
3. Seek deliberately with DOM-controlled state changes.
4. Capture a targeted screenshot only after the player is at the intended frame.

This avoids blind scrubbing and produces cleaner evidence than full-page capture at arbitrary playback states.

## When not to screenshot

Do not default to screenshots when:

- the page already exposes the media URL directly
- the answer is in metadata or DOM state rather than the rendered frame
- a direct media source read would be more precise than page capture

Use screenshots when:

- the rendered frame itself is the evidence
- overlap, crop, playback controls, or layout context matter
- the task is about what the user actually sees at a specific moment

Choose the narrowest screenshot that proves the point. Element-level or tightly framed screenshots are usually better than full-page capture for media work.

## When media inspection turns ambiguous

If media inspection stops being straightforward, do not build a second recovery workflow here.

- switch to the recovery reference when the problem is stale state, ambiguous interaction results, or console / network escalation
- switch to the deep-DOM reference when the real blocker is nested frames, Shadow DOM, collapsed structure, or delayed loading

When you change evidence sources, say so explicitly in your notes. A reader should be able to tell whether the conclusion came from the page-level player state or from the underlying media resource.
