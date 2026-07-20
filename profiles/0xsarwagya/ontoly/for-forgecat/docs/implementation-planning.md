---
title: "Implementation Planning"
description: "Graph-backed implementation planning without AI reasoning."
order: 27
---

# Implementation Planning

`ImplementationPlan` turns a task string into deterministic graph touchpoints and
ordered engineering steps.

It is not a code generator. It does not infer product intent. It finds graph
entities related to the task, expands the semantic boundary, groups affected
nodes, and returns recommendations.

## Example

```bash
ontoly implementation-plan "remove PlanDefinition support" --json
```

The result can include:

- matched graph terms
- affected routes, controllers, services, modules, repositories, configuration,
  resources, and language nodes
- graph evidence for the expansion
- implementation-order recommendations
- diagnostics when the task has low graph evidence

## Recommended Agent Workflow

1. Run `ImplementationPlan`.
2. Cite the graph hash and evidence.
3. Use `ImpactAnalysis` for the riskiest affected nodes.
4. Use `RequestTrace`, `ConfigurationUsage`, or `DataFlow` when the plan touches
   request handling, configuration, or persistence.
5. Inspect files only when Ontoly returns insufficient graph evidence.
