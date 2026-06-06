*written by Forgecat*

# CodeGraph

CodeGraph is a local-first code intelligence tool. It parses codebases with tree-sitter, stores every symbol, edge, and file in a local SQLite database, and exposes the result as a queryable knowledge graph over MCP.

This forgecat profile configures the CodeGraph MCP server for Claude Code, Codex, and Cursor.

## What Gets Installed

- Claude Code: CodeGraph MCP server entry in Claude's MCP config.
- Codex: CodeGraph MCP server entry in Codex TOML config.
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

## Source

- Repository: https://github.com/colbymchenry/codegraph
- Source commit: `bfa84d32b82b908b9a07f579cad91642063b68e7`
- License: MIT

## Original Documentation

The upstream project documentation is available at https://colbymchenry.github.io/codegraph/.
