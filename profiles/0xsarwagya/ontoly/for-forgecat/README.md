*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Ontoly Agent Skills

Graph-first software understanding skills for coding agents using Ontoly Software Graph and MCP-style capabilities.

## Tags

- ontoly
- agent-skills
- software-graph
- mcp
- static-analysis
- codebase-analysis

## Installation

```bash
npx forgecat install @forgecat/0xsarwagya_ontoly
```

## Skills / Agents / Commands

- **architecture-review** - Review repository architecture using Ontoly Software Graph and MCP capabilities. Use when asked to explain architecture, module boundaries, package topology, service ownership, or architectural risk. `architecture`
- **codebase-onboarding** - Onboard a developer to a repository using Ontoly graph summaries. Use when asked to explain a new codebase, identify entrypoints, map packages, or suggest first files to inspect. `onboarding`
- **configuration-analysis** - Audit configuration and environment variable usage through Ontoly configuration capabilities. Use when asked where env vars, build config, runtime config, or feature flags are read. `configuration`
- **dead-code-analysis** - Find potentially unused functions, methods, services, routes, or features using Ontoly dead-code and entrypoint capabilities. Use when asked what code appears unreachable or safe to remove. `static-analysis`
- **dependency-analysis** - Analyze internal and package dependencies using Ontoly graph traversal. Use when asked which modules, packages, services, or files depend on each other. `dependencies`
- **documentation** - Draft graph-backed documentation from Ontoly summaries and traces. Use when asked to document architecture, APIs, modules, packages, or request lifecycles without re-parsing source files. `documentation`
- **framework-analysis** - Explain detected frameworks and framework-specific graph coverage using Ontoly framework reports. Use when asked whether a repository uses NestJS, Next.js, React, Turborepo, or other supported framework concepts. `frameworks`
- **impact-analysis** - Analyze change impact using Ontoly dependency and dependent traversal. Use when asked what breaks if a symbol, service, route, package, or repository node changes or is removed. `change-analysis`
- **migration-analysis** - Plan migrations using Ontoly architecture, dependency, impact, and configuration evidence. Use when asked to migrate frameworks, packages, APIs, modules, or runtime configuration. `migration`
- **performance-analysis** - Investigate performance-sensitive architecture using Ontoly call, dependency, and graph statistics evidence. Use when asked about hot paths, expensive flows, or performance investigation starting points. `performance`
- **refactoring** - Plan refactors with Ontoly impact and dependency evidence. Use when asked to move, rename, split, extract, or remove code while preserving behavior. `refactoring`
- **request-tracing** - Trace request lifecycle behavior through Ontoly route, handler, and call graph capabilities. Use when asked to trace login, API, controller, route, or request execution flow. `request-flow`
- **sdk-generation** - Plan SDK generation from Ontoly API, route, model, and operation evidence. Use when asked to design or scope SDK generation without implementing code generation in the skill layer. `sdk-planning`
- **security-review** - Review authentication, authorization, and security-sensitive flows using Ontoly graph evidence. Use when asked about auth ownership, protected routes, permissions, guards, or security risk. `security`

## MCPs

| Server | Transport | URL |
|---|---|---|
| ontoly | stdio command | `npx -y @0xsarwagya/ontoly-cli@1.0.0-rc.5 mcp` |

## Details

| Field | Value |
|---|---|
| Author | 0xsarwagya |
| Original repository | https://github.com/0xsarwagya/ontoly |
| Version | `0.1.2` |
| Original commit | `ab39509907417239f4ff42828331095c12bec7cd` |
| License | MIT |
| Source platform | multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- Ontoly CLI: `@0xsarwagya/ontoly-cli@1.0.0-rc.5`
- Node.js 20+

---
*written by original source*

# Ontoly

