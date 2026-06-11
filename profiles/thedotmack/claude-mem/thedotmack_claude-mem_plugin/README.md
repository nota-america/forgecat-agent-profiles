![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# claude-mem plugin

Persistent memory and context compression profile converted from the `plugin/` scope of `thedotmack/claude-mem`.

## Tags

- memory
- hooks
- mcp
- claude-code
- codex

## Installation

```bash
npx forgecat install @forgecat/thedotmack_claude-mem_plugin
```

## What It Includes

- **15 skills** for planning, memory lookup, codebase priming, timeline reporting, weekly digests, and release support
- **Cross-session hooks** for Claude Code and Codex
- **`mcp-search` MCP server** backed by the bundled claude-mem runtime
- **Observation modes and viewer assets** used by the worker runtime

## Details

| Field | Value |
|---|---|
| Author | Alex Newman |
| Original repository | https://github.com/thedotmack/claude-mem/tree/main/plugin |
| Version | `pending registry publish` |
| Original commit | `ec86333715faa41ed00c5365122c828b266d97b6` |
| License | Apache-2.0 |
| Source platform | Claude Code + Codex plugin manifests |

## Compatibility

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Codex | Partial |
| Cursor | Partial |

## Runtime Notes

- The two oversized upstream worker bundles are preserved as chunked source files plus tiny bootstrap loaders so the shipped profile stays within forgecat's 1 MB per-file cap.
- After install, run `cd .forgecat/profiles/@forgecat/thedotmack_claude-mem_plugin/plugin && bun install` before using the hooks or MCP server. Forgecat does not currently install bundled JS dependencies automatically.
