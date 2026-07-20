---
title: "LLM Enhancement"
description: "Mandatory rules for using Ontoly from LLM-capable agents, MCP clients, and Agent Skills."
---

# LLM Enhancement

LLM Enhancement is mandatory every time Ontoly is used by an LLM.

Ontoly remains deterministic: the compiler, Software Graph, Semantic Index,
Query Engine, capabilities, MCP runtime, and Enhancers do not depend on LLM
output. LLM Enhancement is the required orchestration layer for LLM-capable
clients that consume Ontoly.

## Rule

Any LLM-facing Ontoly workflow must:

1. Declare or install `LLM Enhancement`.
2. Use Ontoly artifacts, CLI commands, Query Engine results, or MCP capabilities
   before repository search.
3. Cite graph evidence, including node ids, relationship types, source spans,
   capability name, graph hash, and confidence when available.
4. Separate graph facts from inference.
5. Mark fallback file inspection explicitly.
6. Never claim software understanding from the LLM alone.

## Agent Skills

Official Agent Skills declare:

```yaml
metadata:
  ontoly.enhancement: "LLM Enhancement"
```

`ontoly skills validate` fails when an official skill omits the enhancement,
uses another enhancement value, or fails the LLM Enhancement agent-evaluation
check.

## MCP Clients

LLM-capable MCP clients must use Ontoly MCP through an LLM Enhancement workflow.
The MCP runtime exposes deterministic graph capabilities; it does not provide
LLM reasoning, source parsing, or graph mutation.

Non-LLM tools may call the same MCP capabilities directly, but any LLM that
turns those results into user-facing answers must follow LLM Enhancement.

## Non-Goals

LLM Enhancement does not add:

- LLM calls
- vector search
- embeddings
- probabilistic graph construction
- repository understanding outside Ontoly evidence

It is a usage contract for LLM consumers, not a new reasoning engine.

## Related Docs

- [Agent Skills](agent-skills.md)
- [MCP](mcp.md)
- [Capabilities](capabilities.md)
- [Skills Best Practices](skills-best-practices.md)
- [Evidence Model](evidence-model.md)
- [Confidence Model](confidence-model.md)
