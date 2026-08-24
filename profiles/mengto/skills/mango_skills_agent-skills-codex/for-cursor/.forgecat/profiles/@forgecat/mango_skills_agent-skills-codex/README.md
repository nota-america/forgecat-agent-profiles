*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# MengTo Skills Codex

Codex-oriented agent skills for auditing, browser capture, inspiration workflows, media conversion, profiling, publishing, and skill authoring.

## Tags

- codex
- automation
- productivity
- agent-skills

## Installation

```bash
npx forgecat install @forgecat/mango_skills_agent-skills-codex
```

## Skills

- **article-prompts-to-skills** — Convert an article, tutorial, or prompt pack into focused reusable AgentSkills, one independent capability per skill, with portable instructions, example prompts, working demos, preview screenshots, validation, gallery updates, and a narrow commit. Use when the user asks to turn an article's prompts, tutorial sections, design patterns, interactions, or workflow ideas into complete skills rather than leaving them as prose.
- **audit-reference-originality** — Audit a website or digital experience against its supplied source references for originality and plagiarism risk. Use when Codex must compare current or historical site output with reference pages, capture packs, screenshots, copy, brands, numbers, images, assets, videos, layouts, motion, or code; raise evidence-backed red flags; distinguish common visual grammar from distinctive copying; and propose concrete fixes without making unsupported legal claims.
- **audit-verify-explain-grade-5** — Audit work, verify claims with concrete evidence, and explain the result in simple grade-5 language. Use when the user asks to review, audit, check, verify, explain a change, explain a fix, summarize test results, validate whether something works, or translate technical findings into plain language for non-technical readers.
- **browser-video-recording** — Create polished 60 fps 4:3 4K browser screen-recording style videos from Codex in-app browser captures, with browser-only crop, natural macOS cursor styling, deliberate click choreography, zoom-follow framing, ffprobe/thumbnail verification, and optional native recording compatibility checks. Use when the user asks to record or re-record browser actions, show cursor clicks and zooms, make Dribbble/UI inspiration or product demo recordings, or asks whether Codex, Playwright, or an MCP can produce a natural browser demo video.
- **build-daily-inspiration-sites** — Turn a completed daily UI inspiration capture into exactly five original landing-page builds, one per separate Codex task, using Sites. Use when the user asks to turn the daily inspiration references, a five-item UI prompt pack, or a dated `*-ui-inspiration-capture` article into distinct HTML landing pages while changing the source brands, names, copy, people, numbers, pricing, claims, and imagery.
- **daily-ui-inspiration-capture** — Create a recurring daily UI inspiration capture. Use when the user asks to run, refresh, package, or validate dated UI inspiration bundles, especially for `articles/YYYY-MM-DD-ui-inspiration-capture/` outputs, Framer/Dribbble landing-page inspiration, motion-study screenshots/videos, AI-builder prompts, duplicate checking, or converting a project runbook into repeatable workflow.
- **elevenlabs-tts** — Generate ElevenLabs text-to-speech audio from scripts or inline text using local voice profiles. Use when the user asks for ElevenLabs, text-to-speech, TTS, narration, voiceover, speech audio, or voice generation; load voice names, voice ids, emails, owners, and account-specific defaults only from local config outside the skill.
- **generate-reference-inspired-brand-worlds** — Generate multiple original brand campaign worlds from a supplied visual reference while controlling how close the new work feels without copying protected signature elements. Use when a user provides a brand identity image, poster, editorial campaign, moodboard, or generated concept and asks for inspired alternatives, several distinct brands in one visual family, a closer-to-reference V2, exact wordmarks inside images, or originality-safe image-generation prompts and outputs.
- **html-to-interaction-prompts** — Convert a supplied HTML page or generated HTML reference into a screenshot-backed article containing multiple reusable interaction prompts. Use when the user provides an HTML file, exported page, generated-page.html, or local/live reference and asks to extract animation/interactions, create prompts, capture screenshots for each prompt, add them to an article, or commit the resulting article/assets.
- **implement-fog-of-war** — Implement, tune, debug, or validate soft wall-aware fog of war and gameplay perception in Three.js action games. Use for orthographic or isometric visibility masks, obstacle-aware line of sight, player and enemy vision ranges, hidden-enemy targeting rules, fog shader artifacts such as spokes or seams, mobile ray budgets, lifecycle and menu-state integration, and deterministic fog-of-war tests.
- **iterate-until-verified** — Apply a prompt-agnostic execution and verification loop to any substantial task while preserving the original request. Use when the user asks to fan out work, use subagents or independent reviewers, loop until done, benchmark against references, apply a harsh critic, compare candidates blind, improve an existing prompt with verification, or continue until explicit quality gates pass.
- **optimize-web-animations** — Profile, audit, and optimize frontend page performance with emphasis on animation work, memory-leak risks, long-session slowdowns, CSS animations, canvas/WebGL requestAnimationFrame loops, marquees, skeletons, GSAP/Three/Matter effects, timers, listeners, and observers. Use when the user asks to make animations performant, pause offscreen animations, look for memory leaks, profile pages that slow the computer over time, fix janky scrolling, reduce CPU/GPU use, or repeat the "only play in view" optimization on React/Vite/Next/frontend pages using Codex Browser.
- **performance-profiling** — Guide performance profiling for Apple platform apps with Instruments, Xcode diagnostics, and MetricKit. Use when investigating app hangs, stutters, high CPU, memory leaks, memory growth, OOM crashes, slow launch, battery drain, thermal issues, App Store performance readiness, or when adding os_signpost and measurement hooks.
- **publish-project-to-github** — Package a finished local project into an intentional GitHub repository, create a strong README and visual preview, push it safely, configure a public GitHub Pages URL when the project is compatible, and verify the deployed result. Use when a user asks to upload, publish, open-source, share, or turn a local HTML/CSS/JavaScript experiment or small web project into a documented GitHub repository with a live demo.
- **stitched-full-page-capture** — Capture or repair reliable full-page screenshots for lazy-loaded, scroll-animated, Framer, WebGL/canvas, or reveal-heavy web pages. Use when full-page screenshots are blank, gray, white, sparse, show a tiny content strip, disagree with a working scroll video, or when article evidence/section crops must be derived from a trustworthy full-page image.
- **video-to-superprompt** — Turn a reference video into a super detailed recreation or inspiration prompt. Use when the user provides, mentions, uploads, links, or points to a video and asks to analyze the design, UI, animations, transitions, scroll interactions, typography, colors, assets, WebGL/Three.js, storytelling, section-by-section behavior, or to create a prompt/article that recreates the page, app, interaction, or motion system.
- **web-technique-to-skill** — Turn a visual or interaction technique you already built into a reusable web-design skill, by isolating the one mechanism that makes it work while reproducing its approved reference exactly around that focus, and packaging it with a demo that proves both the mechanism and the visual fidelity. Covers finding the mechanism, naming the technique plainly, disclosing the verified runtime and renderer, auditing reference layers, carrying real numbers instead of adjectives, preserving owned staging, keeping expensive gotchas, declaring the boundary against neighbouring skills, and browser-verifying before claiming it works. Use when a page, canvas scene, shader, scroll effect, layout system, or hover interaction turned out well and should become a skill rather than staying in one project.
- **write-like-meng-on-x** — Write, rewrite, review, or continuously refine X/Twitter posts in Meng To's current voice using his deduplicated authored-post corpus, personal and product context, shared resources, and Content repo evidence. Use when asked to improve a tweet in Meng's tone, draft an original post, reply, thread, resource share, or quote post as Meng, check whether an angle repeats an earlier post, study Meng's writing style, ingest another 20-50 authored posts, or hone the reusable Meng X voice profile.
- **x-bookmark-quote-posts** — Check a user's latest X/Twitter bookmarks and turn recent saved posts into source-backed quote-post drafts calibrated against the user's latest 100 authored posts. Use when asked to review X bookmarks, create quote posts from bookmarks, refresh a bookmark quote queue, run a bookmark quote automation, study a user's X voice, or write first-person quote posts from X sources.

## Details

| Field | Value |
|---|---|
| Author | Meng To |
| Original repository | https://github.com/MengTo/Skills/tree/main/agent-skills/codex |
| Version | `0.1.1` |
| Original commit | 4c716b516b6b0143f3037631306b3730d2832344 |
| License | MIT |
| Source platform | codex |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |
| OpenClaw | Partial |
| Hermes | Partial |

## Dependencies

- None required to install this profile. Individual skills may require tools or credentials documented in their own `SKILL.md` files.
