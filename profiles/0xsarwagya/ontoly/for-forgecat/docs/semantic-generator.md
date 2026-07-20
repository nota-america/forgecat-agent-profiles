# Semantic Generator

The Semantic Generator converts language semantics and framework semantic facts
into compiler symbols and relationships.

It lives in `@0xsarwagya/ontoly-semantic`.

## Inputs

```ts
generateCompilerArtifacts({
  project,
  registry,
});
```

Inputs are:

- a `TypeScriptProject`
- a `FrameworkRegistry`

The registry is optional. When omitted, Ontoly uses the default framework
registry.

## Outputs

The generator returns:

- `symbols`
- `relationships`
- `diagnostics`
- `detections`
- `facts`

The compiler then lowers symbols and relationships into the Software Graph.

## Responsibilities

The generator owns:

- graph-facing node generation
- graph-facing relationship generation
- relationship evidence
- confidence values
- provenance
- stable graph IDs
- framework detection nodes
- role nodes such as services and repositories
- framework fact lowering

The generator is the only layer that translates semantic facts into Software
Graph concepts.

## TypeScript Relationships

The generator derives language relationships from the TypeScript Semantic Model:

- `CONTAINS`
- `IMPORTS`
- `EXPORTS`
- `CALLS`
- `EXTENDS`
- `IMPLEMENTS`
- `USES`
- `CREATES`
- `THROWS`
- `READS`
- `WRITES`
- `DECORATES`
- `INJECTS`

## Framework Relationships

Framework facts may emit relationships such as:

- `EXPOSES`
- `MOUNTS`
- `HANDLES`
- `REGISTERED_IN`
- `DECLARES`
- `REGISTERS`
- `PROVIDES`
- `AUTHORIZES`
- `REFERENCES`
- `CONTAINS`

The Software Graph remains framework-independent. Framework details live in
node metadata, edge metadata, evidence, provenance, and stable IDs.

## Determinism

The generator deduplicates symbols and relationships by ID, then sorts output
before returning it. Analyzer ordering is controlled by the Framework Registry.

## Flow

```text
TypeScript Semantic Model
  |
  +--> TypeScript symbols and relationships
  |
  +--> Framework Registry
          |
          v
      Semantic Facts
          |
          v
Software Graph compiler artifacts
```
