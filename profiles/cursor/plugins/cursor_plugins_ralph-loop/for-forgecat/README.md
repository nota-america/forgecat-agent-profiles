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

---
*written by original source*

# Ralph Loop

Ralph Loop runs Cursor in a self-referential loop, feeding the same prompt back after every turn until the task is complete. It implements the [Ralph Wiggum technique](https://ghuntley.com/ralph/) pioneered by Geoffrey Huntley.

## How it works

Two hooks drive the loop. An `afterAgentResponse` hook watches each response for a `<promise>` tag matching the completion phrase. A `stop` hook fires when Cursor finishes a turn. If the promise hasn't been detected and the iteration limit hasn't been reached, the stop hook sends the original prompt back as a `followup_message`, starting the next iteration. Cursor sees its own previous edits in the working tree and git history, iterates on them, and repeats. The prompt never changes. The code does.

## Installation

```
/add-plugin ralph-loop
```

## Quick start

> Start a ralph loop: "Build a REST API for todos. CRUD operations, input validation, tests. Output COMPLETE when done." --completion-promise "COMPLETE" --max-iterations 50

Cursor will implement the API, run tests, see failures, fix them, and repeat until all requirements are met.

## Skills

**ralph-loop** starts the loop. Provide a prompt and options:

> Start a ralph loop: "Refactor the cache layer" --max-iterations 20 --completion-promise "DONE"

- `--max-iterations <N>` stops after N iterations (default: unlimited)
- `--completion-promise <text>` sets the phrase that signals completion

**cancel-ralph** removes the state file and stops the loop.

**ralph-loop-help** explains the technique and usage in detail.

## Writing good prompts

Define explicit completion criteria. Vague goals like "make it good" give Cursor nothing to verify against.

```markdown
Build a REST API for todos.

When complete:
- All CRUD endpoints working
- Input validation in place
- Tests passing (coverage > 80%)
- Output: <promise>COMPLETE</promise>
```

Break large tasks into phases. Encourage self-correction by including test/fix cycles in the prompt. Always pass `--max-iterations` to prevent runaway loops.

## When to use Ralph Loop

Works well for tasks with clear, verifiable success criteria: getting tests to pass, completing a migration, building a feature from a spec. Not a good fit for tasks that need human judgment or have ambiguous goals.

## Learn more

- [Original technique by Geoffrey Huntley](https://ghuntley.com/ralph/)
- [Ralph Orchestrator](https://github.com/mikeyobrien/ralph-orchestrator)

## License

MIT
