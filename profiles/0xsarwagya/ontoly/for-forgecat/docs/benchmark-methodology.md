---
title: "Benchmark Methodology"
description: "How Ontoly benchmarks semantic capabilities without measuring graph size alone."
order: 29
---

# Benchmark Methodology

Capability benchmarks measure deterministic software understanding.

They are separate from compiler performance benchmarks. A faster graph build is
useful, but release readiness also depends on whether capabilities answer real
engineering questions correctly.

## Metrics

Capability benchmarks record:

- capability name
- repository
- question category
- pass, partial, or fail status
- exact match
- precision
- recall
- false positives
- false negatives
- confidence
- latency
- diagnostics

## Regression Gates

A release should fail if:

- semantic accuracy regresses
- confidence drops without a graph-quality explanation
- latency exceeds thresholds
- a previously passing question fails
- diagnostics disappear unexpectedly

## Reporting

Reports should separate measured facts from inferred recommendations. The
recommended fix must name the graph concept that needs improvement, such as a
missing `HANDLES` edge, incomplete dependency traversal, or low-confidence
configuration evidence.
