---
title: "Troubleshooting"
description: "Fix common Ontoly CLI, graph build, MCP, validation, and Agent Skill issues with evidence-backed steps."
---

## `ONTOLY0001 Unknown command`

Run:

```sh
ontoly --help
```

Then run command-specific help:

```sh
ontoly build --help
```

## `ONTOLY1001 trace requires a node id or node name`

Find a node first:

```sh
ontoly inspect AuthService
ontoly query find AuthService
```

Then trace the exact id or unique name.

## `ONTOLY1003 Ambiguous node`

Use the stable id printed in the suggestion. Ambiguity is expected when multiple
classes, methods, or functions share a name across files.

## No graph artifacts found

Run:

```sh
ontoly build .
```

Then inspect:

```sh
ontoly doctor .
ontoly coverage .
```

## Validation fails locally

Run:

```sh
ontoly evaluate --ci
ontoly validate all --ci
```

Open:

```text
validation/semantic/reports/summary.md
validation/release-gates/report.md
```

These reports distinguish regressions from missing local repositories.
