*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# pr-review-toolkit

Comprehensive PR review agents specializing in comments, tests, error handling, type design, code quality, and code simplification

## Tags

- anthropic
- claude-official
- pr-review

## Installation

```bash
npx forgecat install @forgecat/anthropics_claude-plugins-official_pr-review-toolkit
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

---
*written by original source*

# PR Review Toolkit

A comprehensive collection of specialized agents for thorough pull request review, covering code comments, test coverage, error handling, type design, code quality, and code simplification.

## Overview

This plugin bundles 6 expert review agents that each focus on a specific aspect of code quality. Use them individually for targeted reviews or together for comprehensive PR analysis.

## Agents

### 1. comment-analyzer
**Focus**: Code comment accuracy and maintainability

**Analyzes:**
- Comment accuracy vs actual code
- Documentation completeness
- Comment rot and technical debt
- Misleading or outdated comments

**When to use:**
- After adding documentation
- Before finalizing PRs with comment changes
- When reviewing existing comments

**Triggers:**
```
"Check if the comments are accurate"
"Review the documentation I added"
"Analyze comments for technical debt"
```

### 2. pr-test-analyzer
**Focus**: Test coverage quality and completeness

**Analyzes:**
- Behavioral vs line coverage
- Critical gaps in test coverage
- Test quality and resilience
- Edge cases and error conditions

**When to use:**
- After creating a PR
- When adding new functionality
- To verify test thoroughness

**Triggers:**
```
"Check if the tests are thorough"
"Review test coverage for this PR"
"Are there any critical test gaps?"
```

### 3. silent-failure-hunter
**Focus**: Error handling and silent failures

**Analyzes:**
- Silent failures in catch blocks
- Inadequate error handling
- Inappropriate fallback behavior
- Missing error logging

**When to use:**
- After implementing error handling
- When reviewing try/catch blocks
- Before finalizing PRs with error handling

**Triggers:**
```
"Review the error handling"
"Check for silent failures"
"Analyze catch blocks in this PR"
```

### 4. type-design-analyzer
**Focus**: Type design quality and invariants

**Analyzes:**
- Type encapsulation (rated 1-10)
- Invariant expression (rated 1-10)
- Type usefulness (rated 1-10)
- Invariant enforcement (rated 1-10)

**When to use:**
- When introducing new types
- During PR creation with data models
- When refactoring type designs

**Triggers:**
```
"Review the UserAccount type design"
"Analyze type design in this PR"
"Check if this type has strong invariants"
```

### 5. code-reviewer
**Focus**: General code review for project guidelines

**Analyzes:**
- CLAUDE.md compliance
- Style violations
- Bug detection
- Code quality issues

**When to use:**
- After writing or modifying code
- Before committing changes
- Before creating pull requests

**Triggers:**
```
"Review my recent changes"
"Check if everything looks good"
"Review this code before I commit"
```

### 6. code-simplifier
**Focus**: Code simplification and refactoring

**Analyzes:**
- Code clarity and readability
- Unnecessary complexity and nesting
- Redundant code and abstractions
- Consistency with project standards
- Overly compact or clever code

**When to use:**
- After writing or modifying code
- After passing code review
- When code works but feels complex

**Triggers:**
```
"Simplify this code"
"Make this clearer"
"Refine this implementation"
```

**Note**: This agent preserves functionality while improving code structure and maintainability.

## Usage Patterns

### Individual Agent Usage

Simply ask questions that match an agent's focus area, and Claude will automatically trigger the appropriate agent:

```
"Can you check if the tests cover all edge cases?"
→ Triggers pr-test-analyzer

"Review the error handling in the API client"
→ Triggers silent-failure-hunter

"I've added documentation - is it accurate?"
→ Triggers comment-analyzer
```

### Comprehensive PR Review

For thorough PR review, ask for multiple aspects:

```
"I'm ready to create this PR. Please:
1. Review test coverage
2. Check for silent failures
3. Verify code comments are accurate
4. Review any new types
5. General code review"
```

This will trigger all relevant agents to analyze different aspects of your PR.

### Proactive Review

Claude may proactively use these agents based on context:

- **After writing code** → code-reviewer
- **After adding docs** → comment-analyzer
- **Before creating PR** → Multiple agents as appropriate
- **After adding types** → type-design-analyzer

## Installation

Install from your personal marketplace:

```bash
/plugins
# Find "pr-review-toolkit"
# Install
```

Or add manually to settings if needed.

## Agent Details

### Confidence Scoring

Agents provide confidence scores for their findings:

**comment-analyzer**: Identifies issues with high confidence in accuracy checks

**pr-test-analyzer**: Rates test gaps 1-10 (10 = critical, must add)

**silent-failure-hunter**: Flags severity of error handling issues

**type-design-analyzer**: Rates 4 dimensions on 1-10 scale

**code-reviewer**: Scores issues 0-100 (91-100 = critical)

**code-simplifier**: Identifies complexity and suggests simplifications

### Output Formats

All agents provide structured, actionable output:
- Clear issue identification
- Specific file and line references
- Explanation of why it's a problem
- Suggestions for improvement
- Prioritized by severity

## Best Practices

### When to Use Each Agent

**Before Committing:**
- code-reviewer (general quality)
- silent-failure-hunter (if changed error handling)

**Before Creating PR:**
- pr-test-analyzer (test coverage check)
- comment-analyzer (if added/modified comments)
- type-design-analyzer (if added/modified types)
- code-reviewer (final sweep)

**After Passing Review:**
- code-simplifier (improve clarity and maintainability)

**During PR Review:**
- Any agent for specific concerns raised
- Targeted re-review after fixes

### Running Multiple Agents

You can request multiple agents to run in parallel or sequentially:

**Parallel** (faster):
```
"Run pr-test-analyzer and comment-analyzer in parallel"
```

**Sequential** (when one informs the other):
```
"First review test coverage, then check code quality"
```

## Tips

- **Be specific**: Target specific agents for focused review
- **Use proactively**: Run before creating PRs, not after
- **Address critical issues first**: Agents prioritize findings
- **Iterate**: Run again after fixes to verify
- **Don't over-use**: Focus on changed code, not entire codebase

## Troubleshooting

### Agent Not Triggering

**Issue**: Asked for review but agent didn't run

**Solution**:
- Be more specific in your request
- Mention the agent type explicitly
- Reference the specific concern (e.g., "test coverage")

### Agent Analyzing Wrong Files

**Issue**: Agent reviewing too much or wrong files

**Solution**:
- Specify which files to focus on
- Reference the PR number or branch
- Mention "recent changes" or "git diff"

## Integration with Workflow

This plugin works great with:
- **build-validator**: Run build/tests before review
- **Project-specific agents**: Combine with your custom agents

**Recommended workflow:**
1. Write code → **code-reviewer**
2. Fix issues → **silent-failure-hunter** (if error handling)
3. Add tests → **pr-test-analyzer**
4. Document → **comment-analyzer**
5. Review passes → **code-simplifier** (polish)
6. Create PR

## Contributing

Found issues or have suggestions? These agents are maintained in:
- User agents: `~/.claude/agents/`
- Project agents: `.claude/agents/` in claude-cli-internal

## License

MIT

## Author

Daisy (daisy@anthropic.com)

---

**Quick Start**: Just ask for review and the right agent will trigger automatically!