[![Validation Lab](https://github.com/0xsarwagya/ontoly/actions/workflows/semantic-evaluation.yml/badge.svg)](https://github.com/0xsarwagya/ontoly/actions/workflows/semantic-evaluation.yml)
[![npm install](https://img.shields.io/npm/v/@0xsarwagya/ontoly-cli?label=npm%20install)](https://www.npmjs.com/package/@0xsarwagya/ontoly-cli)
[![License](https://img.shields.io/github/license/0xsarwagya/ontoly)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Ontoly is a TypeScript-native software intelligence engine that turns source
code into a deterministic Software Graph.

Developer tools should not have to rediscover the same repository structure over
and over. Ontoly builds one shared semantic representation that agents, MCP
servers, SDK generators, documentation tools, architecture tools, static
analysis, and IDEs can query without repeatedly searching files or rebuilding
partial AST context.

Ontoly builds understanding. It does not answer questions, call language models,
generate embeddings, or make probabilistic guesses.

## Status

Ontoly's current Release Candidate is `v1.0.0-rc.5`.

The public contract is in Release Candidate freeze, and the repository includes:

- a Software Graph specification
- a deterministic compiler pipeline
- a TypeScript semantic frontend
- a query engine
- MCP capabilities
- deterministic Enhancers for artifact generation
- a derived Semantics artifact for feature ownership, intent vocabulary, and concept graphs
- a derived History artifact for ownership, hotspots, co-changes, churn, and drift
- portable Agent Skills
- validation and semantic evaluation infrastructure
- release gates for docs, packaging, skills, examples, and regression checks

## Links

- Website: [oss.sarwagya.wtf/ontoly](https://oss.sarwagya.wtf/ontoly)
- Docs: [oss.sarwagya.wtf/ontoly/docs](https://oss.sarwagya.wtf/ontoly/docs)
- Agent Skills Catalog: [oss.sarwagya.wtf/ontoly/docs/skills](https://oss.sarwagya.wtf/ontoly/docs/skills)
- Enhancers: [oss.sarwagya.wtf/ontoly/docs/enhancers](https://oss.sarwagya.wtf/ontoly/docs/enhancers)
- Repository: [github.com/0xsarwagya/ontoly](https://github.com/0xsarwagya/ontoly)
- Changelog: [CHANGELOG.md](CHANGELOG.md)
- Roadmap: [ROADMAP.md](ROADMAP.md)
- Architecture: [ARCHITECTURE.md](ARCHITECTURE.md)
- RFC index: [RFC_INDEX.md](RFC_INDEX.md)
- Governance: [GOVERNANCE.md](GOVERNANCE.md)
- Third-party notices: [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)
- Release Candidate readiness audit: [RC_READINESS.md](RC_READINESS.md)
- HOL Guard: [![HOL Guard](https://img.shields.io/endpoint?url=https%3A%2F%2Fhol.org%2Fapi%2Fregistry%2Fbadges%2Fguard%2Fhashgraph-online%2Fhol-guard-plugin)](https://hol.org/go/guard/sarwagyasingh69?dest=%2Fguard%2Fbilling%3Fpromo%3DGUARD20-SARWAGYASINGH69%23upgrade&link_id=8aab4f0e-d950-4ba5-89f1-5689b7c867c8&utm_source=insights_share&utm_medium=affiliate_cta&utm_campaign=share20)

## What Ontoly Is

Ontoly is the semantic layer between a software repository and every tool that
needs to understand it.

```text
Repository
  -> Compiler Frontends
  -> Semantic Model
  -> Software Graph
  -> Enhancers
  -> Semantics
  -> Query Engine
  -> MCP, Skills, SDKs, Docs, IDEs, Analysis
```

The Software Graph is the product. Everything else is a consumer, plugin, pass,
or validation layer around it.

## What Ontoly Is Not

- Not a chat interface.
- Not a coding agent.
- Not a copilot.
- Not vector search.
- Not an embeddings pipeline.
- Not hosted SaaS.
- Not a code generator by default.
- Not a replacement for TypeScript, ESLint, or test suites.

AI tools can consume Ontoly through MCP and Skills, but the graph never depends
on AI output. Every LLM-facing use of Ontoly must go through
[LLM Enhancement](docs/llm-enhancement.md) so graph evidence, confidence, and
fallback rules stay explicit.

## Why Software Graphs

Most developer tools redo the same expensive work:

- agents search files
- documentation tools parse symbols
- architecture tools rebuild dependency graphs
- SDK generators infer API shapes
- static analyzers rebuild call and import relationships

Ontoly turns that repeated work into a reusable graph:

- deterministic IDs
- graph-native diagnostics
- explicit provenance
- stable serialization
- query indexes
- semantic concept indexes
- validation reports
- extension metadata

The goal is simple: every tool that needs software understanding should first
ask whether Ontoly already knows.

## Quick Start From Source

Use this path when evaluating the Release Candidate from GitHub.

```sh
git clone https://github.com/0xsarwagya/ontoly.git
cd ontoly
corepack enable
pnpm install --frozen-lockfile
pnpm build
```

Build a graph for the included basic example:

```sh
pnpm ontoly build examples/basic
```

Inspect generated artifacts:

```sh
ls examples/basic/ontoly-output
pnpm ontoly inspect src/service.ts --root examples/basic
pnpm ontoly search UserService --root examples/basic
pnpm ontoly impact UserService --root examples/basic
pnpm ontoly stats examples/basic
```

Run the main release gates:

```sh
pnpm check-types
pnpm test
pnpm docs:check-links
pnpm skills:validate
pnpm validate:packages
```

Run the full gate before a release:

```sh
pnpm release:gates
```

## Package Install

The public package names are scoped under `@0xsarwagya`.

Install the Release Candidate with:

```sh
pnpm add -D @0xsarwagya/ontoly-cli@rc
pnpm exec ontoly build .
```

In an interactive terminal, `ontoly build` without a path asks which folder to
index. Press Enter for the current directory, paste a relative, absolute, or
`~/` path, or pass the path explicitly:

```sh
pnpm exec ontoly build
pnpm exec ontoly build apps/api
pnpm exec ontoly build --no-prompt
```

If npm is unavailable in your environment, use the source checkout flow above.

## Build Artifacts

`ontoly build <repository>` writes the rich `ontoly-output/` bundle by default:

```text
ontoly-output/
  SoftwareGraph.json
  manifest.json
  coverage.json
  quality.json
  semantic-model.json
  reports/
    architecture.json
    api.json
    dependencies.json
    configuration.json
    frameworks.json
    workspace.json
  nodes/
    all.json
    by-type/
  relationships/
    all.json
    by-type/
  communities/
    communities.json
    community-000.json
  html/
    graph.html
    architecture.html
```

The output bundle is deterministic and intended for humans, agents, websites,
release artifacts, and debugging Ontoly's own understanding.

For the compact cache-style artifact directory, pass `--output .ontoly`:

```sh
ontoly build . --output .ontoly
```

```text
.ontoly/
  SoftwareGraph.json
  diagnostics.json
  indexes.json
  metadata.json
  statistics.json
```

The JSON graph is the canonical Release Candidate serialization format. Binary formats are
intentionally out of scope until the Software Graph specification is stable.

Remote repositories can be compiled directly:

```sh
ontoly build --remote https://github.com/0xsarwagya/ontoly.git
ontoly output --remote git@github.com:0xsarwagya/ontoly.git
```

Remote builds clone into a temporary checkout, write relative output paths into
the directory where you ran Ontoly, and record the git URL in the output
manifest.

## Software Graph

The Software Graph is a versioned JSON model containing:

- repository metadata
- nodes
- edges
- diagnostics
- indexes
- statistics
- provenance
- extension metadata

Core node families include modules, packages, functions, methods, classes,
interfaces, type aliases, enums, routes, controllers, services, providers,
configuration, environment variables, events, and resources.

Core relationship families include `IMPORTS`, `EXPORTS`, `CONTAINS`, `CALLS`,
`DEPENDS_ON`, `USES`, `READS`, `WRITES`, `IMPLEMENTS`, `EXTENDS`, `HANDLES`,
`MOUNTS`, `INJECTS`, `AUTHORIZES`, `REGISTERED_IN`, `PUBLISHES`, and
`SUBSCRIBES`.

Read the canonical spec in [RFC-0001](rfcs/0001-software-graph.md).

## Deterministic IDs

Ontoly assigns stable IDs so graph output can be cached, diffed, tested, and
compared across builds.

Examples:

```text
module:src/auth/service.ts
fn:src/auth/service.ts:login
class:src/auth/user-service.ts:UserService
route:POST:/login
model:User
```

IDs should survive rebuilds whenever the semantic identity survives.

## Compiler Pipeline

The compiler is a deterministic multi-stage pipeline:

```text
Repository Discovery
  -> Frontend Parsing
  -> Symbol Emission
  -> Semantic Model Generation
  -> Relationship Extraction
  -> Graph Construction
  -> Diagnostics
  -> Validation
  -> Indexing
  -> Serialization
```

Compiler frontends emit structured facts. The compiler owns graph construction.
This keeps parser packages small and keeps graph compatibility centralized.

Read the architecture in [RFC-0002](rfcs/0002-compiler-pipeline.md).

## Query Engine

The query engine provides deterministic graph reasoning primitives:

- lookup by ID, name, type, file, and tag
- neighborhood expansion
- graph walks
- dependency traversal
- caller and callee lookup
- path finding
- impact analysis
- filtering
- pattern matching
- index-backed traversal

Read the query design in [RFC-0003](rfcs/0003-query-engine.md).

Example:

```ts
import { buildSoftwareGraph } from "@0xsarwagya/ontoly-compiler";
import { createQueryEngine } from "@0xsarwagya/ontoly-query";

const graph = await buildSoftwareGraph({ root: process.cwd() });
const query = createQueryEngine(graph);

const services = query.services();
const callers = query.callers("fn:src/auth/service.ts:login");
const dependencies = query.dependencies("class:src/auth/user-service.ts:UserService");
```

## CLI

The source checkout exposes the CLI through the root `ontoly` script:

```sh
pnpm ontoly --help
```

Common commands:

| Command | Purpose |
| --- | --- |
| `pnpm ontoly build <repo>` | Build a Software Graph. |
| `pnpm ontoly output <repo>` | Generate `ontoly-output/` with JSON reports, graph communities, and HTML explorers. |
| `pnpm ontoly inspect <graph-or-query>` | Inspect graph artifacts or entities. |
| `pnpm ontoly search <concept>` | Resolve natural concepts to ranked graph entities. |
| `pnpm ontoly find <concept>` | Find symbols, acronyms, features, or configuration terms. |
| `pnpm ontoly locate <feature>` | Locate feature-level graph touchpoints. |
| `pnpm ontoly evidence <query>` | Generate a compact graph-backed Evidence Pack for agents and reviews. |
| `pnpm ontoly semantics build <repo>` | Generate the derived Semantics artifact and concept graph. |
| `pnpm ontoly history build <repo>` | Generate repository history, ownership, hotspot, co-change, and drift artifacts. |
| `pnpm ontoly ownership <symbol>` | Inspect deterministic Git-derived repository ownership. |
| `pnpm ontoly hotspots` | List high-churn/high-modification graph hotspots. |
| `pnpm ontoly trace <symbol>` | Trace graph relationships. |
| `pnpm ontoly coverage <repo>` | Report semantic coverage. |
| `pnpm ontoly mcp` | Start MCP capabilities. |
| `pnpm ontoly skills list` | List packaged Agent Skills. |
| `pnpm ontoly skills validate` | Validate skill metadata, links, templates, and examples. |
| `pnpm ontoly validate all` | Run the validation lab. |
| `pnpm ontoly evaluate` | Run semantic evaluation. |
| `pnpm ontoly leaderboard` | Generate semantic leaderboard output. |
| `pnpm ontoly benchmark performance` | Run performance benchmark reporting. |
| `pnpm ontoly diff old.graph new.graph` | Compare two graph outputs. |

See [docs/cli.md](docs/cli.md) and [docs/reference/cli.mdx](docs/reference/cli.mdx).

## MCP

Ontoly MCP exposes structured capabilities over the Software Graph. Capabilities
validate inputs before execution and return structured diagnostics for missing,
ambiguous, or unsupported requests.

When an LLM consumes Ontoly MCP responses, LLM Enhancement is mandatory. Non-LLM
tools may call MCP directly, but LLM-generated answers must preserve Ontoly
evidence, confidence, and fallback boundaries.

```sh
pnpm ontoly mcp --list
pnpm ontoly mcp
```

Representative capabilities:

- `GraphStatistics`
- `ExplainArchitecture`
- `FindDependencies`
- `ImpactAnalysis`
- `TraceExecution`
- `FindConfigurationUsage`
- `FindAuthenticationFlow`
- `FindFeatureOwner`
- `SemanticContext`

Every capability is deterministic and evidence-backed. Confidence is derived
from graph evidence, not guessed.

See [docs/mcp.md](docs/mcp.md) and [docs/getting-started/mcp.mdx](docs/getting-started/mcp.mdx).

## Agent Skills

Ontoly ships portable Agent Skills under [skills](skills). Skills teach coding
agents how to use Ontoly before falling back to repository search.

Every official Skill declares `ontoly.enhancement: "LLM Enhancement"`. This is
mandatory for any LLM-capable agent using Ontoly, not an optional label.

Each Skill follows the same workflow:

1. Confirm the installed workflow declares LLM Enhancement.
2. Verify that an Ontoly graph exists.
3. Build one with `ontoly build .` if it is missing.
4. Check graph trust and diagnostics.
5. Use Ontoly MCP capabilities first.
6. Inspect source files only when the graph cannot answer.
7. Cite evidence and confidence in the final response.

Included Skills:

- architecture review
- impact analysis
- codebase onboarding
- request tracing
- dependency analysis
- security review
- configuration analysis
- framework analysis
- documentation
- refactoring
- performance analysis
- dead-code analysis
- migration analysis
- SDK generation

Validate the shipped Skills:

```sh
pnpm skills:validate
pnpm skills:validate-installed
```

Read the public [Agent Skills Catalog](https://oss.sarwagya.wtf/ontoly/docs/skills),
[skills/SKILL_CATALOG.md](skills/SKILL_CATALOG.md), [docs/agent-skills.md](docs/agent-skills.md),
and [docs/skills-validation.md](docs/skills-validation.md).

## Validation Lab

Ontoly includes a permanent validation lab. It measures correctness,
determinism, graph quality, semantic coverage, trust, diagnostics, performance,
and regressions across real repositories and fixtures.

```sh
pnpm validate
pnpm evaluate
pnpm benchmark:performance
```

Validation outputs live under [validation](validation):

- repository registry
- per-repository reports
- semantic leaderboard
- regression baselines
- release gates
- performance reports
- website assets
- badges

Read [docs/validation-lab.md](docs/validation-lab.md) and
[docs/semantic-evaluation-harness.md](docs/semantic-evaluation-harness.md).

## Current Release Candidate Evidence

The release readiness reports are generated artifacts from the local validation
suite, not marketing claims.

| Area | Evidence |
| --- | --- |
| Package health | [reports/publish-readiness.md](reports/publish-readiness.md) |
| Release Candidate readiness | [RC_READINESS.md](RC_READINESS.md) |
| Clean-room install | [reports/clean-room.md](reports/clean-room.md) |
| Validation summary | [validation/lab-summary.md](validation/lab-summary.md) |
| Semantic leaderboard | [validation/semantic/leaderboard.md](validation/semantic/leaderboard.md) |
| Release gates | [validation/release-gates/report.md](validation/release-gates/report.md) |
| Skills evaluation | [validation/skills/report.md](validation/skills/report.md) |

## Packages

| Package | Purpose |
| --- | --- |
| `@0xsarwagya/ontoly-cli` | CLI and public convenience API. |
| `@0xsarwagya/ontoly-core` | Software Graph schema, stable IDs, indexes, graph helpers, and Semantic Index APIs. |
| `@0xsarwagya/ontoly-compiler` | Repository discovery, graph build pipeline, validation, and watch mode. |
| `@0xsarwagya/ontoly-parser-typescript` | TypeScript frontend and relationship extraction. |
| `@0xsarwagya/ontoly-parser-openapi` | OpenAPI frontend for Software Graph facts. |
| `@0xsarwagya/ontoly-typescript` | Pure TypeScript semantic model analyzer. |
| `@0xsarwagya/ontoly-semantic` | Semantic generator and framework analyzer registry. |
| `@0xsarwagya/ontoly-analyzers` | Semantic coverage and graph quality analyzers. |
| `@0xsarwagya/ontoly-query` | Deterministic Software Graph query engine. |
| `@0xsarwagya/ontoly-enhancer` | Public Enhancer API for immutable graph artifact transformations. |
| `@0xsarwagya/ontoly-enhancer-history` | Deterministic History enhancer for ownership, hotspots, co-changes, churn, and architectural drift. |
| `@0xsarwagya/ontoly-enhancer-semantics` | Deterministic Semantics enhancer for feature ownership, vocabulary, neighborhoods, and concept graphs. |
| `@0xsarwagya/ontoly-intelligence` | Deterministic intelligence APIs over Software Graph, Semantic Index, Semantics, and History artifacts. |
| `@0xsarwagya/ontoly-diagnostics` | Shared diagnostic constructors. |
| `@0xsarwagya/ontoly-cache` | Local graph artifact persistence. |
| `@0xsarwagya/ontoly-mcp` | Structured graph capabilities for AI agents and tools. |
| `@0xsarwagya/ontoly-plugin-mermaid` | Example graph visualization plugin. |
| `@0xsarwagya/ontoly-plugin-html` | Interactive offline HTML graph visualization plugin. |

Package names intentionally use `@0xsarwagya/ontoly-*`.

## Repository Layout

```text
packages/
  core/
  compiler/
  parser-typescript/
  parser-openapi/
  typescript/
  semantic/
  analyzers/
  query/
  diagnostics/
  cache/
  mcp/
  cli/
plugins/
  mermaid/
  html/
skills/
docs/
rfcs/
examples/
validation/
reports/
site/
```

## Examples

Runnable examples live in [examples](examples):

| Example | Purpose |
| --- | --- |
| [examples/basic](examples/basic) | Small TypeScript graph build. |
| [examples/typescript-library](examples/typescript-library) | Library-shaped TypeScript project. |
| [examples/nestjs-api](examples/nestjs-api) | Framework-style API structure. |
| [examples/turborepo](examples/turborepo) | Workspace and package graph behavior. |
| [examples/cli-usage](examples/cli-usage) | CLI workflow examples. |
| [examples/mcp](examples/mcp) | MCP capability usage. |
| [examples/semantic-queries](examples/semantic-queries) | Query engine examples. |

## Documentation Map

The root `docs/` tree is the source of truth. The OSS website snapshot under
`site/` is generated from it:

```sh
pnpm site:docs
```

That command rewrites Markdown links for the website, emits MDX into
`site/docs/`, and adds page-level SEO frontmatter such as canonical URLs,
keywords, and source provenance. The landing page and project-level SEO live in
`site/landing.mdx` and `site/manifest.json`.

On `main`, `.github/workflows/publish-site.yml` runs the same generation and
validation flow, then calls `0xsarwagya/internet/scripts/oss-sync.mjs` to copy
`site/manifest.json`, `site/landing.mdx`, `site/docs/**`, and `site/assets/**`
into the OSS site content snapshot for `https://oss.sarwagya.wtf/ontoly`.

The dedicated `https://ontoly.sarwagya.wtf` domain is reserved for launch, but
the RC documentation uses the live OSS route until that domain is attached.

Start here:

- [docs/index.mdx](docs/index.mdx)
- [docs/getting-started/installation.mdx](docs/getting-started/installation.mdx)
- [docs/getting-started/build-a-graph.mdx](docs/getting-started/build-a-graph.mdx)
- [docs/getting-started/query-the-graph.mdx](docs/getting-started/query-the-graph.mdx)
- [docs/getting-started/mcp.mdx](docs/getting-started/mcp.mdx)
- [docs/concepts/software-graph.mdx](docs/concepts/software-graph.mdx)
- [docs/concepts/compiler-pipeline.mdx](docs/concepts/compiler-pipeline.mdx)
- [docs/concepts/plugin-system.mdx](docs/concepts/plugin-system.mdx)
- [docs/query-engine.md](docs/query-engine.md)
- [docs/typescript-semantic-model.md](docs/typescript-semantic-model.md)
- [docs/framework-detection.md](docs/framework-detection.md)
- [docs/agent-skills.md](docs/agent-skills.md)
- [docs/skills-overview.md](docs/skills-overview.md)
- [skills/SKILL_CATALOG.md](skills/SKILL_CATALOG.md)
- [docs/validation-lab.md](docs/validation-lab.md)
- [docs/faq.md](docs/faq.md)
- [docs/troubleshooting.md](docs/troubleshooting.md)

## RFCs

Ontoly uses RFCs for changes affecting public graph, compiler, plugin, query,
and type contracts.

- [RFC-0001: Software Graph](rfcs/0001-software-graph.md)
- [RFC-0002: Compiler Pipeline](rfcs/0002-compiler-pipeline.md)
- [RFC-0003: Query Engine](rfcs/0003-query-engine.md)
- [RFC-0004: Plugin and Compiler Pass System](rfcs/0004-plugin-and-compiler-pass-system.md)

## Release Engineering

Release gates include:

- build
- typecheck
- tests
- package validation
- docs link checking
- markdown style checking
- license checking
- skill validation
- installed artifact skill validation
- npm pack validation
- clean first-user smoke
- validation lab
- semantic evaluation
- regression gates
- OSS site publication through `.github/workflows/publish-site.yml`

Run everything with:

```sh
pnpm release:gates
```

## Known Limitations

Ontoly is Release Candidate software.

- TypeScript support is the primary implemented frontend.
- Some framework analyzers are intentionally partial.
- Binary graph formats are not implemented.
- Hosted SaaS, vector search, and LLM reasoning are non-goals.
- The Software Graph schema is in v1 Release Candidate freeze.
- MCP capabilities only answer from available graph evidence.
- LLM-facing use requires LLM Enhancement; Ontoly itself remains AI-free.

Read [docs/known-limitations.md](docs/known-limitations.md).

## Contributing

Contributions should preserve determinism and graph compatibility.

Before opening a pull request:

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm check-types
pnpm test
pnpm release:gates
```

Public contract changes require an RFC first. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

Please report security issues privately. See [SECURITY.md](SECURITY.md).

## Support

Use GitHub issues for bugs and GitHub discussions for design questions. See
[SUPPORT.md](SUPPORT.md).

## License

MIT. See [LICENSE](LICENSE).
