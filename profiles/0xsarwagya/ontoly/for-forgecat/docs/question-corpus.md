---
title: "Question Corpus"
description: "Deterministic semantic questions used to evaluate capability quality."
order: 28
---

# Question Corpus

The question corpus measures whether Ontoly understands software-engineering
questions, not whether it produces large graphs.

The corpus lives in `validation/questions/`.

Each question records:

- `id`
- `repository`
- `category`
- `question`
- `capability`
- `input`
- `expectedEvidence`
- `acceptance`

Questions are deterministic fixtures. They should not depend on AI output or
subjective scoring.

## Categories

The initial corpus covers:

- architecture
- request lifecycle
- impact analysis
- ownership
- dependency analysis
- configuration
- environment usage
- authentication
- authorization
- repository health
- implementation planning
- risk analysis

## Adding Questions

Add questions when a bug report reveals an understanding gap. Prefer questions
that can fail for a concrete reason, such as a missing edge, wrong node type,
unresolved configuration variable, or incomplete traversal.
