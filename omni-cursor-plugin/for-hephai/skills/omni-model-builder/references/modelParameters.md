# Model Parameters Reference

Complete parameter reference for views, topics, dimensions, and measures. Use these when building or modifying Omni semantic model YAML.

## Dimension Parameters

| Parameter | Description |
|-----------|-------------|
| `sql` | SQL expression using `${field_name}` references |
| `label` | Display name in UI |
| `description` | Help text (also used by Blobby) |
| `primary_key` | `true` — unique key, critical for aggregations |
| `hidden` | `true` — hides from picker, still usable in SQL |
| `ignored` | `true` — removes from UI and prevents all references |
| `format` | Named format (see Format Values below) |
| `group_label` | Groups fields in the picker |
| `tags` | Metadata for field search and curation (e.g., `[internal, pii]`) |
| `synonyms` | Alternative names for AI matching (e.g., `[client, account, buyer]`) |
| `ai_context` | Free text providing context to the AI query helper |
| `all_values` | Complete list of possible values for AI helper |
| `sample_values` | Representative values for AI content understanding |
| `display_order` | Overrides sort order in field picker |
| `view_label` | Nests field under a different view in the picker |
| `skip_parent_label` | Controls parent label prepending in grouped dimensions |
| `colors` | Maps colors to specific dimension values |
| `filter_single_select_only` | Restricts to single-value filters |
| `suggest_from_field` | Alternative field for filter suggestions |
| `suggest_from_topic` | Explicit topic source for filter suggestions |
| `suggestion_list` | Explicit list of filter options |
| `drill_fields` | Array of fields for hierarchical drilling |
| `links` | External links with templated URLs in drill menu |
| `groups` | Buckets values with CASE-like logic (see Groups below) |
| `bin_boundaries` | Numeric bins/tiers (e.g., `[0, 10, 50, 100]`) |
| `duration` | Time difference between two timestamp fields |
| `level_of_detail` | Controls aggregation granularity (LOD) |
| `dynamic_top_n` | Auto-filtering for top/bottom N values by measure |
| `order_by_field` | Sort this field by another field's values |
| `aliases` | Maps old field names to preserve content |
| `timeframes` | Available time segments for date/time fields (see Timeframes below) |
| `convert_tz` | `false` — disables timezone conversion for this field |
| `required_access_grants` | Access control via grant specifications |
| `ignore_from_extended` | Controls field omission during view extensions |
| `custom_primary_key_sql_for_quick_aggs` | Custom primary key for aggregate measures |

### Common dimension examples

```yaml
dimensions:
  order_id:
    primary_key: true

  status:
    label: Order Status
    description: "Values: complete, pending, cancelled, returned"
    synonyms: [order state, fulfillment status]
    group_label: Order Details

  created_at:
    label: Created Date
    timeframes: [raw, date, week, month, quarter, year]

  sale_price:
    sql: ${TABLE}.sale_price
    format: currency_2
    hidden: true

  customer_tier:
    sql: ${TABLE}.tier
    groups:
      - filter:
          is: [enterprise, strategic]
        name: High Value
      - filter:
          is: [mid_market, growth]
        name: Mid Market
    else: SMB

  internal_id:
    ignored: true
    tags: [internal]
```

## Measure Parameters

| Parameter | Description |
|-----------|-------------|
| `sql` | SQL expression (e.g., `${sale_price}`) |
| `aggregate_type` | Aggregation method (see Aggregate Types below) |
| `label` | Display name in UI |
| `description` | Help text (also used by Blobby) |
| `hidden` | `true` — hides from UI, still referenceable |
| `ignored` | `true` — removes from UI and prevents references |
| `format` | Named format (see Format Values below) |
| `group_label` | Groups fields in the picker |
| `tags` | Metadata for field search and curation |
| `synonyms` | Alternative names for AI matching |
| `ai_context` | Free text providing context to the AI query helper |
| `all_values` | Complete list of possible values for AI helper |
| `sample_values` | Sample values for AI to understand magnitude |
| `filters` | Filtered aggregations (see Measure Filters below) |
| `custom_primary_key_sql` | Custom dedup key for `*_distinct_on` aggregate types |
| `display_order` | Overrides sort order in field picker |
| `view_label` | Nests field under a different view |
| `colors` | Maps a color to the measure as a series |
| `drill_fields` | Array of fields for drilling into measure results |
| `drill_queries` | Multiple drill query options with full query control |
| `links` | External links with templated URLs |
| `aliases` | Maps old field names to preserve content |
| `required_access_grants` | Access control via grant specifications |
| `suggest_from_field` | Alternative field for filter suggestions |
| `suggestion_list` | Explicit list of filter options |

### Aggregate Types

| Type | Description |
|------|-------------|
| `sum` | Sum of values |
| `count` | Count of rows |
| `count_distinct` | Count of distinct values |
| `average` | Average of values |
| `min` | Minimum value |
| `max` | Maximum value |
| `median` | Median value |
| `list` | Concatenated list of values |
| `percentile` | Percentile (requires `percentile` parameter, e.g., `percentile: 75`) |
| `sum_distinct_on` | Sum with dedup via `custom_primary_key_sql` |
| `average_distinct_on` | Average with dedup via `custom_primary_key_sql` |
| `median_distinct_on` | Median with dedup via `custom_primary_key_sql` |
| `percentile_distinct_on` | Percentile with dedup via `custom_primary_key_sql` |

### Common measure examples

