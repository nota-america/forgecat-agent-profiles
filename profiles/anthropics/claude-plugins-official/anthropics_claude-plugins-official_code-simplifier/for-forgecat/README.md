*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# code-simplifier

Agent that simplifies and refines code for clarity, consistency, and maintainability while preserving functionality

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags

- anthropic
- claude-official
- code-simplification

## Installation

```bash
npx forgecat install @forgecat/anthropics_claude-plugins-official_code-simplifier
```

## Agents

- **code-simplifier** — Simplifies and refines code for clarity, consistency, and maintainability while preserving all functionality. Focuses on recently modified code unless instructed otherwise.

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-simplifier |
| Version | `0.0.4` |
| Original commit | `7e401ed` |
| License | [Apache-2.0](./LICENSE) |
| Source platform | Claude Code plugin |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
