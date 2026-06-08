*written by Forgecat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Continual Learning

Incrementally keeps AGENTS.md up to date from transcript changes.

## Tags
- Agent Memory
- Automation
- Transcripts
- Cursor

## Installation
```bash
npx forgecat install @forgecat/cursor_plugins_continual-learning
```

## Agents
- **agents-memory-updater** — Mine high-signal transcript deltas, update AGENTS.md, and keep the incremental transcript index in sync. `inherit` `Memory`

## Skills
- **continual-learning** — Orchestrate continual learning by delegating transcript mining and AGENTS.md updates to agents-memory-updater. `Memory`

## Details
| Field | Value |
|---|---|
| Author | `Cursor` |
| Original repository | `https://github.com/cursor/plugins` |
| Version | `0.0.4` |
| Original commit | `9c39b57` (2026-03-13) |
| License | `MIT` |
| Source platform | `cursor` |

## Compatibility
### Platforms
| Platform | Status |
|---|---|
| Cursor | Tested |
| Claude Code | Tested |
| Codex | Partial |

### Models
| Model | Role |
|---|---|
| None specified | recommended |
| None specified | minimum |

## Dependencies
- Requires Bun for the stop hook runtime.
