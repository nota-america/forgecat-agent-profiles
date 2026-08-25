# DESIGN.md → DESIGN.slides.md Conversion

Web-flavored `DESIGN.md` files (Google Stitch / voltagent/awesome-design-md
convention) describe **marketing websites**: top-nav, hero-band, CTA buttons,
pricing cards, footer-band, multi-section scrolling pages.

A slide is a **720pt × 405pt single frame, no scroll, no clicks, no nav**.
Pasting a web design system into slides produces deck pages that look like
landing pages — wrong slot.

This document is the canonical reference the agent uses to translate a
DESIGN.md into a sibling `DESIGN.slides.md` that fits the slide medium.

## Output contract

The agent MUST produce a file named `DESIGN.slides.md` next to the source
`DESIGN.md` at the deck root. The original `DESIGN.md` MUST be left untouched.

`DESIGN.slides.md` MUST contain the following sections, in this order:

```markdown
---
version: alpha
name: <inherited from DESIGN.md `name`>
description: <one-sentence slide-flavored mood — not a marketing paragraph>
derived-from: <relative path to source DESIGN.md, e.g. ./DESIGN.md>
medium: slides-16x9
colors:
  <token-name>: <#hex>
---

## Overview
One short paragraph describing the slide deck's atmosphere — material, energy,
typographic voice. No mention of pages, scroll, nav, CTA, pricing, or routes.

## Background
Solid fills only. List 1-3 canvas modes that alternate across slides.

## Colors
Markdown table of the slide-active palette. Drop any role that exists only
for hover/focus/disabled states (those don't apply to static slides).

## Typography
Two faces: a display face for headlines and a body face for everything else.
Optionally a mono face for eyebrows / IDs / code motifs. Include working
font-stack fallbacks (Google Fonts that render in Playwright capture).

## Slide Layouts
Enumerate the slide archetypes this design system supports. ALWAYS include
at least these five:
- **Cover** — single dominant headline, no nav, no CTA buttons
- **Section divider** — short anchor headline, optional eyebrow
- **Content** — copy + single supporting visual (60/40 or 50/50 split)
- **Statistic** — one oversized number, one short caption
- **Closing** — final thesis line, footer/page-number strip

For each layout, describe the dominant rhythm in 1-3 bullets — what scale
carries the slide, what's allowed in the corners, what's NOT allowed.

## Signature Motifs
Two-to-five small visual elements that make the deck recognizably this brand.
Examples: a colored underline, a strike-through wordmark, a dot cluster,
a serif italic accent on one word per slide. Each motif MUST be reproducible
purely with inline HTML + CSS on a single slide.

## Avoid
Explicit list of web-only patterns the slides MUST NOT carry. ALWAYS include:
- top-nav bars, sticky headers, menu rows
- clickable CTA buttons ("Sign up", "Start free trial", "Read docs")
- multi-column footer-bands beyond a single thin strip with attribution + page number
- pricing tier grids
- hover/focus/active state styling
- atmospheric multi-stop gradients (unless the source spec mandates them)
Plus any AVOID rules carried over from the source DESIGN.md.

## Source mapping (for traceability)
A short bullet list showing how each web concept was mapped. Format:
- `<web concept from DESIGN.md>` → `<slide concept in DESIGN.slides.md>` OR `dropped`
```

## Web → slide mapping rules

Apply these mappings while converting. The left column is what DESIGN.md
contains; the right column is the slide-appropriate replacement.

| DESIGN.md (web) | DESIGN.slides.md (slide) |
|---|---|
| `top-nav` / sticky header | A 12pt-tall mono **eyebrow strip** at the top of each slide with section number + brand wordmark — never a horizontal menu of items |
| `hero-band` (h1 + sub + dual CTA + illustration card) | **Cover layout** — single oversized headline, single sub, footer strip with page number. CTA buttons → discarded (no clicks possible). Illustration card → optional single visual anchor |
| `feature-card grid (3-up / 4-up)` | **Content layout** with 3-up grid OK, but cards must be cardless-leaning (whitespace-driven) — drop the marketing icon + blurb pattern, prefer pull quotes or per-track/per-member rows |
| `pricing tier grid` | **Discard entirely** — pricing has no slide analogue |
| `connector tile grid` | **Discard or convert to small badge row** — never a 4×4 grid of generic logos |
| `CTA banner` (full-bleed coral / brand) | **Section divider** or **closing** layout — keep the full-bleed color, replace CTA buttons with a thesis sentence and a page number |
| `product-mockup-card-dark` (code editor screenshot card) | **Content motif** — fine to keep as a single dark surface inside a content slide, but it can NOT dominate every slide |
| `footer-band` (4-column legal/sitemap) | **Single thin footer strip** — at most 1 line: brand wordmark left, page number right |
| `button-primary` / `button-secondary` | **Kicker text only** — write the verb as plain text ("Read the next issue") without box/border/click affordance |
| Hover / focus / pressed / disabled states | **Drop all of them** — slides are static |
| Multi-stop atmospheric gradients | **Drop unless source spec calls for one or two** — convert to a single accent shape |
| Spike-mark / asterisk-style brand glyph | **Keep as a small motif** — inline SVG at the slide eyebrow or footer |

## Preservation rules (do NOT translate away)

The conversion MUST carry over from DESIGN.md unchanged:

- The **color palette** (canvas, surface, ink, primary accent, secondary accents)
- The **type pairing** — display face vs body face vs mono face
- The **mood / atmosphere** — warm-editorial vs dark-product vs pastel-pop is the
  whole reason the user imported this DESIGN.md; the slide deck must still feel
  like the source brand
- **Brand-specific signature motifs** (spike-mark, hard offset shadow, slab-serif italic
  accent, etc.) — translate the surface, not the identity

## Process checklist for the agent

1. Read `./DESIGN.md` in full.
2. Identify which sections are web-only and slot them through the mapping table.
3. Identify the design tokens (colors, type, spacing) that survive unchanged.
4. Draft `./DESIGN.slides.md` using the Output Contract template.
5. Show the user a short summary: 5–10 lines covering kept tokens + dropped
   web sections + new slide layouts inferred.
6. Wait for explicit user approval ("looks good" or specific edits) before
   moving to outline / slide generation.
7. Once approved, record `style: ./DESIGN.slides.md` in `slide-outline.md`.

## When DESIGN.slides.md should be re-converted

Suggest a re-conversion when:
- The source `DESIGN.md` is replaced / re-imported with a different brand
- The user explicitly asks for a different deck flavor (e.g. "more editorial",
  "less code-heavy")
- A slide deck visibly carries web-only artifacts (nav bars, CTAs, footers
  with link columns) that the current DESIGN.slides.md doesn't forbid

A `DESIGN.slides.md` is never regenerated automatically. It is the agent's
job, in conversation with the user.
