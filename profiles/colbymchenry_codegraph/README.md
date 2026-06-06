![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# CodeGraph

Local-first semantic code intelligence for AI coding agents through the CodeGraph MCP server, with upstream CodeGraph development/evaluation skills.

## Tags

- mcp
- code-intelligence
- knowledge-graph
- static-analysis
- developer-tools

## Installation

```bash
npx forgecat install @forgecat/colbymchenry_codegraph
```

## Skills / Agents / Commands

- **codegraph** — Configures the CodeGraph MCP server for semantic code intelligence. `mcp`
- **add-lang** — Adds tree-sitter language support to the CodeGraph source repo and benchmarks extraction/retrieval quality. `skill`
- **agent-eval** — Benchmarks CodeGraph retrieval quality on real repositories using the source repo's evaluation harness. `skill`

## MCPs

| Server | Transport | Command |
|---|---|---|
| codegraph | stdio | `npx -y @colbymchenry/codegraph@0.9.9 serve --mcp` |

## Details

| Field | Value |
|---|---|
| Author | colbymchenry |
| Original repository | https://github.com/colbymchenry/codegraph |
| Version | `0.0.3` |
| Original commit | `bfa84d32b82b908b9a07f579cad91642063b68e7` |
| License | MIT |
| Source platform | Multi-host MCP installer |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Partial |

## Usage

CodeGraph stores per-project indexes in `.codegraph/`. After installing this profile, initialize a project with `codegraph init -i` or `npx @colbymchenry/codegraph@0.9.9 init -i` before expecting MCP tools to answer from an index.

Codex note: forgecat installs a project-local `.codex/config.toml` entry, but current `codex exec` did not auto-load that file during runtime verification. Move that MCP entry into the active Codex config or point Codex at the installed `.codex` config if you need Codex support.

The `add-lang` and `agent-eval` skills are upstream CodeGraph development skills. They are intended to run inside a CodeGraph source checkout, because they reference the repo's `src/`, `scripts/`, tests, package scripts, and benchmark corpus.
