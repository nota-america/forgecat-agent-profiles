*written by Hephai*

# Omni Analytics Plugin for Cursor

A Cursor plugin that helps analytics engineers and data teams work with [Omni Analytics](https://omni.co) programmatically through Omni's REST APIs.

## Installation

### From Cursor Marketplace

Search for "Omni Analytics" in the Cursor Marketplace or run:

```
/add-plugin omni-analytics
```

### From Git URL

```
/add-plugin https://github.com/exploreomni/omni-cursor-plugin.git
```

## Setup

After installation, set these environment variables:

```bash
export OMNI_BASE_URL="https://yourorg.omniapp.co"
export OMNI_API_KEY="your-api-key"
```

API keys are created in **Settings > API Keys** (Organization Admin) or **User Profile > Manage Account > Generate Token** (Personal Access Token).

## What's Included

### Skills (8)

Skills activate automatically based on your request:

| Skill | Description |
|-------|-------------|
| **omni-model-explorer** | Discover and inspect models, topics, views, fields, and relationships |
| **omni-model-builder** | Create and edit views, topics, dimensions, measures, and relationships in YAML |
| **omni-query** | Run queries against Omni's semantic layer and interpret results |
| **omni-content-explorer** | Find, browse, and organize dashboards, workbooks, and folders |
| **omni-content-builder** |  Create, update, and manage documents and dashboards programmatically — lifecycle, tiles, filters, layouts |
| **omni-ai-optimizer** | Optimize your Omni model for Blobby (Omni's AI assistant) |
| **omni-embed** | Embed Omni dashboards in external applications — URL signing, themes, and postMessage events |
| **omni-admin** | Manage connections, users, groups, permissions, and schedules |

### Subagents (3)

Specialized agents for complex multi-step workflows:

| Agent | Description |
|-------|-------------|
| **omni-analyst** | Explores models, runs queries, and delivers insights |
| **omni-modeler** | Builds semantic models, writes YAML, and optimizes for AI |
| **omni-admin-agent** | Manages users, permissions, schedules, and connections |

### Rules (3)

Always-available context applied when relevant:

| Rule | Description |
|------|-------------|
| **omni-api-conventions** | Auth headers, base URL patterns, error handling, pagination |
| **omni-yaml-conventions** | YAML file types, field syntax, dimension/measure patterns |
| **omni-terminology** | Maps business intelligence terms to Omni-specific vocabulary |

## Usage

Just ask naturally — skills, subagents, and rules activate automatically:

```
"What topics are available in our Omni model?"          → omni-model-explorer
"Run a query showing revenue by month"                  → omni-query
"Add a new dimension for customer tier to the users view" → omni-model-builder
"Find the dashboard about sales performance"            → omni-content-explorer
"Set up dashboard filters for date range and region"    → omni-content-builder
"Improve the AI context on our orders topic"            → omni-ai-optimizer
"Give the marketing team access to the sales dashboard" → omni-admin
```

For complex workflows, invoke subagents directly:

```
@omni-analyst What are our top 10 products by revenue this quarter?
@omni-modeler Add customer lifetime value metrics to the users view
@omni-admin-agent Set up weekly PDF delivery of the executive dashboard
```

## Repository Structure

```
omni-cursor-plugin/
├── .cursor-plugin/
│   └── plugin.json                ← Plugin manifest
├── skills/
│   ├── omni-model-explorer/SKILL.md
│   ├── omni-query/
│   │   ├── SKILL.md
│   │   └── references/
│   ├── omni-model-builder/
│   │   ├── SKILL.md
│   │   └── references/
│   ├── omni-content-explorer/SKILL.md
│   ├── omni-content-builder/
│   │   ├── SKILL.md
│   │   └── references/
│   ├── omni-ai-optimizer/SKILL.md
│   ├── omni-embed/SKILL.md
│   └── omni-admin/SKILL.md
├── agents/
│   ├── omni-analyst.md
│   ├── omni-modeler.md
│   └── omni-admin-agent.md
├── rules/
│   ├── omni-api-conventions.mdc
│   ├── omni-yaml-conventions.mdc
│   └── omni-terminology.mdc
├── README.md
└── LICENSE
```

## Documentation

- [Omni REST API Reference](https://docs.omni.co/api.md)
- [Omni Modeling Documentation](https://docs.omni.co/modeling.md)
- [Omni AI Optimization Guide](https://docs.omni.co/ai/optimize-models.md)
- [Omni MCP Server](https://docs.omni.co/ai/mcp.md) (complementary — this plugin uses the REST API directly)
- [Cursor Plugin Docs](https://cursor.com/docs/plugins)

## Contributing

Contributions welcome! Please open an issue or PR.

## License

Apache 2.0
