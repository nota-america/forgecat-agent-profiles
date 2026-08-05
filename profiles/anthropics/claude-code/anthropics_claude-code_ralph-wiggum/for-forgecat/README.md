*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# ralph-wiggum

Implementation of the Ralph Wiggum technique for iterative, self-referential AI development loops in Claude Code.

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags

- anthropic
- claude-official
- automation
- hooks

## Installation

```bash
npx forgecat install @forgecat/anthropics_claude-code_ralph-wiggum
```

## Commands

- **ralph-loop** — Start Ralph Wiggum loop in current session
- **cancel-ralph** — Cancel active Ralph Wiggum loop
- **help** — Explain Ralph Wiggum technique and available commands

## Skills

- **ralph-wiggum** — Support files for Ralph Wiggum loop commands and setup.

## Hooks

- **ralph-wiggum-stop-loop** — Claude Code `Stop` hook that keeps an active Ralph loop running until its completion promise or max iteration limit is reached.

## Details

| Field | Value |
|---|---|
| Author | Daisy Hollman, Anthropic |
| Original repository | https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum |
| Version | `0.0.3` |
| Original plugin version | `1.0.0` |
| Original commit | `d08288e` |
| License | [Complete terms in LICENSE.md](./LICENSE.md) |
| Source platform | Claude Code plugin |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Partial |
