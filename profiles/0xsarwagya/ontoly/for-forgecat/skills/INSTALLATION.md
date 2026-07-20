# Ontoly Agent Skills Installation

Ontoly skills are portable `SKILL.md` directories. Use an Agent Skills compatible installer or copy a complete skill folder into your agent skills directory.

Each skill is independently installable. Installed skills do not depend on a sibling `skills/shared` directory.

Public docs:

- [Agent Skills](https://oss.sarwagya.wtf/ontoly/docs/agent-skills)
- [Skills Overview](https://oss.sarwagya.wtf/ontoly/docs/skills-overview)
- [Skills Validation](https://oss.sarwagya.wtf/ontoly/docs/skills-validation)

## Public Repository Install

```bash
npx skills add 0xsarwagya/ontoly --skill architecture-review
```

Use this after the GitHub repository is public.

## Local Release Test

```bash
npx skills add /path/to/ontoly --skill architecture-review --copy
```

Validate the installed artifact from the target workspace:

```bash
ontoly skills validate --ci
```

## Local development

```bash
pnpm build
node packages/cli/dist/cli.js skills list
node packages/cli/dist/cli.js skills validate
```

After installation, build a graph with `ontoly build .` and start MCP with `ontoly mcp`.
