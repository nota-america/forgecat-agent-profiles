# Software Graph

The Software Graph is Ontoly's source of truth.

Compiler frontends emit compiler symbols and relationships. The compiler
pipeline lowers those facts into graph nodes and edges, validates the result,
and serializes deterministic artifacts.

## Artifacts

After `ontoly build`, artifacts are written to `.ontoly/`:

```text
SoftwareGraph.json
graph.json
diagnostics.json
indexes.json
metadata.json
statistics.json
cache.json
```

`SoftwareGraph.json` is canonical. `graph.json` is a compatibility alias.

## Determinism

Graph node IDs, edge IDs, indexes, diagnostics, and statistics are sorted
deterministically. The graph timestamp is fixed inside graph metadata so the
deterministic hash does not change only because a build happened later.
