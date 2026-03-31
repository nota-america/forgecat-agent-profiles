# queryPresentations Reference

Complete config examples for each chart type. Use these as templates when creating documents with `queryPresentations`.

Every `queryPresentation` object requires: `name`, `prefersChart: true`, `visType`, `fields`, `query`, and `config`. The `config` shape varies by chart type — the examples below show the exact structure for each.

## Table (Safe Default)

The simplest and most reliable visualization. Use when unsure about chart config.

```json
{
  "name": "Orders by Status",
  "topicName": "order_items",
  "prefersChart": false,
  "visType": "basic",
  "fields": ["order_items.status", "order_items.count", "order_items.total_revenue"],
  "query": {
    "table": "order_items",
    "fields": ["order_items.status", "order_items.count", "order_items.total_revenue"],
    "sorts": [{ "column_name": "order_items.total_revenue", "sort_descending": true }],
    "limit": 100,
    "join_paths_from_topic_name": "order_items",
    "visConfig": { "chartType": "table" }
  },
  "config": {}
}
```

Key differences from chart types:
- `prefersChart` is `false` (or omitted)
- `config` is an empty object `{}`
- `visConfig.chartType` is `"table"`

## KPI (Single Value)

Displays one or more big numbers. Uses `visType: "omni-kpi"` (not `"basic"`).

```json
{
  "name": "Total Revenue",
  "topicName": "order_items",
  "prefersChart": true,
  "visType": "omni-kpi",
  "fields": ["order_items.total_revenue"],
  "query": {
    "table": "order_items",
    "fields": ["order_items.total_revenue"],
    "join_paths_from_topic_name": "order_items",
    "visConfig": { "chartType": "kpi" }
  },
  "config": {
    "alignment": "left",
    "verticalAlignment": "top",
    "markdownConfig": [
      {
        "id": "kpi-1",
        "type": "number",
        "config": {
          "field": {
            "row": "_first",
            "field": { "name": "order_items.total_revenue", "pivotMap": {} },
            "label": { "value": "Total Revenue" }
          },
          "descriptionBefore": ""
        }
      }
    ]
  }
}
```

### KPI with multiple values

Add more entries to `markdownConfig`. Each entry gets a unique `id`:

```json
"markdownConfig": [
  {
    "id": "kpi-revenue",
    "type": "number",
    "config": {
      "field": {
        "row": "_first",
        "field": { "name": "order_items.total_revenue", "pivotMap": {} },
        "label": { "value": "Revenue" }
      },
      "descriptionBefore": ""
    }
  },
  {
    "id": "kpi-orders",
    "type": "number",
    "config": {
      "field": {
        "row": "_first",
        "field": { "name": "order_items.count", "pivotMap": {} },
        "label": { "value": "Orders" }
      },
      "descriptionBefore": ""
    }
  }
]
```

### KPI config fields

| Field | Required | Description |
|-------|----------|-------------|
| `alignment` | No | Horizontal: `"left"`, `"center"`, `"right"` |
| `verticalAlignment` | No | Vertical: `"top"`, `"center"`, `"bottom"` |
| `markdownConfig` | Yes | Array of KPI value entries |
| `markdownConfig[].id` | Yes | Unique string ID for this entry |
| `markdownConfig[].type` | Yes | Always `"number"` for KPI values |
| `markdownConfig[].config.field.row` | Yes | Always `"_first"` |
| `markdownConfig[].config.field.field.name` | Yes | Fully qualified field name (e.g., `"order_items.total_revenue"`) |
| `markdownConfig[].config.field.field.pivotMap` | Yes | Empty object `{}` unless using pivots |
| `markdownConfig[].config.field.label.value` | Yes | Display label for the KPI |
| `markdownConfig[].config.descriptionBefore` | No | Text shown above the number |

## Line Chart

Time-series or continuous data. Uses `visType: "basic"` with cartesian config.

