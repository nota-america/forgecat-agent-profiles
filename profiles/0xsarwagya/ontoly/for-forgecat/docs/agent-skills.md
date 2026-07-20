# Ontoly Agent Skills

Ontoly Agent Skills are portable `SKILL.md` packages that teach coding agents how
to use Ontoly before searching source files.

The skill layer contains workflow only. It does not contain compiler logic,
query logic, framework logic, SDK generation, or AI reasoning. Every claim about
a repository must come from Ontoly artifacts, the Query Engine, or Ontoly MCP.

LLM Enhancement is mandatory every time Ontoly is used by an LLM. Official
Skills declare `ontoly.enhancement: "LLM Enhancement"` and preserve the
graph-first evidence, confidence, and fallback rules in
[LLM Enhancement](llm-enhancement.md).

## Install

Prerequisites:

- Install Ontoly.
- Build a graph for the repository with `ontoly build .`.
- Verify the runtime can list capabilities with `ontoly mcp --list`.
- Use a published repository install after release, or the local `--copy` flow
  while validating a source checkout.

```bash
pnpm add -D @0xsarwagya/ontoly-cli@rc
ontoly build .
ontoly mcp --list
ontoly mcp
```

Then install a skill folder with an Agent Skills compatible installer. After the
repository is public, a single skill can be installed with:

```bash
npx skills add 0xsarwagya/ontoly --skill architecture-review
```

For local release testing, use the repository path:

```bash
npx skills add /path/to/ontoly --skill architecture-review --copy
```

Each installed skill is self-contained. Its `reference/` directory includes the
standard workflow, graph, MCP, best-practice, fallback, and capability guidance.

## Catalog

Start with the [Skills Overview](skills-overview.md) for the full skill list,
source links, install commands, and capability mapping.

Release assets:

- [Skill catalog](../skills/SKILL_CATALOG.md)
- [Skill matrix](../skills/SKILL_MATRIX.md)
- [Capability matrix](../skills/CAPABILITY_MATRIX.md)
- [Compatibility matrix](../skills/COMPATIBILITY_MATRIX.md)
- [Installation guide](../skills/INSTALLATION.md)

## Workflow

Every official installed skill points to `reference/workflow.md`:

1. Confirm the installed workflow declares LLM Enhancement.
2. Verify `.ontoly/SoftwareGraph.json`.
3. Run `ontoly build .` if the graph is missing.
4. Check graph trust with `ontoly coverage .`.
5. Use Ontoly MCP.
6. Invoke the task-specific capability.
7. Inspect files only when Ontoly cannot answer.
8. Cite node ids, relationship types, source spans, graph hash, and confidence.

## Commands

```bash
ontoly skills list
ontoly skills validate
ontoly skills doctor
```

`ontoly skills validate` writes:

```text
validation/skills/report.md
validation/skills/report.json
validation/skills/agent-evaluation.md
validation/skills/agent-evaluation.json
```

## Versioning

Each skill declares:

- skill version
- minimum Ontoly version
- required MCP capabilities
- mandatory enhancement type, `LLM Enhancement`
- category
- deprecation status

Compatibility is validated against both source skills and installed artifacts
before release.
