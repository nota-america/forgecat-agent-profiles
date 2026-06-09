![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# gstack

AI engineering workflow stack for planning, review, QA, security, browser automation, design, deployment, iOS workflows, documentation, and OpenClaw companion skills.

## Tags

- engineering-workflow
- browser-qa
- code-review
- security
- design
- deployment
- ios
- openclaw
- claude-code

## Installation

```bash
npx forgecat install @forgecat/garrytan_gstack
```

## Skills / Agents / Commands

- **gstack** — Fast headless browser for QA testing and site dogfooding. (gstack) `skill`
- **autoplan** — Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk and runs them sequentially with auto-decisions using 6 decision principles. (gstack) `skill`
- **benchmark-models** — Cross-model benchmark for gstack skills. (gstack) `skill`
- **benchmark** — Performance regression detection using the browse daemon. (gstack) `skill`
- **browse** — Fast headless browser for QA testing and site dogfooding. (gstack) `skill`
- **hackernews-frontpage** — Scrape the Hacker News front page (titles, points, comment counts). `skill`
- **canary** — Post-deploy canary monitoring. (gstack) `skill`
- **careful** — Safety guardrails for destructive commands. (gstack) `skill`
- **codex** — OpenAI Codex CLI wrapper — three modes. (gstack) `skill`
- **connect-chrome** — Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in. `skill`
- **context-restore** — Restore working context saved earlier by /context-save. (gstack) `skill`
- **context-save** — Save working context. (gstack) `skill`
- **cso** — Chief Security Officer mode. (gstack) `skill`
- **design-consultation** — Design consultation: understands your product, researches the landscape, proposes a complete design system (aesthetic, typography, color, layout, spacing, motion), and generates font+color preview... (gstack) `skill`
- **design-html** — Design finalization: generates production-quality Pretext-native HTML/CSS. (gstack) `skill`
- **design-review** — Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems, AI slop patterns, and slow interactions — then fixes them. (gstack) `skill`
- **design-shotgun** — Design shotgun: generate multiple AI design variants, open a comparison board, collect structured feedback, and iterate. (gstack) `skill`
- **devex-review** — Live developer experience audit. (gstack) `skill`
- **document-generate** — Generate missing documentation from scratch for a feature, module, or entire project. (gstack) `skill`
- **document-release** — Post-ship documentation update. (gstack) `skill`
- **freeze** — Restrict file edits to a specific directory for the session. (gstack) `skill`
- **gstack-upgrade** — Upgrade gstack to the latest version. `skill`
- **guard** — Full safety mode: destructive command warnings + directory-scoped edits. (gstack) `skill`
- **health** — Code quality dashboard. (gstack) `skill`
- **investigate** — Systematic debugging with root cause investigation. (gstack) `skill`
- **ios-clean** — Remove the DebugBridge SPM package and all #if DEBUG wiring from an iOS app. (gstack) `skill`
- **ios-design-review** — Visual design audit for iOS apps on real hardware. (gstack) `skill`
- **ios-fix** — Autonomous iOS bug fixer. (gstack) `skill`
- **ios-qa** — Live-device iOS QA for SwiftUI apps. (gstack) `skill`
- **ios-sync** — Regenerate the iOS debug bridge against the latest upstream gstack templates. (gstack) `skill`
- **land-and-deploy** — Land and deploy workflow. (gstack) `skill`
- **landing-report** — Read-only queue dashboard for workspace-aware ship. (gstack) `skill`
- **learn** — Manage project learnings. `skill`
- **make-pdf** — Turn any markdown file into a publication-quality PDF. (gstack) `skill`
- **office-hours** — YC Office Hours — two modes. (gstack) `skill`
- **open-gstack-browser** — Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in. `skill`
- **gstack-openclaw-ceo-review** — Use when asked to review a plan, challenge a proposal, run a CEO review, poke holes in an approach, think bigger about scope, or decide whether to expand or reduce the plan. `skill`
- **gstack-openclaw-investigate** — Use when asked to debug, fix a bug, investigate an error, or do root cause analysis, and when users report errors, stack traces, unexpected behavior, or say something stopped working. `skill`
- **gstack-openclaw-office-hours** — Use when asked to brainstorm, evaluate whether an idea is worth building, run office hours, or think through a new product idea or design direction before any code is written. `skill`
- **gstack-openclaw-retro** — Weekly engineering retrospective. Analyzes commit history, work patterns, and code quality metrics with persistent history and trend tracking. Team-aware with per-person contributions, praise, and growth areas. Use when asked for weekly retro, what shipped this week, or engineering retrospective. `skill`
- **pair-agent** — Pair a remote AI agent with your browser. (gstack) `skill`
- **plan-ceo-review** — CEO/founder-mode plan review. (gstack) `skill`
- **plan-design-review** — Designer's eye plan review — interactive, like CEO and Eng review. (gstack) `skill`
- **plan-devex-review** — Interactive developer experience plan review. (gstack) `skill`
- **plan-eng-review** — Eng manager-mode plan review. (gstack) `skill`
- **plan-tune** — Self-tuning question sensitivity + developer psychographic for gstack (v1: observational). (gstack) `skill`
- **qa-only** — Report-only QA testing. (gstack) `skill`
- **qa** — Systematically QA test a web application and fix bugs found. (gstack) `skill`
- **retro** — Weekly engineering retrospective. (gstack) `skill`
- **review** — Pre-landing PR review. (gstack) `skill`
- **scrape** — Pull data from a web page. (gstack) `skill`
- **setup-browser-cookies** — Import cookies from your real Chromium browser into the headless browse session. (gstack) `skill`
- **setup-deploy** — Configure deployment settings for /land-and-deploy. `skill`
- **setup-gbrain** — Set up gbrain for this coding agent: install the CLI, initialize a local PGLite or Supabase brain, register MCP, capture per-remote trust policy. (gstack) `skill`
- **ship** — Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION, update CHANGELOG, commit, push, create PR. (gstack) `skill`
- **skillify** — Codify the most recent successful /scrape flow into a permanent browser-skill on disk. (gstack) `skill`
- **sync-gbrain** — Keep gbrain current with this repo's code and refresh agent search guidance in CLAUDE.md. Wraps the gstack-gbrain-sync orchestrator with state (gstack) `skill`
- **unfreeze** — Clear the freeze boundary set by /freeze, allowing edits to all directories again. (gstack) `skill`

## Details

| Field | Value |
|---|---|
| Author | `Garry Tan` |
| Original repository | `https://github.com/garrytan/gstack` |
| Version | `0.0.10` |
| Original commit | `22f8c7f` (2026-05-26) |
| License | `MIT` |
| Source platform | `claude-code` |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Partial |

## Dependencies

- Git
- Bun v1.0+
- Node.js for Windows and Node-backed workflows
