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

---
*written by original source*

# Continual Learning

Automatically and incrementally keeps `AGENTS.md` up to date from transcript changes.

The plugin combines:

- A `stop` hook that decides when to trigger learning.
- A `continual-learning` skill that orchestrates the learning flow.
- An `agents-memory-updater` subagent that mines new or changed transcripts and updates `AGENTS.md`.

It is designed to avoid noisy rewrites by:

- Reading existing `AGENTS.md` first and updating matching bullets in place.
- Processing only new or changed transcript files.
- Writing plain bullet points only (no evidence/confidence metadata).

## Installation

```bash
/add-plugin continual-learning
```

## How it works

On eligible `stop` events, the hook may emit a `followup_message` that asks the agent to run the `continual-learning` skill.

The skill is marked `disable-model-invocation: true`, so it will not be auto-selected during normal model invocation. When it does run, it delegates the full memory update flow to `agents-memory-updater`.

The hook keeps local runtime state in:

- `.cursor/hooks/state/continual-learning.json` (cadence state)

The updater uses an incremental transcript index at:

- `.cursor/hooks/state/continual-learning-index.json`

## Trigger cadence

Default cadence:

- minimum 10 completed turns
- minimum 120 minutes since the last run
- transcript mtime must advance since the previous run

Trial mode defaults (enabled in this plugin hook config):

- minimum 3 completed turns
- minimum 15 minutes
- automatically expires after 24 hours, then falls back to default cadence

## Optional env overrides

- `CONTINUAL_LEARNING_MIN_TURNS` (or legacy `CONTINUOUS_LEARNING_MIN_TURNS`)
- `CONTINUAL_LEARNING_MIN_MINUTES` (or legacy `CONTINUOUS_LEARNING_MIN_MINUTES`)
- `CONTINUAL_LEARNING_TRIAL_MODE` (or legacy `CONTINUOUS_LEARNING_TRIAL_MODE`)
- `CONTINUAL_LEARNING_TRIAL_MIN_TURNS` (or legacy `CONTINUOUS_LEARNING_TRIAL_MIN_TURNS`)
- `CONTINUAL_LEARNING_TRIAL_MIN_MINUTES` (or legacy `CONTINUOUS_LEARNING_TRIAL_MIN_MINUTES`)
- `CONTINUAL_LEARNING_TRIAL_DURATION_MINUTES` (or legacy `CONTINUOUS_LEARNING_TRIAL_DURATION_MINUTES`)

## Output format in AGENTS.md

The memory updater writes only:

- `## Learned User Preferences`
- `## Learned Workspace Facts`

Each item is a plain bullet point.

## License

MIT
