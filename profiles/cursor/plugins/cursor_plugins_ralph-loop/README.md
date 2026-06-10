![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Ralph Loop

Run iterative self-referential development loops where the same prompt is repeated until completion criteria are met.

## Tags
- Cursor
- Automation
- Iteration
- Agent Loop

## Installation
```bash
npx forgecat install @forgecat/cursor_plugins_ralph-loop
```

## Skills
- **ralph-loop** — Start a Ralph Loop for iterative self-referential development.
- **cancel-ralph** — Stop an active Ralph Loop by removing the state file.
- **ralph-loop-help** — Explain the Ralph Loop technique and usage.

## Details
| Field | Value |
|---|---|
| Author | `Cursor` |
| Original repository | `https://github.com/cursor/plugins` |
| Version | `0.0.7` |
| Original commit | `6f2e0c6` (2026-03-13) |
| License | `MIT` |
| Source platform | `cursor` |

## Compatibility
### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |

### Models
| Model | Role |
|---|---|
| None specified | recommended |
| None specified | minimum |

## Dependencies
- Requires `jq` for hook response parsing and follow-up message output.
