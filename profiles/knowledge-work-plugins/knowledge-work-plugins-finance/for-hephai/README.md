*written by Hephai*

![Hephai](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)


# Finance

Streamline finance and accounting workflows with Claude. Covers journal entries, account reconciliation, financial statement generation, variance analysis, SOX testing, month-end close management, and audit support. Connects to Snowflake, Databricks, BigQuery, Slack, and Microsoft 365.

## Tags

- finance
- accounting
- sox
- month-end-close
- audit

## Installation

```
npx forgecat install @hephai-nota/knowledge-work-plugins-finance
```

## Skills

| Skill | Description |
|---|---|
| `journal-entry` | Prepare journal entries with proper debits, credits, and supporting detail. Use when booking month-end accruals (AP, payroll, prepaid), recording depreciation or amortization, posting revenue recognition or deferred revenue adjustments, or documenting an entry for audit review. `journal-entry` |
| `reconciliation` | Reconcile accounts by comparing GL balances to subledgers, bank statements, or third-party data. Use when performing bank reconciliations, GL-to-subledger recs, intercompany reconciliations, or identifying and categorizing reconciling items. `reconciliation` |
| `financial-statements` | Generate financial statements (income statement, balance sheet, cash flow) with period-over-period comparison and variance analysis. Use when preparing a monthly or quarterly P&L, closing the books and need to flag material variances, comparing actuals to budget, building a financial summary for leadership review, or looking up GAAP presentation requirements and period-end adjustments. `reporting` |
| `variance-analysis` | Decompose financial variances into drivers with narrative explanations and waterfall analysis. Use when analyzing budget vs. actual, period-over-period changes, revenue or expense variances, or preparing variance commentary for leadership. `analysis` |
| `sox-testing` | Generate SOX sample selections, testing workpapers, and control assessments. Use when planning quarterly or annual SOX 404 testing, pulling a sample for a control (revenue, P2P, ITGC, close), building a testing workpaper template, or evaluating and classifying a control deficiency. `sox` |
| `close-management` | Manage the month-end close process with task sequencing, dependencies, and status tracking. Use when planning the close calendar, tracking close progress, identifying blockers, or sequencing close activities by day. `background` |
| `journal-entry-prep` | Prepare journal entries with proper debits, credits, and supporting documentation for month-end close. Use when booking accruals, prepaid amortization, fixed asset depreciation, payroll entries, revenue recognition, or any manual journal entry. `background` |
| `audit-support` | Support SOX 404 compliance with control testing methodology, sample selection, and documentation standards. Use when generating testing workpapers, selecting audit samples, classifying control deficiencies, or preparing for internal or external audits. `background` |

## MCPs

| Server | Transport | URL |
|---|---|---|
| Snowflake | `http` | *(URL not yet configured)* |
| Databricks | `http` | *(URL not yet configured)* |
| BigQuery | `http` | https://bigquery.googleapis.com/mcp |
| Slack | `http` | https://mcp.slack.com/mcp |
| Microsoft 365 | `http` | https://microsoft365.mcp.claude.com/mcp |
| Google Calendar | `http` | https://gcal.mcp.claude.com/mcp |
| Gmail | `http` | https://gmail.mcp.claude.com/mcp |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/finance |
| Version | `0.0.1` |
| Original commit | d2ba7f6 |
| License | Apache-2.0 |
| Source platform | Claude Code plugin (Cowork) |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Codex | Partial |
| Cursor | Partial |

## Dependencies

None
