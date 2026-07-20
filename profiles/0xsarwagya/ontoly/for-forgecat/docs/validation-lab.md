# Validation Lab

The Validation Lab is Ontoly's permanent release-gate infrastructure. It
measures correctness, determinism, semantic understanding, performance,
scalability, and regression resistance without changing compiler behavior.

## Corpus

Corpus entries are generated from `validation/repositories.json`.

```text
validation/corpus/<group>/<repository>/
  manifest.json
  metadata.json
  results/
  expected/
  notes.md
```

The default release-gate corpus is intentionally practical: it runs the local
critical repositories. The public benchmark catalog is also registered and can
be cloned explicitly.

```sh
ontoly validate all
ontoly validate ovok-core
ontoly validate nextjs
ontoly validate react
```

`validate all` runs entries marked `default: true`. Explicit public targets such
as `nextjs` are cloned into `validation/corpus/.../repository` when missing.

## Registry

`validation/repositories.json` records:

- repository id and source
- frameworks
- language
- repository type
- expected analyzer
- semantic coverage threshold
- trust threshold
- graph size expectations
- node and edge count ranges
- diagnostic budget

## Non-Mutating Runs

The lab never writes Ontoly artifacts into source repositories. It builds graphs
in memory and writes results under the corpus entry:

```text
validation/corpus/<group>/<repository>/results/
  SoftwareGraph.json
  coverage.json
  graph-validation.json
  frameworks.json
  statistics.json
  performance.json
  latest.json
  report.md
```

Dependency installation is opt-in with `--install`. Local source repositories are
not modified; cloned corpus copies may be installed into because they are
validation-owned checkouts.

## Performance Lab

```sh
ontoly benchmark performance
```

Measured fields include:

- repository discovery
- semantic model generation
- framework analysis
- semantic graph generation
- graph serialization
- validation
- coverage analysis
- query indexing
- query latency
- peak memory
- CPU usage
- graph size

Outputs:

```text
validation/performance/performance.json
validation/performance/performance.md
validation/performance/top-reports.md
```

## Stress Testing

```sh
pnpm stress
```

The stress suite uses deterministic virtual graph workloads for:

- 50k files
- 100k files
- 250k files
- 500k files
- 1M graph nodes

This keeps release validation reproducible without writing hundreds of thousands
of fixture files.

## Dashboard

The lab writes:

```text
validation/dashboard.html
validation/dashboard.md
validation/dashboard.json
```

The dashboard includes coverage, trust, performance, regression state, largest
repositories, graph size, and framework support.

## Graph Diff

```sh
ontoly diff old.graph new.graph
ontoly diff old.graph new.graph --json
```

The diff reports:

- added and removed nodes
- changed nodes
- added and removed relationships
- changed relationship metadata
- coverage delta
- trust delta
- performance delta when sibling `performance.json` exists
- semantic node and relationship count changes

## Badges

Badges are generated under `validation/badges/`:

- semantic coverage
- graph trust
- validation
- regression
- framework support
- performance

## Website Assets

Website-ready assets are generated under `validation/website-assets/`:

- repository cards
- coverage charts
- performance charts
- validation tables
- benchmark tables
- framework support matrix

## Release Gates

Release gates fail on:

- semantic coverage regression
- performance regression above threshold
- trust decrease
- compiler crash
- graph determinism failure
- unexpected diagnostics

Outputs:

```text
validation/release-gates/report.json
validation/release-gates/report.md
```
