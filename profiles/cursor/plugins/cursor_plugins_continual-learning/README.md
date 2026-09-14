*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Continual Learning

Incrementally keep AGENTS.md current from transcript changes.

## Tags

- Agent Memory
- Automation
- Transcripts
- Cursor

## Installation

```bash
npx forgecat install @forgecat/cursor_plugins_continual-learning
```

## Skills

- **continual-learning** — Orchestrate continual learning by delegating transcript mining and AGENTS.md updates to `agents-memory-updater`.

## Agents

- **agents-memory-updater** — Mine high-signal transcript deltas, update `AGENTS.md`, and keep the incremental transcript index in sync.

## Details

| Field | Value |
|---|---|
| Author | Eric Zakariasson |
| Original repository | https://github.com/cursor/plugins/tree/main/continual-learning |
| Version | `0.0.7` |
| Original commit | 5bf2b1544db739998121a306340631963c2ff3de |
| License | MIT |
| Source platform | cursor |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Tested |
| Codex | Partial |
| OpenClaw | Partial |
| Hermes | Partial |

## Dependencies

- Bun is required for the Cursor Stop hook.
