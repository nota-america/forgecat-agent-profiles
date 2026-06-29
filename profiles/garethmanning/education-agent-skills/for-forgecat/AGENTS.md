# AGENTS.md — Guidance for coding agents working on this repo

This repo is a library of 165 evidence-based education skills across 20 domains, packaged for use in Claude Code, Claude.ai (via MCP), OpenAI Codex, Hermes Agent, and any Agent Skills-compatible tool.

## Skill structure

Skills live at `skills/<domain>/<skill-name>/SKILL.md`. Do not move or rename skill folders.

## Conventions

- Preserve all YAML frontmatter fields exactly — do not remove or rename any fields (skill_id, domain, evidence_strength, evidence_sources, input_schema, output_schema, chains_well_with, etc.)
- Preserve evidence citations — every evidence_sources entry must cite named research (authors, year, finding)
- Do not weaken evidence-based guidance into generic advice
- Do not modify SKILL.md content or frontmatter when working on infrastructure, tests, or docs

## Test command

```bash
npm test
```

## After adding or editing any skill

The MCP server serves a pre-built snapshot — changes to SKILL.md files will NOT appear on the live server until the bundle is rebuilt and committed:

```bash
python3 scripts/generate-registry.py
cd mcp-server && npm run bundle-skills && cd ..
git add skills/<domain>/<skill-name>/SKILL.md registry.json mcp-server/src/skills.json
```

CI will fail if the bundle is out of sync with the skills.
