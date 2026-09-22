*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Anti Slop

Review UI, copy, accessibility, responsive layouts, and code comments with six coordinated anti-slop skills.

## Tags

- design
- writing
- accessibility

## Skills

- **antislop** — Anti Slop: Rules for AI Coding Agents. The core filter. Load always to stop generic AI slop.
- **antislop-code** — Code comment hygiene for AI coding agents: remove generic AI-slop comments, keep the valuable ones, never touch the code.
- **antislop-copywriting** — Copy and text skill for antislop. Use when writing or editing prose: headlines, tone, CTAs, and anti-AI-writing patterns. Load with the core.
- **antislop-human** — Human and accessibility skill for antislop. Contrast, keyboard, focus, and states for real people. Includes the contrast checker.
- **antislop-layoutmobile** — Mobile layout skill for antislop. Use for layouts that reflow across screen sizes, phone to desktop: grids, overflow, tap targets. Load with the core.
- **antislop-ui** — UI and visual skill for antislop. Use when building or editing any interface: color, layout, components, motion. Load with the core.

## MCPs

| Server | Transport | URL |
|---|---|---|
| `antislop-contrast` | `stdio` | `node` |

## Details

| Field | Value |
|---|---|
| Author | Miqdad Badjuber |
| Original repository | https://github.com/miqdadbadjuber/anti-slop |
| Version | `0.1.0` |
| Original commit | 3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a |
| License | MIT |
| Source platform | multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Partial |
| Hermes | Partial |

## Dependencies

- None required to install this profile. Individual skills may require tools or credentials documented in their own `SKILL.md` files.

## Usage and installation behavior

This conversion packages the complete six-skill set from upstream 3.2.13. Load `antislop` and the skill for your task, then choose whether to apply it during the work or audit a completed result. The upstream rules, consent questions, numbered audit approvals, and final Delivery Gate stay intact. Supply your design direction separately.

The bound operating instruction provides the existing-install pointer and resolves the upstream source paths to the installed skills. ForgeCat adds its managed `@AGENTS.md` import for Claude Code; existing user instructions remain owned by the user. OpenClaw and Hermes receive the instruction in their home bootstrap files. A fresh session is needed to load new instructions.

The Python contrast checker remains beside `antislop-human/SKILL.md`. Its MCP server and Node launcher retain their original bytes and relative layout under a shared reference directory. Node and Python 3 are needed for MCP; the direct checker needs only Python 3 and the standard library. No account, API key, network request, or package download is used by these helpers.

Upstream registers MCP only in its Claude plugin. This profile additionally delivers that same local server through the standard Cursor and Codex MCP adapters. OpenClaw and Hermes use the upstream Python checker rather than automatic MCP registration. The private release candidate targets complete delivery on Claude Code, Cursor, and Codex. OpenClaw and Hermes remain Partial because automatic MCP registration is not delivered. Native installation and runtime receipts must verify these claims before public release.

This is a local conversion candidate, not a published Registry version. After an approved release, install/update/remove it through ForgeCat as `@forgecat/anti-slop`. Do not run the upstream npm/plugin installers over this managed copy. Upstream's VERSION identifies its source release and is separate from the future ForgeCat Registry version.

The source guide, roadmap, security document and core filter are bundled for reference. Their upstream installation and removal sections describe other distribution routes. Repository navigation and presentation image links point to the pinned upstream commit; npm installer code, development tests, CI, marketplace metadata and artwork are intentionally excluded from the installed package.

---
*written by original source*

<p align="center">
  <img src="https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/antislop-banner.png" alt="antislop" width="100%" />
</p>

<p align="center">
  <a href="https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/LICENSE"><img src="https://img.shields.io/badge/license-MIT-2ea44f" alt="License: MIT"></a>
  <a href="https://github.com/miqdadbadjuber/anti-slop/releases"><img src="https://img.shields.io/github/v/release/miqdadbadjuber/anti-slop?label=version&color=1f6feb" alt="Version"></a>
</p>

<p align="center">
  <a href="https://skills.sh/miqdadbadjuber/anti-slop"><img src="https://skills.sh/b/miqdadbadjuber/anti-slop" alt="skills.sh"></a>
</p>

# antislop

> **Anti Slop: Rules for AI Coding Agents.** It stops them from generating generic "AI slop" UI and copy, without letting the result turn sterile. It is a **filter, not a style guide**: no prescribed colors, fonts, or layouts. It is not only for building pages: it also writes and audits copy, so AI text stops reading like AI. And it never beautifies on its own; `DESIGN.md` (yours) is where beauty and direction come from.

