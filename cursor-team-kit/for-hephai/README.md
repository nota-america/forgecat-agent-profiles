*written by Hephai*

# Cursor Team Kit

Internal-style workflows for CI, code review, shipping, and test reliability.

## Tags
- Internal Workflows
- CI
- Code Review
- Delivery

## Installation
```bash
npx hephai install cursor-team-kit
```

## Agents
- **ci-watcher** — Watch GitHub CI for the current branch and report pass/fail with relevant failure logs. Use when waiting for CI results or CI has failed. Use proactively to monitor branch CI. `fast` `CI Monitor`

## Skills
- **check-compiler-errors** — Run compile and type-check commands and report failures `Compiler`
- **deslop** — Remove AI-generated code slop and clean up code style `Code Cleanup`
- **fix-ci** — Find failing CI jobs, inspect logs, and apply focused fixes `CI Repair`
- **fix-merge-conflicts** — Resolve merge conflicts non-interactively, validate build and tests, and finalize conflict resolution `Merge Conflict`
- **get-pr-comments** — Fetch and summarize review comments from the active pull request `PR Review`
- **loop-on-ci** — Watch CI runs and iterate on failures until all checks pass `CI Loop`
- **new-branch-and-pr** — Create a fresh branch, complete work, and open a pull request `Branch & PR`
- **pr-review-canvas** — Generate an interactive HTML PR review walkthrough as an HTML page with categorized diffs and annotations `PR Walkthrough`
- **review-and-ship** — Run a structured review, close key issues, and ship changes via PR `Ship`
- **run-smoke-tests** — Run Playwright smoke tests, debug failures, and verify fixes `Smoke Tests`
- **weekly-review** — Produce a weekly synthesis of authored commits with highlights by bugfix, tech debt, and net-new work `Weekly Summary`
- **what-did-i-get-done** — Summarize authored commits over a user-specified time period into a concise update `Status Update`

## Details
| Field | Value |
|---|---|
| Author | `Cursor` |
| Version | `0.0.0` |
| Original repository | `https://github.com/cursor/plugins` |
| Original commit | `9c39b57` (2026-03-13) |
| License | `MIT` |
| Source platform | `cursor` |

## Compatibility
### Platforms

| Platform | Status |
|---|---|
| Cursor | Tested |
| Claude Code | Partial |
| Codex | Partial |

### Models
| Model | Role |
|---|---|
| None specified | recommended |
| None specified | minimum |

## Dependencies
- None

---
*Original README.md from source:*

# Cursor Team Kit plugin

Internal-style workflows for CI, code review, shipping, and test reliability.

## Installation

```bash
/add-plugin cursor-team-kit
```

## Components

### Skills

| Skill | Description |
|:------|:------------|
| `loop-on-ci` | Watch CI runs and iterate on failures until checks pass |
| `review-and-ship` | Run a structured review, commit changes, and open a PR |
| `pr-review-canvas` | Generate an interactive HTML PR walkthrough with annotated, categorized diffs |
| `run-smoke-tests` | Run Playwright smoke tests and triage failures |
| `fix-ci` | Find failing CI jobs, inspect logs, and apply focused fixes |
| `new-branch-and-pr` | Create a fresh branch, complete work, and open a pull request |
| `get-pr-comments` | Fetch and summarize review comments from the active pull request |
| `check-compiler-errors` | Run compile and type-check commands and report failures |
| `what-did-i-get-done` | Summarize authored commits over a given time period into a concise status update |
| `weekly-review` | Generate a weekly recap of shipped work with bugfix/tech-debt/net-new highlights |
| `fix-merge-conflicts` | Resolve merge conflicts, validate build/tests, and summarize decisions |
| `deslop` | Remove AI-generated code slop and clean up code style |

### Agents

| Agent | Description |
|:------|:------------|
| `ci-watcher` | Monitor GitHub Actions runs and return concise pass/fail summaries |

### Rules

| Rule | Description |
|:-----|:------------|
| `typescript-exhaustive-switch` | Require exhaustive switch handling for unions/enums |
| `no-inline-imports` | Keep imports at module top-level for readability and consistency |

## License

MIT
