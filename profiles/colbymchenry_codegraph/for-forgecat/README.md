*written by Forgecat*

# CodeGraph

CodeGraph is a local-first code intelligence tool. It parses codebases with tree-sitter, stores symbols, edges, and files in a local SQLite database, and exposes the result as a queryable knowledge graph over MCP.

This forgecat profile converts the source repository's agentic surface into Forgecat resources:

- CodeGraph MCP server configuration for Claude Code, Cursor, and Codex.
- Upstream Claude skills from `.claude/skills`: `add-lang` and `agent-eval`.
- Source documentation needed to understand the original runtime and installer behavior.

## What Gets Installed

- Claude Code: CodeGraph MCP server entry in Claude's MCP config.
- Codex: CodeGraph MCP server entry in project-local Codex TOML config. The config format is valid, but direct `codex exec` runtime testing did not expose the server unless Codex was explicitly pointed at that `.codex` home.
- Cursor: native `.cursor/mcp.json` override with `--path ${workspaceFolder}`, matching CodeGraph's documented Cursor cwd requirement.
- Skills:
  - `add-lang`: adds tree-sitter language support to the CodeGraph source repo, writes tests, and runs extraction/retrieval benchmarks.
  - `agent-eval`: benchmarks CodeGraph retrieval quality on real repositories using the source repo's evaluation harness.

The upstream skills are source-repo development skills. They expect to run from a CodeGraph source checkout with that repo's `src/`, `scripts/`, tests, and package scripts present.

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

## Source Rule Handling

The source repo also contains `.cursor/rules/codegraph.mdc`, but it is not installed as a rule here. The upstream repo documents that CodeGraph stopped writing duplicate agent instruction files and now uses MCP `initialize` instructions as the single source of truth. The checked-in Cursor rule is dogfooding configuration for the CodeGraph repo itself and includes tool names that are not present in the current published `0.9.9` MCP tool list, so installing it would reduce runtime correctness.

## Source

- Repository: https://github.com/colbymchenry/codegraph
- Source commit: `bfa84d32b82b908b9a07f579cad91642063b68e7`
- License: MIT

## Original Documentation

The upstream project documentation is available at https://colbymchenry.github.io/codegraph/.
