*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Garry’s Stack

Development workflows with a pinned shared runtime and native session integration.

## Tags

- development

## Skills

- **gstack** — Router for the gstack skill suite. (gstack)
- **autoplan** — Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk and runs them sequentially with auto-decisions using 6 decision principles. (gstack)
- **benchmark** — Performance regression detection. (gstack)
- **benchmark-models** — Cross-model benchmark for gstack skills. (gstack)
- **browse** — Drive a real browser through Aside: open a page, read it, click through a flow, take screenshots, check console errors. (gstack)
- **canary** — Post-deploy canary monitoring. (gstack)
- **careful** — Safety guardrails for destructive commands. (gstack)
- **claude-code** — Claude Code CLI second opinion for non-Claude Code hosts. Review a diff,
challenge a change for failure modes, or consult Claude with read-only repo
access and session continuity. Use for "claude review", "claude challenge",
"ask claude", or an explicit Claude Code second opinion. (gstack)
- **codex** — OpenAI Codex CLI wrapper — three modes. (gstack)
- **context-restore** — Restore working context saved earlier by /context-save. (gstack)
- **context-save** — Save working context. (gstack)
- **cso** — Security audit: supported static findings; qualified profiles add reproduction and repair candidates. (gstack)
- **design-consultation** — Design consultation: understands your product, researches the landscape, proposes a complete design system (aesthetic, typography, color, layout, spacing, motion), and generates font+color preview... (gstack)
- **design-html** — Design finalization: generates production-quality Pretext-native HTML/CSS. (gstack)
- **design-review** — Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems, AI slop patterns, and slow interactions — then fixes them. (gstack)
- **design-shotgun** — Design shotgun: generate multiple AI design variants, open a comparison board, collect structured feedback, and iterate. (gstack)
- **devex-review** — Live developer experience audit. (gstack)
- **diagram** — Turn an English description (or mermaid source) into a diagram triplet: the source, an editable .excalidraw file you can open on excalidraw.com, and rendered SVG + PNG. (gstack)
- **document-generate** — Generate missing documentation from scratch for a feature, module, or entire project. (gstack)
- **document-release** — Post-ship documentation update. (gstack)
- **freeze** — Restrict file edits to a specific directory for the session. (gstack)
- **gstack-upgrade** — Upgrade gstack to the latest version.
- **guard** — Full safety mode: destructive command warnings + directory-scoped edits. (gstack)
- **health** — Code quality dashboard. (gstack)
- **investigate** — Systematic debugging with root cause investigation. (gstack)
- **ios-clean** — Remove the DebugBridge SPM package and all #if DEBUG wiring from an iOS app. (gstack)
- **ios-design-review** — Visual design audit for iOS apps on real hardware. (gstack)
- **ios-fix** — Autonomous iOS bug fixer. (gstack)
- **ios-qa** — Live-device iOS QA for SwiftUI apps. (gstack)
- **ios-sync** — Regenerate the iOS debug bridge against the latest upstream gstack templates. (gstack)
- **land-and-deploy** — Land and deploy workflow. (gstack)
- **landing-report** — Read-only queue dashboard for workspace-aware ship. (gstack)
- **learn** — Manage project learnings.
- **make-pdf** — Turn any markdown file into a publication-quality PDF. (gstack)
- **office-hours** — YC Office Hours — two modes. (gstack)
- **open-gstack-browser** — Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in.
- **pair-agent** — Pair a remote AI agent with your browser. (gstack)
- **plan-ceo-review** — CEO/founder-mode plan review. (gstack)
- **plan-design-review** — Designer's eye plan review — interactive, like CEO and Eng review. (gstack)
- **plan-devex-review** — Interactive developer experience plan review. (gstack)
- **plan-eng-review** — Eng manager-mode plan review. (gstack)
- **plan-tune** — Self-tuning question sensitivity + developer psychographic for gstack (v1: observational). (gstack)
- **qa** — Systematically QA test a web application and fix bugs found. (gstack)
- **qa-only** — Report-only QA testing. (gstack)
- **retro** — Weekly engineering retrospective. (gstack)
- **review** — Pre-landing PR review. (gstack)
- **scrape** — Pull data from a web page through the Aside browser — your real, already signed-in sessions. (gstack)
- **setup-browser-cookies** — Import cookies from your real Chromium browser into the headless browse session. (gstack)
- **setup-deploy** — Configure deployment settings for /land-and-deploy.
- **setup-gbrain** — Set up gbrain for this coding agent: install the CLI, initialize a local PGLite or Supabase brain, register MCP, capture per-remote trust policy. (gstack)
- **ship** — Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION, update CHANGELOG, commit, push, create PR. (gstack)
- **skillify** — Codify the most recent successful /scrape flow into a permanent browser-skill on disk. (gstack)
- **spec** — Turn vague intent into a precise, executable spec in five phases. (gstack)
- **sync-gbrain** — Keep gbrain current with this repo's code and refresh agent search guidance in CLAUDE.md. (gstack)
- **unfreeze** — Clear the freeze boundary set by /freeze, allowing edits to all directories again. (gstack)

## Details

| Field | Value |
|---|---|
| Author | garrytan |
| Original repository | https://github.com/garrytan/gstack |
| Version | `0.0.12` |
| Original commit | a6b3a57512ca6d5c6aa5b68f74f736195021f96e |
| License | MIT |
| Source platform | multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Tested |
| Codex | Partial |
| OpenClaw | Tested |
| Hermes | Tested |

## Dependencies

- None required to install this profile. Individual skills may require tools or credentials documented in their own `SKILL.md` files.

## Runtime setup and removal

The profile delivers 55 workflow families through one profile. Claude Code and
Codex each omit the wrapper for their own CLI, matching the pinned source.
OpenClaw and Hermes use native session hooks and native isolated subagents.

Install the profile through ForgeCat, then follow the `gstack` entry skill to
prepare its runtime. Preparation is local. Building dependencies, downloading
the renderer/changelog, installing Chromium and activating native plugins are
separate explicit operations. Native setup calls the host plugin manager and
keeps its review and consent checks.

The source runtime lives in a private versioned cache. ForgeCat owns the shipped
skills and references; the setup helper owns the cache and native-plugin receipt.
Remove the native binding before updating or uninstalling the profile, restart
native sessions, then quarantine the cache. Modified or unowned files are retained.

The renderer and full changelog are fetched from the pinned source commit and
verified by size and SHA-256. Additional renderer font requests are blocked;
system fallback fonts can change appearance and wrapping. The original licenses
and notices travel with the source and rendered assets.

The compatibility table records target claims for this private candidate.
They remain unverified until exact Registry install, runtime and removal checks pass. Source prerequisites still apply to each workflow. The
home plugin requires a local filesystem backend. Optional Claude team,
question-preference and timeline settings hooks are not automatically enabled.
No helper silently authorizes a source workflow to push, deploy or use credentials.
