# Continuous Claude v3

![Hephai Banner](https://raw.githubusercontent.com/nota-america/agent-hub/main/assets/hephai_banner.png)

A persistent, learning, multi-agent development environment built on Claude Code. Transforms Claude into a continuously learning system with context preservation across sessions, specialized agent orchestration, and intelligent code analysis to eliminate token waste.

## Tags

`claude-code` `agents` `skills` `memory` `multi-agent` `workflow-orchestration` `code-analysis` `hooks` `mcp` `development-environment`

## Installation

```bash
npx hephai install @hephai-nota/continuous-claude-v3
```

## Details

| Field | Value |
|-------|-------|
| Author | parcadei |
| Original repository | https://github.com/parcadei/Continuous-Claude-v3 |
| Version | 0.0.0 |
| Original commit | d07ff4b06b62f43771bc0c927d0211b734d6149e |
| License | MIT |
| Source platform | Claude Code |

## Compatibility

### Platforms

| Platform | Support Level |
|----------|--------------|
| Claude Code | Full support (tested) |
| Cursor | Partial support |
| Codex | Partial support |

**Note:** This profile was designed specifically for Claude Code. Some features may not work in other platforms due to dependencies on Claude Code-specific APIs and runtime behavior.

## Skills

This profile includes **159 skills** organized into several categories:

### Workflow & Orchestration
- **workflow-router**: Goal-based workflow orchestration - routes tasks to specialist agents
- **build**: Workflow orchestrator that chains existing skills for feature development
- **agent-orchestration**: Agent orchestration rules and patterns
- **agentic-workflow**: Agentic workflow pattern implementation

### Code Analysis & Navigation
- **tldr-stats**: Show full session token usage, costs, TLDR savings, and hook activity
- **repoprompt**: Use RepoPrompt CLI for token-efficient codebase exploration
- **ast-grep-find**: AST-based code search and refactoring via ast-grep MCP
- **modular-code**: Modular code organization patterns
- **semantic-index**: Semantic code indexing for intelligent search

### Memory & Context
- **research**: Document codebase as-is with thoughts directory for historical context
- **create-handoff**: Create YAML handoffs for context preservation across sessions
- **read-handoff**: Read and apply YAML handoffs from previous sessions
- **index-at-creation**: Index at creation time for faster retrieval

### Development Tools
- **commit**: Create git commits with user approval and no Claude attribution
- **describe-pr**: Generate comprehensive PR descriptions following repository templates
- **skill-development**: Skill development rules and best practices
- **hook-developer**: Complete Claude Code hooks reference with schemas and patterns
- **debug-hooks**: Systematic hook debugging workflow

### Search & Research
- **perplexity-search**: AI-powered web search, research, and reasoning via Perplexity
- **search-router**: Choose the right search tool for each query type
- **search-hierarchy**: Search tool hierarchy and selection patterns

### Agent Development
- **agentica-sdk**: Build Python agents with Agentica SDK
- **agentica-server**: Agentica server + Claude proxy setup
- **agentica-spawn**: Spawn Agentica multi-agent patterns
- **agent-context-isolation**: Agent context isolation patterns

### Architecture & Design
- **opc-architecture**: OPC architecture understanding
- **router-first-architecture**: Router-first architecture pattern
- **graceful-degradation**: Graceful degradation with helpful messages

And 135+ additional specialized skills for testing, debugging, security, documentation, and domain-specific workflows.

## Agents

This profile includes **32 specialized agents**:

### Core Development
- **architect**: Feature planning, design documentation, and integration planning
- **spark**: Lightweight fixes and quick tweaks
- **research-codebase**: Document the codebase comprehensively

### Quality & Testing
- **judge**: Refactoring and code transformation review
- **arbiter**: Unit and integration test execution and validation
- **aegis**: Security vulnerability analysis and testing

### Memory & Analysis
- **chronicler**: Session analysis, precedent lookup, and learning extraction
- **braintrust-analyst**: Analyze Claude Code sessions using Braintrust logs
- **context-query-agent**: Query the artifact index for precedent and guidance

### Specialized Workflows
- **agentica-agent**: Build Python agents using Agentica SDK
- **code-documentation-agent**: Generate comprehensive code documentation
- **feature-planning-agent**: Plan new features with design specs
- **refactoring-agent**: Execute large-scale refactoring tasks
- **testing-strategy-agent**: Design testing strategies and test suites

And 18+ additional specialized agents for specific workflows.

## MCP Servers

The profile includes MCP server configurations for:
- **git**: Repository operations and history access
- **fetch**: Web content fetching
- **perplexity** (optional): AI-powered search and research
- **firecrawl** (optional): Advanced web scraping
- **github** (optional): GitHub API integration

## Scripts

Runtime scripts for:
- TLDR code analysis and token optimization
- Memory daemon for automatic learning extraction
- Session analysis and metrics tracking
- Hook debugging and validation
- Index maintenance and updates

## Technical Requirements

This profile has specific runtime dependencies:
- **Docker**: For containerized MCP servers
- **PostgreSQL**: For persistent memory storage
- **Python 3.11+**: For memory daemon and analysis scripts
- **Node.js**: For hook handlers and TypeScript scripts

## Architecture

Continuous Claude follows a "Router-First Architecture":

1. **User describes goal naturally** - No need to memorize commands
2. **Router skills analyze intent** - Determine which agents/skills to use
3. **Agents execute tasks** - Specialized agents work in parallel or sequence
4. **Results compound across sessions** - Memory system preserves learnings

### Design Principles

- **Compound, don't compact**: Extract learnings automatically, start fresh with full context
- **Context preservation**: YAML handoffs transfer state more efficiently than compaction
- **5-layer code analysis**: Semantic indexing reduces token waste from reading entire files
- **Natural language activation**: Skills activate based on intent, not commands

## Usage Examples

The profile activates automatically based on natural language:

```
"Fix the login bug in auth.py"
→ Activates: commit, research, debug-related skills
```

```
"Plan a new payment API feature"
→ Activates: architect agent, documentation skills
```

```
"Search for React hooks best practices"
→ Activates: search-router, perplexity-search
```

```
"Refactor the auth module for better testability"
→ Activates: refactoring-agent, judge, arbiter
```

## Notes

This profile represents a **complete development workspace** rather than a focused plugin. The large number of components (159 skills + 32 agents) reflects its comprehensive nature as a persistent development environment.

**Hook Configuration**: Hooks are configured via `settings.json` rather than individual `hooks.json` files. Review the `settings.json` file to understand hook registration and handler paths.

**Memory System**: The profile includes a memory daemon that automatically extracts learnings from sessions and persists them to PostgreSQL. This requires additional setup beyond the basic profile installation.

## License

MIT License - Original work by parcadei
