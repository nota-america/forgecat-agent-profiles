![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# tldraw

Draw and visually collaborate with your agents using the official tldraw Cursor marketplace plugin configuration.

## Tags

- cursor
- mcp
- productivity
- whiteboard

## Installation

```bash
npx forgecat install @forgecat/tldraw_tldraw
```

## Platform Artifacts
- `for-cursor/` is copied from the upstream Cursor-native source: `https://github.com/tldraw/tldraw` commit `8e0d015dc0b0370783ff2359acae95e210b14ff9` path `.cursor/rules/claude-md.mdc` and `apps/mcp-app/plugins/tldraw-mcp/mcp.json`.

## Skills

- **tldraw** — Connects to the hosted tldraw MCP server for collaborative drawing workflows. `mcp`

## MCPs

| Server | Transport | URL |
|---|---|---|
| tldraw | http | https://tldraw-mcp-app.tldraw.workers.dev/mcp |

## Details

| Field | Value |
|---|---|
| Author | tldraw |
| Original repository | https://github.com/tldraw/tldraw |
| Version | `0.0.0` |
| Original commit | `8e0d015` |
| License | `-` |
| Source platform | Cursor |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Tested |
| Codex | Partial |
