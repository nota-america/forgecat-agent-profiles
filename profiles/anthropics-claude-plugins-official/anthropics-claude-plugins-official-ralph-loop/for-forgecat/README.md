*written by Forgecat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# ralph-loop

Continuous self-referential AI loops for interactive iterative development, implementing the Ralph Wiggum technique. Run Claude in a while-true loop with the same prompt until task completion.

## Tags

- anthropic
- claude-official
- plugin

## Installation

```bash
npx forgecat install @forgecat/anthropics-claude-official-ralph-loop
```

## Commands

- **cancel-ralph** — Cancel active Ralph Loop
- **help** — Explain Ralph Loop plugin and available commands
- **ralph-loop** — Start Ralph Loop in current session

## Hooks

- **stop-1** — Ralph Loop plugin stop hook for self-referential loops

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-loop |
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
