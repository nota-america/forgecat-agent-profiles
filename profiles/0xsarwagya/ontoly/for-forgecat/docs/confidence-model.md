---
title: "Confidence Model"
description: "How Ontoly derives capability confidence from graph evidence."
order: 26
---

# Confidence Model

Ontoly confidence is deterministic. It is derived from graph evidence, not from
language-model judgment.

The confidence object contains:

- `score`: number from `0` to `1`.
- `level`: `none`, `low`, `medium`, or `high`.
- `explanation`: human-readable derivation.
- `factors`: evidence and diagnostic inputs that affected the score.

## Scoring

Capabilities compute confidence from:

- amount of direct graph evidence
- edge provenance kind
- relationship confidence
- diagnostics severity
- missing or ambiguous targets

Warnings reduce confidence. Errors reduce confidence more heavily. No evidence
produces `score: 0` and `level: "none"`.

## Relationship Evidence

Exact syntax and semantic edges carry the strongest confidence. Inferred or
low-confidence edges lower the score. This keeps answers honest when a graph
contains partial or plugin-derived facts.

## Consumer Rules

Consumers should:

- show confidence with the answer
- preserve diagnostics
- avoid presenting low-confidence answers as facts
- ask Ontoly for narrower graph evidence before inspecting source files
