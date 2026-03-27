*written by Hephai*

# Marketing

Create content, plan campaigns, and analyze performance across marketing channels with Claude. Covers content drafting, campaign planning, brand review, competitive briefs, SEO audits, email sequences, and performance reporting. Connects to Canva, Figma, HubSpot, Amplitude, Ahrefs, SimilarWeb, Klaviyo, Supermetrics, Slack, and Notion.

## Tags

- marketing
- content
- seo
- campaign-planning
- competitive-intelligence

## Installation

```
npx hephai install marketing
```

## Skills

| Skill | Description |
|---|---|
| `draft-content` | Draft blog posts, social media, email newsletters, landing pages, press releases, and case studies with channel-specific formatting and SEO recommendations. Use when writing any marketing content, when you need headline or subject line options, or when adapting a message for a specific platform, audience, and brand voice. `content` |
| `campaign-plan` | Generate a full campaign brief with objectives, audience, messaging, channel strategy, content calendar, and success metrics. Use when planning a product launch, lead-gen push, or awareness campaign, when you need a week-by-week content calendar with dependencies, or when translating a marketing goal into a structured, executable plan. `campaigns` |
| `brand-review` | Review content against your brand voice, style guide, and messaging pillars, flagging deviations by severity with specific before/after fixes. Use when checking a draft before it ships, when auditing copy for voice consistency and terminology, or when screening for unsubstantiated claims, missing disclaimers, and other legal flags. `brand` |
| `competitive-brief` | Research competitors and generate a positioning and messaging comparison with content gaps, opportunities, and threats. Use when building sales battlecards, when finding positioning gaps and messaging angles competitors haven't claimed, or when a competitor makes a move and you need to assess the impact. `competitive-intel` |
| `seo-audit` | Run a comprehensive SEO audit — keyword research, on-page analysis, content gaps, technical checks, and competitor comparison. Use when assessing a site's SEO health, when finding keyword opportunities and content gaps competitors own, or when you need a prioritized action plan split into quick wins and strategic investments. `seo` |
| `email-sequence` | Design and draft multi-email sequences with full copy, timing, branching logic, exit conditions, and performance benchmarks. Use when building onboarding, lead nurture, re-engagement, win-back, or product launch flows, when you need a complete drip campaign with A/B test suggestions, or when mapping a sequence end-to-end with a flow diagram. `email` |
| `performance-report` | Build a marketing performance report with key metrics, trend analysis, wins and misses, and prioritized optimization recommendations. Use when wrapping a campaign, when preparing weekly, monthly, or quarterly channel summaries for stakeholders, or when you need data translated into an executive summary with next-period priorities. `reporting` |
| `content-creation` | Draft marketing content across channels — blog posts, social media, email newsletters, landing pages, press releases, and case studies. Use when writing any marketing content, when you need channel-specific formatting, SEO-optimized copy, headline options, or calls to action. `background` |

## MCPs

| Server | Transport | URL |
|---|---|---|
| Slack | `http` | https://mcp.slack.com/mcp |
| Canva | `http` | https://mcp.canva.com/mcp |
| Figma | `http` | https://mcp.figma.com/mcp |
| HubSpot | `http` | https://mcp.hubspot.com/anthropic |
| Amplitude | `http` | https://mcp.amplitude.com/mcp |
| Amplitude EU | `http` | https://mcp.eu.amplitude.com/mcp |
| Notion | `http` | https://mcp.notion.com/mcp |
| Ahrefs | `http` | https://api.ahrefs.com/mcp/mcp |
| SimilarWeb | `http` | https://mcp.similarweb.com |
| Klaviyo | `http` | https://mcp.klaviyo.com/mcp |
| Supermetrics | `http` | https://mcp.supermetrics.com/mcp |
| Google Calendar | `http` | https://gcal.mcp.claude.com/mcp |
| Gmail | `http` | https://gmail.mcp.claude.com/mcp |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/marketing |
| Version | `0.0.1` |
| Original commit | d2ba7f6 |
| License | Apache-2.0 |
| Source platform | Claude Code plugin (Cowork) |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

