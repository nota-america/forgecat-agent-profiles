---
title: "Capability API"
description: "How Ontoly exposes deterministic software-engineering capabilities."
order: 23
---

# Capability API

The Capability API turns graph facts into deterministic software-engineering
answers.

The package entrypoint is `@0xsarwagya/ontoly-capabilities`.

```ts
import { createCapabilityEngine } from "@0xsarwagya/ontoly-capabilities";

const engine = createCapabilityEngine(graph);
const result = engine.execute("ImpactAnalysis", {
  id: "service:AuthService",
  depth: 4,
});
```

## Inputs

Capability inputs are intentionally small:

- `id`: stable graph node id or exact target.
- `query`: free-text graph lookup target.
- `task`: implementation-planning task text.
- `depth`: traversal depth.
- `mode`: bounded impact scope, such as `direct`, `local`, `feature`,
  `semantic`, or `blast-radius`.
- `limit`: compact result limit for Evidence Packs.
- `budget`: deterministic node budget for implementation planning.
- `timeoutMs`: planning budget metadata for callers that need progress
  accounting.

Capabilities may ignore fields they do not need. They must not read source files
directly and must not call parser internals.

## Result

All high-level capabilities return the shared capability result schema:

- `summary`: concise deterministic answer.
- `evidence`: graph-backed evidence items.
- `affectedNodes`: semantic node groups.
- `affectedFiles`: sorted source files from affected nodes.
- `affectedPackages`: sorted packages from affected nodes.
- `statistics`: capability-specific deterministic metrics.
- `confidence`: score derived from graph evidence.
- `diagnostics`: graph-native warnings and errors.
- `recommendations`: actionable next steps.
- `graph`: graph provenance.

## CLI

```bash
ontoly explain AuthService
ontoly impact UserRepository --mode local --json
ontoly evidence "remove PlanDefinition support"
ontoly implementation-plan "remove PlanDefinition support" --budget 80
ontoly ownership auth
ontoly health
ontoly repository-summary
ontoly risk AuthModule
ontoly request-trace "POST /login"
```

Use `--json` when another tool consumes the output.

## MCP

Ontoly MCP exposes the same high-level capability names. Agent Skills should use
those capabilities before falling back to primitive graph queries or repository
file inspection.
