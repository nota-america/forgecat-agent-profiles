*written by Forgecat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# playground

Creates interactive HTML playgrounds — self-contained single-file explorers with visual controls, live preview, and prompt output with copy button

## Tags

- anthropic
- claude-code
- official-plugin

## Installation

```bash
npx forgecat install @forgecat/anthropics-claude-plugins-official-playground
```

## Skills

- **playground** — Creates interactive HTML playgrounds — self-contained single-file explorers that let users configure something visually through controls, see a live preview, and copy out a prompt. Use when the user asks to make a playground, explorer, or interactive tool for a topic.

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/playground |
| Version | `0.0.0` |
| Original commit | `7e401ed` |
| License | Apache-2.0 |
| Source platform | Claude Code plugin |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

---
*written by original source*

# Playground Plugin

Creates interactive HTML playgrounds — self-contained single-file explorers that let users configure something visually through controls, see a live preview, and copy out a prompt.

## What is a Playground?

A playground is a self-contained HTML file with:
- Interactive controls on one side
- A live preview on the other
- A prompt output at the bottom with a copy button

The user adjusts controls, explores visually, then copies the generated prompt back into Claude.

## When to Use

Use this plugin when the user asks for an interactive playground, explorer, or visual tool for a topic — especially when the input space is large, visual, or structural and hard to express as plain text.

## Templates

The skill includes templates for common playground types:
- **design-playground** — Visual design decisions (components, layouts, spacing, color, typography)
- **data-explorer** — Data and query building (SQL, APIs, pipelines, regex)
- **concept-map** — Learning and exploration (concept maps, knowledge gaps, scope mapping)
- **document-critique** — Document review (suggestions with approve/reject/comment workflow)

## Installation

Add this plugin to your Claude Code configuration to enable the playground skill.
