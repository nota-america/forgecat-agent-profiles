# Enhancers

Enhancers are deterministic compiler-pass-style transformations over Ontoly
artifacts.

They run after the compiler has produced a Software Graph. An enhancer consumes
one or more immutable artifacts, then produces new versioned artifacts for
humans, tools, MCP, Skills, websites, validation, or future SDK generators.

Enhancers never parse repositories, never mutate the Software Graph, and never
use AI.

```text
Repository
  -> Compiler
  -> SoftwareGraph
  -> Enhancer
  -> Artifact
  -> Enhancer
  -> Artifact
  -> Consumer
```

## Core Rules

- The Software Graph is immutable.
- Enhancers are pure deterministic transformations.
- Enhancers consume artifacts, not source files.
- Enhancers may read configuration and cached artifacts.
- Enhancers must declare required inputs and produced outputs.
- Enhancer output must be reproducible for the same graph and configuration.
- Every produced artifact has a stable hash and provenance.

## Package

The public API lives in:

```text
packages/enhancer
```

Package name:

```text
@0xsarwagya/ontoly-enhancer
```

The package defines:

- `Enhancer`
- `EnhancerContext`
- `ArtifactDescriptor`
- `OntolyArtifact`
- `ArtifactRegistry`
- `EnhancerManifest`
- pipeline execution
- deterministic cache keys
- manifest discovery
- Mermaid, DOT, and JSON pipeline visualization
- reusable test harness helpers

## Enhancer Interface

Every enhancer implements:

```ts
interface Enhancer {
  id: string;
  name: string;
  description: string;
  version: string;
  requires: EnhancerRequirement[];
  produces: ArtifactDescriptor[];
  run(context: EnhancerContext): EnhancerRunResult | Promise<EnhancerRunResult>;
  validate(context: EnhancerContext): EnhancerValidationIssue[];
  supportsIncremental(): boolean;
  before(context: EnhancerContext): void | Promise<void>;
  after(context: EnhancerContext, result: EnhancerRunResult): void | Promise<void>;
  dependencies(): string[];
}
```

Use `defineEnhancer()` to fill stable defaults.

## Context

Enhancers receive a readonly context:

- `graph`
- `semanticIndex`
- `diagnostics`
- `statistics`
- `indexes`
- `configuration`
- `filesystem`
- `logger`
- `cache`
- `artifacts`

Inputs are treated as immutable. Enhancers write by returning artifacts, not by
changing context.

## Artifact Model

Artifacts are first-class and versioned.

Examples:

- `SoftwareGraph`
- `SemanticIndex`
- `Semantics`
- `RepositorySummary`
- `ArchitectureReport`
- `HealthReport`
- `RiskReport`
- `MarkdownDocs`
- `MermaidDiagram`
- `HtmlGraph`
- `OpenAPI`
- `SDK`
- `Coverage`
- `Evaluation`
- `CapabilityCatalog`
- `ValidationReport`
- `EvidencePack`

Every artifact declares:

- id
- kind
- name
- version
- schema
- media type
- graph hash
- artifact hash
- dependencies
- provenance

## Manifest

Every portable enhancer ships an `enhancer.json`.

```json
{
  "id": "semantic-index",
  "name": "Semantic Index",
  "description": "Generate the deterministic Semantic Index artifact from the Software Graph.",
  "version": "1.0.0",
  "apiVersion": "1.0.0",
  "inputs": [{ "artifact": "SoftwareGraph" }],
  "outputs": [
    {
      "id": "SemanticIndex",
      "kind": "SemanticIndex",
      "name": "Semantic Index",
      "version": "1.0.0",
      "description": "Deterministic repository vocabulary and intent index.",
      "schema": {
        "version": "1.0.0",
        "mediaType": "application/json"
      }
    }
  ],
  "dependencies": [],
  "supportedGraphVersion": "1.0.0",
  "supportsIncremental": true
}
```

## Pipeline

The pipeline builds a deterministic DAG from:

- declared enhancer dependencies
- required artifact inputs
- produced artifact outputs

Compatible enhancers can run in parallel. Dependency levels execute in stable
lexicographic order.

Render the pipeline:

```sh
ontoly enhancer graph --format mermaid
ontoly enhancer graph --format dot
ontoly enhancer graph --format json
```

## Caching

Enhancer cache keys include:

- Enhancer API version
- enhancer id
- enhancer version
- graph hash
- configuration
- required artifact hashes
- produced artifact descriptors

An enhancer can opt into incremental execution with `supportsIncremental()`.
Cached artifacts are reused only when the cache key matches.

## CLI

```sh
ontoly enhancer list
ontoly enhancer inspect semantic-index
ontoly enhancer run semantic-index .
ontoly enhancer run MarkdownDocs .
ontoly enhancer run all .
ontoly enhancer graph --format mermaid
ontoly enhancer doctor
ontoly enhancer validate --ci
```

`ontoly enhancer run` writes artifacts to:

```text
.ontoly/
  enhancers/
    summary.json
    cache.json
    artifacts/
      semantic-index.json
      architecture-report.json
      markdown-docs.md
      mermaid-diagram.mmd
      html-graph.html
```

## Built-In Enhancers

Built-ins wrap existing Ontoly behavior without changing compiler output:

| Enhancer | Produces |
| --- | --- |
| `semantic-index` | `SemanticIndex` |
| `semantics` | `Semantics` |
| `capability-catalog` | `CapabilityCatalog` |
| `evidence-pack` | `EvidencePack` |
| `validation-report` | `ValidationReport`, `Coverage` |
| `repository-summary` | `RepositorySummary` |
| `health-report` | `HealthReport` |
| `risk-report` | `RiskReport` |
| `dead-code-report` | `DeadCodeReport` |
| `architecture-report` | `ArchitectureReport` |
| `markdown-docs` | `MarkdownDocs` |
| `mermaid-diagram` | `MermaidDiagram` |
| `html-graph` | `HtmlGraph` |
| `evaluation-summary` | `Evaluation` |

## Testing

Use `createEnhancerTestHarness()` to run enhancers against fixture graphs.

The harness supports:

- golden artifact snapshots
- determinism checks
- incremental cache checks
- pipeline execution checks
- manifest validation checks

## Best Practices

- Keep enhancers small and artifact-oriented.
- Prefer artifact requirements over enhancer-id dependencies.
- Include graph evidence in generated reports.
- Produce JSON when possible and text formats only when useful.
- Treat missing required artifacts as validation errors.
- Avoid source file parsing. If an enhancer needs source data, the compiler
  should produce it as an artifact first.
