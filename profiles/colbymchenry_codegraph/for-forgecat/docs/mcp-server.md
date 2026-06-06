---
title: MCP Server
description: The tools CodeGraph exposes to AI agents over MCP.
---

CodeGraph runs as a Model Context Protocol server. Start it with:

```bash
codegraph serve --mcp
```

Agents configured by the installer launch this automatically. When a `.codegraph/` index exists, the agent uses the tools below.

## Tools

| Tool | Purpose |
|---|---|
| `codegraph_search` | Find symbols by name across the codebase |
| `codegraph_context` | Build relevant code context for a task — composes search + node + callers + callees in one call |
| `codegraph_trace` | Trace the call path between two symbols in one call |
| `codegraph_callers` | Find what calls a function |
| `codegraph_callees` | Find what a function calls |
| `codegraph_impact` | Analyze what code is affected by changing a symbol |
| `codegraph_node` | Get details about a specific symbol |
| `codegraph_explore` | Return source for several related symbols grouped by file |
| `codegraph_files` | Get the indexed file structure |
| `codegraph_status` | Check index health and statistics |

## How agents should use it

CodeGraph is the pre-built search index. For architecture, trace, or where-is-X questions, an agent should answer in a handful of CodeGraph calls rather than re-deriving the answer with grep and file reads.
