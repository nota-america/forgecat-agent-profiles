---
name: codebase-onboarding
description: Onboard a developer to a repository using Ontoly graph summaries. Use when asked to explain a new codebase, identify entrypoints, map packages, or suggest first files to inspect.
license: MIT
compatibility: Portable Agent Skills format; requires Ontoly CLI and MCP-capable or CLI-capable coding agent.
metadata:
  ontoly.skill.version: "1.0.0-rc.5"
  ontoly.min.version: "1.0.0-rc.5"
  ontoly.capabilities: "ExplainArchitecture, FindEntrypoints, GraphStatistics, FindFeatureOwner, EvidencePack"
  ontoly.category: "onboarding"
  ontoly.enhancement: "LLM Enhancement"
  ontoly.deprecated: "false"
---

# Codebase Onboarding

Use this skill when the user asks for codebase onboarding using Ontoly evidence.

## Required Workflow

Follow [the shared Ontoly workflow](reference/workflow.md). Also read [graph evidence rules](reference/graph.md), [MCP usage](reference/mcp.md), [best practices](reference/best-practices.md), and [fallback rules](reference/fallbacks.md) when the task requires detail.

## Ontoly Capabilities

Use these capabilities first: `ExplainArchitecture`, `FindEntrypoints`, `GraphStatistics`, `FindFeatureOwner`, `EvidencePack`.

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
- [Prompt template](templates/repository-onboarding.md)
- [Capability notes](reference/capabilities.md)

## Learn more

- Documentation: https://ontoly.sarwagya.wtf/docs
- This skill on the web: https://ontoly.sarwagya.wtf/skills#codebase-onboarding
- All Ontoly Agent Skills: https://ontoly.sarwagya.wtf/skills
- Install via skills.sh: https://www.skills.sh/?q=0xsarwagya/ontoly
