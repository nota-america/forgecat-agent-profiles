# Semantic Intelligence

Semantic Intelligence is Ontoly's deterministic layer above the immutable Software Graph.

It does not change compiler behavior, graph schema, CALLS generation, framework analyzers, or retrieval ranking unless a caller explicitly consumes the derived artifacts.

## Artifacts

`ontoly semantics build` writes:

```text
.ontoly/enhancers/artifacts/semantics.json
```

The artifact contains:

- feature ownership
- domain vocabulary
- intent vocabulary
- semantic neighborhoods for graph nodes
- deterministic confidence
- a Graphify-style `semanticGraph` with concept nodes and links

The Software Graph remains the source of truth. Deleting `semantics.json` and rerunning `ontoly semantics build` produces the same derived artifact for the same graph and semantic index.

## CLI

```bash
ontoly semantics build .
ontoly semantics inspect
ontoly semantics inspect "sleep duration thresholds" --json
ontoly semantics validate --ci
```

## MCP Capabilities

Semantic Intelligence adds deterministic MCP capabilities:

- `SemanticNeighborhood`
- `FeatureOwnership`
- `IntentExpansion`
- `SemanticContext`

These capabilities use the graph-derived Semantics artifact. They do not call LLMs, generate embeddings, or use vector search.

## Packages

- `@0xsarwagya/ontoly-enhancer-semantics`
- `@0xsarwagya/ontoly-intelligence`

## Invariants

- Semantics is a derived artifact.
- Enhancers never mutate `SoftwareGraph.json`.
- The semantic graph is a concept graph, not a replacement Software Graph.
- Confidence is derived from syntax, semantic index evidence, feature grouping, and graph relationships.