```yaml
measures:
  count:
    aggregate_type: count

  total_revenue:
    sql: ${sale_price}
    aggregate_type: sum
    format: currency_2
    synonyms: [sales, income, revenue]
    description: "Total revenue from completed orders"

  average_order_value:
    sql: ${sale_price}
    aggregate_type: average
    format: currency_2

  unique_users:
    sql: ${user_id}
    aggregate_type: count_distinct

  p95_delivery_time:
    sql: ${delivery_hours}
    aggregate_type: percentile
    percentile: 95

  completed_orders:
    aggregate_type: count
    filters:
      status:
        is: complete

  california_revenue:
    sql: ${sale_price}
    aggregate_type: sum
    format: currency_2
    filters:
      state:
        is: California
```

### Measure Filter Conditions

| Condition | Example |
|-----------|---------|
| `is` | `status: { is: complete }` |
| `is_not` | `status: { is_not: cancelled }` |
| `greater_than` | `amount: { greater_than: 100 }` |
| `less_than` | `amount: { less_than: 1000 }` |
| `contains` | `name: { contains: smith }` |
| `starts_with` | `code: { starts_with: US }` |
| `ends_with` | `email: { ends_with: .com }` |

## Format Values

### Numeric

| Format | Example | Notes |
|--------|---------|-------|
| `number_N` | `1,234.50` | N = decimal places (0-4) |
| `percent_N` | `24.4%` | |
| `id` | `123450` | No commas |
| `billions_N` | `1.20B` | |
| `millions_N` | `5.6M` | |
| `thousands_N` | `8.90K` | |
| `big` | auto | Uses millions if >1M, thousands if >1000, otherwise number |

### Currency

| Format | Example | Notes |
|--------|---------|-------|
| `currency_N` | `$1,234.50` | Default USD |
| `usdcurrency_N` | `$1,234.50` | Explicit USD |
| `eurcurrency_N` | `€1,234.50` | EUR |
| `gbpcurrency_N` | `£1,234.50` | GBP |
| `audcurrency_N` | `A$1,234.50` | AUD |
| `bigcurrency` | `$5.60M` | Scaled with symbol |
| `bigusdcurrency` | `$5.60M` | |
| `bigeurcurrency` | `€5.60M` | |
| `biggbpcurrency` | `£5.60M` | |
| `bigaudcurrency` | `A$5.60M` | |

### Accounting

| Format | Example | Notes |
|--------|---------|-------|
| `accounting` | `$(1,234.50)` | Parentheses for negatives |
| `usdaccounting` | `$(1,234.50)` | |
| `euraccounting` | `€(1,234.50)` | |
| `gbpaccounting` | `£(1,234.50)` | |
| `audaccounting` | `A$(1,234.50)` | |
| `financial` | `(1,234.50)` | No currency symbol |

### Date/Time

Use D3 time format strings: `"%Y-%m"`, `"%Y-%m-%d"`, `"%Y-%m-%d %H:%M:%S"`

## Topic Parameters

| Parameter | Description |
|-----------|-------------|
| `base_view` | **Required.** Primary view for the topic |
| `label` | Display name |
| `description` | Free text description |
| `joins` | Nested structure for join chains (e.g., `users: {}`) |
| `relationships` | Topic-level join definitions |
| `fields` | Field curation: `[order_items.*, users.name, -users.internal_id]` |
| `ai_context` | Guides Blobby's field mapping and behavior |
| `ai_fields` | Curates fields visible to AI (supports `*`, `-`, `tag:`) |
| `sample_queries` | Example questions with correct queries for AI |
| `default_filters` | User-visible, removable filters applied to all queries |
| `always_where_sql` | Non-removable SQL filter on all rows |
| `always_where_filters` | Non-removable filter using filter syntax |
| `always_having_sql` | Non-removable SQL filter on aggregated results |
| `always_having_filters` | Non-removable filter on aggregated results using filter syntax |
| `access_filters` | Row-level access control via user attributes |
| `extends` | Inherit and override another topic |
| `template` | `true` — marks as template only (accessed via `extends`) |
| `hidden` | `true` — removes from workbook |
| `group_label` | Group the topic belongs to |
| `display_order` | Order in the field picker |
| `owners` | List of email addresses for topic owners |
| `views` | Customize views only in the context of this topic |
| `cache_policy` | Cache policy for the topic |
| `auto_run` | `false` — requires run click to return results |
| `default_row_limit` | Default row limit for queries (overrides model-level) |
| `base_view_label` | Display name for the base view table |
| `warehouse_override` | Different warehouse for queries using this topic |
| `required_access_grants` | Access grants for topic-level control |

## Timeframes

Valid values for the `timeframes` parameter on date/time dimensions:

| Timeframe | Description |
|-----------|-------------|
| `raw` | Original timestamp |
| `date` | Date only |
| `week` | Week start |
| `month` | Month |
| `quarter` | Quarter |
| `year` | Year |
| `hour` | Hour |
| `minute` | Minute |
| `second` | Second |
| `millisecond` | Millisecond |
| `day_of_week_name` | e.g., Monday |
| `day_of_week_num` | 0-6 |
| `day_of_month` | 1-31 |
| `day_of_quarter` | 1-92 |
| `day_of_year` | 1-366 |
| `hour_of_day` | 0-23 |
| `month_name` | e.g., January |
| `month_num` | 1-12 |
| `quarter_of_year` | 1-4 |
| `fiscal_quarter` | Requires `fiscal_month_offset` |
| `fiscal_year` | Requires `fiscal_month_offset` |

Default if omitted: `raw`, `date`, `week`, `month`, `quarter`, `year`

## Groups

Bucket string field values using CASE-like logic:

```yaml
dimensions:
  customer_segment:
    sql: ${TABLE}.tier
    groups:
      - filter:
          is: [enterprise, strategic]
        name: High Value
      - filter:
          is: [mid_market, growth]
        name: Mid Market
    else: SMB
    label: Customer Segment
```

- Only compatible with string fields
- `filter.is` accepts an array of values to match
- `else` assigns a fallback group for unmatched values
