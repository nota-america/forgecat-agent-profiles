# FAQ

## Why does Ontoly exist?

Developer tools keep rebuilding the same understanding of a codebase. Ontoly
builds one deterministic Software Graph so tools can query shared structure.

## Does Ontoly use AI?

No. The graph compiler is deterministic and AI-free. AI tools may consume the
graph through MCP or plugins, but every LLM-facing Ontoly workflow must use
[LLM Enhancement](llm-enhancement.md).

## What languages are supported?

The Release Candidate focuses on TypeScript and repository intelligence. OpenAPI support is
available as a frontend. Other frontends are planned through RFCs and plugins.

## Where are artifacts written?

`ontoly build` writes to `.ontoly/` by default.

## Is the graph deterministic?

Identical input should produce stable node IDs and the same deterministic graph
hash. The validation lab includes determinism gates.

## How do I inspect the graph?

```sh
ontoly inspect AuthService
ontoly query find AuthService
ontoly graph --format mermaid
ontoly graph --format html > graph.html
ontoly architecture --format html > architecture.html
```

## How do I run validation?

```sh
ontoly evaluate
ontoly leaderboard
ontoly validate all
ontoly benchmark performance
```
