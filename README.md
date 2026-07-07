<div align="center">
  <a href="https://github.com/nota-america/forgecat-agent-profiles">
    <img width="1500" alt="ForgeCat Agent Profiles" src="./assets/forgecat_banner.png" />
  </a>

  <h3 align="center">Open catalog of cross-platform agent profiles</h3>

  <div align="center">
    <a href="https://forgecat.ai">Website</a> |
    <a href="https://forgecat.ai/docs">Documentation</a> |
    <a href="#quick-start">Quick Start</a> |
    <a href="#browse-profiles">Browse Profiles</a> |
    <a href="https://github.com/nota-america/forgecat-agent-profiles/issues/new?template=profile_request.yml">Request a Profile</a>
  </div>
</div>

<br />

<div align="center">

[![Profiles](https://img.shields.io/badge/profiles-187-blue)](#browse-profiles)
[![Collections](https://img.shields.io/badge/collections-38-blue)](#browse-profiles)
[![Platforms](https://img.shields.io/badge/platforms-Claude%20Code%20%7C%20Cursor%20%7C%20Codex%20%7C%20OpenClaw%20%7C%20Hermes-green)](#supported-platforms)
[![GitHub issues](https://img.shields.io/github/issues/nota-america/forgecat-agent-profiles)](https://github.com/nota-america/forgecat-agent-profiles/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/nota-america/forgecat-agent-profiles)](https://github.com/nota-america/forgecat-agent-profiles/pulls)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-yellow.svg)](./LICENSE)
[![npm version](https://img.shields.io/npm/v/forgecat.svg)](https://www.npmjs.com/package/forgecat)
[![Discord](https://img.shields.io/badge/Discord-Join%20community-5865F2?logo=discord&logoColor=white)](https://discord.gg/8XYVQdg4wb)
[![Reddit](https://img.shields.io/badge/Reddit-r%2FForgeCat-FF4500?logo=reddit&logoColor=white)](https://www.reddit.com/r/ForgeCat/)

</div>

<h3 align="center">Star the catalog to help developers discover reusable agent workflows.</h3>

ForgeCat Agent Profiles is the public catalog for installable agent profiles: skills, agents, rules, commands, hooks, and MCP settings packaged from useful open-source projects and made available across supported coding tools.

- **One catalog for agent setup**: Browse converted profiles from public Claude Code, Cursor, Codex, MCP, and agent-skill repositories.
- **Cross-platform installs**: Use the same profile source across Claude Code, Cursor, Codex, OpenClaw, and Hermes where compatibility is available.
- **Source-faithful packaging**: Keep attribution, license metadata, upstream behavior, and profile-specific caveats visible.
- **Reviewable platform evidence**: Mark platforms as tested only after install/runtime checks and, for project-target platforms, matching native artifacts.

<h2 id="quick-start">Quick Start</h2>

Install the ForgeCat CLI:

```bash
npm install -g forgecat
```

Search the catalog:

```bash
forgecat search frontend
forgecat search mcp
forgecat search review
```

Install a profile:

```bash
forgecat install @forgecat/openai_skills_frontend-skill -p codex
forgecat install @forgecat/everyinc_compound-engineering-plugin -p claude-code
forgecat install @forgecat/obra_superpowers -p cursor
```

Use `forgecat install <profile> -p <platform>` with one of the supported platform ids below.

## Why ForgeCat

Agent workflows are increasingly stored as project files: `AGENTS.md`, `CLAUDE.md`, `.cursorrules`, skills, subagents, commands, hooks, and MCP configuration. ForgeCat profiles make those workflows easier to discover, inspect, install, and port across tools.

| Need | ForgeCat profile repo provides |
|---|---|
| Find useful agent workflows | A curated catalog grouped by original source owner and repository |
| Reuse across coding tools | Platform-aware profile packages for Claude Code, Cursor, Codex, OpenClaw, and Hermes |
| Trust what is being installed | Source links, license metadata, profile READMEs, and conversion notes |
| Improve the catalog | Issue templates for profile requests, metadata fixes, platform support, and maintainer requests |

## Supported Platforms

| Platform | ForgeCat id | What gets installed |
|---|---|---|
| Claude Code | `claude-code` | Claude-native skills, agents, commands, MCP, hooks, and project settings where supported |
| Cursor | `cursor` | Cursor rules, agents, MCP configuration, and compatible profile resources |
| Codex | `codex` | Codex skills, instructions, MCP configuration, hooks, and compatible profile resources |
| OpenClaw | `openclaw` | Skills and profile instructions installed into an OpenClaw agent workspace |
| Hermes | `hermes` | Skills and profile instructions installed into a Hermes profile home |

Each profile declares its tested and partial platforms in `for-forgecat/profile.yml`. Tested project-target platforms should include the matching native `for-<platform>` artifact. OpenClaw and Hermes are home-target platforms: ForgeCat installs skills and profile-scoped instruction sections into the selected agent workspace or profile home.

## Profile Quality

ForgeCat profiles are curated to be source-faithful and reviewable, not just copied into a common folder shape.

| Signal | What it means |
|---|---|
| Source reviewed | The upstream repository was inspected directly before conversion. |
| Attribution kept | Profile metadata and docs link back to the original source repository. |
| License checked | The upstream license is reflected in `for-forgecat/profile.yml` when it is clear. |
| Install evidence | A platform is marked tested only after a real install/runtime check. |
| Native artifact included | Tested project-target platforms should have matching `for-claude/`, `for-cursor/`, or `for-codex/` directories. |

## Browse Profiles

Profiles are grouped by their original source owner and repository:

```text
profiles/<source-owner>/<source-repository-or-collection>/
```

| Collection | Profiles | Description |
|---|---:|---|
| [addyosmani/agent-skills](./profiles/addyosmani/agent-skills) | 1 | Production-grade engineering skills pack by Addy Osmani |
| [ayghri/i-have-adhd](./profiles/ayghri/i-have-adhd) | 1 | ADHD-friendly output shaping skill for concise, action-first agent replies |
| [anthropics/claude-code](./profiles/anthropics/claude-code) | 1 | Claude Code profile conversion |
| [anthropics/claude-plugins-official](./profiles/anthropics/claude-plugins-official) | 16 | Official Anthropic Claude plugin conversions for skills, agents, commands, and MCP |
| [anthropics/knowledge-work-plugins](./profiles/anthropics/knowledge-work-plugins) | 15 | Knowledge-work plugins for legal, finance, HR, marketing, operations, sales, and more |
| [anthropics/skills](./profiles/anthropics/skills) | 17 | Anthropic skill profiles for documents, spreadsheets, slides, web apps, themes, and more |
| [awslabs/aidlc-workflows](./profiles/awslabs/aidlc-workflows) | 1 | AWS AI-DLC workflow rules for planning, construction, and governance |
| [contains-studio/agents](./profiles/contains-studio/agents) | 8 | Contains Studio Claude Code sub-agent profiles for engineering, marketing, design, product, project management, operations, testing, and studio support |
| [coreyhaines31/marketingskills](./profiles/coreyhaines31/marketingskills) | 1 | Marketing skills for conversion, copywriting, SEO, paid ads, analytics, and GTM work |
| [cursor/plugins](./profiles/cursor/plugins) | 3 | Cursor plugins for team workflows, continual learning, and iterative agent loops |
| [dietrichgebert/ponytail](./profiles/dietrichgebert/ponytail) | 1 | Ponytail mode hooks and workflow support |
| [everyinc/compound-engineering-plugin](./profiles/everyinc/compound-engineering-plugin) | 1 | AI-powered development workflows for review, research, design, and delivery |
| [fivetaku/fablize](./profiles/fivetaku/fablize) | 1 | Claude Code harness for grounded multi-step work and verification discipline |
| [garrytan/gstack](./profiles/garrytan/gstack) | 1 | Garry's Stack engineering workflow skills for planning, QA, review, and deployment |
| [garethmanning/education-agent-skills](./profiles/garethmanning/education-agent-skills) | 1 | Evidence-based education skills for curriculum, assessment, learning science, wellbeing, and student study support |
| [google-gemini/gemini-skills](./profiles/google-gemini/gemini-skills) | 3 | Gemini API, interactions API, and live API development skills |
| [googleworkspace/cli](./profiles/googleworkspace/cli) | 1 | Google Workspace CLI skills for Drive, Gmail, Calendar, Docs, Sheets, Slides, Chat, and Apps Script |
| [juliusbrussee/caveman](./profiles/juliusbrussee/caveman) | 1 | Caveman communication mode with compressed skills, commands, agents, and hooks |
| [kepano/obsidian-skills](./profiles/kepano/obsidian-skills) | 1 | Obsidian vault, Markdown, Bases, Canvas, and CLI workflows |
| [leonxlnx/taste-skill](./profiles/leonxlnx/taste-skill) | 1 | Taste Skill package for premium frontend design and image-to-code workflows |
| [mattpocock/skills](./profiles/mattpocock/skills) | 1 | TypeScript skills by Matt Pocock |
| [microsoft/azure-skills](./profiles/microsoft/azure-skills) | 20 | Microsoft Azure skills for deployment, observability, compliance, storage, AI, and more |
| [msitarzewski/agency-agents](./profiles/msitarzewski/agency-agents) | 13 | Agency role agents for academic, design, engineering, marketing, sales, and operations teams |
| [multica-ai/andrej-karpathy-skills](./profiles/multica-ai/andrej-karpathy-skills) | 1 | Andrej Karpathy coding guidelines for focused, verifiable agent work |
| [mengto/skills](./profiles/mengto/skills) | 4 | MengTo agent skills packaged as mango_skills_agent-skills profiles for Codex workflows, media assets, UI design, and web design systems |
| [nomadamas/slides-grab](./profiles/nomadamas/slides-grab) | 1 | Agent-first presentation workflow for planning, designing, visually editing, and exporting HTML slides with shared Codex and Claude Code skills |
| [obra/superpowers](./profiles/obra/superpowers) | 1 | Superpowers software-development methodology with hook-backed startup context |
| [openai/codex-plugin-cc](./profiles/openai/codex-plugin-cc) | 1 | OpenAI Codex plugin for Claude Code review, delegation, session transfer, background jobs, and optional hooks |
| [openai/skills](./profiles/openai/skills) | 45 | OpenAI skills for frontend, Figma, Playwright, deployment, documents, security, and more |
| [orchestra-research/ai-research-skills](./profiles/orchestra-research/ai-research-skills) | 1 | AI research skills for training, evaluation, inference, MLOps, RAG, multimodal systems, and papers |
| [paramchoudhary/resumeskills](./profiles/paramchoudhary/resumeskills) | 1 | Resume and career-development skills for ATS optimization, resume writing, interview prep, and offer decisions |
| [remotion-dev/skills](./profiles/remotion-dev/skills) | 1 | Remotion best-practices skill for video creation in React |
| [upstash/context7](./profiles/upstash/context7) | 1 | Context7 MCP integration for up-to-date documentation lookup |
| [vercel-labs/agent-skills](./profiles/vercel-labs/agent-skills) | 7 | Vercel agent skills for deployment, React, UI audits, and workflow patterns |
| [voltagent/awesome-codex-subagents](./profiles/voltagent/awesome-codex-subagents) | 10 | Codex subagents for development, infrastructure, security, and research |
| [xixu-me/skills](./profiles/xixu-me/skills) | 1 | Xi Xu skills for userscripts, GitHub Actions docs, secure hosting, browser workflows, and tooling |
| [yeachan-heo/oh-my-claudecode_agents](./profiles/yeachan-heo/oh-my-claudecode_agents) | 1 | Agents-only Claude Code orchestration profile from oh-my-claudecode |
| [zubair-trabzada/geo-seo-claude](./profiles/zubair-trabzada/geo-seo-claude) | 1 | GEO-first SEO skills and agents for AI-search visibility audits, reports, schema, crawlers, and client workflows |

Total: 187 profiles across 38 collections.

## Profile Layout

A complete profile directory usually contains:

```text
profiles/<source-owner>/<source-repository>/
├── README.md
├── for-forgecat/
│   ├── profile.yml
│   └── ...
├── for-claude/
├── for-cursor/
└── for-codex/
```

`for-forgecat/` is the canonical ForgeCat package source. Native `for-claude`, `for-cursor`, and `for-codex` directories are added when the profile has been tested and materialized for those project-target platforms. OpenClaw and Hermes are materialized into their home targets at install time.

## Contributing

Contributions are welcome when they improve installability, source fidelity, documentation, or platform support.

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a PR.

Good contributions include:

- Adding a new profile from a public source repository
- Fixing profile packaging when installed files do not match the original source behavior
- Adding missing native artifacts for project-target platforms after a real platform test
- Improving README clarity, installation examples, attribution, or license metadata
- Reporting a profile that installs incorrectly or no longer matches its upstream source

Before opening a PR:

1. Keep the profile under `profiles/<source-owner>/<source-repository-or-collection>/`.
2. Verify the upstream source repository directly. Do not rely only on copied metadata.
3. Confirm the original license and preserve source attribution.
4. Run `forgecat validate` from the profile's `for-forgecat/` directory.
5. If you mark a project-target platform as tested, include the matching native `for-<platform>` artifact. For every tested platform, note the install/runtime evidence in the PR.

## Maintainers

If you maintain an upstream repository that has been converted here, use the maintainer request issue template for corrections, takedown requests, or ownership changes. We can update attribution, fix platform notes, remove a profile, or help you submit the profile directly.


## Request a Profile

Open an issue with:

- Source repository URL
- Why the profile would be useful
- Target platform: `claude-code`, `cursor`, `codex`, `openclaw`, `hermes`, or all supported platforms
- Any license or setup requirements you already know about

Profiles with clear agent surfaces, permissive licensing, active usage, and strong developer value are the best candidates.

## Links

- Website: [forgecat.ai](https://forgecat.ai)
- Docs: [forgecat.ai/docs](https://forgecat.ai/docs)
- CLI: `npm install -g forgecat`

## License

This repository is distributed under the Apache License 2.0. See [LICENSE](./LICENSE).

Individual profiles may include content from their original source repositories and can carry their own license terms. Check each profile's `for-forgecat/profile.yml`, README, and included license files before redistributing or modifying profile content.
