# plugin-context7

Up-to-date documentation lookup via Context7 MCP. Pull version-specific documentation and code examples directly from source repositories into your LLM context.

## Original Source

- **Original Repository**: https://github.com/upstash/context7
- **Converted Profile's Repo Path**: https://github.com/upstash/context7/tree/master/plugins/claude/context7 (Claude Code plugin used for this conversion)
- **Author**: Upstash
- **License**: MIT
- **Original commit**: `383e127` (2026-03-16)
- **Profile conversion date**: 2026-03-17
- **Note**: This profile was converted from the Claude Code plugin variant.

## Components

| Component | Type | Description |
|-----------|------|-------------|
| `docs-researcher` | Agent | Lightweight agent for fetching library documentation without cluttering your main conversation context |
| `context7-mcp` | Skill | Auto-triggers Context7 documentation lookups when user asks about libraries, frameworks, API references, or needs code examples |
| `/docs` | Command | Look up documentation for any library |
| Context7 MCP | MCP Server (HTTP) | `https://mcp.context7.com/mcp` — documentation retrieval server |

## Directory Structure

```
plugin-context7/
├── README.md              ← this file
├── for-hephai/            ← Hephai profile (standard Agent Profile format)
│   ├── profile.yml
│   ├── mcp.jsonc
│   ├── README.md          ← original README from source under ./plugins/claude/context7
│   ├── agents/
│   │   └── docs-researcher.md
│   ├── commands/
│   │   └── docs.md
│   └── skills/
│       └── context7-mcp/
│           └── SKILL.md
├── for-claude-code/       ← Claude Code format (pending)
└── for-codex/             ← Codex format (pending)
```

## Usage with Hephai

Install the profile from `for-hephai/`:

```bash
"HEPHAI INSTALL SCRIPT" -> 정의 필요
```

## Original Install Methods

### Installing from Original Repo - All Platforms

```bash
npx ctx7 setup
```

Authenticates via OAuth, generates an API key, and installs the appropriate skill. Choose between CLI + Skills or MCP mode.

### Claude Code

```bash
npx ctx7 setup --claude
```

Or install the plugin directly:

```bash
claude plugin install context7-plugin
```

### Cursor

```bash
npx ctx7 setup --cursor
```

Or use the one-click install: [Install MCP Server for Cursor](https://cursor.com/en/install-mcp?name=context7&config=eyJ1cmwiOiJodHRwczovL21jcC5jb250ZXh0Ny5jb20vbWNwIn0%3D)

### OpenCode

```bash
npx ctx7 setup --opencode
```

### Manual MCP Configuration (Any Client)

Add to your MCP config:

```json
{
  "mcpServers": {
    "context7": {
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```

For 30+ supported clients, see: https://context7.com/docs/resources/all-clients

### API Key (Optional)

Get an API key at https://context7.com/dashboard for higher rate limits.

### Author
- Upstash

### License
- MIT
