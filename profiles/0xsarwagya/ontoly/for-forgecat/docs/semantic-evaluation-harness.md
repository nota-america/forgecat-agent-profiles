# Semantic Evaluation Harness

The Semantic Evaluation Harness measures whether a system answers software
understanding questions correctly.

It is intentionally separate from compiler validation. Compiler validation
checks graph generation, counts, diagnostics, coverage, trust, and performance.
Semantic evaluation asks repository-specific questions and scores answers
against deterministic expectations.

## Layout

```text
validation/semantic/
  fixtures/
  questions/
  evaluators/
  leaderboard/
  reports/
```

Generated artifacts include:

- `validation/semantic/leaderboard.md`
- `validation/semantic/leaderboard.json`
- `validation/semantic/reports/<repository>.md`
- `validation/semantic/reports/<repository>.json`
- `validation/semantic/reports/summary.md`
- `validation/semantic/reports/summary.json`
- `validation/semantic/reports/performance.md`
- `validation/semantic/regression-baseline.json`
- `validation/semantic/regression-current.json`
- `validation/semantic/regression.json`

## Commands

```sh
ontoly evaluate
ontoly evaluate ovok-core
ontoly evaluate --ci
ontoly leaderboard
ontoly benchmark semantic
```

The harness can also be run directly:

```sh
node validation/semantic/evaluators/run-semantic-evaluation.mjs --ci
```

`--ci` exits non-zero when semantic regression fails. `--refresh` reruns the
base Ontoly versus Graphify validation suite before scoring semantic questions.

## Question Format

Questions live in `validation/semantic/questions/<repository>.yaml`.

```yaml
- id: auth-controller
  repository: ovok-core
  category: Controllers
  evaluator: FindController
  question: Which controller handles authentication?
  selector:
    nodeTypes:
      - Controller
    terms:
      - AuthController
    exactTerms: true
  expected:
    exact:
      - AuthController
    acceptable:
      - AuthenticationController
    nodes:
      - type: Controller
        name: AuthController
    edges:
      - type: INJECTS
        from: AuthController
        to: AuthService
```

Supported expectation shapes:

- `exact`: canonical answer labels.
- `acceptable`: aliases that may satisfy a single-answer question.
- `nodes`: expected semantic nodes.
- `edges`: expected semantic relationships.
- `relationships`: relationship expectations using the same `type`, `from`, and `to` shape as `edges`.

## Categories

The baseline categories are:

- Functions
- Methods
- Classes
- Interfaces
- Routes
- Controllers
- Services
- Providers
- Modules
- Packages
- Dependency Injection
- Configuration
- Environment Variables
- Call Graph
- Request Lifecycle
- Repository Structure
- Workspace
- Authentication
- Authorization
- Database
- API
- Architecture

## Evaluators

Evaluators normalize Ontoly and Graphify outputs into semantic answers before
scoring. The current evaluator names are:

- `FindController`
- `FindRoute`
- `FindProvider`
- `FindModule`
- `FindDependency`
- `FindCallChain`
- `FindConsumers`
- `FindConfiguration`
- `FindEnvironmentVariable`
- `FindRepository`
- `FindDatabaseAccess`
- `FindEntrypoint`
- `TraceExecution`
- `TraceDependency`
- `ArchitectureSummary`
- `ImpactAnalysis`

## Scoring

Every question is scored independently for Ontoly and Graphify.

- `PASS`: all expected answers were found and precision is acceptable.
- `PARTIAL`: at least one expected answer was found, but recall or precision is incomplete.
- `FAIL`: no expected answer was found.

Each result records:

- exact match
- precision
- recall
- false positives
- false negatives
- confidence
- latency
- explanation

The aggregate Semantic Understanding Score is the percentage of questions that
passed, with partial answers counting as half credit.

## Fixtures

Repository fixtures live in `validation/semantic/fixtures/<repository>.yaml`.

```yaml
repository: ovok-core
name: Ovok Core
path: /Users/shrey/Desktop/work/ovok-core
frameworks:
  - NestJS
questions: questions/ovok-core.yaml
expectedGraph:
  minNodes: 20000
  minEdges: 45000
coverageExpectations:
  semanticCoverage: 95
  trustScore: 95
```

To add a fixture:

1. Add `validation/semantic/fixtures/<repository>.yaml`.
2. Add `validation/semantic/questions/<repository>.yaml`.
3. Run `ontoly evaluate <repository>`.
4. Inspect `validation/semantic/reports/<repository>.md`.
5. Run `ontoly evaluate --ci` before accepting the baseline.

## Regression

`regression-baseline.json` is the accepted semantic release gate. Each run writes
`regression-current.json` and compares current Ontoly statuses and scores against
the baseline.

The regression status is:

- `PASS` when no Ontoly semantic score or question status regressed.
- `FAIL` when a repository score drops or a question moves from `PASS` to
  `PARTIAL` or `FAIL`.

The CI workflow runs:

```sh
node validation/semantic/evaluators/run-semantic-evaluation.mjs --ci
```

A release is ready only when semantic understanding remains stable or improves
across the validation corpus.
