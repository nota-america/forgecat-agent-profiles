---
title: "Capabilities"
description: "Deterministic software-engineering capabilities over the Ontoly Software Graph."
order: 22
---

# Capabilities

Capabilities are deterministic operations over a `SoftwareGraph`.

The `@0xsarwagya/ontoly-capabilities` package owns high-level software
engineering answers such as impact analysis, request tracing, ownership,
repository health, risk analysis, and implementation planning. The CLI and MCP
server call this package. They do not reimplement capability logic.

Capabilities do not parse source code, mutate the graph, inspect parser ASTs, or
perform AI reasoning. They compose the Query Engine, graph indexes, graph
relationships, diagnostics, and provenance into a shared result schema.

## Shared Result Schema

Every high-level capability returns:

- `summary`
- `evidence`
- `affectedNodes`
- `affectedFiles`
- `affectedPackages`
- `statistics`
- `confidence`
- `diagnostics`
- `recommendations`
- `graph`

This shape is used by:

- `ontoly explain`
- `ontoly impact`
- `ontoly evidence`
- `ontoly implementation-plan`
- `ontoly ownership`
- `ontoly health`
- `ontoly repository-summary`
- `ontoly risk`
- `ontoly request-trace`
- Ontoly MCP semantic capabilities
- Agent Skills that consume MCP

If an LLM turns a capability result into a user-facing answer, it must do so
through [LLM Enhancement](/docs/llm-enhancement). Capabilities remain
deterministic and AI-free; LLM Enhancement governs evidence, confidence, and
fallback behavior around them.

## High-Level Capabilities

- `RepositorySummary`
- `ArchitectureSummary`
- `ImpactAnalysis`
- `ImplementationPlan`
- `RequestTrace`
- `DependencyAnalysis`
- `OwnershipAnalysis`
- `AuthenticationFlow`
- `AuthorizationFlow`
- `ConfigurationUsage`
- `EnvironmentUsage`
- `CallHierarchy`
- `DependencyHierarchy`
- `ProviderGraph`
- `ModuleOverview`
- `ServiceOverview`
- `PackageOverview`
- `RepositoryHealth`
- `DeadCode`
- `CircularDependencies`
- `EntryPoints`
- `FrameworkSummary`
- `RiskAnalysis`
- `DataFlow`
- `FeatureTouchpoints`
- `EvidencePack`

## Evidence Packs

`EvidencePack` is the preferred compact payload for agent workflows. It gathers
the smallest useful set of graph facts for a query:

- top graph nodes
- top relationships
- relevant files
- stable ids
- diagnostics
- graph provenance
- deterministic confidence
- suggested next commands

It is exposed as a high-level capability, an MCP semantic capability, and the
`evidence-pack` enhancer artifact. It is not a separate router package.
Evidence routing remains a deterministic transformation above the immutable
Software Graph.

## MCP Primitive Capabilities

The MCP server also exposes lower-level primitives for agent workflows:

- `FindFunction`
- `FindNode`
- `FindDependencies`
- `FindDependents`
- `TraceExecution`
- `InspectFile`
- `InspectModule`
- `InspectClass`
- `InspectFunction`
- `FindCycles`
- `FindDeadCode`
- `FindEntrypoints`
- `FindConfiguration`
- `FindResponsibleFunction`
- `ExplainArchitecture`
- `TraceRequestLifecycle`
- `FindFeatureOwner`
- `FindAuthenticationFlow`
- `FindDatabaseAccess`
- `FindConfigurationUsage`
- `FindUnusedFeature`
- `GraphStatistics`

Primitive capabilities remain available for Skills that need exact graph facts.
High-level capabilities are preferred when the user asks a software-engineering
question.

## Related Docs

- [Capability API](/docs/capability-api)
- [Capability Registry](/docs/capability-registry)
- [Evidence Model](/docs/evidence-model)
- [Confidence Model](/docs/confidence-model)
- [Implementation Planning](/docs/implementation-planning)
- [Question Corpus](/docs/question-corpus)
- [Benchmark Methodology](/docs/benchmark-methodology)
- [Agent Skills](/docs/agent-skills)
