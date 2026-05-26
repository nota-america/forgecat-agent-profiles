*written by Forgecat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# hamelsmu-claude-review-loop

Automated Claude Code review-loop workflow. Claude implements a task, the Stop hook prepares an independent Codex review, and Claude addresses the feedback before finishing.

## Installation

```bash
npx forgecat install @forgecat/hamelsmu_claude-review-loop
```

## Components

### Commands

- `/review-loop` - Start a review loop for a task.
- `/cancel-review` - Cancel the active review loop state.

### Hook

- `review-loop-stop` - Claude Code Stop hook that transitions from task implementation to Codex review and then verifies that the review file exists before allowing exit.

### Rule

- `rules/AGENTS.md` - Source plugin operating guidelines for the review-loop workflow.

## Runtime Requirements

- Claude Code
- `jq`
- Codex CLI (`codex`)
- `~/.codex/config.toml` with `multi_agent = true`

The `/review-loop` command configures Codex multi-agent automatically when possible.

## Source

| Field | Value |
|---|---|
| Repository | https://github.com/hamelsmu/claude-review-loop |
| Source plugin | `plugins/review-loop` |
| Source commit | `244f4c7` |
| Source version | `1.8.0` |
| License | MIT |
