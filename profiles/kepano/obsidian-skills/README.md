![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Obsidian Skills

Create and edit Obsidian vault files including Markdown, Bases, and Canvas. Use when working with .md, .base, or .canvas files in an Obsidian vault.

## Tags

- skills
- obsidian
- markdown
- bases
- canvas
- notes

## Installation

```bash
npx forgecat install @forgecat/kepano_obsidian-skills
```

## Skills

| Skill | Description |
|---|---|
| `defuddle` | Extract clean markdown content from web pages using Defuddle CLI, removing clutter and navigation to save tokens. Use instead of WebFetch when the user provides a URL to read or analyze, for online documentation, articles, blog posts, or any standard web page. Do NOT use for URLs ending in .md — those are already markdown, use WebFetch directly. |
| `json-canvas` | Create and edit JSON Canvas files (.canvas) with nodes, edges, groups, and connections. Use when working with .canvas files, creating visual canvases, mind maps, flowcharts, or when the user mentions Canvas files in Obsidian. |
| `obsidian-bases` | Create and edit Obsidian Bases (.base files) with views, filters, formulas, and summaries. Use when working with .base files, creating database-like views of notes, or when the user mentions Bases, table views, card views, filters, or formulas in Obsidian. |
| `obsidian-cli` | Interact with Obsidian vaults using the Obsidian CLI to read, create, search, and manage notes, tasks, properties, and more. Also supports plugin and theme development with commands to reload plugins, run JavaScript, capture errors, take screenshots, and inspect the DOM. Use when the user asks to interact with their Obsidian vault, manage notes, search vault content, perform vault operations from the command line, or develop and debug Obsidian plugins and themes. |
| `obsidian-markdown` | Create and edit Obsidian Flavored Markdown with wikilinks, embeds, callouts, properties, and other Obsidian-specific syntax. Use when working with .md files in Obsidian, or when the user mentions wikilinks, callouts, frontmatter, tags, embeds, or Obsidian notes. |

## Details

| Field | Value |
|---|---|
| Author | Steph Ango |
| Original repository | https://github.com/kepano/obsidian-skills |
| Version | `0.1.2` |
| Original commit | `a1dc48e68138490d522c04cbf5822214c6eb1202` |
| License | MIT |
| Source platform | Claude Code plugin |

## Packaging Notes

- `for-forgecat/` contains the Forgecat-compatible skill package. The source `.claude-plugin` manifests are preserved in `for-claude/.claude-plugin/` as Claude plugin metadata because they are not part of Forgecat's core profile schema.

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Tested |
| OpenClaw | Partial |
| Hermes | Partial |

### Models

| Model | Role |
|---|---|
| Any model | recommended |

## Dependencies

- Defuddle CLI is required only when using the `defuddle` skill.
- Obsidian CLI and a running Obsidian instance are required only when using the `obsidian-cli` skill.
