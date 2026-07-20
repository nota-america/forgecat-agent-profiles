# Semantic Coverage

Semantic Coverage measures how trustworthy a Software Graph is.

The analyzer does not parse source code. It consumes only `SoftwareGraph` and
answers graph-native quality questions:

- are semantic entities connected?
- do routes have handlers?
- do controllers belong to modules?
- do DI edges target providers instead of package placeholders?
- are duplicate routes or controllers present?
- how much relationship evidence is exact, inferred, low-confidence, or missing?

## Package

```ts
import { analyzeSemanticCoverage } from "@0xsarwagya/ontoly-analyzers";

const report = analyzeSemanticCoverage(graph);
```

The analyzer returns:

- coverage percentage
- confidence score
- missing entities
- graph-native diagnostics
- recommendations
- relationship distribution
- confidence histogram

## CLI

```sh
ontoly coverage .
ontoly coverage . --format markdown
ontoly coverage . --json
```

The command writes:

```text
.ontoly/coverage.json
.ontoly/quality.json
```

## Coverage Areas

- Packages
- Services
- Controllers
- Routes
- Dependency Injection
- Configuration
- Workspace
- OpenAPI
- Prisma

Zero coverage is not always a failure. For example, `OpenAPI` and `Prisma`
may be `unknown` when the repository has no contract or schema frontend yet.

## Quality Diagnostics

The analyzer currently detects:

- routes without `HANDLES`
- routes without a controller/module mounting edge
- controllers without module declarations
- service-looking classes without Service nodes
- provider-looking DI targets that still point at `Package`
- duplicate routes
- duplicate controllers
- disconnected configuration nodes

The compiler validator also reports graph-native semantic warnings for the
same core problems during `ontoly build`.
