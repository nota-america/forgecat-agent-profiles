---
name: request-tracing
description: Trace request lifecycle behavior through Ontoly route, handler, and call graph capabilities. Use when asked to trace login, API, controller, route, or request execution flow.
license: MIT
compatibility: Portable Agent Skills format; requires Ontoly CLI and MCP-capable or CLI-capable coding agent.
metadata:
  ontoly.skill.version: "1.0.0-rc.5"
  ontoly.min.version: "1.0.0-rc.5"
  ontoly.capabilities: "TraceRequestLifecycle, FindResponsibleFunction, TraceExecution, FindNode, EvidencePack"
  ontoly.category: "request-flow"
  ontoly.enhancement: "LLM Enhancement"
  ontoly.deprecated: "false"
---

# Request Tracing

Use this skill when the user asks for request tracing using Ontoly evidence.

## Required Workflow

Follow [the shared Ontoly workflow](reference/workflow.md). Also read [graph evidence rules](reference/graph.md), [MCP usage](reference/mcp.md), [best practices](reference/best-practices.md), and [fallback rules](reference/fallbacks.md) when the task requires detail.

## Ontoly Capabilities

Use these capabilities first: `TraceRequestLifecycle`, `FindResponsibleFunction`, `TraceExecution`, `FindNode`, `EvidencePack`.

## Output Contract

Return:

- answer or plan
- capabilities invoked
- graph evidence with node ids, edge types, source spans, and graph hash when available
- confidence: high, medium, or low
- fallback reason if repository files were inspected

## Boundaries

Do not implement compiler, query, MCP, SDK, or business logic in the skill. Do not search repository files until Ontoly cannot answer or evidence must be confirmed.

## Resources

- [Examples](examples.md)
- [Prompt template](templates/api-walkthrough.md)
- [Capability notes](reference/capabilities.md)

## Learn more

- Documentation: https://ontoly.sarwagya.wtf/docs
- This skill on the web: https://ontoly.sarwagya.wtf/skills#request-tracing
- All Ontoly Agent Skills: https://ontoly.sarwagya.wtf/skills
- Install via skills.sh: https://www.skills.sh/?q=0xsarwagya/ontoly
