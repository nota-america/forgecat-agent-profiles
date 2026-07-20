# MCP

Ontoly MCP exposes deterministic capabilities backed by the Query Engine.

The MCP runtime does not expose raw graph mutation and does not parse source.
Every capability reads from `SoftwareGraph`.

When an LLM-capable client uses Ontoly MCP, LLM Enhancement is mandatory. MCP
returns deterministic graph facts; the LLM-facing workflow must preserve
evidence, confidence, and explicit fallback behavior. Non-LLM tools may call the
same capabilities directly.

```ts
import { createMcpRuntime } from "@0xsarwagya/ontoly-mcp";

const runtime = createMcpRuntime(graph);
const response = runtime.execute({
  capability: "TraceExecution",
  input: { id: "fn:src/index.ts:main" },
});
```

If a History artifact is available, pass it into the runtime so temporal
capabilities and Evidence Packs include repository evolution facts:

```ts
const runtime = createMcpRuntime(graph, { history });
```

## Capabilities

- `FindFunction`
- `FindNode`
- `FindDependencies`
- `FindDependents`
- `TraceExecution`
- `InspectFile`
- `InspectModule`
- `InspectClass`
- `InspectFunction`
- `FindCycles`
- `FindDeadCode`
- `FindEntrypoints`
- `FindConfiguration`
- `GraphStatistics`
- `SearchConcept`
- `ResolveIntent`
- `IntentExpansion`
- `FeatureOwnership`
- `SemanticNeighborhood`
- `SemanticContext`
- `History`
- `Ownership`
- `Hotspots`
- `Cochanges`
- `Stability`

Each capability declares a name, version, description, input schema, output
schema, and examples.
