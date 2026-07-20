# TypeScript Semantic Model

The TypeScript Semantic Model is Ontoly's language layer.

It is produced by `@0xsarwagya/ontoly-typescript` and contains deterministic
facts about TypeScript source code. It does not know about frameworks. NestJS,
Express, Hono, Fastify, Next.js, React, Prisma, GraphQL, and future ecosystem
rules belong in framework analyzers that consume this model.

## Package

```ts
import { analyze } from "@0xsarwagya/ontoly-typescript";

const project = await analyze(".");
```

The public model exposes:

- `project.files`
- `project.sourceFiles`
- `project.symbols`
- `project.classes`
- `project.interfaces`
- `project.functions`
- `project.methods`
- `project.variables`
- `project.enums`
- `project.namespaces`
- `project.imports`
- `project.exports`
- `project.calls`
- `project.decorators`
- `project.types`
- `project.heritage`
- `project.constructors`
- `project.creates`
- `project.throws`
- `project.environmentAccesses`

## Responsibilities

The analyzer owns TypeScript language semantics:

- program construction
- source file discovery
- symbol discovery
- source locations
- imports and exports
- module resolution
- classes, interfaces, functions, methods, variables, enums, namespaces
- decorators as TypeScript syntax
- heritage clauses
- call expressions
- constructor parameters
- generic type parameters
- type references
- environment variable syntax
- TypeScript diagnostics normalized into graph-native diagnostics

It does not infer application concepts such as controllers, routes, providers,
modules, schemas, pages, or resolvers.

## Determinism

The model is sorted before serialization. Stable IDs, source spans, diagnostics,
and metadata hashes are deterministic for identical input.

The model metadata includes:

- `version`
- `compilerVersion`
- `metadata.fileCount`
- `metadata.symbolCount`
- `metadata.deterministicHash`
- `metadata.generatedAt`

`generatedAt` is fixed for deterministic output. It is metadata about model
formatting, not a wall-clock build timestamp.

## Serialization

`ontoly analyze .` writes:

```text
.ontoly/
  semantic-model.json
```

The package also exposes:

```ts
serializeTypeScriptProject(project);
deserializeTypeScriptProject(json);
validateTypeScriptSemanticModel(project);
writeTypeScriptSemanticModel(project, path);
```

`semantic-model.json` is the exchange format between language analysis,
framework analysis, semantic generation, CLI inspection, MCP, and future tools.

## Validation

Validation checks the model version, root, file records, symbol IDs, required
arrays, and deterministic shape. Validation is intentionally language-level.
Framework compatibility is validated by framework analyzers and the registry.

## Boundary

The language layer may expose decorator names and arguments because decorators
are TypeScript syntax. It must not interpret those decorators as framework
facts. For example, `@Controller("users")` appears as a decorator named
`Controller`; only the NestJS analyzer may turn that into a controller or route
fact.

## Flow

```text
Repository
  |
  v
TypeScript Analyzer
  |
  v
TypeScript Semantic Model
  |
  v
Framework Analyzers
```
