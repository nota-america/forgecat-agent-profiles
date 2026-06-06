*written by Forgecat*

# CodeGraph

CodeGraph is a local-first code intelligence tool. It parses codebases with tree-sitter, stores every symbol, edge, and file in a local SQLite database, and exposes the result as a queryable knowledge graph over MCP.

This forgecat profile configures the CodeGraph MCP server for Claude Code and Cursor. It also ships a Codex TOML entry, but current Codex CLI runtime does not auto-load the project-local `.codex/config.toml` installed by forgecat.

## What Gets Installed

- Claude Code: CodeGraph MCP server entry in Claude's MCP config.
- Codex: CodeGraph MCP server entry in project-local Codex TOML config. The config format is valid, but direct `codex exec` runtime testing did not expose the server unless Codex was explicitly pointed at that `.codex` home.
- Cursor: native `.cursor/mcp.json` override with `--path ${workspaceFolder}`, matching CodeGraph's documented Cursor cwd requirement.

The MCP server itself provides agent-facing usage guidance in its `initialize` response, so this profile does not install duplicate rules or instruction files.

## Runtime

The MCP server is launched with:

```bash
npx -y @colbymchenry/codegraph@0.9.9 serve --mcp
```

Initialize each project before using the MCP tools:

```bash
npx @colbymchenry/codegraph@0.9.9 init -i
```

Codex users may need to copy the installed MCP entry into their active Codex config or run with a Codex home/config that includes this profile until forgecat and Codex project-local config loading are aligned.

## Source

- Repository: https://github.com/colbymchenry/codegraph
- Source commit: `bfa84d32b82b908b9a07f579cad91642063b68e7`
- License: MIT

## Original Documentation

The upstream project documentation is available at https://colbymchenry.github.io/codegraph/.
