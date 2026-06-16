# ForgeCat Agent Profiles

Install production-ready agent profiles for Claude Code, Cursor, and Codex with one command.

[![Profiles](https://img.shields.io/badge/profiles-172-blue)](#browse-profiles)
[![Collections](https://img.shields.io/badge/collections-33-blue)](#browse-profiles)
[![Platforms](https://img.shields.io/badge/platforms-Claude%20Code%20%7C%20Cursor%20%7C%20Codex-green)](#supported-platforms)

![ForgeCat Agent Profiles](./assets/forgecat_banner.png)

ForgeCat profiles package the files that make coding agents useful: skills, agents, rules, commands, hooks, and MCP settings. This repository curates open agent profiles from public projects and turns them into installable packages that work across supported tools.

## Install a Profile

Install the ForgeCat CLI:

```bash
npm install -g forgecat
```

Search for profiles:

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

## Why Star This Repo

This repository is the public catalog of ForgeCat-compatible agent profiles. Starring it helps developers discover reusable agent workflows instead of rebuilding the same skills, rules, and MCP setup in each tool.

You should watch or star this repo if you want:

- New agent profiles as they are converted and tested
- Cross-platform ports of useful Claude Code, Cursor, and Codex workflows
- Practical examples of profile packaging, attribution, licensing, and platform compatibility
- A place to request profiles from public agent-skill repositories

## Supported Platforms

| Platform | ForgeCat id | What gets installed |
|---|---|---|
| Claude Code | `claude-code` | Claude-native skills, agents, commands, MCP, hooks, and project settings where supported |
| Cursor | `cursor` | Cursor rules, agents, MCP configuration, and compatible profile resources |
| Codex | `codex` | Codex skills, instructions, MCP configuration, hooks, and compatible profile resources |

Each profile declares its tested and partial platforms in `for-forgecat/profile.yml`. When a profile is marked tested, the matching native `for-<platform>` artifact should also exist in the profile directory.

## Featured Profiles

| Profile | Install | Good for |
|---|---|---|
| [OpenAI frontend skill](./profiles/openai/skills/openai_skills_frontend-skill) | `forgecat install @forgecat/openai_skills_frontend-skill -p codex` | Visually strong web apps, landing pages, prototypes, and UI polish |
| [Compound Engineering](./profiles/everyinc/compound-engineering-plugin) | `forgecat install @forgecat/everyinc_compound-engineering-plugin -p claude-code` | Code review, research, planning, design review, and engineering workflows |
| [Superpowers](./profiles/obra/superpowers) | `forgecat install @forgecat/obra_superpowers -p cursor` | Planning, TDD, debugging, review, subagents, and session-start workflow guidance |
| [tldraw](./profiles/tldraw/tldraw) | `forgecat install @forgecat/tldraw_tldraw -p cursor` | Visual collaboration with agent workflows |
| [Azure skills](./profiles/microsoft/azure-skills) | `forgecat search azure` | Azure deployment, observability, compliance, RBAC, storage, and AI workflows |

## Browse Profiles

Profiles are grouped by their original source owner and repository:

```text
profiles/<source-owner>/<source-repository-or-collection>/
```

<details>
<summary>Show all collections</summary>

| Collection | Profiles | Description |
|---|---:|---|
| [addyosmani/agent-skills](./profiles/addyosmani/agent-skills) | 1 | Production-grade engineering skills pack by Addy Osmani |
| [anthropics/claude-code](./profiles/anthropics/claude-code) | 1 | Claude Code profile conversion |
| [anthropics/claude-plugins-official](./profiles/anthropics/claude-plugins-official) | 16 | Official Anthropic Claude plugin conversions for skills, agents, commands, and MCP |
| [anthropics/knowledge-work-plugins](./profiles/anthropics/knowledge-work-plugins) | 15 | Knowledge-work plugins for legal, finance, HR, marketing, operations, sales, and more |
| [anthropics/skills](./profiles/anthropics/skills) | 17 | Anthropic skill profiles for documents, spreadsheets, slides, web apps, themes, and more |
| [awslabs/aidlc-workflows](./profiles/awslabs/aidlc-workflows) | 1 | AWS AI-DLC workflow rules for planning, construction, and governance |
| [coreyhaines31/marketingskills](./profiles/coreyhaines31/marketingskills) | 1 | Marketing skills for conversion, copywriting, SEO, paid ads, analytics, and GTM work |
| [cursor/plugins](./profiles/cursor/plugins) | 3 | Cursor plugins for team workflows, continual learning, and iterative agent loops |
| [dietrichgebert/ponytail](./profiles/dietrichgebert/ponytail) | 1 | Ponytail mode hooks and workflow support |
| [everyinc/compound-engineering-plugin](./profiles/everyinc/compound-engineering-plugin) | 1 | AI-powered development workflows for review, research, design, and delivery |
| [fivetaku/fablize](./profiles/fivetaku/fablize) | 1 | Claude Code harness for grounded multi-step work and verification discipline |
| [forgecat/forgecat-agent-profiles](./profiles/forgecat/forgecat-agent-profiles) | 1 | ForgeCat-authored orchestration profile built from existing profile packages |
| [garrytan/gstack](./profiles/garrytan/gstack) | 1 | Garry's Stack engineering workflow skills for planning, QA, review, and deployment |
| [google-gemini/gemini-skills](./profiles/google-gemini/gemini-skills) | 3 | Gemini API, interactions API, and live API development skills |
| [googleworkspace/cli](./profiles/googleworkspace/cli) | 1 | Google Workspace CLI skills for Drive, Gmail, Calendar, Docs, Sheets, Slides, Chat, and Apps Script |
| [juliusbrussee/caveman](./profiles/juliusbrussee/caveman) | 1 | Caveman communication mode with compressed skills, commands, agents, and hooks |
| [kepano/obsidian-skills](./profiles/kepano/obsidian-skills) | 1 | Obsidian vault, Markdown, Bases, Canvas, and CLI workflows |
| [leonxlnx/taste-skill](./profiles/leonxlnx/taste-skill) | 1 | Taste Skill package for premium frontend design and image-to-code workflows |
| [mattpocock/skills](./profiles/mattpocock/skills) | 1 | TypeScript skills by Matt Pocock |
| [microsoft/azure-skills](./profiles/microsoft/azure-skills) | 20 | Microsoft Azure skills for deployment, observability, compliance, storage, AI, and more |
| [msitarzewski/agency-agents](./profiles/msitarzewski/agency-agents) | 13 | Agency role agents for academic, design, engineering, marketing, sales, and operations teams |
| [multica-ai/andrej-karpathy-skills](./profiles/multica-ai/andrej-karpathy-skills) | 1 | Andrej Karpathy coding guidelines for focused, verifiable agent work |
| [obra/superpowers](./profiles/obra/superpowers) | 1 | Superpowers software-development methodology with hook-backed startup context |
| [openai/skills](./profiles/openai/skills) | 45 | OpenAI skills for frontend, Figma, Playwright, deployment, documents, security, and more |
| [orchestra-research/ai-research-skills](./profiles/orchestra-research/ai-research-skills) | 1 | AI research skills for training, evaluation, inference, MLOps, RAG, multimodal systems, and papers |
| [paramchoudhary/resumeskills](./profiles/paramchoudhary/resumeskills) | 1 | Resume and career-development skills for ATS optimization, resume writing, interview prep, and offer decisions |
| [remotion-dev/skills](./profiles/remotion-dev/skills) | 1 | Remotion best-practices skill for video creation in React |
| [tldraw/tldraw](./profiles/tldraw/tldraw) | 1 | Visual collaboration profile powered by the tldraw MCP server |
| [upstash/context7](./profiles/upstash/context7) | 1 | Context7 MCP integration for up-to-date documentation lookup |
| [vercel-labs/agent-skills](./profiles/vercel-labs/agent-skills) | 7 | Vercel agent skills for deployment, React, UI audits, and workflow patterns |
| [voltagent/awesome-codex-subagents](./profiles/voltagent/awesome-codex-subagents) | 10 | Codex subagents for development, infrastructure, security, and research |
| [xixu-me/skills](./profiles/xixu-me/skills) | 1 | Xi Xu skills for userscripts, GitHub Actions docs, secure hosting, browser workflows, and tooling |
| [yeachan-heo/oh-my-claudecode_agents](./profiles/yeachan-heo/oh-my-claudecode_agents) | 1 | Agents-only Claude Code orchestration profile from oh-my-claudecode |

</details>

Total: 172 profiles across 33 collections.

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

`for-forgecat/` is the canonical ForgeCat package source. Native `for-claude`, `for-cursor`, and `for-codex` directories are added when the profile has been tested and materialized for those platforms.

## Contributing

Contributions are welcome when they improve installability, source fidelity, documentation, or platform support.

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a PR.

Good contributions include:

- Adding a new profile from a public source repository
- Fixing profile packaging when installed files do not match the original source behavior
- Adding missing native platform artifacts after a real platform test
- Improving README clarity, installation examples, attribution, or license metadata
- Reporting a profile that installs incorrectly or no longer matches its upstream source

Before opening a PR:

1. Keep the profile under `profiles/<source-owner>/<source-repository-or-collection>/`.
2. Verify the upstream source repository directly. Do not rely only on copied metadata.
3. Confirm the original license and preserve source attribution.
4. Run `forgecat validate` from the profile's `for-forgecat/` directory.
5. If you mark a platform as tested, include the matching native `for-<platform>` artifact and note the install/runtime evidence in the PR.

## Request a Profile

Open an issue with:

- Source repository URL
- Why the profile would be useful
- Target platform: `claude-code`, `cursor`, `codex`, or all supported platforms
- Any license or setup requirements you already know about

Profiles with clear agent surfaces, permissive licensing, active usage, and strong developer value are the best candidates.

## Links

- Website: [forgecat.ai](https://forgecat.ai)
- Docs: [forgecat.ai/docs](https://forgecat.ai/docs)
- CLI: `npm install -g forgecat`

## License

This repository is distributed under the Apache License 2.0. See [LICENSE](./LICENSE).

Individual profiles may include content from their original source repositories and can carry their own license terms. Check each profile's `for-forgecat/profile.yml`, README, and included license files before redistributing or modifying profile content.
