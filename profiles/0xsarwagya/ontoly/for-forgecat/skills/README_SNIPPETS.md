# README Snippets

## Skill catalog

Ontoly ships portable Agent Skills for architecture review, request tracing, impact analysis, security review, configuration audit, and more. See [skills/SKILL_CATALOG.md](SKILL_CATALOG.md).

## Quick install

```bash
pnpm add -D @0xsarwagya/ontoly-cli@rc
ontoly build .
ontoly evidence "what owns authentication?"
ontoly mcp
```

Then install a skill such as `architecture-review` or `request-tracing` into your coding agent.
