# OpenAPI Frontend

The OpenAPI frontend begins Ontoly's non-TypeScript parser surface.

```ts
createOpenApiFrontendPass()
```

The first implementation supports JSON OpenAPI documents. YAML support should
be added through a deterministic parser dependency rather than line-based
guessing.

## Supported Facts

- OpenAPI documents as `Configuration`
- paths as `Route`
- operations as `Operation`
- tags as `Resource`
- schemas as `Model`
- schema properties and parameters as `Field`
- security requirements as `Permission`

## Relationships

- `EXPOSES`: OpenAPI document to route.
- `HANDLES`: route to operation.
- `CONTAINS`: model to field.
- `BELONGS_TO`: operation to resource tag.
- `USES`: operation to parameter.
- `AUTHORIZES`: permission to operation.
- `REFERENCES`: operation to component schema.

The frontend emits compiler symbols and relationships only. The compiler owns
graph construction and validation.
