![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# MengTo Skills Codex

Codex-oriented agent skills for browser automation, support workflows, UI capture, media conversion, copywriting, profiling, deployment, and audit tasks.

## Tags

- codex
- agent-skills
- automation
- productivity

## Installation

```bash
npx forgecat install @forgecat/mengto_skills_codex
```

## Skills

- **audit-verify-explain-grade-5** — Audit work, verify claims with concrete evidence, and explain the result in simple grade-5 language. Use when the user asks to review, audit, check, verify, explain a change, explain a fix, summarize test results, validate whether something works, or translate technical findings into plain language for non-technical readers. `skill`
- **copywriting** — When the user wants to write, rewrite, or improve marketing copy for any page — including homepage, landing pages, pricing pages, feature pages, about pages, or product pages. Also use when the user says "write copy for," "improve this copy," "rewrite this page," "marketing copy," "headline help," "CTA copy," "value proposition," "tagline," "subheadline," "hero section copy," "above the fold," "this copy is weak," "make this more compelling," or "help me describe my product." Use this whenever someone is working on website text that needs to persuade or convert. For email copy, see email-sequence. For popup copy, see popup-cro. For editing existing copy, see copy-editing. `skill`
- **customer-email-draft-threads** — Draft-only Gmail customer support triage with per-draft Codex project threads. Use when the user asks to run the customer email automation, check unread/recent support emails, prepare Gmail draft replies, triage customer/person emails while skipping automated mail, or create agent/project threads for drafted email follow-up. `skill`
- **customer-support-verification** — Verify customer support work against the applicable runbook, draft-safety, evidence, mutation, and commit-scope requirements. Use after every Gmail/customer support triage, billing/cancellation/refund/account/access investigation, support handoff, or draft-review task before the final response; also use when the user asks to verify support work against a runbook, checklist, skill, or requirements. `skill`
- **daily-ui-inspiration-capture** — Create a recurring daily UI inspiration capture. Use when the user asks to run, refresh, package, or validate dated UI inspiration bundles, especially for `articles/YYYY-MM-DD-ui-inspiration-capture/` outputs, Framer/Dribbble landing-page inspiration, motion-study screenshots/videos, AI-builder prompts, duplicate checking, or converting a project runbook into repeatable workflow. `skill`
- **elevenlabs-tts** — Generate ElevenLabs text-to-speech audio from scripts or inline text using local voice profiles. Use when the user asks for ElevenLabs, text-to-speech, TTS, narration, voiceover, speech audio, or voice generation; load voice names, voice ids, emails, owners, and account-specific defaults only from local config outside the skill. `skill`
- **html-to-interaction-prompts** — Convert a supplied HTML page or generated HTML reference into a screenshot-backed article containing multiple reusable interaction prompts. Use when the user provides an HTML file, exported page, generated-page.html, or local/live reference and asks to extract animation/interactions, create prompts, capture screenshots for each prompt, add them to an article, or commit the resulting article/assets. `skill`
- **netlify-deploy** — Deploy web projects to Netlify using the Netlify CLI (`npx netlify`). Use when the user asks to deploy, host, publish, or link a site/repo on Netlify, including preview and production deploys. `skill`
- **optimize-web-animations** — Profile, audit, and optimize frontend page performance with emphasis on animation work, memory-leak risks, long-session slowdowns, CSS animations, canvas/WebGL requestAnimationFrame loops, marquees, skeletons, GSAP/Three/Matter effects, timers, listeners, and observers. Use when the user asks to make animations performant, pause offscreen animations, look for memory leaks, profile pages that slow the computer over time, fix janky scrolling, reduce CPU/GPU use, or repeat the "only play in view" optimization on React/Vite/Next/frontend pages using Codex Browser. `skill`
- **pdf** — Use when tasks involve reading, creating, or reviewing PDF files where rendering and layout matter; prefer visual checks by rendering pages (Poppler) and use Python tools such as `reportlab`, `pdfplumber`, and `pypdf` for generation and extraction. `skill`
- **performance-profiling** — Guide performance profiling for Apple platform apps with Instruments, Xcode diagnostics, and MetricKit. Use when investigating app hangs, stutters, high CPU, memory leaks, memory growth, OOM crashes, slow launch, battery drain, thermal issues, App Store performance readiness, or when adding os_signpost and measurement hooks. `skill`
- **playwright** — Use when the task requires automating a real browser from the terminal (navigation, form filling, snapshots, screenshots, data extraction, UI-flow debugging) via `playwright-cli` or the bundled wrapper script. `skill`
- **playwright-interactive** — Persistent browser and Electron interaction through `js_repl` for fast iterative UI debugging. `skill`
- **screenshot** — Use when the user explicitly asks for a desktop or system screenshot (full screen, specific app or window, or a pixel region), or when tool-specific capture capabilities are unavailable and an OS-level capture is needed. `skill`
- **stitched-full-page-capture** — Capture or repair reliable full-page screenshots for lazy-loaded, scroll-animated, Framer, WebGL/canvas, or reveal-heavy web pages. Use when full-page screenshots are blank, gray, white, sparse, show a tiny content strip, disagree with a working scroll video, or when article evidence/section crops must be derived from a trustworthy full-page image. `skill`
- **swiftui-debugging** — Diagnose and fix SwiftUI rendering performance issues, including unnecessary body re-evaluations, slow or janky views, scrolling/list/grid stutters, view identity bugs, lost state, excessive `Self._printChanges()` output, `@Observable` versus `ObservableObject` observation scope, `AnyView` performance concerns, and expensive work inside SwiftUI `body`. `skill`
- **video-to-superprompt** — Turn a reference video into a super detailed recreation or inspiration prompt. Use when the user provides, mentions, uploads, links, or points to a video and asks to analyze the design, UI, animations, transitions, scroll interactions, typography, colors, assets, WebGL/Three.js, storytelling, section-by-section behavior, or to create a prompt/article that recreates the page, app, interaction, or motion system. `skill`
- **x-bookmark-quote-posts** — Check a user's latest X/Twitter bookmarks and turn recent saved posts into source-backed quote-post drafts. Use when asked to review X bookmarks, create quote posts from bookmarks, refresh a bookmark quote queue, run a bookmark quote automation, or write first-person quote posts from X sources. `skill`

## Details

| Field | Value |
|---|---|
| Author | Meng To |
| Original repository | https://github.com/MengTo/Skills/tree/main/agent-skills/codex |
| Version | `pending-registry-publish` |
| Original commit | `25f872a94e3bbee85ecacba4041fa52c21cb0e44` |
| License | MIT |
| Source platform | codex |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- None
