![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# feature-dev

Comprehensive feature development workflow with specialized agents for codebase exploration, architecture design, and quality review

## Tags

- anthropic
- claude-official
- feature-development

## Installation

```bash
npx forgecat install @forgecat/anthropics-claude-plugins-official-feature-dev
```

## Agents

- **code-architect** — Designs feature architectures by analyzing existing codebase patterns and conventions, then providing comprehensive implementation blueprints with specific files to create/modify, component designs, data flows, and build sequences
- **code-explorer** — Deeply analyzes existing codebase features by tracing execution paths, mapping architecture layers, understanding patterns and abstractions, and documenting dependencies to inform new development
- **code-reviewer** — Reviews code for bugs, logic errors, security vulnerabilities, code quality issues, and adherence to project conventions, using confidence-based filtering to report only high-priority issues that truly matter

## Commands

- **feature-dev** — Guided feature development with codebase understanding and architecture focus

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/feature-dev |
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