> **New here? Start with the [GUIDE.md](https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/GUIDE.md).** It explains what antislop is and how to install it, from zero.

## What it does

- **38 mandatory rules** (R-01 to R-38) in three tiers: Hard Gate (absolute), Purpose-Gate (technique allowed, reason required), Quality Locks (consistency)
- **A Liveliness Toolkit** with three dials (ENERGY / RHYTHM / MOTION) and a Design Read, so the result is alive and specific, not just "clean"
- **A Delivery Gate**: a mandatory PASS/FAIL report in four blocks, run before anything ships
- **Additive skills**, one per concern, so an agent only loads what a task needs

The core prevents slop but cannot invent direction. `DESIGN.md` (yours) supplies it; a sterile result means the direction was missing, not that the filter failed (R-37).

## See the difference

The same brief, the same page, generated four times over. antislop filters; `DESIGN.md` supplies direction. They are two different jobs, and these are the four results. Copy and code follow as before-and-after pairs instead of four separate builds, because nothing else has to supply direction there.

### UI

Three of the four builds. The first uses neither tool, the second only antislop, the third only `DESIGN.md`.

| **Nothing at all** | **antislop alone** | **`DESIGN.md` alone** |
|:--|:--|:--|
| <a href="https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/ui/without.webp"><img src="https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/ui/without.webp" alt="A generic landing page: a sparkle logo, a NEXT-GEN AI 2.0 beta pill above the headline, and a fake terminal reporting 0.0001ms latency" width="100%"></a> | <a href="https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/ui/w-antislop.webp"><img src="https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/ui/w-antislop.webp" alt="The same page with antislop: honest copy on a restrained dark layout with a single accent colour" width="100%"></a> | <a href="https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/ui/w-design.webp"><img src="https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/ui/w-design.webp" alt="The same page with DESIGN.md only: a photographic hero, with the stat cards still reading 10,000% ROI Synergy Multiplier and a 5.0 rating from 500,000 founders" width="100%"></a> |
| Where most AI output starts: a sparkle logo, a beta pill, and a fake terminal. | Honest, because the filter removed the invented numbers. Plain, because beauty is not its job. | The direction lands, but the slop stays, because `DESIGN.md` directs and does not filter. |

The fourth uses both, and it is the only one of the four that is clean and directed at the same time:

| **antislop + `DESIGN.md`** |
|:--|
| <a href="https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/ui/w-all.webp"><img src="https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/ui/w-all.webp" alt="The same page with antislop and DESIGN.md: a full-bleed illustrated hero with one honest headline and project-specific navigation" width="100%"></a> |
| Honest numbers and a real direction in the same build. The filter removes what should not be there; `DESIGN.md` fills the space that leaves, which is the one thing neither tool manages alone. |

---

### Copy

One prompt, run twice.

| Before | After |
|:--|:--|
| <a href="https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/text/before.webp"><img src="https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/text/before.webp" alt="An AI written Discord launch post: emoji bullet points, NEW DROP in capitals, and hype in every line" width="100%"></a> | <a href="https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/text/after.webp"><img src="https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/text/after.webp" alt="The same launch post written with antislop-copywriting: plain sentences, no emoji bullets, and a note to cut any line with nothing real to say" width="100%"></a> |

---

### Code

One file, run twice.

| Before | After |
|:--|:--|
| <a href="https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/code/before.webp"><img src="https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/code/before.webp" alt="Python with box-drawing section banners, emoji, and a comment on every constant that restates the constant" width="100%"></a> | <a href="https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/code/after.webp"><img src="https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/code/after.webp" alt="The same Python with the banners and emoji gone, one comment left that says what the module does, and the code itself untouched" width="100%"></a> |

Every image in this section opens full size if you click it.

## Install

antislop ships as a set of **standard agent skills** (one folder per skill, holding a `SKILL.md`). The core is always loaded; the other skills load only when the task needs them. This section is the reference: every install command, in one place. [GUIDE.md](https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/GUIDE.md) walks through them from zero, and its Update and Remove sections cover every route the same way.

### 1. The installer (recommended)

One command, then answer the prompts. It asks which extra skills you want, where to install (this project or everywhere), and which agents you use, then copies the folders. It is also the only route that writes the pointer reloading antislop every session on a project install; a global install relies on the skills loading themselves by description.

```bash
npx antislop-ai
```