```json
{
  "name": "Monthly Revenue Trend",
  "topicName": "order_items",
  "prefersChart": true,
  "visType": "basic",
  "fields": ["order_items.created_at[month]", "order_items.total_revenue"],
  "query": {
    "table": "order_items",
    "fields": ["order_items.created_at[month]", "order_items.total_revenue"],
    "sorts": [{ "column_name": "order_items.created_at[month]", "sort_descending": false }],
    "filters": { "order_items.created_at": "this quarter" },
    "limit": 100,
    "join_paths_from_topic_name": "order_items",
    "visConfig": { "chartType": "lineColor" }
  },
  "config": {
    "x": { "field": { "name": "order_items.created_at[month]" } },
    "mark": { "type": "line" },
    "color": {},
    "series": [
      { "field": { "name": "order_items.total_revenue" }, "yAxis": "y" }
    ],
    "tooltip": [
      { "field": { "name": "order_items.created_at[month]" } },
      { "field": { "name": "order_items.total_revenue" } }
    ],
    "version": 0,
    "behaviors": { "stackMultiMark": false },
    "configType": "cartesian",
    "_dependentAxis": "y"
  }
}
```

### Line chart with multiple series

Add more entries to `series`, and include them in `tooltip`:

```json
"series": [
  { "field": { "name": "order_items.total_revenue" }, "yAxis": "y" },
  { "field": { "name": "order_items.count" }, "yAxis": "y" }
],
"tooltip": [
  { "field": { "name": "order_items.created_at[month]" } },
  { "field": { "name": "order_items.total_revenue" } },
  { "field": { "name": "order_items.count" } }
]
```

## Bar Chart (Horizontal)

Dimension on y-axis, measure on x-axis. Good for ranked lists (Top N).

```json
{
  "name": "Revenue by Status",
  "topicName": "order_items",
  "prefersChart": true,
  "visType": "basic",
  "chartType": "barGrouped",
  "fields": ["order_items.status", "order_items.total_revenue"],
  "query": {
    "table": "order_items",
    "fields": ["order_items.status", "order_items.total_revenue"],
    "sorts": [{ "column_name": "order_items.total_revenue", "sort_descending": true }],
    "limit": 10,
    "join_paths_from_topic_name": "order_items",
    "visConfig": { "chartType": "barColor" }
  },
  "config": {
    "y": { "field": { "name": "order_items.status" } },
    "mark": { "type": "bar" },
    "color": { "_stack": "group" },
    "series": [
      { "field": { "name": "order_items.total_revenue" }, "xAxis": "x" }
    ],
    "tooltip": [
      { "field": { "name": "order_items.status" } },
      { "field": { "name": "order_items.total_revenue" } }
    ],
    "version": 0,
    "behaviors": { "stackMultiMark": false },
    "configType": "cartesian",
    "_dependentAxis": "x"
  }
}
```

## Bar Chart (Vertical)

Dimension on x-axis, measure on y-axis. The axes and `_dependentAxis` flip compared to horizontal.

```json
{
  "name": "Revenue by Category",
  "topicName": "order_items",
  "prefersChart": true,
  "visType": "basic",
  "chartType": "barGrouped",
  "fields": ["products.category", "order_items.total_revenue"],
  "query": {
    "table": "order_items",
    "fields": ["products.category", "order_items.total_revenue"],
    "sorts": [{ "column_name": "order_items.total_revenue", "sort_descending": true }],
    "limit": 10,
    "join_paths_from_topic_name": "order_items",
    "visConfig": { "chartType": "barColor" }
  },
  "config": {
    "x": { "field": { "name": "products.category" } },
    "mark": { "type": "bar" },
    "color": { "_stack": "group" },
    "series": [
      { "field": { "name": "order_items.total_revenue" }, "yAxis": "y" }
    ],
    "tooltip": [
      { "field": { "name": "products.category" } },
      { "field": { "name": "order_items.total_revenue" } }
    ],
    "version": 0,
    "behaviors": { "stackMultiMark": false },
    "configType": "cartesian",
    "_dependentAxis": "y"
  }
}
```

## Area Chart

Same structure as line chart but with `mark.type: "area"` and `visConfig.chartType: "areaColor"`.

