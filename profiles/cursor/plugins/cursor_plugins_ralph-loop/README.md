*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Ralph Loop

Run iterative development loops until explicit completion criteria are met.

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

- **cancel-ralph** — Cancel an active Ralph Loop. Use when the user wants to stop, cancel, or abort a running ralph loop.
- **ralph-loop** — Start a Ralph Loop for iterative self-referential development. Use when the user asks to run a ralph loop, start an iterative loop, or wants repeated autonomous iteration on a task until completion.
- **ralph-loop-help** — Explain the Ralph Loop plugin, how it works, and available skills. Use when the user asks for help with ralph loop, wants to understand the technique, or needs usage examples.

## Details

| Field | Value |
|---|---|
| Author | Cursor |
| Original repository | https://github.com/cursor/plugins/tree/main/ralph-loop |
| Version | `0.0.10` |
| Original commit | 889ec4b68fa5aab0e867dad71ec3fdf386ae48f3 |
| License | MIT |
| Source platform | cursor |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Partial |
| Hermes | Partial |

## Dependencies

- `jq` is required by the hook handlers and the portable Stop adapters.

## Platform behavior

Cursor installs the original handlers as tracked `ralph-loop` support scripts behind generated ordering wrappers, so `afterAgentResponse` capture finishes before `stop` decides whether to continue. Claude Code and Codex use a generated Stop adapter that serializes the same installed handlers and translates Cursor's follow-up message into each platform's continuation response. Codex requires normal hook review through `/hooks` before the adapter runs.

OpenClaw and Hermes receive the three skills without hook automation, so loop execution is partial on those platforms.
