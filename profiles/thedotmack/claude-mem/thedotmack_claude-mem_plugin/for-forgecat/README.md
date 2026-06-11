*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# claude-mem plugin

Persistent memory and context compression profile converted from the `plugin/` scope of `thedotmack/claude-mem`.

## Installation

```bash
npx forgecat install @forgecat/thedotmack_claude-mem_plugin
```

## Included Surfaces

- **Skills**: 15 upstream skills from root `skills/` (preserved from upstream `plugin/skills/`)
- **Hooks**: Claude Code and Codex wrappers that preserve the upstream session-start, session-init, file-context, observation, and summarize flows
- **MCP**: `mcp-search` stdio server using `skills/how-it-works/runtime/scripts/mcp-server.cjs`
- **Runtime assets**: `skills/how-it-works/runtime/scripts/`, `skills/how-it-works/runtime/modes/`, and `skills/how-it-works/runtime/ui/`

## Details

| Field | Value |
|---|---|
| Author | Alex Newman |
| Original repository | `https://github.com/thedotmack/claude-mem/tree/main/plugin` |
| Version | `pending registry publish` |
| Original commit | `ec86333715faa41ed00c5365122c828b266d97b6` |
| License | `Apache-2.0` |
| Source platform | `Claude Code + Codex plugin manifests` |

## Compatibility

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Codex | Tested |
| Cursor | Partial |

## Runtime Notes

- `skills/how-it-works/runtime/scripts/worker-service.cjs` and `skills/how-it-works/runtime/scripts/server-beta-service.cjs` are bootstrap loaders that reconstruct the original upstream bundled files from chunked `*.partNN.txt` files at runtime.
- The first `session_start` hook runs the upstream `version-check.js` flow, which attempts a one-time `bun install` for the plugin dependencies. Manual `bun install` is only needed if you want to prewarm the runtime or recover from a failed bootstrap.
- The upstream `.claude-plugin/` and `.codex-plugin/` manifests are preserved as native artifacts only after runtime validation; they are intentionally not bundled in `for-forgecat/`.
