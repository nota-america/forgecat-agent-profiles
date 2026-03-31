# filterConfig Reference

Complete filter configuration examples for creating dashboards with pre-configured filters. Include `filterConfig` and `filterOrder` in the `POST /api/v1/documents` body alongside `queryPresentations`.

## Structure Overview

```json
{
  "modelId": "your-model-id",
  "name": "Dashboard Name",
  "filterConfig": {
    "<filter_id>": { /* filter definition */ },
    "<filter_id>": { /* filter definition */ }
  },
  "filterOrder": ["<filter_id>", "<filter_id>"],
  "queryPresentations": [...]
}
```

- `filterConfig` keys are arbitrary string IDs (e.g., `"date_filter"`, `"status_filter"`)
- `filterOrder` is an array of those same IDs — controls display order on the dashboard
- Every ID in `filterOrder` must exist in `filterConfig`

## Date Range Filter

Lets the user pick a relative date range (e.g., "last 6 months").

```json
{
  "date_filter": {
    "type": "date",
    "label": "Date Range",
    "kind": "TIME_FOR_INTERVAL_DURATION",
    "ui_type": "PAST",
    "left_side": "6 months ago",
    "right_side": "6 months"
  }
}
```

| Field | Required | Description |
|-------|----------|-------------|
| `type` | Yes | `"date"` |
| `label` | Yes | Display label shown above the filter |
| `kind` | Yes | `"TIME_FOR_INTERVAL_DURATION"` for relative date ranges |
| `ui_type` | Yes | `"PAST"` for lookback, `"FUTURE"` for forward-looking |
| `left_side` | Yes | Human-readable start (e.g., `"6 months ago"`, `"30 days ago"`, `"1 year ago"`) |
| `right_side` | Yes | Duration string (e.g., `"6 months"`, `"30 days"`, `"1 year"`) |

### Date range variants

**Last 30 days:**
```json
{
  "type": "date",
  "label": "Date Range",
  "kind": "TIME_FOR_INTERVAL_DURATION",
  "ui_type": "PAST",
  "left_side": "30 days ago",
  "right_side": "30 days"
}
```

**Last 1 year:**

Note: This will be for the given calendar year, not a rolling 1 year window. For a rolling window, use the last 12 months.

```json
{
  "type": "date",
  "label": "Date Range",
  "kind": "TIME_FOR_INTERVAL_DURATION",
  "ui_type": "PAST",
  "left_side": "1 year ago",
  "right_side": "1 year"
}
```

## String Dropdown Filter

Lets the user select one or more values from a dropdown populated by field values.

```json
{
  "status_filter": {
    "type": "string",
    "label": "Order Status",
    "kind": "EQUALS",
    "fieldName": "order_items.status",
    "values": []
  }
}
```

| Field | Required | Description |
|-------|----------|-------------|
| `type` | Yes | `"string"` |
| `label` | Yes | Display label |
| `kind` | Yes | `"EQUALS"` for dropdown selection |
| `fieldName` | Yes | Fully qualified field name (e.g., `"users.state"`) |
| `values` | Yes | Default selected values. `[]` for no default (shows all). `["complete", "pending"]` to pre-select. |

### String filter with default values

```json
{
  "type": "string",
  "label": "Status",
  "kind": "EQUALS",
  "fieldName": "order_items.status",
  "values": ["complete"]
}
```

## Boolean Toggle Filter

A simple on/off toggle.

```json
{
  "is_active_filter": {
    "type": "boolean",
    "label": "Active Only",
    "is_negative": false
  }
}
```

| Field | Required | Description |
|-------|----------|-------------|
| `type` | Yes | `"boolean"` |
| `label` | Yes | Display label |
| `is_negative` | No | `false` = filter for `true` values, `true` = filter for `false` values |

## Hidden Filter

Any filter type with `"hidden": true`. Applied to queries but not visible in the dashboard UI. Useful for hardcoded filters the user shouldn't change.

```json
{
  "hidden_status": {
    "type": "string",
    "label": "Status",
    "kind": "EQUALS",
    "fieldName": "order_items.status",
    "values": ["complete"],
    "hidden": true
  }
}
```

## Date Granularity Picker

Lets the user switch between time granularities (day, week, month, etc.).

```json
{
  "granularity_picker": {
    "type": "FIELD_SELECTION",
    "label": "Date Granularity",
    "kind": "TIMEFRAME",
    "options": [
      { "label": "Day", "value": "order_items.created_at[date]" },
      { "label": "Week", "value": "order_items.created_at[week]" },
      { "label": "Month", "value": "order_items.created_at[month]" },
      { "label": "Quarter", "value": "order_items.created_at[quarter]" },
      { "label": "Year", "value": "order_items.created_at[year]" }
    ]
  }
}
```

| Field | Required | Description |
|-------|----------|-------------|
| `type` | Yes | `"FIELD_SELECTION"` |
| `label` | Yes | Display label |
| `kind` | Yes | `"TIMEFRAME"` |
| `options` | Yes | Array of `{ label, value }` where `value` is the field with timeframe bracket |

## Complete Example: Dashboard with Multiple Filters

```json
{
  "modelId": "your-model-id",
  "name": "Sales Overview",
  "filterConfig": {
    "date_range": {
      "type": "date",
      "label": "Date Range",
      "kind": "TIME_FOR_INTERVAL_DURATION",
      "ui_type": "PAST",
      "left_side": "6 months ago",
      "right_side": "6 months"
    },
    "status": {
      "type": "string",
      "label": "Order Status",
      "kind": "EQUALS",
      "fieldName": "order_items.status",
      "values": []
    },
    "state": {
      "type": "string",
      "label": "State",
      "kind": "EQUALS",
      "fieldName": "users.state",
      "values": []
    }
  },
  "filterOrder": ["date_range", "status", "state"],
  "queryPresentations": []
}
```

## Tips

- To learn the exact filter structure for a specific use case, create the filter in the Omni UI and read it back with `GET /api/v1/dashboards/{dashboardId}/filters`.
- `PUT` and `PATCH` on `/dashboards/{id}/filters` may return 405 or 500. Include filters during document creation instead.
- Filter IDs are arbitrary strings — use descriptive names for readability.
