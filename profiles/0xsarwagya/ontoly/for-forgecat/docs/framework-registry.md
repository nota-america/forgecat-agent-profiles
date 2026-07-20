# Framework Registry

The Framework Registry owns analyzer registration, deterministic ordering,
detection, and fact collection.

It lives in `@0xsarwagya/ontoly-semantic`.

## API

```ts
const registry = createFrameworkRegistry()
  .register(createNestJsAnalyzer());

const detections = registry.detect(project);
const facts = registry.analyze(project);
```

The default registry is created with:

```ts
createDefaultFrameworkRegistry();
```

## Responsibilities

The registry owns:

- analyzer registration
- analyzer ordering
- framework discovery
- capability metadata
- semantic model version compatibility
- deterministic detection result ordering
- deterministic semantic fact ordering

It does not construct graph nodes and does not run compiler passes.

## Default Analyzers

The Release Candidate registry includes:

- NestJS
- Express
- Fastify
- Hono
- Next.js
- React
- Prisma

NestJS performs complete semantic extraction. Express, Fastify, and Hono support
deterministic detection and call-style route facts. Next.js, React, and Prisma
are detection placeholders.

## Compatibility

Every analyzer declares:

- `id`
- `version`
- `capabilities`
- `compatibleModelVersions`

Analyzers should reject unsupported TypeScript Semantic Model versions before
emitting facts. Future Ontoly versions can use this metadata for plugin
negotiation and compatibility diagnostics.

## Determinism

The registry sorts analyzers by ID and sorts detection results and facts before
returning them. An analyzer must not depend on registration order, filesystem
iteration order, random values, wall-clock time, or network state.

## Flow

```text
Analyzer registration
  |
  v
Deterministic analyzer order
  |
  v
Detection
  |
  v
Fact collection
  |
  v
Semantic Generator
```
