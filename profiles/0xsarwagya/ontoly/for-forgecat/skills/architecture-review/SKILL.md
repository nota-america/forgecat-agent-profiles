---
name: architecture-review
description: Review repository architecture using Ontoly Software Graph and MCP capabilities. Use when asked to explain architecture, module boundaries, package topology, service ownership, or architectural risk.
license: MIT
compatibility: Portable Agent Skills format; requires Ontoly CLI and MCP-capable or CLI-capable coding agent.
metadata:
  ontoly.skill.version: "1.0.0-rc.5"
  ontoly.min.version: "1.0.0-rc.5"
  ontoly.capabilities: "ExplainArchitecture, GraphStatistics, FindCycles, FindDependencies, EvidencePack"
  ontoly.category: "architecture"
  ontoly.enhancement: "LLM Enhancement"
  ontoly.deprecated: "false"
---

# Architecture Review

Use this skill when the user asks for architecture review using Ontoly evidence.

## Required Workflow

Follow [the shared Ontoly workflow](reference/workflow.md). Also read [graph evidence rules](reference/graph.md), [MCP usage](reference/mcp.md), [best practices](reference/best-practices.md), and [fallback rules](reference/fallbacks.md) when the task requires detail.

## Ontoly Capabilities

Use these capabilities first: `ExplainArchitecture`, `GraphStatistics`, `FindCycles`, `FindDependencies`, `EvidencePack`.

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
- [Prompt template](templates/architecture-review.md)
- [Capability notes](reference/capabilities.md)

## Learn more

- Documentation: https://ontoly.sarwagya.wtf/docs
- This skill on the web: https://ontoly.sarwagya.wtf/skills#architecture-review
- All Ontoly Agent Skills: https://ontoly.sarwagya.wtf/skills
- Install via skills.sh: https://www.skills.sh/?q=0xsarwagya/ontoly
