# Alpha Release Notes

## v0.1.0-alpha.19

This Semantic Intelligence release turns the trusted Software Graph into richer
deterministic derived intelligence without changing the compiler or graph
schema.

- Added the official `semantics` enhancer, published as
  `@0xsarwagya/ontoly-enhancer-semantics`.
- Added `@0xsarwagya/ontoly-intelligence` for deterministic query expansion,
  evidence, feature ownership, and semantic neighborhoods over graph artifacts.
- Added `ontoly semantics build`, `ontoly semantics inspect`, and
  `ontoly semantics validate`.
- Added MCP capabilities `SemanticNeighborhood`, `FeatureOwnership`,
  `IntentExpansion`, and `SemanticContext`.
- The generated `semantics.json` includes a Graphify-style `semanticGraph`
  with concept nodes and links for feature, vocabulary, intent, and software
  node relationships.
- Software Graph hash, graph schema, compiler behavior, CALLS generation, and
  framework analyzers remain unchanged.
- Agent Skills now require Ontoly `0.1.0-alpha.19`.

## v0.1.0-alpha.18

This NestJS semantic-resolution release completes deterministic method-level
impact analysis for common NestJS runtime paths while preserving the Software
Graph schema.

- TypeScript symbol resolution now backs method-level `CALLS` edges for
  `this.*`, `super.*`, local method, and injected-service method calls.
- NestJS runtime topology now models BullMQ processors, cron handlers, event
  handlers, websocket gateways, repository injection, queue injection, and model
  injection with existing graph node and relationship types.
- A synthetic NestJS runtime-topology corpus records deterministic expected
  questions for processor, service, repository, queue, model, and handler flows.
- Fresh Ovok graph validation produced 21,686 nodes, 52,548 edges, and 5,823
  `CALLS` edges.
- The Ovok 40-question benchmark passed at 40 PASS, 0 PARTIAL, 0 FAIL, and
  39 Top-1 results.
- Agent Skills now require Ontoly `0.1.0-alpha.18`.

## v0.1.0-alpha.17

This engineering-excellence release keeps alpha.16 behavior intact while
cleaning private CLI source and publishing the measured alpha.17 audit report.

- Removed unused private CLI plumbing with no public API changes.
- Added `reports/alpha17-engineering-excellence.md` with runtime/docs LOC,
  public export counts, package dependency graph, complexity observations, and
  validation evidence.
- Preserved the Ovok 40-question benchmark at 40 PASS, 0 PARTIAL, 0 FAIL, and
  38 Top-1 results.
- Agent Skills now require Ontoly `0.1.0-alpha.17`.

## v0.1.0-alpha.16

This retrieval stabilization release restores the alpha.14 Ovok benchmark
quality line while keeping the alpha.15 enhancer fixes.

- Action-oriented code queries now include a bounded executable-action ranking
  signal, so methods/functions can outrank owner classes when the user asks what
  code calculates, builds, resolves, writes, or performs a similar action.
- The regression query `What code calculates sleep duration averages for
  thresholds?` now ranks `calculateSleepDurationAverages` first.
- The Ovok 40-question Ontoly benchmark is now at 40 PASS, 0 PARTIAL, 0 FAIL,
  and 38 Top-1 results.
- Agent Skills now require Ontoly `0.1.0-alpha.16`.

## v0.1.0-alpha.14

This stabilization release fixes retrieval quality, bounded evidence, and
capability latency issues discovered during real-world Ovok Core evaluation.

- Natural-language seed resolution now favors repository-local feature owners
  and penalizes expanded-term false positives, so `sleep duration thresholds`
  resolves to threshold services/methods instead of observation helpers or
  external FHIR package symbols.
- Evidence Packs remain compact and ranked through serialization, include
  scoped diagnostics, and avoid unrelated repository-wide warnings lowering
  confidence.
- Semantic Index artifacts are versioned at `1.0.1`; stale or incompatible
  indexes are rebuilt and persisted automatically.
- CLI capability commands now reuse the loaded Semantic Index instead of
  rebuilding it for each `impact`, `evidence`, or `implementation-plan` call.
- The agent workflow regression corpus now covers sleep thresholds, batch-data
  observations, authentication, JWT, signals, FHIR, and PlanDefinition queries.
- Agent Skills now require Ontoly `0.1.0-alpha.14`.

## v0.1.0-alpha.13

This stabilization release fixes the real-world agent workflow bugs discovered
against Ovok Core and the validation corpus.

- `ImplementationPlan`, `ImpactAnalysis`, and `EvidencePack` now enforce
  deterministic execution budgets and return `PARTIAL` with diagnostics instead
  of hanging.
- Evidence Packs are compact and ranked: top nodes, top edges, relevant files,
  and bounded metadata only.
- Semantic Index hashing no longer builds huge monolithic strings for large
  repositories.
- Fuzzy impact queries resolve through the Semantic Index before traversal, so
  phrases such as `sleep duration thresholds` resolve to stable graph nodes.
- `ontoly profile implementation-plan` reports capability timing, visited
  nodes/edges, budget status, and memory.
- Validation Lab now distinguishes true compiler nondeterminism from active
  repository input changes during rebuild checks.
- Agent Skills now require Ontoly `0.1.0-alpha.13`.

## v0.1.0-alpha.12

This release fixes external npm installation by removing the hidden standalone
Semantic Index package dependency from the public CLI graph.

- Semantic Index APIs are now exported by `@0xsarwagya/ontoly-core`.
- Cache, enhancer, capabilities, MCP, and CLI now consume Semantic Index APIs
  from core, so latest installs only depend on packages npm is publicly serving.
