![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Ontoly Agent Skills

Graph-first software understanding skills for coding agents using Ontoly Software Graph and MCP-style capabilities.

## Tags

- ontoly
- agent-skills
- software-graph
- mcp
- static-analysis
- codebase-analysis

## Installation

```bash
npx forgecat install @forgecat/0xsarwagya_ontoly
```

## Skills / Agents / Commands

- **architecture-review** - Review repository architecture using Ontoly Software Graph and MCP capabilities. Use when asked to explain architecture, module boundaries, package topology, service ownership, or architectural risk. `architecture`
- **codebase-onboarding** - Onboard a developer to a repository using Ontoly graph summaries. Use when asked to explain a new codebase, identify entrypoints, map packages, or suggest first files to inspect. `onboarding`
- **configuration-analysis** - Audit configuration and environment variable usage through Ontoly configuration capabilities. Use when asked where env vars, build config, runtime config, or feature flags are read. `configuration`
- **dead-code-analysis** - Find potentially unused functions, methods, services, routes, or features using Ontoly dead-code and entrypoint capabilities. Use when asked what code appears unreachable or safe to remove. `static-analysis`
- **dependency-analysis** - Analyze internal and package dependencies using Ontoly graph traversal. Use when asked which modules, packages, services, or files depend on each other. `dependencies`
- **documentation** - Draft graph-backed documentation from Ontoly summaries and traces. Use when asked to document architecture, APIs, modules, packages, or request lifecycles without re-parsing source files. `documentation`
- **framework-analysis** - Explain detected frameworks and framework-specific graph coverage using Ontoly framework reports. Use when asked whether a repository uses NestJS, Next.js, React, Turborepo, or other supported framework concepts. `frameworks`
- **impact-analysis** - Analyze change impact using Ontoly dependency and dependent traversal. Use when asked what breaks if a symbol, service, route, package, or repository node changes or is removed. `change-analysis`
- **migration-analysis** - Plan migrations using Ontoly architecture, dependency, impact, and configuration evidence. Use when asked to migrate frameworks, packages, APIs, modules, or runtime configuration. `migration`
- **performance-analysis** - Investigate performance-sensitive architecture using Ontoly call, dependency, and graph statistics evidence. Use when asked about hot paths, expensive flows, or performance investigation starting points. `performance`
- **refactoring** - Plan refactors with Ontoly impact and dependency evidence. Use when asked to move, rename, split, extract, or remove code while preserving behavior. `refactoring`
- **request-tracing** - Trace request lifecycle behavior through Ontoly route, handler, and call graph capabilities. Use when asked to trace login, API, controller, route, or request execution flow. `request-flow`
- **sdk-generation** - Plan SDK generation from Ontoly API, route, model, and operation evidence. Use when asked to design or scope SDK generation without implementing code generation in the skill layer. `sdk-planning`
- **security-review** - Review authentication, authorization, and security-sensitive flows using Ontoly graph evidence. Use when asked about auth ownership, protected routes, permissions, guards, or security risk. `security`

## MCPs

| Server | Transport | URL |
|---|---|---|
| ontoly | stdio command | `npx -y @0xsarwagya/ontoly-cli@rc mcp` |

## Details

| Field | Value |
|---|---|
| Author | 0xsarwagya |
| Original repository | https://github.com/0xsarwagya/ontoly |
| Version | `pending-registry-publish` |
| Original commit | `ab39509907417239f4ff42828331095c12bec7cd` |
| License | MIT |
| Source platform | multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- Ontoly CLI: `@0xsarwagya/ontoly-cli@rc`
- Node.js 20+
