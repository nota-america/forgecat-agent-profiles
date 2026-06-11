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

The first `session_start` hook bootstraps the bundled plugin dependencies automatically. If you want to prewarm them before opening Claude Code or Codex, run `bun install` in `.forgecat/profiles/@forgecat/thedotmack_claude-mem_plugin/plugin`.

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
| Claude Code | Tested |
| Codex | Tested |
| Cursor | Partial |

## Runtime Notes

- The two oversized upstream worker bundles are preserved as chunked source files plus tiny bootstrap loaders so the shipped profile stays within forgecat's 1 MB per-file cap.
- The bundled `version-check.js` flow attempts a one-time dependency install on first session start. Manual `bun install` is only needed if you want to prewarm the runtime or recover from a failed bootstrap.
