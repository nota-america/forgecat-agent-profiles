*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# example-plugin

A comprehensive example plugin demonstrating all Claude Code extension options including commands, agents, skills, hooks, and MCP servers

## Tags

- anthropic
- claude-official
- plugin-template

## Installation

```bash
npx forgecat install @forgecat/anthropics_claude-plugins-official_example-plugin
```

## Skills

- **example-command** — An example user-invoked skill that demonstrates frontmatter options and the skills/<name>/SKILL.md layout
- **example-skill** — This skill should be used when the user asks to "demonstrate skills", "show skill format", "create a skill template", or discusses skill development patterns. Provides a reference template for creating Claude Code plugin skills.

## Commands

- **example-command** — An example slash command that demonstrates command frontmatter options (legacy format)

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/example-plugin |
| Version | `0.0.3` |
| Original commit | `7e401ed` |
| License | Apache-2.0 |
| Source platform | Claude Code plugin |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Partial |

---
*written by original source*

# Example Plugin

A comprehensive example plugin demonstrating Claude Code extension options.

## Structure

```
example-plugin/
├── .claude-plugin/
│   └── plugin.json            # Plugin metadata
├── .mcp.json                  # MCP server configuration
├── skills/
│   ├── example-skill/
│   │   └── SKILL.md           # Model-invoked skill (contextual guidance)
│   └── example-command/
│       └── SKILL.md           # User-invoked skill (slash command)
└── commands/
    └── example-command.md     # Legacy slash command format (see note below)
```

## Extension Options

### Skills (`skills/`)

Skills are the preferred format for both model-invoked capabilities and user-invoked slash commands. Create a `SKILL.md` in a subdirectory:

**Model-invoked skill** (activated by task context):

```yaml
---
name: skill-name
description: Trigger conditions for this skill
version: 1.0.0
---
```

**User-invoked skill** (slash command — `/skill-name`):

```yaml
---
name: skill-name
description: Short description for /help
argument-hint: <arg1> [optional-arg]
allowed-tools: [Read, Glob, Grep]
---
```

### Commands (`commands/`) — legacy

> **Note:** The `commands/*.md` layout is a legacy format. It is loaded identically to `skills/<name>/SKILL.md` — the only difference is file layout. For new plugins, prefer the `skills/` directory format. This plugin keeps `commands/example-command.md` as a reference for the legacy layout.

### MCP Servers (`.mcp.json`)

Configure external tool integration via Model Context Protocol:

```json
{
  "server-name": {
    "type": "http",
    "url": "https://mcp.example.com/api"
  }
}
```

## Usage

- `/example-command [args]` - Run the example slash command
- The example skill activates based on task context
- The example MCP activates based on task context
