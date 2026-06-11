# 🐾 ForgeCat Agent Profiles

Curated collection of AI Agent Profiles — ready to install and use across platforms.

**Forge your agents. Stamp your mark.**

---

## What is this?

This repository hosts a curated set of **AI Agent Profiles** for [ForgeCat](https://forgecat.ai). An Agent Profile is a portable bundle of configuration files — agents, skills, rules, commands, and MCP settings — packaged together so you can supercharge your AI environment with a single command.

---

## Collections

| Collection | Profiles | Description |
|---|---|---|
| [addyosmani/agent-skills](./profiles/addyosmani/agent-skills) | 1 | Production-grade engineering skills pack by Addy Osmani |
| [anthropics/claude-code](./profiles/anthropics/claude-code) | 1 | Claude Code profile conversion |
| [anthropics/claude-plugins-official](./profiles/anthropics/claude-plugins-official) | 16 | Hook-free official Anthropic Claude plugin conversions (skills, agents, commands, MCP) |
| [anthropics/knowledge-work-plugins](./profiles/anthropics/knowledge-work-plugins) | 15 | Knowledge work plugins — legal, finance, HR, marketing, operations, and more |
| [anthropics/skills](./profiles/anthropics/skills) | 17 | Anthropic skills collection converted from `anthropics/skills` subpaths (docx, pdf, pptx, xlsx, mcp-builder, and more) |
| [awslabs/aidlc-workflows](./profiles/awslabs/aidlc-workflows) | 1 | AWS AI-DLC workflow rules profile for planning, construction, and governance workflows |
| [cursor/plugins](./profiles/cursor/plugins) | 3 | Plugins for Cursor — team workflows, continual learning, and iterative agent loops |
| [everyinc/compound-engineering-plugin](./profiles/everyinc/compound-engineering-plugin) | 1 | AI-powered development profile with deep workflows for review, research, and design |
| [garrytan/gstack](./profiles/garrytan/gstack) | 1 | Garry's Stack — 35+ AI engineering workflow skills for planning, QA, review, and deployment |
| [google-gemini/gemini-skills](./profiles/google-gemini/gemini-skills) | 3 | Google Gemini skills set converted into installable ForgeCat profiles (API dev, interactions API, live API) |
| [juliusbrussee/caveman](./profiles/juliusbrussee/caveman) | 1 | Julius Brussee's caveman communication mode with compressed skills, commands, agents, and hooks |
| [kepano/obsidian-skills](./profiles/kepano/obsidian-skills) | 1 | Agent skills for creating and editing Obsidian vault files, Markdown notes, Bases, Canvas files, and Obsidian CLI workflows |
| [leonxlnx/taste-skill](./profiles/leonxlnx/taste-skill) | 1 | Skill-only Taste Skill package for premium frontend design, redesign, image-to-code, and image-generation workflows |
| [mattpocock/skills](./profiles/mattpocock/skills) | 1 | TypeScript skills by Matt Pocock converted into an installable ForgeCat profile |
| [microsoft/azure-skills](./profiles/microsoft/azure-skills) | 20 | Microsoft Azure skills converted from `microsoft/azure-skills`, including the full Azure plugin profile plus split legacy skill profiles |
| [msitarzewski/agency-agents](./profiles/msitarzewski/agency-agents) | 13 | Team role agents for agencies — academic, design, engineering, marketing, sales, and more |
| [multica-ai/andrej-karpathy-skills](./profiles/multica-ai/andrej-karpathy-skills) | 1 | Andrej Karpathy coding guidelines for focused, verifiable agent work |
| [obra/superpowers](./profiles/obra/superpowers) | 1 | Superpowers profile with hook-backed startup context |
| [openai/skills](./profiles/openai/skills) | 45 | Skills for OpenAI platforms — ASP.NET Core, Figma, Playwright, and more |
| [tldraw/tldraw](./profiles/tldraw/tldraw) | 1 | Visual collaboration profile powered by the tldraw MCP server |
| [upstash/context7](./profiles/upstash/context7) | 1 | Context7 MCP integration for up-to-date documentation lookup |
| [vercel-labs/agent-skills](./profiles/vercel-labs/agent-skills) | 7 | Vercel agent skill collection split into installable profiles (deploy, React, UI audit, and workflow skills) |
| [voltagent/awesome-codex-subagents](./profiles/voltagent/awesome-codex-subagents) | 10 | Subagents for OpenAI Codex — development, infrastructure, security, research |
| [xixu-me/skills](./profiles/xixu-me/skills) | 1 | Xi Xu Agent Skills collection for userscripts, GitHub Actions docs, secure hosting, browser workflows, and Xdrop/Xget/tzst tooling |
| [yeachan-heo/oh-my-claudecode_agents](./profiles/yeachan-heo/oh-my-claudecode_agents) | 1 | Agents-only Claude Code orchestration profile from oh-my-claudecode |

Total profiles: **164** across **25** collections.

### Profile Directory Layout

Profiles are grouped by the original GitHub source owner:

```text
profiles/<source-owner>/<source-repository-or-collection>/...
```

Use lowercase owner and collection directory names. For example, profiles from `https://github.com/anthropics/skills` live under `profiles/anthropics/skills`, and profiles from `https://github.com/anthropics/claude-plugins-official` live under `profiles/anthropics/claude-plugins-official`.

---

## Quick Start

```bash
# Install the CLI
npm install -g forgecat

# Browse profiles
forgecat search <keyword>

# Install a profile
forgecat install <@scope/profile>
```

Visit [forgecat.ai/docs](https://forgecat.ai/docs) for full documentation.

---

## Links

- **Website**: [forgecat.ai](https://forgecat.ai)
- **Docs**: [forgecat.ai/docs](https://forgecat.ai/docs)
- **CLI**: `npm install -g forgecat`

---

## Contributing

Run the layout check before adding or moving profiles:

```bash
ruby scripts/check-profile-layout.rb
```

---

## License

This repository is licensed under Apache License 2.0.

Individual profiles may carry their own licenses. See each profile directory for details.
