*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# claude-mem plugin

Persistent memory and context compression profile converted from the `plugin/` scope of `thedotmack/claude-mem`.

## Installation

```bash
npx forgecat install @forgecat/thedotmack_claude-mem_plugin
cd .forgecat/profiles/@forgecat/thedotmack_claude-mem_plugin/plugin
bun install
```

## Included Surfaces

- **Skills**: 15 upstream skills from `plugin/skills/`
- **Hooks**: Claude Code and Codex wrappers that preserve the upstream session-start, session-init, file-context, observation, and summarize flows
- **MCP**: `mcp-search` stdio server using `plugin/scripts/mcp-server.cjs`
- **Runtime assets**: `plugin/scripts/`, `plugin/modes/`, and `plugin/ui/`

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
| Claude Code | Partial |
| Codex | Partial |
| Cursor | Partial |

## Runtime Notes

- `plugin/scripts/worker-service.cjs` and `plugin/scripts/server-beta-service.cjs` are bootstrap loaders that reconstruct the original upstream bundled files from chunked `*.partNN.txt` files at runtime.
- The upstream `.claude-plugin/` and `.codex-plugin/` manifests are preserved as native artifacts only after runtime validation; they are intentionally not bundled in `for-forgecat/`.
- Forgecat does not currently run `bun install` for shipped JS bundles, so dependency installation remains a post-install step.
