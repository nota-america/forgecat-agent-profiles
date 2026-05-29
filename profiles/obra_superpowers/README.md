![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# obra-superpowers

Superpowers software development methodology for coding agents, packaged as a forgecat profile with skills and a session-start bootstrap hook.

## Tags

- skills
- tdd
- debugging
- planning
- hooks

## Installation

```bash
npx forgecat install @forgecat/obra_superpowers
```

## Skills

- **brainstorming** - Explore intent, requirements, and design before implementation.
- **dispatching-parallel-agents** - Delegate independent tasks without shared state or sequential dependencies.
- **executing-plans** - Execute written implementation plans with review checkpoints.
- **finishing-a-development-branch** - Decide how to integrate, PR, merge, or clean up completed development work.
- **receiving-code-review** - Verify and apply review feedback carefully.
- **requesting-code-review** - Request focused review before major completion or merge points.
- **subagent-driven-development** - Execute implementation plans through independent task agents and staged review.
- **systematic-debugging** - Find root cause before proposing fixes.
- **test-driven-development** - Write a failing test before implementation.
- **using-git-worktrees** - Start isolated feature work in git worktrees.
- **using-superpowers** - Bootstrap Superpowers skill discovery and usage.
- **verification-before-completion** - Require verification evidence before claiming completion.
- **writing-plans** - Convert approved requirements into step-by-step implementation plans.
- **writing-skills** - Create, edit, and verify agent skills.

## Hooks

- **superpowers-session-start** - Injects the Superpowers `using-superpowers` bootstrap context at session start for Claude Code, Cursor, and Codex.

## Details

| Field | Value |
|---|---|
| Author | Jesse Vincent |
| Original repository | https://github.com/obra/superpowers |
| Version | `0.0.2` |
| Original commit | `f2cbfbe` |
| License | MIT |
| Source platform | Multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |
