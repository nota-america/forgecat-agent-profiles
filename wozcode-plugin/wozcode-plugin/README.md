![Hephai](https://raw.githubusercontent.com/nota-america/agent-hub/main/assets/hephai_banner.png)

# WozCode Plugin

Token-optimizing plugin with smart search, batch editing, SQL introspection, and cost-optimized subagent delegation

## Tags

- wozcode
- token-optimization
- subagent-delegation
- file-tools
- batch-editing
- cost-reduction

## Installation

```bash
npx hephai install @hephai-nota/wozcode-plugin
```

## Agents

- **code** — WozCode enhanced coding agent with smart search, batch editing, SQL introspection, and cost-optimized subagent delegation. Use as the default main thread agent. `main`
- **explore** — Fast agent for file searches, reading code, schema lookups, and codebase questions. Does NOT edit files. `utility`
- **plan** — Software architect agent for designing implementation plans. Use for planning strategy, identifying critical files, and considering trade-offs. `planning`

## Skills

- **woz-savings** — Show WozCode savings report - calls saved, time saved, tokens saved, and lifetime totals.
- **woz-login** — Authenticate with the Woz service. Use when the user needs to log in or when authentication is required.
- **woz-logout** — Clear stored Woz credentials and log out.
- **woz-recall** — Search past Claude Code sessions for commands, knowledge, solutions, and context. TRIGGER when user says "remember when", "we did this before", "we've done this", "last time we", "in a previous session", "how did we", "what was that command", "I remember doing", "find that thing from before", "we figured out", "there was a way to", or any reference to past work/sessions/conversations. Also trigger on explicit /recall.
- **woz-status** — Show current Woz authentication status.

## Hooks

- **SessionStart** — Initialize WozCode session tracking and metrics
- **PreToolUse** (Bash) — Redirect standard file tools to WozCode optimized alternatives
- **PreToolUse** (mcp__plugin_woz_code__Bash) — Redirect WozCode Bash tool calls
- **PostToolUse** (mcp__plugin_woz_code__Edit) — Encourage batch editing when multiple individual edits are detected
- **PostToolUse** — Track tool usage telemetry for savings calculations
- **Stop** — Finalize session telemetry and save metrics

## MCP

| Server | Implementation | Description |
|--------|----------------|-------------|
| woz_code | Node.js | WozCode MCP server providing Search, Edit, Sql, Recall, and Bash tools with token optimization |

## Details

| Field | Value |
|-------|-------|
| Author | Woz |
| Original repository | https://github.com/WithWoz/wozcode-plugin |
| Version | 0.0.0 |
| Original commit | Latest |
| License | Proprietary |
| Source platform | Claude Code |

## Compatibility

### Platforms

| Platform | Status |
|----------|--------|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- Node.js runtime
- Woz account (required for authentication)

WozCode requires a Woz account for authentication. The plugin replaces built-in Claude Code file tools with optimized alternatives that reduce token usage and cost. The `woz:code` agent automatically delegates to `woz:explore` (fast read-only exploration on haiku) and `woz:plan` (architecture planning on haiku) as subagents when appropriate.

Key features:
- Smart file search replacing grep/find
- Batch editing to minimize round-trips
- SQL introspection for database queries
- Session recall for finding past commands and solutions
- Real-time savings tracking (roundtrips, tokens, time, cost)
- Hook-based tool redirection and telemetry
