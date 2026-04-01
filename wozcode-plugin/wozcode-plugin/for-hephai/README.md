*written by Hephai*

# WozCode Plugin

WozCode enhances Claude Code with token-optimized file tools, smart search, batch editing, SQL introspection, and cost-optimized subagent delegation. The plugin replaces built-in file operations with smarter alternatives that reduce token usage and API costs through intelligent batching and delegation.

## Architecture

The plugin centers on three specialized agents:

- **woz:code** (main agent, inherits model) — Handles coding, editing, search, and SQL. Delegates to explore and plan as subagents when beneficial. Disallows standard Read/Edit/Write/Grep/Glob tools in favor of optimized MCP alternatives.
- **woz:explore** (haiku, medium effort) — Fast read-only agent for file searches, code reading, schema lookups, and codebase questions. Uses Search and Sql MCP tools exclusively.
- **woz:plan** (haiku, medium effort) — Software architect for designing implementation plans, identifying critical files, and considering trade-offs. Read-only planning focused.

The main agent automatically delegates exploration and planning tasks to the lighter-weight haiku-powered subagents to save cost while handling coding work itself.

## Tool Strategy

WozCode provides MCP tools that replace Claude Code's built-in file operations:

- **mcp__plugin_woz_code__Search** — Replaces grep, find, ls, cat, head, tail for repository exploration and file reading. Supports glob patterns, content regex, and efficient batching.
- **mcp__plugin_woz_code__Edit** — Batch editing across multiple files in a single call via `edits[]` array. Encourages cross-file batching to minimize round-trips.
- **mcp__plugin_woz_code__Sql** — Database introspection and querying. Connect returns full schema; encourages combining multiple queries with CTEs/UNION.
- **mcp__plugin_woz_code__Recall** — Semantic search of past Claude Code sessions for commands, knowledge, and solutions.
- **mcp__plugin_woz_code__Bash** — Standard bash execution (redirected via hooks for tracking).

## Hooks and Telemetry

The plugin uses extensive hooks for tool redirection and savings tracking:

- **SessionStart** — Initializes session tracking and loads user context
- **PreToolUse** (Bash, mcp__plugin_woz_code__Bash) — Redirects tool calls for tracking
- **PostToolUse** (mcp__plugin_woz_code__Edit) — Nudges toward batch editing when multiple individual edits detected
- **PostToolUse** (all tools) — Tracks tool usage for savings calculations
- **Stop** — Finalizes telemetry and saves session metrics

All hook handlers are Node.js scripts in `scripts/` directory.

## Skills

Five command skills provide user-facing functionality:

- **woz-savings** — Displays savings report (calls saved, time saved, tokens saved, lifetime totals)
- **woz-login** — Authentication flow (browser-based or manual token entry for headless)
- **woz-logout** — Clears credentials
- **woz-recall** — Triggers semantic search of past sessions (also auto-triggers on phrases like "remember when", "last time we", etc.)
- **woz-status** — Shows authentication status

All skills execute via `wozcode-cli.js` or dedicated scripts.

## Runtime Dependencies

- **package.json** — Node.js dependencies for MCP server and CLI
- **settings.json** — Plugin configuration
- **scripts/** — Hook handlers (6 scripts) and CLI implementation
- **servers/code-server.js** — MCP server implementation
- **mcp.jsonc** — MCP server registration

## Authentication

WozCode requires a Woz account. On first tool use, the user is prompted to authenticate. Login flow:

1. Browser-based: Opens auth URL automatically
2. Headless/SSH: Prints auth URL; user completes login, copies token JSON, pastes via `/woz-login --token '{...}'`

Credentials are saved and automatically refreshed.

## Cost Optimization Principles

The plugin enforces strict cost-reduction strategies in agent prompts:

- **Minimize turns** — Never send text-only messages; combine explanation with tool calls
- **Never re-read after write/edit** — Tools confirm success; re-reading is wasteful
- **Batch all changes** — Use `edits[]` array for same-file or cross-file changes
- **Delegate cheaply** — Use haiku-powered explore/plan subagents for non-editing tasks
- **Verify before implementing** — Read sample data first; assumptions cause bugs
- **Try simplest approach first** — Avoid sophisticated algorithms when simple scripts work

---

*written by original source*

# WOZCODE Plugin for Claude Code

Smarter tools for Claude Code that reduce token usage and cost. Replaces built-in file tools with optimized alternatives — fewer tokens per tool call means cheaper sessions that compound over time.

## Getting Started

### 1. Install

From GitHub — inside a Claude Code session, run:

```
/plugin marketplace add WithWoz/wozcode-plugin
/plugin install woz@wozcode-marketplace
```

### 2. Restart Claude Code

Quit your current session and start a new one:

```bash
claude
```

### 3. Verify it's working

Look for **`woz:code`** on the right side of the text input field:

![woz:code badge](woz-code-badge.png)

That badge means the WOZCODE agent is active.

### 4. Log in

WOZCODE requires a Woz account. On first tool use you'll be prompted to log in, or do it explicitly:

```
/woz-login
```

Or type `/woz` to see all available WOZCODE commands.

This opens your browser to complete sign-in. Credentials are saved and refreshed automatically.

**Headless / SSH?** The terminal prints an auth URL. Open it manually, complete login, copy the token JSON from the success page, and paste it back:

```
/woz-login --token '{"access_token":"...","refresh_token":"..."}'
```

## Usage

Just use Claude Code normally — WOZCODE tools activate automatically. The plugin replaces built-in file tools with smarter versions behind the scenes.

### Agents

| Agent | What it does |
|-------|--------------|
| `woz:code` | Main agent — coding, editing, search, SQL. Auto-delegates to the others when useful. |
| `woz:explore` | Fast read-only codebase exploration (runs on haiku for speed) |
| `woz:plan` | Architecture and implementation planning (runs on haiku for speed) |

You don't need to switch agents manually. `woz:code` delegates to `woz:explore` and `woz:plan` as subagents when it makes sense.

### Commands

| Command | Description |
|---------|-------------|
| `/woz-login` | Log in to your Woz account |
| `/woz-logout` | Clear credentials |
| `/woz-recall` | Recall saved context and preferences |
| `/woz-savings` | Show estimated savings report (roundtrips, time, tokens, cost) |
| `/woz-status` | Check authentication status |
| `/reload-plugins` | Reload plugins to get latest updates |

You can also type `/woz` to see all available WozCode commands in one place.

## Managing the plugin

```
/plugin disable woz@wozcode-marketplace     # temporarily disable
/plugin enable woz@wozcode-marketplace      # re-enable
/plugin marketplace remove WithWoz/wozcode-plugin   # remove
```

### Updating

To get the latest version:

```
/reload-plugins
```

If you need to fully reinstall:

```
/plugin marketplace remove WithWoz/wozcode-plugin
/plugin marketplace add WithWoz/wozcode-plugin
/plugin install woz@wozcode-marketplace
```

> **Note:** After reinstalling, quit and restart Claude Code for changes to take effect.

### Debug

To explicitly launch with the WOZCODE agent (not normally needed):

```bash
claude --agent woz:code
```
