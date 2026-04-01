*written by Hephai*

# Continuous Claude v3

A persistent, learning, multi-agent development environment built on Claude Code. Transforms Claude into a continuously learning system with context preservation across sessions, specialized agent orchestration, and intelligent code analysis to eliminate token waste from compaction.

## What This Profile Contains

This is a comprehensive development environment with:
- **159 skills** covering workflow orchestration, code analysis, memory systems, search tools, agent development, and debugging
- **32 specialized agents** for specific tasks (refactoring, testing, security analysis, documentation, feature planning, etc.)
- **MCP servers** for git, fetch, search, and external tool integration
- **Scripts and runtime tools** for session management, TLDR code analysis, and memory extraction
- **Rules** for code organization, skill development, and agent coordination

## Key Components

### Core Skills
- **workflow-router**: Goal-based workflow orchestration that routes tasks to specialist agents
- **tldr-stats**: Token usage tracking, cost analysis, and TLDR savings metrics
- **commit**: Git commits with user approval and proper attribution
- **research**: Document codebase comprehensively with historical context
- **perplexity-search**: AI-powered web search and research
- **repoprompt**: Token-efficient codebase exploration

### Specialized Agents
- **architect**: Feature planning, design documentation, and integration planning
- **judge**: Refactoring and code transformation review
- **arbiter**: Unit and integration test execution and validation
- **aegis**: Security vulnerability analysis and testing
- **spark**: Lightweight fixes and quick tweaks
- **chronicler**: Session analysis and learning extraction

### Memory & Context Systems
- Handoff protocol for context preservation across sessions
- TLDR code analysis with 5-layer semantic indexing
- Memory daemon for automatic learning extraction
- Context query agents for precedent lookup

## Technical Requirements

This profile has specific runtime dependencies:
- Docker (for containerized MCP servers)
- PostgreSQL (for persistent memory storage)
- Python 3.11+ (for memory daemon and analysis scripts)
- Node.js (for hook handlers and TypeScript scripts)

## Installation

```bash
npx hephai install @hephai-nota/continuous-claude-v3
```

## Usage

The profile uses natural language skill activation - you don't need to memorize commands. Skills activate automatically based on context and intent.

Examples:
- "Fix the login bug in auth.py" → activates commit, research, debug-related skills
- "Plan a new payment API feature" → activates architect agent, documentation skills
- "Search for React hooks best practices" → activates search-router, perplexity-search

## Architecture

The system follows a "Router-First Architecture" where meta-skills orchestrate specialized agents and tools:
1. User describes goal naturally
2. Router skills analyze intent and select appropriate agents/skills
3. Agents execute tasks in parallel or sequence
4. Results compound across sessions via memory system

## Notes

This profile represents a complete development workspace rather than a focused plugin. The large number of components (159 skills + 32 agents) reflects its comprehensive nature.

Hooks are configured via settings.json rather than individual hooks.json files. Review the settings.json file to understand hook registration and handler paths.

## License

MIT License - See LICENSE file in the source repository.
