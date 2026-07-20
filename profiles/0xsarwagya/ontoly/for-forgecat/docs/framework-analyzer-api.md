# Framework Analyzer API

Framework analyzers turn a TypeScript Semantic Model into framework semantic
facts.

They never access the TypeScript Compiler API directly and never construct
Software Graph nodes or relationships. This keeps framework knowledge isolated
from the language layer and keeps graph construction centralized.

## Interface

```ts
interface FrameworkAnalyzer {
  id: string;
  name: string;
  version: string;
  capabilities: readonly string[];
  compatibleModelVersions: readonly string[];
  detect(project: TypeScriptProject): DetectionResult;
  analyze(project: TypeScriptProject): readonly SemanticFact[];
}
```

## Detection Result

```ts
interface DetectionResult {
  framework: string;
  detected: boolean;
  confidence: "exact" | "inferred" | "low";
  evidence: readonly string[];
  analyzerId: string;
  analyzerVersion: string;
  coverage?: number;
  metadata?: JsonObject;
}
```

Detection must be deterministic and evidence-backed. Package imports are exact
evidence. Decorators, naming conventions, and call shapes are inferred evidence
unless the analyzer can tie them to a known package or import.

## Semantic Facts

The Semantic Generator accepts these framework fact kinds:

- `ControllerDeclared`
- `RouteDeclared`
- `ModuleDeclared`
- `ProviderDeclared`
- `DependencyInjected`
- `GuardRegistered`
- `MiddlewareRegistered`

Each fact includes:

- `kind`
- `analyzerId`
- `framework`
- `confidence`
- optional `span`
- optional `metadata`

Facts are intermediate compiler inputs. The Semantic Generator is responsible
for converting them into graph nodes and edges.

## Analyzer Rules

A framework analyzer may:

- inspect `TypeScriptProject`
- inspect imports, exports, classes, methods, decorators, calls, and types
- emit semantic facts
- report deterministic detection evidence
- declare capabilities and compatible semantic model versions

A framework analyzer must not:

- mutate the TypeScript Semantic Model
- access compiler internals
- use the TypeScript Compiler API
- construct `SoftwareGraph` nodes directly
- depend on wall-clock time, random order, or external services

## NestJS

The NestJS analyzer is the first complete analyzer. It supports:

- `@Controller`
- route decorators such as `@Get`, `@Post`, `@Patch`, and `@Delete`
- `@Module`
- `@Injectable`
- `@Inject`
- `@Global`
- `@Catch`
- `@UseGuards`
- `@UseFilters`
- `@UseInterceptors`
- provider analysis
- module analysis
- constructor dependency injection

## Placeholder Analyzers

The default registry also includes deterministic detection for Express,
Fastify, Hono, Next.js, React, and Prisma. Only NestJS performs complete
semantic extraction in the current Release Candidate.

## Flow

```text
TypeScript Semantic Model
  |
  v
Framework Analyzer detect()
  |
  v
Framework Analyzer analyze()
  |
  v
Semantic Facts
```