None

---
*Original README.md from source:*

# Marketing Plugin

A marketing plugin primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. Content creation, campaign planning, brand voice management, competitive analysis, and performance reporting.

## Installation

```bash
claude plugins add knowledge-work-plugins/marketing
```

## Commands

| Command | Description |
|---|---|
| `/draft-content` | Draft blog posts, social media, email newsletters, landing pages, press releases, and case studies |
| `/campaign-plan` | Generate a full campaign brief with objectives, channels, content calendar, and success metrics |
| `/brand-review` | Review content against your brand voice, style guide, and messaging pillars |
| `/competitive-brief` | Research competitors and generate a positioning and messaging comparison |
| `/performance-report` | Build a marketing performance report with key metrics, trends, and optimization recommendations |
| `/seo-audit` | Run a comprehensive SEO audit — keyword research, on-page analysis, content gaps, technical checks, and competitor comparison |
| `/email-sequence` | Design and draft multi-email sequences for nurture flows, onboarding, drip campaigns, and more |

## Skills

| Skill | Description |
|---|---|
| `content-creation` | Content type templates, writing best practices by channel, SEO fundamentals, headline formulas, and CTA guidance |
| `campaign-planning` | Campaign frameworks, channel selection, content calendar creation, budget allocation, and success metrics |
| `brand-voice` | Brand voice documentation, voice attributes, tone adaptation, style guide enforcement, and terminology management |
| `competitive-analysis` | Competitive research methodology, messaging comparison, content gap analysis, positioning, and battlecard creation |
| `performance-analytics` | Key metrics by channel, reporting templates, trend analysis, attribution modeling, and optimization frameworks |

## Example Workflows

### Drafting a Blog Post

```
> /draft-content
Type: blog post
Topic: How AI is transforming B2B marketing
Audience: Marketing directors at mid-market SaaS companies
Key messages: AI saves time on repetitive tasks, improves personalization, requires human oversight
Tone: Authoritative but approachable
Length: 1200 words
```

Claude will generate a structured blog post draft with an engaging headline, introduction with a hook, organized sections, SEO-optimized subheadings, and a clear call to action.

### Planning a Campaign

```
> /campaign-plan
Goal: Drive 500 signups for our new product launch
Audience: Technical decision-makers at enterprise companies
Timeline: 6 weeks
Budget range: $20,000-$30,000
```

Claude will produce a campaign brief covering objectives, audience segmentation, key messages, channel strategy, a week-by-week content calendar, and KPIs to track.

### Reviewing Content Against Brand Guidelines

```
> /brand-review
[paste your draft content]
```

If your brand style guide is configured in local settings, Claude will check your content against voice, tone, terminology, and messaging pillars. If not configured, Claude will ask about your guidelines or provide a generic review for clarity, consistency, and professionalism.

## Configuration

Configure your brand voice, style guide, and target personas in a local settings file for personalized output. This allows commands like `/draft-content` and `/brand-review` to automatically apply your brand standards without prompting each time.

## MCP Integrations

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](CONNECTORS.md).

This plugin works with the following MCP servers:

- **Slack** — Share drafts, reports, and briefs with your team
- **Canva** — Create and edit design assets
- **Figma** — Access design files and brand assets
- **HubSpot** — Pull campaign data, manage contacts, and track marketing automation
- **Amplitude** — Pull product analytics and user behavior data for performance reporting
- **Notion** — Access briefs, style guides, and campaign documents
- **Ahrefs** — SEO keyword research, backlink analysis, and site audits
- **Similarweb** — Competitive traffic analysis and market benchmarking
- **Klaviyo** — Draft and review email marketing sequences and campaigns
- **Supermetrics** — Pull marketing data from multiple platforms for analytics and reporting
