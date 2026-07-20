---
title: "Semantic Relationships"
description: "Deterministic relationship extraction rules for calls, dependencies, configuration usage, routes, providers, and framework semantics."
---

Ontoly extracts semantic relationships beyond syntax-level imports and exports.

Every semantic relationship must be deterministic and explainable. A parser or
compiler pass may emit a semantic relationship only when it has direct evidence
from source text, TypeScript binding resolution, or repository configuration.

## Implemented Relationships

- `EXTENDS`: class or interface heritage clauses.
- `IMPLEMENTS`: class `implements` clauses.
- `USES`: type references, framework imports, route middleware, and package framework usage.
- `DEPENDS_ON`: package dependency declarations and task dependencies.
- `READS`: `process.env.NAME`, `process.env["NAME"]`, and `import.meta.env.NAME`.
- `WRITES`: assignment to a supported environment variable expression.
- `THROWS`: `throw new ErrorType(...)` style thrown constructors.
- `CREATES`: `new ClassName(...)` expressions that resolve to graph nodes.
- `AUTHORIZES`: auth middleware, guards, and OpenAPI security requirements.
- `DECORATES`: TypeScript decorators.
- `INJECTS`: constructor parameter type dependencies.
- `REGISTERED_IN`: route registrations tied to detected frameworks.
- `MOUNTS`: code that mounts a route.
- `EXPOSES`: modules or API documents that expose routes.
- `PROVIDES`: packages and modules that provide frameworks or architectural roles.
- `CONFIGURES`: configuration files that configure packages, targets, pipelines, containers, workflows, or env vars.
- `EXECUTES`: package scripts that execute tasks.
- `HANDLES`: routes that map to handlers or OpenAPI operations.

## Provenance

Semantic edges include evidence with:

- `kind`
- `confidence`
- `span` when source-backed
- `description`

The validator warns when semantic relationships are missing evidence.
