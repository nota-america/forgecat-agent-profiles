*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# GEO SEO Claude

GEO-first SEO toolkit for auditing and optimizing websites for AI-powered search engines while preserving traditional SEO foundations.

## Tags

- geo
- seo
- ai-search
- claude-code
- skills
- agents

## Installation

```bash
npx forgecat install @forgecat/zubair-trabzada_geo-seo-claude
```

## Skills / Agents / Commands

- **geo** — GEO-first SEO analysis orchestrator for audits, quick checks, citability scoring, crawler analysis, llms.txt, schema, technical SEO, reports, and updates. `skill`
- **geo-audit** — Full website GEO and SEO audit with parallel subagent delegation. `skill`
- **geo-citability** — AI citation readiness scoring and optimization. `skill`
- **geo-crawlers** — AI crawler access analysis for robots.txt, meta tags, and HTTP headers. `skill`
- **geo-brand-mentions** — Brand authority scanner across AI-cited platforms. `skill`
- **geo-platform-optimizer** — Platform-specific optimization for AI search surfaces. `skill`
- **geo-schema** — Schema.org structured data audit and JSON-LD generation. `skill`
- **geo-technical** — Technical SEO audit with GEO-specific crawler and rendering checks. `skill`
- **geo-content** — Content quality and E-E-A-T assessment for AI citability. `skill`
- **geo-report** — Client-facing GEO report generation. `skill`
- **geo-report-pdf** — PDF report workflow using pandoc and Chrome headless. `skill`
- **geo-prospect**, **geo-proposal**, **geo-compare** — Prospect CRM, proposal, and monthly delta reporting workflows. `skill`
- **geo-ai-visibility**, **geo-platform-analysis**, **geo-technical**, **geo-content**, **geo-schema** — Specialist Claude Code subagents for parallel audit sections. `agent`

## Details

| Field | Value |
|---|---|
| Author | Zubair Trabzada |
| Original repository | https://github.com/zubair-trabzada/geo-seo-claude |
| Version | `0.0.0` |
| Original commit | `9eec32f5f700a1e6c3cb1cb735a56ee5ec49a964` |
| License | MIT |
| Source platform | Claude Code skills (non-plugin) |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- Python 3.8+
- Python packages from `skills/geo/requirements.txt`
- Optional `uv` for faster Python environment setup
- Optional Playwright browser install for screenshots
- Optional pandoc and Google Chrome for `geo-report-pdf`
