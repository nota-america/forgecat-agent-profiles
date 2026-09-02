*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Data

Query, visualize, and interpret datasets with Claude. Write SQL across all major warehouse dialects, run statistical analysis, build dashboards, and validate your work before sharing. Connects to Snowflake, BigQuery, Databricks, Amplitude, Hex, and more.

## Tags

- data
- sql
- analytics
- visualization
- data-warehouse

## Installation

```bash
npx forgecat install @forgecat/anthropics_knowledge-work-plugins_data
```

## Skills

- **analyze** — Answer data questions -- from quick lookups to full analyses. Use when looking up a single metric, investigating what's driving a trend or drop, comparing segments over time, or preparing a formal data report for stakeholders.
- **build-dashboard** — Build an interactive HTML dashboard with charts, filters, and tables. Use when creating an executive overview with KPI cards, turning query results into a shareable self-contained report, building a team monitoring snapshot, or needing multiple charts with filters in one browser-openable file.
- **create-viz** — Create publication-quality visualizations with Python. Use when turning query results or a DataFrame into a chart, selecting the right chart type for a trend or comparison, generating a plot for a report or presentation, or needing an interactive chart with hover and zoom.
- **data-context-extractor** — Generate or improve a company-specific data analysis skill by extracting tribal knowledge from analysts.
BOOTSTRAP MODE - Triggers: "Create a data context skill", "Set up data analysis for our warehouse", "Help me create a skill for our database", "Generate a data skill for [company]" → Discovers schemas, asks key questions, generates initial skill with reference files
ITERATION MODE - Triggers: "Add context about [domain]", "The skill needs more info about [topic]", "Update the data skill with [metrics/tables/terminology]", "Improve the [domain] reference" → Loads existing skill, asks targeted questions, appends/updates reference files
Use when data analysts want Claude to understand their company's specific data warehouse, terminology, metrics definitions, and common query patterns.
- **data-visualization** — Create effective data visualizations with Python (matplotlib, seaborn, plotly). Use when building charts, choosing the right chart type for a dataset, creating publication-quality figures, or applying design principles like accessibility and color theory.
- **explore-data** — Profile and explore a dataset to understand its shape, quality, and patterns. Use when encountering a new table or file, checking null rates and column distributions, spotting data quality issues like duplicates or suspicious values, or deciding which dimensions and metrics to analyze.
- **sql-queries** — Write correct, performant SQL across all major data warehouse dialects (Snowflake, BigQuery, Databricks, PostgreSQL, etc.). Use when writing queries, optimizing slow SQL, translating between dialects, or building complex analytical queries with CTEs, window functions, or aggregations.
- **statistical-analysis** — Apply statistical methods including descriptive stats, trend analysis, outlier detection, and hypothesis testing. Use when analyzing distributions, testing for significance, detecting anomalies, computing correlations, or interpreting statistical results.
- **validate-data** — QA an analysis before sharing -- methodology, accuracy, and bias checks. Use when reviewing an analysis before a stakeholder presentation, spot-checking calculations and aggregation logic, verifying a SQL query's results look right, or assessing whether conclusions are actually supported by the data.
- **write-query** — Write optimized SQL for your dialect with best practices. Use when translating a natural-language data need into SQL, building a multi-CTE query with joins and aggregations, optimizing a query against a large partitioned table, or getting dialect-specific syntax for Snowflake, BigQuery, Postgres, etc.

## MCPs

| Server | Transport | URL |
|---|---|---|
| *(none)* | | |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/data |
| Version | `0.0.9` |
| Original commit | d2ba7f6 |
| License | Apache-2.0 |
| Source platform | claude-code |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Partial |
| Hermes | Partial |

## Dependencies

- None required to install this profile. Individual skills may require tools or credentials documented in their own `SKILL.md` files.
