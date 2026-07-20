# NestJS Support

Ontoly's NestJS support now lives in the framework analyzer layer.

The TypeScript Semantic Model records decorators, classes, methods, imports,
constructor parameters, and source locations. The NestJS analyzer consumes that
model and emits deterministic semantic facts. The Semantic Generator turns those
facts into Software Graph nodes and relationships.

## Supported Decorators

- `@Controller`
- `@InternalController`
- `@PublicController`
- `@DeprecatedController`
- `@Module`
- `@Injectable`
- `@Inject`
- `@Global`
- `@Catch`
- `@UseGuards`
- `@UseInterceptors`
- `@UseFilters`
- `@Resolver`

Custom controller decorators are recognized when their decorator name ends in
`Controller` and their literal metadata includes a path.

## Routes

Route extraction is decorator-first for NestJS:

- `@Get`
- `@Post`
- `@Put`
- `@Patch`
- `@Delete`
- `@Options`
- `@Head`
- `@All`

Ontoly combines controller prefixes with method paths and emits:

- `Route` nodes
- `HANDLES` edges from route to controller method
- `MOUNTS` edges from controller to route
- `REGISTERED_IN` edges from route to `framework:NestJS`
- source locations and HTTP method/path metadata

Controller prefixes support string paths and string-array paths. The analyzer
also resolves deterministic wrapper aliases from the TypeScript Semantic Model,
such as project-defined controller and route decorators that lower to NestJS
decorators.

Arbitrary `.get()` calls are not routes. Call-style routes are only emitted
when the receiver is known to come from an HTTP framework factory such as
Express, Fastify, or Hono.

## Modules

`@Module` metadata is parsed for:

- `imports`
- `controllers`
- `providers`
- `exports`
- `forwardRef`
- object providers

Ontoly emits:

- `DECLARES` and `REGISTERS` from Nest modules to controllers
- `PROVIDES` and `REGISTERS` from Nest modules to providers
- `IMPORTS` between Nest modules
- `EXPORTS` from modules to exported providers or modules
- `Application` node containment for Nest modules

## Dependency Injection

Constructor parameter types and `@Inject(...)` decorators emit `INJECTS`
relationships.

Targets are normalized in this order:

- `Service`
- `Repository`
- `Provider`
- `Factory`
- concrete `Class`
- token `Provider`

This prevents internal path aliases such as `@src/context` from becoming
generic package targets when `tsconfig.json` can resolve them.

## Semantic Flow

```text
TypeScript Semantic Model
|
v
NestJS Analyzer
|
v
Semantic Facts
|
v
Semantic Generator
|
v
Software Graph
```

NestJS framework behavior is structured around deterministic facts such as
`ControllerDeclared`, `RouteDeclared`, `ModuleDeclared`, `ProviderDeclared`,
`DependencyInjected`, and `GuardRegistered`, and those facts are preserved in
node or edge metadata.
