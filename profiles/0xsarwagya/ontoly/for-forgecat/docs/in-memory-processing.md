# In-Memory Source Processing

Ontoly can build a Software Graph from source held in memory, without a
repository checked out on disk. This is useful for editor and language-server
integrations, serverless and browser hosts, content that is not yet saved, and
programmatic callers such as tests or embedding services.

## Quick start

```ts
import { buildSoftwareGraphFromMemory } from "@0xsarwagya/ontoly-compiler";
import { defaultCompilerPasses } from "@0xsarwagya/ontoly-cli";

const result = await buildSoftwareGraphFromMemory({
  files: {
    "package.json": JSON.stringify({ name: "demo" }),
    "src/index.ts": "export const answer = 42;\n",
  },
  passes: defaultCompilerPasses(),
});

console.log(result.status, result.graph?.nodes.length);
```

Keys are repository-relative POSIX paths; values are UTF-8 contents. Graph node
ids are always repository-relative, so the identity of the resulting graph does
not depend on where (or whether) the sources are materialized.

## Strategies

`buildSoftwareGraphFromMemory` accepts a `strategy`:

| Strategy | Behavior | When to use |
| --- | --- | --- |
| `materialize` (default) | Writes the sources to a private scratch directory, runs the standard on-disk pipeline, then removes the directory. | Highest fidelity; reuses the exact filesystem-backed toolchain. |
| `zero-disk` | Serves sources from memory end to end. No provided source is written to disk. | Browser, serverless, or sandboxes where writing source is not possible. |

```ts
const result = await buildSoftwareGraphFromMemory({
  files,
  passes: defaultCompilerPasses(),
  strategy: "zero-disk",
});
```

The two strategies produce identical graph node identity for the same input.

> **Note on `zero-disk`:** files provided in the source map never touch disk.
> TypeScript's default library declarations (`lib.*.d.ts`) may still be read
> from the installed compiler so that type resolution works.

## Lower-level building blocks

- `createInMemorySourceProvider(files)` returns the `SourceProvider` the
  compiler reads through. Supply it directly via
  `buildSoftwareGraph({ sourceProvider, passes })` for full control.
- `createInMemoryCompilerHost(root, sources, options)` (from
  `@0xsarwagya/ontoly-typescript`) builds the in-memory `ts.CompilerHost` used
  by the zero-disk TypeScript frontend.

## Passes

`buildSoftwareGraphFromMemory` is a low-level primitive and runs only the passes
you supply. Use `defaultCompilerPasses()` from `@0xsarwagya/ontoly-cli` for the
batteries-included set (repository intelligence, TypeScript frontend, OpenAPI
frontend).
