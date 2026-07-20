# Compatibility Matrix

All official Ontoly skills use the portable Agent Skills `SKILL.md` layout and
require Ontoly CLI plus either MCP access or CLI fallback access.

| Skill | Skill Version | Minimum Ontoly | Enhancement | Required Capabilities | Deprecated |
| --- | --- | --- | --- | --- | --- |
| architecture-review | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `ExplainArchitecture`, `GraphStatistics`, `FindCycles`, `FindDependencies`, `EvidencePack` | no |
| codebase-onboarding | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `ExplainArchitecture`, `FindEntrypoints`, `GraphStatistics`, `FindFeatureOwner`, `EvidencePack` | no |
| configuration-analysis | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `FindConfiguration`, `FindConfigurationUsage`, `FindDependencies`, `GraphStatistics`, `EvidencePack` | no |
| dead-code-analysis | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `FindDeadCode`, `FindUnusedFeature`, `FindEntrypoints`, `FindDependents`, `EvidencePack` | no |
| dependency-analysis | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `FindDependencies`, `FindDependents`, `FindCycles`, `GraphStatistics`, `EvidencePack` | no |
| documentation | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `ExplainArchitecture`, `TraceRequestLifecycle`, `InspectModule`, `GraphStatistics`, `EvidencePack` | no |
| framework-analysis | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `ExplainArchitecture`, `GraphStatistics`, `FindNode`, `FindFeatureOwner`, `EvidencePack` | no |
| impact-analysis | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `ImpactAnalysis`, `FindDependents`, `FindDependencies`, `FindNode`, `EvidencePack` | no |
| migration-analysis | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `ExplainArchitecture`, `ImpactAnalysis`, `FindConfigurationUsage`, `FindDependencies`, `EvidencePack` | no |
| performance-analysis | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `TraceExecution`, `TraceRequestLifecycle`, `FindDependencies`, `GraphStatistics`, `EvidencePack` | no |
| refactoring | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `ImpactAnalysis`, `FindDependencies`, `FindDependents`, `FindCycles`, `EvidencePack` | no |
| request-tracing | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `TraceRequestLifecycle`, `FindResponsibleFunction`, `TraceExecution`, `FindNode`, `EvidencePack` | no |
| sdk-generation | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `ExplainArchitecture`, `TraceRequestLifecycle`, `FindResponsibleFunction`, `GraphStatistics`, `EvidencePack` | no |
| security-review | 1.0.0-rc.5 | 1.0.0-rc.5 | LLM Enhancement | `FindAuthenticationFlow`, `FindResponsibleFunction`, `TraceRequestLifecycle`, `FindConfigurationUsage`, `EvidencePack` | no |
