![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Andrej Karpathy Skills

Behavioral guidelines to reduce common LLM coding mistakes by making agents surface assumptions, prefer simple implementations, keep edits focused, and define verifiable success criteria.

## Tags

- coding
- best-practices
- workflow

## Installation

```bash
npx forgecat install @forgecat/andrej-karpathy-skills
```

## Skills / Agents / Commands

- **karpathy-guidelines** - Behavioral guidelines to reduce common LLM coding mistakes. Use when writing, reviewing, or refactoring code to avoid overcomplication, make surgical changes, surface assumptions, and define verifiable success criteria. `skill`

## Rules

- **karpathy-guidelines-instructions** - Root agent instructions converted from upstream `CLAUDE.md`.
- **karpathy-guidelines** - Always-on behavioral guidance converted from upstream `.cursor/rules/karpathy-guidelines.mdc`.

## Details

| Field | Value |
|---|---|
| Author | multica-ai / forrestchang |
| Original repository | https://github.com/multica-ai/andrej-karpathy-skills |
| Version | `0.0.0` |
| Original commit | `2c60614` |
| License | MIT, per upstream plugin metadata and skill frontmatter |
| Source platform | Claude Code plugin |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- None
