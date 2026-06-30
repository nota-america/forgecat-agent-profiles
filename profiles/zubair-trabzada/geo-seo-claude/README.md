![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# GEO SEO Claude

GEO-first SEO toolkit for auditing and optimizing websites for AI-powered search visibility while preserving traditional SEO foundations.

## Tags

- geo
- seo
- ai-search
- claude-code
- audit

## Installation

```bash
npx forgecat install @forgecat/zubair-trabzada_geo-seo-claude
```

## Skills / Agents / Commands

- **geo** — GEO-first SEO analysis tool. Optimizes websites for AI-powered search engines (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews) while maintaining traditional SEO foundations. Performs full GEO audits, citability scoring, AI crawler analysis, llms.txt generation, brand mention scanning, platform-specific optimization, schema markup, technical SEO, content quality (E-E-A-T), and client-ready GEO report generation. Use when user says "geo", "seo", "audit", "AI search", "AI visibility", "optimize", "citability", "llms.txt", "schema", "brand mentions", "GEO report", or any URL for analysis. `skill`
- **geo-audit** — Full website GEO+SEO audit with parallel subagent delegation. Orchestrates a comprehensive Generative Engine Optimization audit across AI citability, platform analysis, technical infrastructure, content quality, and schema markup. Produces a composite GEO Score (0-100) with prioritized action plan. `skill`
- **geo-brand-mentions** — Brand mention and authority scanner for AI visibility. Analyzes brand presence across platforms that AI models rely on for entity recognition and citation decisions. Produces a Brand Authority Score (0-100) with platform-specific recommendations. `skill`
- **geo-citability** — AI citability scoring and optimization. Analyzes web page content to determine how likely AI systems (ChatGPT, Claude, Perplexity, Gemini) are to cite or quote passages from the page. Provides a citability score (0-100) with specific rewrite suggestions. `skill`
- **geo-compare** — Monthly delta tracking and progress reporting for GEO clients. Compares two GEO audits (baseline vs. current), calculates score improvements across all categories, tracks action item completion, and generates a "here's your progress" client report. Use when user says "compare", "delta", "monthly report", "progress", "confronta", "progressi", "report mensile", or when running a monthly client check-in. `skill`
- **geo-content** — Content quality and E-E-A-T assessment for AI citability — evaluate experience, expertise, authoritativeness, trustworthiness, and content structure `skill`
- **geo-crawlers** — AI crawler access analysis. Checks robots.txt, meta tags, and HTTP headers to determine which AI crawlers can access the site. Provides a complete access map and recommendations for maximizing AI visibility while maintaining appropriate control. `skill`
- **geo-llmstxt** — Analyzes and generates llms.txt files -- the emerging standard for helping AI systems understand website structure and content. Can validate existing llms.txt files or generate new ones from scratch by crawling the site. `skill`
- **geo-platform-optimizer** — Platform-specific AI search optimization — audit and optimize for Google AI Overviews, ChatGPT, Perplexity, Gemini, and Bing Copilot individually `skill`
- **geo-proposal** — Auto-generate a professional, client-ready GEO service proposal from audit data. Creates a full proposal in markdown and PDF including executive summary, findings, recommended service packages (Basic/Standard/Premium), pricing, timeline, and terms. Use when user says "proposal", "proposta", "offerta", "preventivo", "generate proposal", or after completing a GEO audit for a prospect. `skill`
- **geo-prospect** — CRM-lite for managing GEO agency prospects and clients. Track leads through the full sales pipeline: Lead → Qualified → Proposal Sent → Won → Lost. Store audit history, notes, deal values, and generate pipeline summaries. Use when user says "prospect", "lead", "client", "pipeline", "crm", "nuovo prospect", "aggiungi cliente", or when managing the business side of GEO services. `skill`
- **geo-report** — Generate a professional, client-facing GEO report combining all audit results into a single deliverable with scores, findings, and prioritized actions `skill`
- **geo-report-pdf** — Generate a professional PDF report from a GEO audit using pandoc + Chrome headless. Converts GEO-AUDIT-REPORT.md into a styled, client-ready PDF with a cover page, color-coded score tables, severity-tagged findings, and a 90-day roadmap. `skill`
- **geo-schema** — Schema.org structured data audit and generation optimized for AI discoverability — detect, validate, and generate JSON-LD markup `skill`
- **geo-technical** — Technical SEO audit with GEO-specific checks — crawlability, indexability, security, performance, SSR, and AI crawler access `skill`
- **geo-update** — Pull the latest GEO-SEO skill updates from the upstream repository. Compares installed files against the latest release, shows what changed, and updates all skills, agents, scripts, and schema templates in place. `skill`
- **geo-ai-visibility** — GEO specialist analyzing AI search visibility: citability scoring, AI crawler access, llms.txt compliance, and brand mention presence across AI-cited platforms. Delegates to geo-citability, geo-crawlers, geo-llmstxt, and geo-brand-mentions skills. `agent`
- **geo-content** — Content quality specialist evaluating E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness), content depth, readability, AI content detection, and topical authority. `agent`
- **geo-platform-analysis** — Platform optimization specialist analyzing readiness for Google AI Overviews, ChatGPT web search, Perplexity AI, Google Gemini, and Bing Copilot. `agent`
- **geo-schema** — Schema markup specialist detecting, validating, and generating structured data (JSON-LD preferred). Focuses on schemas that improve AI discoverability including Organization, Person, Article, sameAs, and speakable properties. `agent`
- **geo-technical** — Technical SEO specialist analyzing crawlability, indexability, security, URL structure, mobile optimization, Core Web Vitals (INP replaces FID), server-side rendering, and JavaScript dependency. `agent`

## Details

| Field | Value |
|---|---|
| Author | zubair-trabzada |
| Original repository | https://github.com/zubair-trabzada/geo-seo-claude |
| Version | `pending-registry-publish` |
| Original commit | 9eec32f5f700a1e6c3cb1cb735a56ee5ec49a964 |
| License | MIT |
| Source platform | claude-code |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- Python 3.8+
- Optional Python packages listed in `skills/geo/requirements.txt`
- Optional Playwright/Pandoc/Chrome dependencies for screenshot and PDF workflows, as described by the upstream documentation
