---
title: "Skills Overview"
description: "Browse the official Ontoly Agent Skills, source directories, install commands, capability mappings, and related docs."
---

Ontoly ships official Agent Skills as independently installable `SKILL.md`
directories. Skills teach workflow only: every software-understanding claim
must come from the Software Graph, Query Engine, or MCP capabilities.

LLM Enhancement is mandatory every time Ontoly is used by an LLM. Official
Skills declare it explicitly and installed Skills include local workflow
references that preserve evidence, confidence, and fallback rules.

## Docs To Read First

- [Agent Skills](agent-skills.md) - installation, standard workflow, versioning, and command reference.
- [MCP](mcp.md) - graph-backed capabilities and structured errors.
- [Capabilities](capabilities.md) - deterministic capability behavior.
- [Skills Best Practices](skills-best-practices.md) - evidence, confidence, and fallback rules.
- [LLM Enhancement](llm-enhancement.md) - mandatory rules for LLM-facing Ontoly use.
- [Skills Development](skills-development.md) - how to add or change a skill.
- [Skills Validation](skills-validation.md) - source and installed-artifact validation.
- [Agent Skills Catalog](https://oss.sarwagya.wtf/ontoly/docs/skills) - public installable skill pages.

Before installing a skill, build the repository graph and verify MCP capability
discovery:

```sh
ontoly build .
ontoly mcp --list
```

Use `npx skills add 0xsarwagya/ontoly --skill <id>` after the RC is published.
For source-checkout validation before publication, use
`npx skills add /path/to/ontoly --skill <id> --copy`.

## Official Skills

| Skill | Category | Enhancement | Source | Install |
| --- | --- | --- | --- | --- |
| Architecture Review | architecture | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/architecture-review) | `npx skills add 0xsarwagya/ontoly --skill architecture-review` |
| Impact Analysis | change-analysis | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/impact-analysis) | `npx skills add 0xsarwagya/ontoly --skill impact-analysis` |
| Codebase Onboarding | onboarding | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/codebase-onboarding) | `npx skills add 0xsarwagya/ontoly --skill codebase-onboarding` |
| Request Tracing | request-flow | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/request-tracing) | `npx skills add 0xsarwagya/ontoly --skill request-tracing` |
| Dependency Analysis | dependencies | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/dependency-analysis) | `npx skills add 0xsarwagya/ontoly --skill dependency-analysis` |
| Security Review | security | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/security-review) | `npx skills add 0xsarwagya/ontoly --skill security-review` |
| Configuration Analysis | configuration | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/configuration-analysis) | `npx skills add 0xsarwagya/ontoly --skill configuration-analysis` |
| Framework Analysis | frameworks | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/framework-analysis) | `npx skills add 0xsarwagya/ontoly --skill framework-analysis` |
| Documentation | documentation | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/documentation) | `npx skills add 0xsarwagya/ontoly --skill documentation` |
| Refactoring | refactoring | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/refactoring) | `npx skills add 0xsarwagya/ontoly --skill refactoring` |
| Performance Analysis | performance | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/performance-analysis) | `npx skills add 0xsarwagya/ontoly --skill performance-analysis` |
| Dead Code Analysis | static-analysis | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/dead-code-analysis) | `npx skills add 0xsarwagya/ontoly --skill dead-code-analysis` |
| Migration Analysis | migration | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/migration-analysis) | `npx skills add 0xsarwagya/ontoly --skill migration-analysis` |
| SDK Generation | sdk-planning | LLM Enhancement | [Docs](https://oss.sarwagya.wtf/ontoly/docs/skills/sdk-generation) | `npx skills add 0xsarwagya/ontoly --skill sdk-generation` |

## Release Assets

- [Skill catalog](../skills/SKILL_CATALOG.md)
- [Skill matrix](../skills/SKILL_MATRIX.md)
- [Capability matrix](../skills/CAPABILITY_MATRIX.md)
- [Compatibility matrix](../skills/COMPATIBILITY_MATRIX.md)
- [Installation guide](../skills/INSTALLATION.md)
- [README snippets](../skills/README_SNIPPETS.md)
- [Website assets](../skills/website-assets/skill-catalog.json)

## Capability Mapping

Skills map to Ontoly MCP capabilities through declarative metadata. LLM Enhancement is mandatory for every official skill and every LLM-facing Ontoly workflow. The mapping is not business logic.

| Skill | Primary Capabilities |
| --- | --- |
| Architecture Review | `ExplainArchitecture`, `GraphStatistics`, `FindCycles`, `FindDependencies` |
| Impact Analysis | `ImpactAnalysis`, `FindDependents`, `FindDependencies`, `FindNode` |
| Codebase Onboarding | `ExplainArchitecture`, `FindEntrypoints`, `GraphStatistics`, `FindFeatureOwner` |
| Request Tracing | `TraceRequestLifecycle`, `FindResponsibleFunction`, `TraceExecution`, `FindNode` |
| Dependency Analysis | `FindDependencies`, `FindDependents`, `FindCycles`, `GraphStatistics` |
| Security Review | `FindAuthenticationFlow`, `FindResponsibleFunction`, `TraceRequestLifecycle`, `FindConfigurationUsage` |
| Configuration Analysis | `FindConfiguration`, `FindConfigurationUsage`, `FindDependencies`, `GraphStatistics` |
| Framework Analysis | `ExplainArchitecture`, `GraphStatistics`, `FindNode`, `FindFeatureOwner` |
| Documentation | `ExplainArchitecture`, `TraceRequestLifecycle`, `InspectModule`, `GraphStatistics` |
| Refactoring | `ImpactAnalysis`, `FindDependencies`, `FindDependents`, `FindCycles` |
| Performance Analysis | `TraceExecution`, `TraceRequestLifecycle`, `FindDependencies`, `GraphStatistics` |
| Dead Code Analysis | `FindDeadCode`, `FindUnusedFeature`, `FindEntrypoints`, `FindDependents` |
| Migration Analysis | `ExplainArchitecture`, `ImpactAnalysis`, `FindConfigurationUsage`, `FindDependencies` |
| SDK Generation | `ExplainArchitecture`, `TraceRequestLifecycle`, `FindResponsibleFunction`, `GraphStatistics` |
