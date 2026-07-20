# Known Limitations

Ontoly v1.0.0-rc.5 is intentionally conservative.

## Language Support

- TypeScript is the primary supported language.
- OpenAPI support is present as a Release Candidate frontend.
- Prisma, GraphQL, SQL, and cross-language relationships remain roadmap work.

## Framework Support

- Framework analyzers report deterministic evidence only.
- Unsupported framework behavior should produce diagnostics or lower coverage instead of guessed graph facts.
- Dynamic runtime wiring may require future analyzer work.

## Graph Artifacts

- Canonical JSON is the only supported serialization format.
- Binary graph formats are not included.
- Large validation outputs are release evidence, not a replacement for source analysis.

## Agent Skills

- Skills teach workflow only.
- Skills must use Ontoly MCP or graph artifacts for understanding.
- Skills should inspect source files only when Ontoly cannot answer with evidence.
- LLM-facing usage requires LLM Enhancement; Ontoly does not provide LLM reasoning itself.
