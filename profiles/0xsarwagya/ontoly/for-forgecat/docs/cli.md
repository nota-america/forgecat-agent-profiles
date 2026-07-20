# CLI

The CLI builds, inspects, validates, and benchmarks the Software Graph.

Start with help:

```sh
ontoly --help
ontoly build --help
ontoly output --help
ontoly inspect --help
ontoly trace --help
ontoly evaluate --help
```

Common workflow:

```sh
ontoly build .
ontoly inspect src/service.ts
ontoly trace fn:src/index.ts:main
ontoly coverage
ontoly explain AuthService
ontoly impact UserRepository --mode local --json
ontoly evidence "remove PlanDefinition support"
ontoly implementation-plan "remove PlanDefinition support" --budget 80
ontoly doctor
ontoly evaluate
ontoly leaderboard
ontoly skills validate
ontoly enhancer list
ontoly enhancer run semantic-index .
```

## Commands

- `ontoly build [root]`
- `ontoly output [root]`
- `ontoly analyze [root]`
- `ontoly semantic [root]`
- `ontoly frameworks [root]`
- `ontoly inspect [file-or-node]`
- `ontoly trace <node-id-or-name>`
- `ontoly stats [root]`
- `ontoly architecture [root]`
- `ontoly explain [query]`
- `ontoly impact <node-id-or-query>`
- `ontoly evidence <query>`
- `ontoly implementation-plan <task>`
- `ontoly ownership <query>`
- `ontoly health [root]`
- `ontoly repository-summary [root]`
- `ontoly risk [query]`
- `ontoly request-trace <route>`
- `ontoly coverage [root]`
- `ontoly report [summary|api|dependencies|configuration|framework|frameworks|controllers|routes|modules|providers|workspace]`
- `ontoly search <concept>`
- `ontoly find <concept>`
- `ontoly locate <feature>`
- `ontoly graph [root]`
- `ontoly query <operation> [target]`
- `ontoly doctor [root]`
- `ontoly mcp`
- `ontoly skills <list|validate|doctor>`
- `ontoly enhancer <list|inspect|run|graph|doctor|validate>`
- `ontoly validate [all|repository|framework]`
- `ontoly evaluate [repository]`
- `ontoly leaderboard`
- `ontoly diff <old.graph> <new.graph>`
- `ontoly benchmark semantic`
- `ontoly benchmark performance`

Most commands support `--json`.

## Interactive Folder Selection

When `ontoly build` or `ontoly output` runs in an interactive terminal without a
root path, Ontoly asks which folder to index:

```sh
ontoly build
# Folder to index [.]:
```

Press Enter to index the current directory. Pass the folder explicitly to skip
the prompt:

```sh
ontoly build .
ontoly build apps/api
ontoly output packages/core
```

Prompt input supports relative paths, absolute paths, and `~/` paths.

Automation never needs to answer prompts. Non-interactive shells, `--json`,
`--log-json`, `--remote`, `--root`, `--no-prompt`, and `--yes` all keep the
command deterministic and use the explicit root or current directory.

## Output Bundle

`ontoly build .` creates a deterministic `ontoly-output/` folder for inspection,
agent consumption, website assets, and release artifacts by default:

```sh
ontoly build .
ontoly output .
ontoly output . --output ontoly-output
ontoly output . --json
```

The bundle includes canonical graph JSON, diagnostics, indexes, statistics,
semantic coverage, quality, semantic model, report JSONs, node files split by
type, relationship files split by type, graph community files, and offline HTML
explorers:

```text
ontoly-output/
  SoftwareGraph.json
  manifest.json
  reports/
  nodes/by-type/
  relationships/by-type/
  communities/
  html/graph.html
  html/architecture.html
```

Use `ontoly build . --output .ontoly` when you only want the compact cache-style
graph artifacts. Use `ontoly build . --output .ontoly --bundle` when you want
both `.ontoly/` and `ontoly-output/`. Use `--no-html` to skip HTML files and
`--no-semantic` to skip `semantic-model.json`.