```json
{
  "name": "Revenue Over Time (Area)",
  "topicName": "order_items",
  "prefersChart": true,
  "visType": "basic",
  "fields": ["order_items.created_at[month]", "order_items.total_revenue"],
  "query": {
    "table": "order_items",
    "fields": ["order_items.created_at[month]", "order_items.total_revenue"],
    "sorts": [{ "column_name": "order_items.created_at[month]", "sort_descending": false }],
    "limit": 100,
    "join_paths_from_topic_name": "order_items",
    "visConfig": { "chartType": "areaColor" }
  },
  "config": {
    "x": { "field": { "name": "order_items.created_at[month]" } },
    "mark": { "type": "area" },
    "color": {},
    "series": [
      { "field": { "name": "order_items.total_revenue" }, "yAxis": "y" }
    ],
    "tooltip": [
      { "field": { "name": "order_items.created_at[month]" } },
      { "field": { "name": "order_items.total_revenue" } }
    ],
    "version": 0,
    "behaviors": { "stackMultiMark": false },
    "configType": "cartesian",
    "_dependentAxis": "y"
  }
}
```

## Stacked Bar Chart

Uses `"_stack": "stack"` instead of `"_stack": "group"` in `color`, and `visConfig.chartType: "stackedBarColor"`.

```json
{
  "name": "Revenue by Status (Stacked)",
  "topicName": "order_items",
  "prefersChart": true,
  "visType": "basic",
  "fields": ["order_items.created_at[month]", "order_items.status", "order_items.total_revenue"],
  "query": {
    "table": "order_items",
    "fields": ["order_items.created_at[month]", "order_items.status", "order_items.total_revenue"],
    "sorts": [{ "column_name": "order_items.created_at[month]", "sort_descending": false }],
    "pivots": ["order_items.status"],
    "limit": 100,
    "join_paths_from_topic_name": "order_items",
    "visConfig": { "chartType": "stackedBarColor" }
  },
  "config": {
    "x": { "field": { "name": "order_items.created_at[month]" } },
    "mark": { "type": "bar" },
    "color": { "_stack": "stack", "field": { "name": "order_items.status" } },
    "series": [
      { "field": { "name": "order_items.total_revenue" }, "yAxis": "y" }
    ],
    "tooltip": [
      { "field": { "name": "order_items.created_at[month]" } },
      { "field": { "name": "order_items.status" } },
      { "field": { "name": "order_items.total_revenue" } }
    ],
    "version": 0,
    "behaviors": { "stackMultiMark": false },
    "configType": "cartesian",
    "_dependentAxis": "y"
  }
}
```

## Cartesian Config Fields

All line, bar, area, and scatter charts use the cartesian config structure:

| Field | Required | Description |
|-------|----------|-------------|
| `x` | Conditional | X-axis field. Required for vertical charts (line, vertical bar, area). |
| `y` | Conditional | Y-axis field. Required for horizontal bar charts. |
| `mark.type` | Yes | `"line"`, `"bar"`, `"area"`, `"point"` (scatter) |
| `color` | Yes | Color/stacking config. `{}` for single series, `{ "_stack": "group" }` for grouped, `{ "_stack": "stack", "field": {...} }` for stacked. |
| `series` | Yes | Array of measure fields. Each has `"yAxis": "y"` (vertical) or `"xAxis": "x"` (horizontal). |
| `tooltip` | Yes | Array of fields shown on hover. Include all dimension and measure fields. |
| `version` | Yes | Always `0`. |
| `behaviors.stackMultiMark` | Yes | `false` for grouped, `true` for stacked when multiple series. |
| `configType` | Yes | Always `"cartesian"`. |
| `_dependentAxis` | Yes | `"y"` when measures are on y-axis (vertical), `"x"` when measures are on x-axis (horizontal bars). |

## Quick Reference: visType + visConfig.chartType Combinations

| Chart | `visType` | `visConfig.chartType` | `mark.type` | `_dependentAxis` |
|-------|-----------|----------------------|-------------|------------------|
| Table | `"basic"` | `"table"` | n/a | n/a |
| KPI | `"omni-kpi"` | `"kpi"` | n/a | n/a |
| Line | `"basic"` | `"lineColor"` | `"line"` | `"y"` |
| Bar (horiz) | `"basic"` | `"barColor"` | `"bar"` | `"x"` |
| Bar (vert) | `"basic"` | `"barColor"` | `"bar"` | `"y"` |
| Area | `"basic"` | `"areaColor"` | `"area"` | `"y"` |
| Stacked Bar | `"basic"` | `"stackedBarColor"` | `"bar"` | `"y"` |
| Scatter | `"basic"` | `"scatter"` | `"point"` | `"y"` |
