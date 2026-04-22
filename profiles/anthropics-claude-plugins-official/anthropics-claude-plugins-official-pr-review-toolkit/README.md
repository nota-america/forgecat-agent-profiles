![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# pr-review-toolkit

Comprehensive PR review agents specializing in comments, tests, error handling, type design, code quality, and code simplification

## Tags

- anthropic
- claude-official
- plugin

## Installation

```bash
npx forgecat install @forgecat/anthropics-claude-plugins-official-pr-review-toolkit
```

## Agents

- **code-reviewer** — Agent code-reviewer from pr-review-toolkit.
- **code-simplifier** — Use this agent when code has been written or modified and needs to be simplified for clarity, consistency, and maintainability while preserving all functionality. This agent should be triggered automatically after completing a coding task or writing a logical chunk of code. It simplifies code by following project best practices while retaining all functionality. The agent focuses only on recently modified code unless instructed otherwise. Examples: <example> Context: The assistant has just implemented a new feature that adds user authentication to an API endpoint. user: "Please add authentication to the /api/users endpoint" assistant: "I've implemented the authentication for the /api/users endpoint. Here's the code:" <function call omitted for brevity> <commentary> Since a logical chunk of code has been written (authentication feature), use the Task tool to launch the code-simplifier agent to improve the code's clarity and maintainability while preserving functionality. </commentary> assistant: "Now let me use the code-simplifier agent to refine this implementation for better clarity and maintainability" </example> <example> Context: The assistant has just fixed a bug by adding several conditional checks. user: "Fix the null pointer exception in the data processor" assistant: "I've added the necessary null checks to prevent the exception:" <function call omitted for brevity> <commentary> After modifying code to fix a bug, use the code-simplifier agent to ensure the fix follows best practices and maintains code quality. </commentary> assistant: "Let me refine this bug fix using the code-simplifier agent to ensure it follows our best practices" </example> <example> Context: The assistant has just refactored a function to improve performance. user: "Optimize the data sorting algorithm for better performance" assistant: "I've optimized the sorting algorithm. Here's the updated implementation:" <function call omitted for brevity> <commentary> After completing a performance optimization task, use the code-simplifier agent to ensure the optimized code is also clear and maintainable. </commentary> assistant: "Now I'll use the code-simplifier agent to ensure the optimized code is also clear and follows our coding standards" </example>
- **comment-analyzer** — Agent comment-analyzer from pr-review-toolkit.
- **pr-test-analyzer** — Agent pr-test-analyzer from pr-review-toolkit.
- **silent-failure-hunter** — Agent silent-failure-hunter from pr-review-toolkit.
- **type-design-analyzer** — Agent type-design-analyzer from pr-review-toolkit.

## Commands

- **review-pr** — Comprehensive PR review using specialized agents

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/pr-review-toolkit |
| Version | `0.0.0` |
| Original commit | `cf62a6c` |
| License | Apache-2.0 |
| Source platform | Claude Code plugin |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |
