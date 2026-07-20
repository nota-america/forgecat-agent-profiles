---
title: "Capability Registry"
description: "How Ontoly registers, orders, and executes deterministic capabilities."
order: 24
---

# Capability Registry

The Capability Registry is the deterministic catalog for high-level Ontoly
capabilities.

Each capability declares:

- `name`
- `version`
- `description`
- `inputSchema`
- `execute`

The registry sorts capabilities by name. Execution is synchronous and
side-effect free: a capability receives a `SoftwareGraph` and `QueryEngine`, then
returns a capability result.

## Invariants

- Capability names are stable public API.
- Capability versions are independent of Ontoly package versions.
- Capability execution must be deterministic for identical graph input.
- Capability output must be serializable JSON.
- Capability code must not parse files, mutate graph state, or call AI systems.
- Plugins may register new capabilities only when they preserve deterministic
  ordering and schema validation.

## Built-In Registry

`createCapabilityEngine(graph)` creates a registry with Ontoly's built-in
capabilities. The CLI and MCP server use this registry instead of duplicating
software-engineering logic.

## Versioning

Capability versions start at `1.0.0` for the Release Candidate surface. Breaking changes to
input or output shape require a new capability version and documentation update.
