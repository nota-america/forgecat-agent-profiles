*written by Forgecat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# claude-code-setup

Analyze codebases and recommend tailored Claude Code automations such as hooks, skills, MCP servers, and subagents.

## Tags

- anthropic
- claude-official
- plugin

## Installation

```bash
npx forgecat install @forgecat/anthropics-claude-plugins-official-claude-code-setup
```

## Skills

- **claude-automation-recommender** — Analyze a codebase and recommend Claude Code automations (hooks, subagents, skills, plugins, MCP servers). Use when user asks for automation recommendations, wants to optimize their Claude Code setup, mentions improving Claude Code workflows, asks how to first set up Claude Code for a project, or wants to know what Claude Code features they should use.

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup |
| Version | `0.0.0` |
| Original commit | `cf62a6c` |
| License | Apache-2.0 |
| Source platform | Claude Code plugin |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

---
*written by original source*

# Claude Code Setup Plugin

Analyze codebases and recommend tailored Claude Code automations - hooks, skills, MCP servers, and more.

## What It Does

Claude uses this skill to scan your codebase and recommend the top 1-2 automations in each category:

- **MCP Servers** - External integrations (context7 for docs, Playwright for frontend)
- **Skills** - Packaged expertise (Plan agent, frontend-design)
- **Hooks** - Automatic actions (auto-format, auto-lint, block sensitive files)
- **Subagents** - Specialized reviewers (security, performance, accessibility)
- **Slash Commands** - Quick workflows (/test, /pr-review, /explain)

This skill is **read-only** - it analyzes but doesn't modify files.

## Usage

```
"recommend automations for this project"
"help me set up Claude Code"
"what hooks should I use?"
```

<img src="automation-recommender-example.png" alt="Automation recommender analyzing a codebase and providing tailored recommendations" width="600">

## Author

Isabella He (isabella@anthropic.com)
