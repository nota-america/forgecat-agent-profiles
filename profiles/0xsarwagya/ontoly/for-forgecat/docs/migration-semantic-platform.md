---
title: "Semantic Platform Migration"
description: "The migration path from frontend-owned framework extraction to Ontoly's TypeScript Semantic Model and Semantic Generator."
---

Ontoly separates language analysis, framework analysis, and graph generation.

Earlier alpha builds had the TypeScript frontend emit compiler symbols and
contain framework extraction rules. Current Release Candidate builds use the frontend as an
adapter around the TypeScript Semantic Model and the Semantic Generator.

## New Packages

- `@0xsarwagya/ontoly-typescript`: pure TypeScript Semantic Model.
- `@0xsarwagya/ontoly-semantic`: framework analyzers, registry, and Semantic
  Generator.

## What Changed

The compiler flow changed from:

```text
TypeScript frontend
  |
  v
Compiler symbols and framework relationships
```

to:

```text
TypeScript analyzer
  |
  v
TypeScript Semantic Model
  |
  v
Framework analyzers
  |
  v
Semantic Generator
  |
  v
Compiler symbols and relationships
```

## Compatibility

The generated Software Graph is intended to remain deterministic and
functionally equivalent. Existing compiler and query consumers should continue
to depend on the Software Graph, not parser internals.

## Migrating Internal Consumers

Consumers that need TypeScript facts should import from:

```ts
import { analyze } from "@0xsarwagya/ontoly-typescript";
```

Consumers that need framework facts should use:

```ts
import {
  createDefaultFrameworkRegistry,
  generateCompilerArtifacts,
} from "@0xsarwagya/ontoly-semantic";
```

Consumers that need repository truth should still use the Software Graph.

## Adding A Framework Analyzer

1. Implement `FrameworkAnalyzer`.
2. Consume only `TypeScriptProject`.
3. Emit semantic facts.
4. Register the analyzer.
5. Add model, registry, generator, and graph snapshot tests.
6. Document capabilities and compatibility.

No TypeScript analyzer or compiler core changes should be required for a new
framework analyzer.
