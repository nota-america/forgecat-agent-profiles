# Framework Detection

Framework detection uses explicit deterministic signatures.

Ontoly currently detects frameworks from:

- package dependencies in `package.json`
- TypeScript import specifiers
- deterministic framework analyzers that consume the TypeScript Semantic Model

No framework is emitted from naming guesses alone.

## Supported Frameworks

- Express
- Fastify
- NestJS
- Hono
- Next.js
- React
- React Router
- TanStack Router
- tRPC
- Prisma
- Drizzle
- TypeORM
- Mongoose

## Graph Shape

Frameworks are represented as `Framework` nodes.

Examples:

- `framework:Express`
- `framework:Hono`
- `framework:Prisma`

Repository dependencies can `PROVIDE` frameworks, packages can `USE`
frameworks, and routes can be `REGISTERED_IN` frameworks when source imports
support the relationship.

## NestJS

NestJS support includes decorator analysis for controllers, routes, modules,
providers, guards, and dependency injection.

This logic lives in the NestJS framework analyzer, not in the TypeScript
language analyzer.

Supported graph relationships include:

- `HANDLES`: route to controller method
- `MOUNTS`: controller to route
- `DECLARES`: module to controller
- `REGISTERS`: module to controller or provider
- `PROVIDES`: module to provider
- `IMPORTS`: module to imported module
- `EXPORTS`: module to exported provider or module
- `AUTHORIZES`: guard to route or controller target

Call-style route extraction is restricted to known HTTP framework receivers.
Arbitrary `.get()` calls are not treated as routes.