- The standalone `@0xsarwagya/ontoly-semantic-index` package was removed from
  the release graph after npm publish logs marked it public but unauthenticated
  installs still received 404 responses.
- Agent Skills now require Ontoly `0.1.0-alpha.12`.

## v0.1.0-alpha.11

This release attempted to fix external npm installation by renaming the
standalone Semantic Index package.

- The Semantic Index package was renamed to
  `@0xsarwagya/ontoly-semantic-index`.
- Packages that consume the Semantic Index were republished against that
  dependency name: cache, enhancer, capabilities, MCP, and CLI.
- Agent Skills now require Ontoly `0.1.0-alpha.11` so installed workflows target
  the fixed published artifact set.
- This package name also returned public npm 404s after successful publish logs,
  so alpha.12 removes the standalone package from latest installs.

## v0.1.0-alpha.10

This release adds compact Evidence Packs for graph-first agent workflows.

- `ontoly evidence <query>` returns a compact graph-backed Evidence Pack with
  top nodes, top edges, relevant files, stable ids, confidence, diagnostics, and
  suggested next commands.
- `EvidencePack` is available through the Semantic Capability Engine and MCP.
- `evidence-pack` is a first-class Enhancer artifact; no separate router package
  is introduced.
- `ontoly search` now includes deterministic `runNext` commands that start with
  `ontoly evidence`.
- `ImpactAnalysis` supports scoped modes: `direct`, `local`, `feature`,
  `semantic`, and `blast-radius`.
- `ImplementationPlan` now returns bounded partial results when a deterministic
  node budget is exceeded.
- The npm publish script includes the Semantic Index package in the package
  publication order.
- Official Agent Skills now require LLM Enhancement plus `EvidencePack` and
  document the evidence-first workflow in every installable skill folder.

## v0.1.0-alpha.9

This CLI release makes LLM Enhancement the mandatory workflow contract whenever
an LLM uses Ontoly.

- Every LLM-facing Ontoly workflow must declare or install LLM Enhancement.
- Agent Skill validation now checks installed skill reference files for
  mandatory LLM Enhancement guidance.
- README, MCP, Capabilities, Agent Skills, FAQ, and Skills docs now link to the
  canonical LLM Enhancement policy.

## v0.1.0-alpha.6

This release adds the Semantic Capability Engine and makes Agent Skills visible
as first-class public docs.

- `@0xsarwagya/ontoly-capabilities` ships deterministic high-level software-engineering capabilities over the Software Graph.
- `ontoly explain`, `ontoly impact`, `ontoly implementation-plan`, `ontoly ownership`, `ontoly health`, `ontoly repository-summary`, `ontoly risk`, and `ontoly request-trace` return the shared capability result schema.
- MCP now exposes high-level semantic capabilities while preserving existing primitive capability names used by current Skills.
- The website generator creates `/ontoly/docs/skills` and per-skill public docs pages from the Skill catalog.
- `validation/questions/questions.json` adds a deterministic 250-question alpha corpus for capability evaluation.

## v0.1.0-alpha.5

This release improves graph-first agent answers for impact analysis and
first-run CLI indexing.

- `ontoly build` and `ontoly output` ask which folder to index in interactive terminals when no root is provided.
- Query Engine free-text lookup now normalizes human concept phrases such as `Plan Definition Resource`.
- `ontoly query impact` and MCP `ImpactAnalysis` now include grouped affected routes, controllers, services, modules, configuration, resources, permissions, and external boundaries.
- TypeScript external package method calls now preserve deterministic package boundary `CALLS` edges instead of disappearing from the graph.
- The Impact Analysis skill now instructs agents to use Ontoly resolution once and report ambiguity or not-found evidence instead of manually trying spelling variants.

## v0.1.0-alpha.4

This CLI release turns HTML graph output into the Software Graph Explorer.

- `ontoly graph --format html` and `ontoly architecture --format html` open an architecture-first explorer.
- Search now selects, centers, and expands the matching node neighborhood.
- The explorer adds grouped filters, node relationship details, trace focus, a minimap, and deterministic graph summaries.

## v0.1.0-alpha.3

This CLI release adds interactive HTML architecture exports.

- `ontoly architecture --format html` emits a self-contained architecture graph.
- Large graph rendering now uses connected node-link layouts with reduced label noise.
- `--max-nodes` and `--max-edges` bound architecture HTML output for large repositories.

## v0.1.0-alpha.2

This CLI release adds interactive Software Graph HTML export.

- `ontoly graph --format html` emits a searchable, filterable graph artifact.
- `@0xsarwagya/ontoly-plugin-html` ships as an independently installable plugin.
- HTML output works offline without CDN assets.

## v0.1.0-alpha.1

This public preview prepares Ontoly for its first public alpha.

## What Works

- Build a Software Graph from TypeScript examples.
- Inspect graph nodes, relationships, diagnostics, and statistics.
- Query the graph through the Query Engine and CLI.
- Start MCP and call deterministic graph capabilities.
- Install Ontoly Agent Skills as self-contained folders.
- Run validation, semantic evaluation, package checks, docs checks, and release gates.

## What Changed in the Public Preview Pass

- Skill installation no longer depends on a sibling `skills/shared` folder after install.
- Installed skill artifacts are validated in CI.
- MCP capabilities validate required inputs and return structured errors.
- MCP responses include provenance and deterministic confidence derived from graph evidence.
- Package metadata is normalized for npm publishing.
- GitHub templates and release docs are present.

## Read Next

- [README](../README.md)
- [Known Limitations](known-limitations.md)
- [Compatibility Matrix](compatibility-matrix.md)
- [Feature Matrix](feature-matrix.md)
