![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# CodeGraph

Local-first semantic code intelligence for AI coding agents through the CodeGraph MCP server.

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

- **codegraph** — MCP-only profile. Configures the CodeGraph MCP server; agent-facing guidance is delivered by the MCP server during initialization. `mcp`

## MCPs

| Server | Transport | Command |
|---|---|---|
| codegraph | stdio | `npx -y @colbymchenry/codegraph@0.9.9 serve --mcp` |

## Details

| Field | Value |
|---|---|
| Author | colbymchenry |
| Original repository | https://github.com/colbymchenry/codegraph |
| Version | `0.0.0` |
| Original commit | `bfa84d32b82b908b9a07f579cad91642063b68e7` |
| License | MIT |
| Source platform | Multi-host MCP installer |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |

## Usage

CodeGraph stores per-project indexes in `.codegraph/`. After installing this profile, initialize a project with `codegraph init -i` or `npx @colbymchenry/codegraph@0.9.9 init -i` before expecting MCP tools to answer from an index.
