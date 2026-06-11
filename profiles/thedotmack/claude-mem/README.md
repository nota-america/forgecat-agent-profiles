![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# claude-mem

Converted profiles from `thedotmack/claude-mem`.

## Profiles

- `thedotmack_claude-mem_plugin` — claude-mem plugin scope with persistent memory skills, Codex/Claude hook runtime wrappers, chunked worker/MCP runtime assets, mode presets, and viewer assets.

## Installation

```bash
npx forgecat install @forgecat/thedotmack_claude-mem_plugin
```

The plugin dependencies are bootstrapped on first session start by the bundled `version-check.js` flow. If you want to prewarm them manually, run `bun install` in `.forgecat/profiles/@forgecat/thedotmack_claude-mem_plugin/skills/how-it-works/runtime`.
