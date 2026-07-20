---
title: "Compiler Pipeline v2"
description: "How Ontoly separates TypeScript analysis, framework analysis, semantic generation, graph construction, validation, and serialization."
---

Ontoly structures the compiler around a semantic platform.

The TypeScript analyzer produces a language model. Framework analyzers produce
framework facts. The Semantic Generator creates compiler artifacts. The
compiler remains responsible for graph construction, validation, indexing, and
serialization.

## Pipeline

```text
Repository Discovery
  |
  v
TypeScript Analysis
  |
  v
TypeScript Semantic Model
  |
  v
Framework Analysis
  |
  v
Semantic Generator
  |
  v
Graph Builder
  |
  v
Graph Validation
  |
  v
Indexes
  |
  v
Serialization
```

## Stages

### Repository Discovery

Inputs: root path and compiler options.

Outputs: source inventory, package metadata, configuration metadata.

Side effects: none unless a command later writes artifacts.

Failures: missing root, unreadable files, invalid package metadata.

Extension hooks: discovery passes may add source inventories or repository
metadata.

### TypeScript Analysis

Inputs: source inventory and compiler options.

Outputs: `TypeScriptProject`.

Side effects: none.

Failures: TypeScript diagnostics are normalized into model diagnostics when
possible. Fatal filesystem failures abort the stage.

Extension hooks: language packages may provide alternative model producers in
future versions.

### Framework Analysis

Inputs: `TypeScriptProject` and registered framework analyzers.

Outputs: detection results and semantic facts.

Side effects: none.

Failures: incompatible analyzers are skipped or diagnosed. Analyzer failures are
reported as compiler diagnostics.

Extension hooks: framework analyzers are registered through the Framework
Registry.

### Semantic Generation

Inputs: `TypeScriptProject`, detection results, and semantic facts.

Outputs: compiler symbols, compiler relationships, and diagnostics.

Side effects: none.

Failures: unknown fact kinds, missing targets, invalid evidence, or incompatible
model versions produce diagnostics.

Extension hooks: future generators may support additional semantic fact kinds
without changing the language analyzer.

### Graph Builder

Inputs: compiler symbols, relationships, repository metadata, diagnostics.

Outputs: `SoftwareGraph`.

Side effects: none.

Failures: duplicate invalid nodes, invalid edge endpoints, invalid graph shape.

Extension hooks: compiler passes may contribute symbols and relationships before
graph construction.

### Graph Validation

Inputs: `SoftwareGraph`.

Outputs: validated graph and graph-native diagnostics.

Side effects: none.

Failures: validation diagnostics can fail the build when they violate required
graph invariants.

Extension hooks: validation passes may add diagnostics.

### Serialization

Inputs: validated graph, diagnostics, indexes, statistics, semantic model.

Outputs: `.ontoly/SoftwareGraph.json`, `.ontoly/diagnostics.json`,
`.ontoly/statistics.json`, `.ontoly/semantic-model.json`, and related indexes.

Side effects: writes artifacts when the build command is configured to write.

Failures: write failures abort the command after diagnostics are reported.

Extension hooks: emitters may write additional deterministic artifacts.

## Build Modes

- `ontoly analyze` writes only the TypeScript Semantic Model.
- `ontoly semantic` reads or creates the semantic model and prints it.
- `ontoly frameworks` runs framework detection and reports coverage.
- `ontoly build` produces the Software Graph and build artifacts.
- `ontoly watch` reruns the pipeline when source files change.

## Invariants

- Identical input produces identical semantic model and graph output.
- Language analysis is framework-free.
- Framework analyzers consume only the semantic model.
- Graph generation is centralized in the Semantic Generator.
- The Software Graph remains the only source of truth for downstream tools.
