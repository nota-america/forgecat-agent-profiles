![Hephai](https://raw.githubusercontent.com/nota-america/agent-hub/main/assets/hephai_banner.png)

# PR Review Toolkit

Comprehensive PR review agents specializing in comments, tests, error handling, type design, code quality, and code simplification

## Tags

- code-review
- pull-request
- test-coverage
- error-handling
- type-design
- code-quality
- documentation
- anthropic

## Installation

```bash
npx hephai install pr-review-toolkit
```

## Agents

- **code-reviewer** — Review code for adherence to project guidelines, style guides, and best practices `review`
- **code-simplifier** — Simplify code for clarity, consistency, and maintainability while preserving functionality `refactor`
- **comment-analyzer** — Analyze code comments for accuracy, completeness, and long-term maintainability `documentation`
- **pr-test-analyzer** — Review pull request test coverage quality and completeness `testing`
- **silent-failure-hunter** — Identify silent failures, inadequate error handling, and inappropriate fallback behavior `error-handling`
- **type-design-analyzer** — Expert analysis of type design, encapsulation, and invariant expression `type-safety`

## Commands

- **review-pr** — Comprehensive PR review using all specialized agents

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/claude-code/tree/main/plugins/pr-review-toolkit |
| Version | `0.0.0` |
| Original commit | `66ab4ae` |
| License | Proprietary |
| Source platform | Claude Code |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

### Models

| Model | Role |
|---|---|
| `opus` | recommended |

## Dependencies

- None
