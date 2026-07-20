---
title: "Skills Development"
description: "Create, version, document, and validate Ontoly Agent Skills that remain self-contained after installation."
---

Create a skill under:

```text
skills/<skill-name>/
```

Required files:

```text
SKILL.md
README.md
examples.md
templates/
reference/
```

`SKILL.md` must use YAML frontmatter with `name` and `description`, and the
name must match the directory.

## Public Docs Links

Every skill `README.md` should link back to the canonical public docs with
absolute URLs so installed skills stay self-contained:

- `https://oss.sarwagya.wtf/ontoly/docs/agent-skills`
- `https://oss.sarwagya.wtf/ontoly/docs/skills-overview`
- `https://oss.sarwagya.wtf/ontoly/docs/mcp`
- `https://oss.sarwagya.wtf/ontoly/docs/capabilities`
- `https://oss.sarwagya.wtf/ontoly/docs/skills-validation`

## Metadata

Use Ontoly metadata keys:

```yaml
metadata:
  ontoly.skill.version: "1.0.0-rc.5"
  ontoly.min.version: "1.0.0-rc.5"
  ontoly.capabilities: "ExplainArchitecture, GraphStatistics"
  ontoly.category: "architecture"
  ontoly.enhancement: "LLM Enhancement"
  ontoly.deprecated: "false"
```

`LLM Enhancement` is mandatory for official Ontoly skills and every
LLM-facing Ontoly workflow. The skill may guide an LLM-capable agent, but all
software understanding must still come from Ontoly artifacts, CLI commands,
Query Engine results, or MCP capabilities.

## Reference Files

The source repository keeps authoring copies under `skills/shared/`, but each
installed skill must be self-contained. Every skill must include and reference:

- `reference/workflow.md`
- `reference/graph.md`
- `reference/mcp.md`
- `reference/best-practices.md`
- `reference/fallbacks.md`
- `reference/capabilities.md`

Do not link from `SKILL.md` to `../shared/*`. That works in the source tree but
breaks independent skill installation.

## Boundaries

Skills may describe how to invoke Ontoly. Skills must not implement graph
understanding, query behavior, parser logic, framework logic, or code generation.
