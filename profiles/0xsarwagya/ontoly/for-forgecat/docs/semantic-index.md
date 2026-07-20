# Semantic Index

The Semantic Index maps natural software concepts to deterministic Software
Graph entities.

It is not AI, vector search, embeddings, or a language model. The index is
derived from graph facts only:

- stable IDs
- display names
- normalized names
- node kinds
- packages, modules, namespaces, and frameworks
- aliases from identifiers and framework conventions
- keywords from source paths, metadata, relationships, and parent chains
- relationship context and graph importance

`ontoly build` writes the default output bundle to `ontoly-output/`, including
the Software Graph and derived indexes. Use `ontoly build . --output .ontoly`
when you want the compact cache-style `.ontoly/` directory instead.

## CLI

```sh
ontoly search "sleep thresholds"
ontoly search authentication
ontoly find JWT
ontoly locate notifications
ontoly search "JWT secret" --category configuration --json
```

The output includes:

- matched concepts
- ranked candidate symbols
- confidence
- evidence
- recommended capability

## API

```ts
import { createSemanticIndex, resolveIntent } from "@0xsarwagya/ontoly-core";

const index = createSemanticIndex(graph);
const result = resolveIntent(index, "Plan Definition Resource");
```

Every score is explainable. Candidates include score factors such as exact
symbol match, exact alias match, token overlap, relationship context, graph
importance, and architecture layer.

## Validation

The permanent search validation corpus lives in `validation/search`.

```sh
pnpm --filter @0xsarwagya/ontoly-core build
node validation/search/evaluate-search.mjs --graph .ontoly/SoftwareGraph.json
```

The evaluator reports Top-1 accuracy, Top-5 accuracy, latency, and per-question
results.
