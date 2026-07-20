# Architecture Reports

Architecture reports are generated from the Software Graph.

They do not parse source code or read repository files directly.

## Commands

```sh
ontoly architecture
ontoly architecture --format mermaid
ontoly architecture --format html > architecture.html
ontoly report
ontoly report api
ontoly report dependencies
ontoly report configuration
ontoly report frameworks
ontoly report workspace
```

## Formats

- Markdown
- JSON
- Mermaid
- Interactive HTML

Interactive HTML opens the Software Graph Explorer. The explorer starts in
Architecture mode, then lets you switch to dependency, call graph, or full graph
views without rebuilding the graph.

## Report Types

- Architecture summary: frameworks, packages, services, repositories, routes, configuration, and graph statistics.
- API report: routes, handlers, middleware, authorization, and OpenAPI operations.
- Dependency report: packages, dependencies, frameworks, and dependency cycles.
- Configuration report: config nodes and `CONFIGURES`, `READS`, `WRITES` edges.
- Framework report: detected frameworks and graph users.
- Workspace report: workspace, packages, scripts, tasks, pipelines, and workflows.
