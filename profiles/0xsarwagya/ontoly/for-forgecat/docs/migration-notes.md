# Migration Notes

## 1.0.0-rc.5

Projects upgrading from `1.0.0-rc.3` do not need a Software Graph schema
migration. This release is additive: it introduces in-memory source processing
(`buildSoftwareGraphFromMemory`, `SourceProvider`, `createInMemorySourceProvider`,
and `createInMemoryCompilerHost`) without changing existing on-disk behavior.

Recommended upgrade steps:

1. Upgrade Ontoly packages together to `1.0.0-rc.5`.
2. Rebuild the repository graph.
3. Reinstall Agent Skills so installed artifacts match the rc.5 source.

## 1.0.0-rc.3

Projects upgrading from `0.1.0-alpha.19` do not need a Software Graph schema
migration.

Recommended upgrade steps:

1. Upgrade Ontoly packages together to `1.0.0-rc.3`.
2. Rebuild the repository graph.
3. Run `ontoly semantics build .` to create the derived Semantics artifact.
4. Run `ontoly semantics validate --ci`.
5. Reinstall Agent Skills so installed artifacts match the rc.1 source.

## 0.1.0-alpha.18

Projects upgrading from `0.1.0-alpha.17` do not need a Software Graph schema
migration.

Recommended upgrade steps:

1. Upgrade Ontoly packages together to `0.1.0-alpha.18`.
2. Rebuild the repository graph.
3. Reinstall Agent Skills so installed artifacts match the alpha.18 source.
4. Rerun semantic evaluation, skills validation, and release gates for your
   repository.

## 0.1.0-alpha.16

This is the first public preview. Projects upgrading from
`0.1.0-alpha.14` do not need a Software Graph schema migration.

Recommended upgrade steps:

1. Upgrade Ontoly packages together to `0.1.0-alpha.16`.
2. Rebuild the repository graph.
3. Rerun semantic evaluation, skills validation, and release gates for your
   repository.
4. Reinstall Agent Skills so installed artifacts match the public preview source.

## 0.1.0-alpha.1

This was the first public alpha, so there was no previous public API to migrate
from.

## Internal Alpha Changes

If you used earlier local snapshots:

- Reinstall dependencies with `pnpm install --frozen-lockfile`.
- Rebuild packages with `pnpm build`.
- Reinstall Agent Skills so each installed skill has local `reference/` files.
- Rebuild `.ontoly/` artifacts because MCP confidence and provenance depend on current graph metadata.

## Compatibility

Plugins and tools should negotiate against the Software Graph version rather than the Ontoly package version.