To update later, run the same command and choose **Overwrite them** when it finds the existing folders. See [Update](#update).

### 2. The skills directory

antislop is listed on [skills.sh](https://skills.sh/miqdadbadjuber/anti-slop), the open directory for agent skills:

```bash
npx skills add miqdadbadjuber/anti-slop
```

This copies the same folders as path 1 and nothing else: no pointer, so antislop reloads by description alone. [GUIDE.md](https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/GUIDE.md) covers adding the pointer afterwards, and updating or removing this route.

### 3. The plugin (Claude Code)

Add the marketplace once, then install the plugin:

```text
/plugin marketplace add https://github.com/miqdadbadjuber/anti-slop
/plugin install antislop@anti-slop
```

### 4. The plugin (Antigravity)

The same repo is an Antigravity plugin. Install it with the Antigravity CLI:

```bash
agy plugin install https://github.com/miqdadbadjuber/anti-slop
```

### 5. The plugin (Codex)

The same repo is a Codex plugin and marketplace. Add the marketplace once, then install the plugin:

```bash
codex plugin marketplace add miqdadbadjuber/anti-slop
codex plugin add antislop@anti-slop
```

### 6. The plugin (Cursor)

The same repo is a Cursor plugin. Add it as a plugin marketplace with the Cursor Agent CLI:

```bash
agent plugin marketplace add https://github.com/miqdadbadjuber/anti-slop
```

Then open **Customize** in Cursor, find **antislop**, and select **Install**, choosing project or user scope.

### 7. The plugin (Kimi Code)

The same repo is a Kimi Code plugin. Install it in a Kimi Code session, then start a new one:

```text
/plugins install https://github.com/miqdadbadjuber/anti-slop
```

The URL resolves to the latest release. Kimi Code installs plugins per user, so this covers every project.

### Where the skills live

Every skill is a folder of the open Agent Skills standard (`<name>/SKILL.md`), so it drops into any agent that reads the standard. The installer (path 1) installs into whichever of these you use, creating the folder if it is missing:

| Agent | Reads antislop from |
|-------|---------------------|
| Claude Code | `.claude/skills/` |
| Codex | `.codex/skills/` |
| Antigravity | `.agents/skills/` |
| OpenCode | `.opencode/skills/` |
| Cursor | `.cursor/skills/` |
| Gemini CLI | `.gemini/skills/` |
| Hermes | `.hermes/skills/` |
| GitHub Copilot | `.agents/skills/` |
| Kimi Code | `.agents/skills/` |

The Gemini CLI row is legacy support: Antigravity replaced it, but the installer still writes there for existing setups.

Antigravity, Copilot, and Kimi Code share one folder. Copilot also reads `.github/skills/` and `.claude/skills/`, and Kimi Code also reads `.kimi-code/skills/`, but the installer writes the folder they have in common, so picking them together installs antislop once.

Those are the project paths. A global install writes the same folder under your home directory, with three exceptions: OpenCode writes to `~/.config/opencode/skills/`, Antigravity to `~/.gemini/config/skills/`, and Codex to `~/.agents/skills/`, the user-level folder Codex documents in place of its own `~/.codex/skills/`. Copilot, OpenCode, and Kimi Code read that home-level folder too, so it is where a global install reaches them.

Hermes needs one extra step after a project install: it will not load skills out of a cloned repository until you run `hermes skills trust` once in that project.

### Manual (single file, no packaging)

The core `antislop.md` alone is a complete filter you can paste into any chat window. Download it and tell your agent to read it; the First-Run wizard inside it installs skills the manual way:

```bash
curl -o antislop.md https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/main/antislop.md
```

## Update

antislop does not update itself and nothing tells you a release is out. Every route updates by running its own command again:

| Route | Update it with |
|-------|----------------|
| The installer | `npx antislop-ai`, then **Overwrite them**. It prints the version on disk next to the one it carries. |
| The skills directory | `npx skills add miqdadbadjuber/anti-slop` |
| The plugin (Claude Code) | `claude plugin update antislop@anti-slop` |
| The plugin (Antigravity) | `agy plugin install https://github.com/miqdadbadjuber/anti-slop` |
| The plugin (Codex) | `codex plugin marketplace upgrade anti-slop` |
| The plugin (Cursor) | `agent plugin marketplace update https://github.com/miqdadbadjuber/anti-slop` |
| The plugin (Kimi Code) | `/plugins install https://github.com/miqdadbadjuber/anti-slop` |
| Manual | download `antislop.md` again |

Skills load when a session starts, so start a new one afterwards. To see which version you are on, open the `VERSION` file in the installed `antislop` folder, or ask your agent. [GUIDE.md](https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/GUIDE.md#update) covers each route step by step.

## Skills

| Skill | What it covers | Ships in |
|-------|----------------|----------|
| antislop | The core filter: rules, tiers, Delivery Gate, liveliness | v3.0.0 |
| antislop-ui | UI / visual: layout, color, components, decoration, motion, structure | v2.2.0 |
| antislop-copywriting | Copy & text: headlines, CTAs, tone, fake stats, anti-AI-writing patterns, markdown hygiene | v2.3.0 |
| antislop-human | Human: contrast (with the checker), keyboard, focus, states | v2.4.0 |
| antislop-layoutmobile | Responsive / mobile: reflowing across screen widths (phone to desktop), breakpoints, grids, overflow, tap targets | v2.5.0 |
| antislop-code | Code comments: remove generic AI-slop comments, keep the valuable ones, never touch the code | v3.1.0 |

Pick what matches the work:

- UI work → antislop-ui
- Copy work → antislop-copywriting
- People work → antislop-human
- Responsive layout work → antislop-layoutmobile
- Code comments work → antislop-code
- More than one kind of work → install several
- None → the core alone is a complete filter

## Usage modes

antislop is used one of two ways, chosen at the start of a session:

- **During** guides the work while it is built, ending with the Delivery Gate. Use it when building new UI.
- **After** audits finished work: a numbered findings list, you approve which to fix, then a follow-up report. Use it to clean up existing output.

## Roadmap

**v3.2.13** is the current release.

- **The installed version is now on disk.** Every install route copies a `VERSION` file inside the `antislop` folder, so an update can name what you already have instead of asking you to look it up.
- **The README has an Update section.** One row per route, next to the install commands it mirrors.
- **Fenced examples in your entry file are safe again.** A fence line carrying an info string, three backticks followed by `js`, was read as the end of the block it sat inside, so the example lost its text on install. A closing fence may carry only spaces or tabs.
- **Kimi Code was run for real.** v3.2.12 shipped that door on documentation alone. It has since been tested against a live Kimi Code install and works.

Every earlier release, and what comes next, is in [ROADMAP.md](https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/ROADMAP.md).

## In motion

![The same brief, before and after the filter](https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/assets/compare/antislop-compare.gif)

The same four images from See the difference, in motion.

## FAQ

### Is antislop a style guide?

No, a filter. It does not prescribe colors, fonts, or layouts. It rejects technique without purpose and requires liveliness; direction is yours.

### Which agents does it work with?

All of them, but the install paths differ:

- **The installer and the skills directory** support Claude Code, Codex, Antigravity, OpenCode, Cursor, Gemini CLI, Hermes, GitHub Copilot, and Kimi Code (the installer detects each agent's skill folder). These are the recommended paths.
- **The plugins** are per-agent doors: the Claude Code marketplace plugin (path 3), the Antigravity plugin (path 4), the Codex plugin (path 5), the Cursor plugin (path 6), and the Kimi Code plugin (path 7), all installed from the same repo.
- **The single file** (`antislop.md`) works with any agent that reads plain Markdown, including a plain chat window.

The packaged skills use the open Agent Skills standard (folder per skill), so they drop into any tool that reads the standard.

### What is a "skill"?

A folder that goes deeper into one concern (UI, copywriting, accessibility, and so on), holding a `SKILL.md` with its rules. It references the core rules by number and never duplicates them, so adding a skill does not change the core.

## Star History

[![Star History Chart](https://star-history.dera.page/svg?repos=miqdadbadjuber/anti-slop)](https://star-history.dera.page/miqdadbadjuber/anti-slop)

## Contributors

Thanks to everyone who helps make antislop better.

<p align="center">
  <a href="https://github.com/miqdadbadjuber/anti-slop/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=miqdadbadjuber/anti-slop" alt="antislop contributors" />
  </a>
</p>

Found a new AI slop pattern, a rule that missed something, or a bug in the installer? Open an [issue](https://github.com/miqdadbadjuber/anti-slop/issues). PRs are welcome for new AI slop patterns, clarifications, or checklist items out of sync with their rule.

<hr>

<p align="center"><em>“antislop is a filter, not magic.<br>
It clears the slop from your UI, text, and code.<br>
A beautiful UI is <code>DESIGN.md</code>'s job, and yours.”</em></p>

<hr>

## License

MIT: [LICENSE](https://github.com/miqdadbadjuber/anti-slop/blob/3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a/LICENSE)
