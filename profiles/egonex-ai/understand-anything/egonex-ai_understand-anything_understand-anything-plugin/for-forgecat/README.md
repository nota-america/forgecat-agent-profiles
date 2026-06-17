*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Understand Anything Plugin

AI-powered codebase understanding for analyzing projects, building knowledge graphs, launching dashboards, explaining code, and onboarding teams.

## Tags

- codebase-analysis
- knowledge-graph
- architecture
- onboarding
- dashboard

## Installation

```bash
npx forgecat install @forgecat/egonex-ai_understand-anything_understand-anything-plugin
```

## Skills

- **understand** - Analyze a codebase to produce an interactive knowledge graph for understanding architecture, components, and relationships `skill`
- **understand-chat** - Use when you need to ask questions about a codebase or understand code using a knowledge graph `skill`
- **understand-dashboard** - Launch the interactive web dashboard to visualize a codebase's knowledge graph `skill`
- **understand-diff** - Use when you need to analyze git diffs or pull requests to understand what changed, affected components, and risks `skill`
- **understand-domain** - Extract business domain knowledge from a codebase and generate an interactive domain flow graph. Works standalone (lightweight scan) or derives from an existing /understand knowledge graph. `skill`
- **understand-explain** - Use when you need a deep-dive explanation of a specific file, function, or module in the codebase `skill`
- **understand-knowledge** - Analyze a Karpathy-pattern LLM wiki knowledge base and generate an interactive knowledge graph with entity extraction, implicit relationships, and topic clustering. `skill`
- **understand-onboard** - Use when you need to generate an onboarding guide for new team members joining a project `skill`

## Agents

- **architecture-analyzer** - Analyzes codebase file structure and import relationships into architectural layers. `agent`
- **article-analyzer** - Extracts entities, claims, and implicit relationships from wiki markdown. `agent`
- **assemble-reviewer** - Reviews merged graph output for semantic issues the merge script cannot fix. `agent`
- **domain-analyzer** - Extracts business domains, flows, and process steps. `agent`
- **file-analyzer** - Analyzes batches of source files into graph nodes and edges. `agent`
- **graph-reviewer** - Validates knowledge graphs for correctness, completeness, and quality. `agent`
- **knowledge-graph-guide** - Guides users through Understand-Anything graph structure and usage. `agent`
- **project-scanner** - Scans project files, languages, frameworks, imports, and complexity. `agent`
- **tour-builder** - Designs guided learning tours through codebases. `agent`

## Details

| Field | Value |
|---|---|
| Author | Egonex |
| Original repository | https://github.com/Egonex-AI/Understand-Anything/tree/main/understand-anything-plugin |
| Version | `0.1.2` |
| Original commit | `ba9ba1f73ce4f2ce35aeaaa55b01c9f8d4279bfe` |
| License | MIT |
| Source platform | Claude Code |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- Node.js and package dependencies from `package.json` / `pnpm-lock.yaml`
- Python 3 for bundled helper scripts used by domain and knowledge graph workflows
- A project git checkout for diff, commit, and staleness-aware workflows
