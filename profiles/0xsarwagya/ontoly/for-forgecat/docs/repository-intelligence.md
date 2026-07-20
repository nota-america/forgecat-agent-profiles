# Repository Intelligence

Repository Intelligence is Ontoly's deterministic understanding of how a
repository is structured and how it evolves over time.

It has two layers:

- structural repository intelligence from the compiler pass
- temporal repository intelligence from the History enhancer

Neither layer changes the Software Graph schema. Temporal intelligence is a
derived artifact above the graph.

## Structural Layer

The structural layer is implemented as a compiler pass:

```ts
createRepositoryIntelligencePass()
```

The pass reads repository configuration files from the source inventory and
emits compiler symbols and relationships through normal graph construction.

Supported files include:

- `package.json`
- `tsconfig.json`
- `pnpm-workspace.yaml`
- `turbo.json`
- `Dockerfile`
- `docker-compose.yml`
- `.env.example`
- `.github/workflows/*.yml`
- Biome, ESLint, and Prettier configuration files

Structural nodes include `Workspace`, `Package`, `Script`, `Dependency`,
`Task`, `Pipeline`, `EnvironmentVariable`, `BuildTarget`, `Configuration`,
`Container`, `Workflow`, `Job`, `Step`, and `Framework`.

Structural relationships include `CONTAINS`, `CONFIGURES`, `DEPENDS_ON`,
`EXECUTES`, `PROVIDES`, and `USES`.

## Temporal Layer

The temporal layer is implemented by
`@0xsarwagya/ontoly-enhancer-history`.

Input:

```text
Repository
Git History
Software Graph
```

Outputs:

```text
.ontoly/enhancers/artifacts/history.json
.ontoly/enhancers/artifacts/ownership.json
.ontoly/enhancers/artifacts/hotspots.json
.ontoly/enhancers/artifacts/cochanges.json
.ontoly/enhancers/artifacts/drift.json
```

The enhancer derives:

- first introduction commit
- last modification
- modification count
- contributors
- co-change relationships
- hotspot score
- churn score
- stability score
- ownership confidence
- bugfix, refactor, feature, and other commit ratios
- architectural drift timelines

The enhancer never reparses source files and never mutates
`SoftwareGraph.json`.

### History Availability

History collection is fail-closed. If Git history cannot be indexed, Ontoly
returns a structured `HISTORY_INDEXING_FAILED` error instead of producing empty
history artifacts. This prevents users and agents from mistaking unavailable
history for evidence that no history exists.

Successful artifacts include:

```json
{
  "historyIndexed": true,
  "historyStatus": {
    "indexed": true,
    "source": "git",
    "reason": null,
    "commitsCollected": 42
  }
}
```

The current Git collector uses a 128 MiB output buffer. Repositories whose Git
history exceeds that limit fail explicitly rather than silently degrading.

## CLI

```sh
ontoly history build .
ontoly history UserService
ontoly history feature "Authentication"
ontoly hotspots
ontoly ownership AuthService
ontoly churn
ontoly cochanges AuthService
ontoly stability AuthService
ontoly history validate --ci
```

`ontoly history build` writes all temporal artifacts. Query commands load those
artifacts when present and can derive an in-memory history artifact from Git
when the persisted artifact is missing.

## MCP Capabilities

Repository Intelligence adds bounded MCP capabilities:

- `History`
- `Ownership`
- `Hotspots`
- `Cochanges`
- `Stability`

Responses are intentionally compact. They include graph provenance and
deterministic confidence through the MCP response envelope.

## Evidence Packs

When a History artifact is available, `EvidencePack` includes temporal sections:

- `history`
- `ownership`
- `stability`

These sections are attached only for the selected top graph nodes. Evidence
Packs do not serialize the full Git history.

## Invariants

- Git history is an input artifact, not compiler behavior.
- The Software Graph remains immutable.
- Outputs are deterministic for the same graph and Git history.
- Large commits are bounded when deriving co-change pairs.
- Ownership is repository ownership from Git history, not GitHub CODEOWNERS.
- No LLMs, embeddings, or vector search are used.
