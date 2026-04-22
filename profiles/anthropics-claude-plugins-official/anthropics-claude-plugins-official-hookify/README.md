![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# hookify

Easily create hooks to prevent unwanted behaviors by analyzing conversation patterns

## Tags

- anthropic
- claude-official
- plugin

## Installation

```bash
npx forgecat install @forgecat/anthropics-claude-official-hookify
```

## Skills

- **writing-hookify-rules** — This skill should be used when the user asks to "create a hookify rule", "write a hook rule", "configure hookify", "add a hookify rule", or needs guidance on hookify rule syntax and patterns.

## Agents

- **conversation-analyzer** — Agent conversation-analyzer from hookify.

## Commands

- **configure** — Enable or disable hookify rules interactively
- **help** — Get help with the hookify plugin
- **hookify** — Create hooks to prevent unwanted behaviors from conversation analysis or explicit instructions
- **list** — List all configured hookify rules

## Hooks

- **pretooluse-1** — Hookify plugin - User-configurable hooks from .local.md files
- **posttooluse-1** — Hookify plugin - User-configurable hooks from .local.md files
- **stop-1** — Hookify plugin - User-configurable hooks from .local.md files
- **userpromptsubmit-1** — Hookify plugin - User-configurable hooks from .local.md files

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/hookify |
| Version | `0.0.0` |
| Original commit | `cf62a6c` |
| License | Apache-2.0 |
| Source platform | Claude Code plugin |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |
