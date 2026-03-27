*written by Hephai*

# Data

Query, visualize, and interpret datasets with Claude. Write SQL across all major warehouse dialects, run statistical analysis, build dashboards, and validate your work before sharing. Connects to Snowflake, BigQuery, Databricks, Amplitude, Hex, and more.

## Tags

- data
- sql
- analytics
- visualization
- data-warehouse

## Installation

```
npx hephai install data
```

## Skills

| Skill | Description |
|---|---|
| `analyze` | Answer data questions -- from quick lookups to full analyses. Use when looking up a single metric, investigating what's driving a trend or drop, comparing segments over time, or preparing a formal data report for stakeholders. `analytics` |
| `explore-data` | Profile and explore a dataset to understand its shape, quality, and patterns. Use when encountering a new table or file, checking null rates and column distributions, spotting data quality issues like duplicates or suspicious values, or deciding which dimensions and metrics to analyze. `exploration` |
| `write-query` | Write optimized SQL for your dialect with best practices. Use when translating a natural-language data need into SQL, building a multi-CTE query with joins and aggregations, optimizing a query against a large partitioned table, or getting dialect-specific syntax for Snowflake, BigQuery, Postgres, etc. `sql` |
| `sql-queries` | Write correct, performant SQL across all major data warehouse dialects (Snowflake, BigQuery, Databricks, PostgreSQL, etc.). Use when writing queries, optimizing slow SQL, translating between dialects, or building complex analytical queries with CTEs, window functions, or aggregations. `sql` |
| `statistical-analysis` | Apply statistical methods including descriptive stats, trend analysis, outlier detection, and hypothesis testing. Use when analyzing distributions, testing for significance, detecting anomalies, computing correlations, or interpreting statistical results. `statistics` |
| `data-visualization` | Create effective data visualizations with Python (matplotlib, seaborn, plotly). Use when building charts, choosing the right chart type for a dataset, creating publication-quality figures, or applying design principles like accessibility and color theory. `visualization` |
| `create-viz` | Create publication-quality visualizations with Python. Use when turning query results or a DataFrame into a chart, selecting the right chart type for a trend or comparison, generating a plot for a report or presentation, or needing an interactive chart with hover and zoom. `visualization` |
| `build-dashboard` | Build an interactive HTML dashboard with charts, filters, and tables. Use when creating an executive overview with KPI cards, turning query results into a shareable self-contained report, building a team monitoring snapshot, or needing multiple charts with filters in one browser-openable file. `dashboard` |
| `validate-data` | QA an analysis before sharing -- methodology, accuracy, and bias checks. Use when reviewing an analysis before a stakeholder presentation, spot-checking calculations and aggregation logic, verifying a SQL query's results look right, or assessing whether conclusions are actually supported by the data. `qa` |
| `data-context-extractor` | Generate or improve a company-specific data analysis skill by extracting tribal knowledge from analysts. `customization` |

## MCPs

| Server | Transport | URL | Category |
|---|---|---|---|
| Snowflake | `http` | *(URL not yet configured)* | `data warehouse` |
| Databricks | `http` | *(URL not yet configured)* | `data warehouse` |
| BigQuery | `http` | https://bigquery.googleapis.com/mcp | `data warehouse` |
| Hex | `http` | https://app.hex.tech/mcp | `notebook` |
| Amplitude | `http` | https://mcp.amplitude.com/mcp | `analytics` |
| Amplitude EU | `http` | https://mcp.eu.amplitude.com/mcp | `analytics` |
| Atlassian | `http` | https://mcp.atlassian.com/v1/mcp | `project tracker` |
| Definite | `http` | https://api.definite.app/v3/mcp/http | `data platform` |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/data |
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

# Data Analyst Plugin

A data analyst plugin primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. SQL queries, data exploration, visualization, dashboards, and insight generation. Works with any data warehouse, any SQL dialect, and any analytics stack.

## Installation

```
claude plugins add knowledge-work-plugins/data
```

## What It Does

This plugin transforms Claude into a data analyst collaborator. It helps you explore datasets, write optimized SQL, build visualizations, create interactive dashboards, and validate analyses before sharing with stakeholders.

### With a Data Warehouse Connection

Connect your data warehouse MCP server (e.g., Snowflake, Databricks, BigQuery, or any SQL-compatible database) for the best experience. Claude will:

- Query your data warehouse directly
- Explore schemas and table metadata
- Run analyses end-to-end without copy-pasting
- Iterate on queries based on results

### Without a Data Warehouse Connection

Without a data warehouse connection, paste SQL results or upload CSV/Excel files for analysis and visualization. Claude can also write SQL queries for you to run manually, and then analyze the results you provide.

## Commands

| Command | Description |
|---------|-------------|
| `/analyze` | Answer data questions -- from quick lookups to full analyses |
| `/explore-data` | Profile and explore a dataset to understand its shape, quality, and patterns |
| `/write-query` | Write optimized SQL for your dialect with best practices |
| `/create-viz` | Create publication-quality visualizations with Python |
| `/build-dashboard` | Build interactive HTML dashboards with filters and charts |
| `/validate` | QA an analysis before sharing -- methodology, accuracy, and bias checks |

## Skills

| Skill | Description |
|-------|-------------|
| `sql-queries` | SQL best practices across dialects, common patterns, and performance optimization |
| `data-exploration` | Data profiling, quality assessment, and pattern discovery |
| `data-visualization` | Chart selection, Python viz code patterns, and design principles |
| `statistical-analysis` | Descriptive stats, trend analysis, outlier detection, and hypothesis testing |
| `data-validation` | Pre-delivery QA, sanity checks, and documentation standards |
| `interactive-dashboard-builder` | HTML/JS dashboard construction with Chart.js, filters, and styling |

## Example Workflows

### Ad-Hoc Analysis

```
You: /analyze What was our monthly revenue trend for the past 12 months, broken down by product line?

Claude: [Writes SQL query] → [Executes against data warehouse] → [Generates trend chart]
       → [Identifies key patterns: "Product line A grew 23% YoY while B was flat"]
       → [Validates results with sanity checks]
```

### Data Exploration

```
You: /explore-data users table

Claude: [Profiles table: 2.3M rows, 47 columns]
       → [Reports: created_at has 0.2% nulls, email has 99.8% cardinality]
       → [Flags: status column has unexpected value "UNKNOWN" in 340 rows]
       → [Suggests: "High-value dimensions to explore: plan_type, signup_source, country"]
```

### Query Writing

```
You: /write-query I need a cohort retention analysis -- users grouped by signup month,
     showing what % are still active 1, 3, 6, and 12 months later. We use Snowflake.

Claude: [Writes optimized Snowflake SQL with CTEs]
       → [Adds comments explaining each step]
       → [Includes performance notes about partition pruning]
```

### Dashboard Building

```
You: /build-dashboard Create a sales dashboard with monthly revenue, top products,
     and regional breakdown. Here's the data: [pastes CSV]

Claude: [Generates self-contained HTML file]
       → [Includes interactive Chart.js visualizations]
       → [Adds dropdown filters for region and time period]
       → [Opens in browser for review]
```

### Pre-Share Validation

```
You: /validate [shares analysis document]

Claude: [Reviews methodology] → [Checks for survivorship bias in churn analysis]
       → [Verifies aggregation logic] → [Flags: "Denominator excludes trial users
          which could overstate conversion rate by ~5pp"]
       → [Confidence: "Ready to share with noted caveat"]
```

## Connecting Your Data Stack

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](CONNECTORS.md).

This plugin works best when connected to your data infrastructure. Add MCP servers for:

- **Data Warehouse**: Snowflake, Databricks, BigQuery, Definite, or any SQL-compatible database
- **Analytics/BI**: Amplitude, Looker, Tableau, or similar
- **Notebooks**: Jupyter, Hex, or similar
- **Spreadsheets**: Google Sheets, Excel
- **Data Orchestration**: Airflow, dbt, Dagster, Prefect
- **Data Ingestion**: Fivetran, Airbyte, Stitch

Configure MCP servers in your `.mcp.json` or Claude Code settings to enable direct data access.
