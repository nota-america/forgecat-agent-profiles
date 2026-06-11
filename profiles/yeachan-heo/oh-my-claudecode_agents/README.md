![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# oh-my-claudecode Agents

Agents-only forgecat profile for the upstream `Yeachan-Heo/oh-my-claudecode` Claude Code agent collection.

## Tags

- agents
- claude-code
- orchestration
- review
- planning

## Installation

```bash
npx forgecat install @forgecat/yeachan-heo_oh-my-claudecode_agents
```

## Agents

| Agent | Description |
|---|---|
| `analyst` | Pre-planning consultant for requirements analysis (Opus) |
| `architect` | Strategic Architecture & Debugging Advisor (Opus, READ-ONLY) |
| `code-reviewer` | Expert code review specialist with severity-rated feedback, logic defect detection, SOLID principle checks, style, performance, and quality strategy |
| `code-simplifier` | Simplifies and refines code for clarity, consistency, and maintainability while preserving all functionality. Focuses on recently modified code unless instructed otherwise. |
| `critic` | Work plan and code review expert - thorough, structured, multi-perspective (Opus) |
| `debugger` | Root-cause analysis, regression isolation, stack trace analysis, build/compilation error resolution |
| `designer` | UI/UX Designer-Developer for stunning interfaces (Sonnet) |
| `document-specialist` | External Documentation & Reference Specialist |
| `executor` | Focused task executor for implementation work (Sonnet) |
| `explore` | Codebase search specialist for finding files and code patterns |
| `git-master` | Git expert for atomic commits, rebasing, and history management with style detection |
| `planner` | Strategic planning consultant with interview workflow (Opus) |
| `qa-tester` | Interactive CLI testing specialist using tmux for session management |
| `scientist` | Data analysis and research execution specialist |
| `security-reviewer` | Security vulnerability detection specialist (OWASP Top 10, secrets, unsafe patterns) |
| `test-engineer` | Test strategy, integration/e2e coverage, flaky test hardening, TDD workflows |
| `tracer` | Evidence-driven causal tracing with competing hypotheses, evidence for/against, uncertainty tracking, and next-probe recommendations |
| `verifier` | Verification strategy, evidence-based completion checks, test adequacy |
| `writer` | Technical documentation writer for README, API docs, and comments (Haiku) |

## Details

| Field | Value |
|---|---|
| Author | Yeachan Heo |
| Original repository | https://github.com/Yeachan-Heo/oh-my-claudecode/tree/main/agents |
| Registry version | `0.1.3` |
| Original commit | `deee3a446dadc9bfea31cdc8b19b00b16718082e` (2026-06-09) |
| License | MIT |
| Source platform | Claude Code |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Codex | Tested |
| Cursor | Tested |

### Models

| Model | Role |
|---|---|
| `opus` | recommended |
| `sonnet` | recommended |
| `haiku` | minimum |

## Dependencies

- None. This profile packages only upstream agent markdown files and the MIT license.
