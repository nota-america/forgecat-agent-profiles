# Filter Expressions Reference

Complete reference for filter expression syntax used in the `filters` object of Omni query API calls.

Filters are passed as key-value pairs where the key is a fully qualified field name and the value is an expression string:

```json
"filters": {
  "order_items.created_at": "last 90 days",
  "order_items.status": "complete",
  "users.state": "California,New York"
}
```

## Date Expressions

### Relative dates

| Expression | Meaning |
|-----------|---------|
| `"last N days"` | Last N days (e.g., `"last 7 days"`, `"last 30 days"`, `"last 90 days"`) |
| `"last N weeks"` | Last N weeks |
| `"last N months"` | Last N months |
| `"last N quarters"` | Last N quarters |
| `"last N years"` | Last N years |
| `"this week"` | Current week |
| `"this month"` | Current month |
| `"this quarter"` | Current quarter |
| `"this year"` | Current year |
| `"last week"` | Previous week |
| `"last month"` | Previous month |
| `"last quarter"` | Previous quarter |
| `"last year"` | Previous year |
| `"today"` | Today only |
| `"yesterday"` | Yesterday only |

### Absolute date ranges

| Expression | Example |
|-----------|---------|
| `"YYYY-MM-DD to YYYY-MM-DD"` | `"2024-01-01 to 2024-12-31"` |
| `"YYYY-MM-DD"` | `"2024-06-15"` (exact date) |
| `"before YYYY-MM-DD"` | `"before 2024-01-01"` |
| `"after YYYY-MM-DD"` | `"after 2024-01-01"` |

### Examples

```json
"filters": {
  "order_items.created_at": "last 90 days"
}
```

```json
"filters": {
  "order_items.created_at": "2024-01-01 to 2024-06-30"
}
```

```json
"filters": {
  "order_items.created_at": "this quarter"
}
```

## Numeric Expressions

| Expression | Meaning |
|-----------|---------|
| `">N"` | Greater than N |
| `">=N"` | Greater than or equal to N |
| `"<N"` | Less than N |
| `"<=N"` | Less than or equal to N |
| `"N"` | Exactly N |
| `"between N and M"` | Range inclusive (e.g., `"between 10 and 100"`) |
| `"not N"` | Not equal to N |

### Examples

```json
"filters": {
  "order_items.sale_price": ">100"
}
```

```json
"filters": {
  "order_items.sale_price": "between 50 and 200"
}
```

## String Expressions

| Expression | Meaning |
|-----------|---------|
| `"value"` | Exact match |
| `"value1,value2"` | Match any (OR) — comma-separated |
| `"not value"` | Exclude a value |
| `"contains X"` | Contains substring X |
| `"not contains X"` | Does not contain substring X |
| `"starts with X"` | Starts with X |
| `"ends with X"` | Ends with X |

### Examples

```json
"filters": {
  "order_items.status": "complete"
}
```

```json
"filters": {
  "order_items.status": "complete,pending"
}
```

```json
"filters": {
  "users.state": "not California"
}
```

```json
"filters": {
  "users.name": "contains Smith"
}
```

```json
"filters": {
  "products.category": "starts with A"
}
```

## Null Handling

| Expression | Meaning |
|-----------|---------|
| `"null"` | Is null / empty |
| `"not null"` | Is not null / not empty |

### Examples

```json
"filters": {
  "users.email": "not null"
}
```

## Combining Multiple Filters

Multiple filters in the same object are AND-combined:

```json
"filters": {
  "order_items.created_at": "last 90 days",
  "order_items.status": "complete",
  "order_items.sale_price": ">50",
  "users.state": "California,New York"
}
```

This means: created in last 90 days AND status is complete AND sale price > 50 AND state is California or New York.

## Complete Query Example with Filters

```json
{
  "query": {
    "modelId": "your-model-id",
    "table": "order_items",
    "fields": [
      "order_items.created_at[month]",
      "order_items.total_revenue",
      "order_items.count"
    ],
    "filters": {
      "order_items.created_at": "last 6 months",
      "order_items.status": "complete",
      "users.state": "not null"
    },
    "sorts": [
      { "column_name": "order_items.created_at[month]", "sort_descending": false }
    ],
    "limit": 100,
    "join_paths_from_topic_name": "order_items"
  },
  "resultType": "csv"
}
```
