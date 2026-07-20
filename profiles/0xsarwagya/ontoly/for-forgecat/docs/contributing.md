# Contributing

Ontoly changes should preserve determinism, explainability, and graph stability.

## Before You Change Code

Run:

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm build
pnpm check-types
pnpm test
```

## Before You Open a PR

Run:

```sh
pnpm release:gates
```

Targeted checks are acceptable for small docs-only or package-only changes, but
release-bound changes should run the full gate.

## RFC Required

Open an RFC before changing:

- Software Graph schema
- public node or edge semantics
- compiler pipeline architecture
- parser contracts
- query API
- plugin API

## Style

- Prefer existing package patterns.
- Keep graph behavior deterministic.
- Keep errors structured and actionable.
- Keep docs first-time-user friendly.
- Add focused tests for behavior changes.

## Validation Artifacts

Generated validation outputs live under `validation/`. When a change improves or
intentionally changes behavior, regenerate the relevant baseline and explain why
in the PR.

## Contribution License

By submitting a contribution, you agree that it can be distributed under
Ontoly's MIT license. Ontoly does not require a CLA for regular contributions.
Signed-off commits are welcome but not required unless the governance model
changes.