## Remote Repositories

`ontoly build` and `ontoly output` can compile a git repository without a local
checkout:

```sh
ontoly build --remote https://github.com/0xsarwagya/ontoly.git
ontoly output --remote https://github.com/0xsarwagya/ontoly.git
```

Ontoly clones the repository into a temporary directory, builds the graph from
that checkout, and removes the temporary checkout after the command completes.
Relative output paths are resolved against the directory where you ran Ontoly,
not against the temporary clone. The output manifest records the remote URL, and
remote graph metadata uses the git URL as the repository root so hashes do not
change because of temporary clone paths.

```sh
ontoly build --remote https://github.com/0xsarwagya/ontoly.git --output ontoly-output
ontoly build --remote git@github.com:0xsarwagya/ontoly.git --output .ontoly
```

## Logging

Human logs are pretty by default. Automation can request structured logs:

```sh
ontoly build . --log-json
ontoly build . --debug
ontoly build . --trace
```

Supported log levels:

- `info`
- `success`
- `warning`
- `error`
- `debug`
- `trace`

Use `--no-color` to disable ANSI colors.

## Errors

CLI errors include:

- stable error code
- friendly message
- suggested fix
- documentation path
- root cause when available

Example:

```text
ONTOLY1003

Ambiguous node "AuthService".

Suggestion:
Use one of these stable ids: class:src/auth.service.ts:AuthService
```

`ontoly analyze` writes the TypeScript Semantic Model to
`.ontoly/semantic-model.json`.

`ontoly semantic` reads `.ontoly/semantic-model.json` when present and prints a
summary by default. Use `--format json` or `--json` to print the canonical JSON
representation.

`ontoly frameworks` runs the default framework registry against the semantic
model and reports detected frameworks, analyzer versions, analyzer coverage, and
graph coverage.

`ontoly graph` supports:

- `--format summary`
- `--format json`
- `--format mermaid`
- `--format dot`
- `--format graphml`
- `--format html`

HTML output opens the Software Graph Explorer: an offline graph debugger with
Architecture, Dependency, Call Graph, and Full Graph modes.

## Evidence Packs

Use `ontoly evidence` when an agent, MCP client, or human reviewer needs the
smallest graph-backed payload for a question:

```sh
ontoly evidence "remove PlanDefinition support"
ontoly evidence AuthService --limit 8 --json
```

The command returns the shared capability result schema. Its
`statistics.evidencePack` field contains the reusable pack:

- `answer`
- `graphFacts`
- `topNodes`
- `topEdges`
- `relevantFiles`
- `relationships`
- `diagnostics`
- `confidence`
- `suggestedCommands`
- `stableIds`
- `filesToInspect`
- `fallbacks`
- `history`
- `ownership`
- `stability`

Evidence Packs are also available through MCP as `EvidencePack` and through the
enhancer pipeline as `evidence-pack`. There is no separate Ontoly router
package.

## Enhancers

Enhancers are deterministic transformations over graph artifacts. They do not
parse repositories or mutate the Software Graph.

```sh
ontoly enhancer list
ontoly enhancer inspect semantic-index
ontoly enhancer run semantic-index .
ontoly semantics build .
ontoly semantics inspect "sleep duration thresholds" --json
ontoly history build .
ontoly ownership AuthService
ontoly hotspots --limit 10
ontoly cochanges AuthService --json
ontoly enhancer run MarkdownDocs .
ontoly enhancer graph --format mermaid
ontoly enhancer validate --ci
```

`ontoly enhancer run` writes versioned artifacts and cache metadata under
`.ontoly/enhancers/`.

See [Enhancers](enhancers.md) for the API, lifecycle, artifact model, caching,
manifests, and pipeline visualization.

See [Semantic Intelligence](semantic-intelligence.md) for the derived Semantics
artifact and concept graph.

See [Repository Intelligence](repository-intelligence.md) for the derived
History, Ownership, Hotspots, Cochanges, and Drift artifacts.

## Semantic Index Search

Use Semantic Index commands when you know the concept but not the exact graph
symbol:

```sh
ontoly search "sleep thresholds"
ontoly search authentication
ontoly find JWT
ontoly locate notifications
ontoly search "JWT secret" --category configuration --json
```

Supported categories:

- `concept`
- `symbol`
- `feature`
- `configuration`
- `environment`
- `route`
- `entrypoint`
- `repository`

`search`, `find`, and `locate` return matched concepts, ranked candidate
symbols, confidence, evidence, and a recommended capability.

`ontoly query` supports:

- `find`
- `callers`
- `callees`
- `dependencies`
- `dependents`
- `related`
- `impact`
- `routes`
- `frameworks`
- `configuration`
- `cycles`

For exact graph traversal, use `ontoly query`. For natural concepts, prefer
`ontoly search` first:

```sh
ontoly search "Plan Definition Resource" --json
ontoly query find "Plan Definition Resource" --json
ontoly query impact "Plan Definition Resource" --json
```

`impact` returns dependent traversal plus grouped affected routes, controllers,
services, modules, configuration, resources, permissions, and external boundary
nodes when present in the graph.

`ontoly architecture` supports:

- `--json`
- `--format mermaid`
- `--format html`
- `--max-nodes`
- `--max-edges`

HTML architecture output opens the same Software Graph Explorer with
Architecture mode selected first.

## Semantic Capability Commands

High-level software-engineering commands are backed by the
`@0xsarwagya/ontoly-capabilities` package. They return the shared capability
schema with summary, evidence, affected nodes, diagnostics, confidence, and
graph provenance.

```sh
ontoly explain AuthService
ontoly impact UserRepository --mode local --json
ontoly evidence "remove PlanDefinition support"
ontoly implementation-plan "remove PlanDefinition support" --budget 80
ontoly ownership auth
ontoly health
ontoly repository-summary
ontoly risk AuthModule
ontoly request-trace "POST /login"
```

Use `--root path` when the first positional argument is a target instead of a
repository path:

```sh
ontoly impact AuthService --root apps/api --json
```

`ontoly coverage` supports:

- `--json`
- `--format human`
- `--format markdown`
- `--format json`

It writes `.ontoly/coverage.json` and `.ontoly/quality.json`.

`ontoly report` supports:

- `--format markdown`
- `--format json`
- `--format mermaid`

Framework reports include:

- `framework`
- `controllers`
- `routes`
- `modules`
- `providers`

## Semantic Evaluation

`ontoly evaluate` runs the deterministic Semantic Evaluation Harness against
the persisted validation corpus. It writes per-repository reports, aggregate
leaderboards, performance data, and semantic regression results under
`validation/semantic/`.

```sh
ontoly evaluate
ontoly evaluate ovok-core
ontoly evaluate --ci
ontoly leaderboard
ontoly benchmark semantic
```

Use `--ci` to fail the command when the current semantic results regress against
`validation/semantic/regression-baseline.json`.

## Validation Lab

`ontoly validate` runs the permanent validation lab. It uses
`validation/repositories.json`, writes corpus results under `validation/corpus/`,
and generates dashboards, badges, performance reports, and release-gate results.

```sh
ontoly validate all
ontoly validate ovok-core
ontoly validate nextjs
ontoly validate react
ontoly benchmark performance
ontoly diff old.graph new.graph
```

Use `--ci` to fail on release-gate regressions. Use `--clone` to materialize all
remote catalog entries during `validate all`; explicit remote targets clone when
missing.

## Agent Skills

`ontoly skills` manages the official portable Agent Skills collection.

```sh
ontoly skills list
ontoly skills validate
ontoly skills doctor
```

`ontoly skills validate` checks `SKILL.md` metadata, shared references,
templates, examples, capability requirements, and agent-evaluation expectations.
It writes reports under `validation/skills/`.

## Doctor

`ontoly doctor` checks repository readiness and prints recommendations.

```sh
ontoly doctor .
ontoly doctor . --json
```

Recommendations include next commands such as `ontoly build .` and
`ontoly coverage .`.
