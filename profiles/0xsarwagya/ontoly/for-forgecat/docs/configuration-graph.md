# Configuration Graph

Configuration is first-class in the Software Graph.

Configuration files become `Configuration` nodes. Values consumed by code, such
as environment variables, become graph nodes and connect back to code through
semantic relationships.

## Environment Variables

`.env.example` declares `EnvironmentVariable` nodes.

TypeScript code consumes environment variables through:

- `process.env.NAME`
- `process.env["NAME"]`
- `import.meta.env.NAME`

Reads emit `READS`; assignments emit `WRITES`.

## Build Targets

`tsconfig.json` emits a `BuildTarget` node and a `CONFIGURES` relationship from
the config node to the target.

## Reports

Use:

```sh
ontoly report configuration
```

The report lists configuration nodes and their `CONFIGURES`, `READS`, and
`WRITES` edges.
