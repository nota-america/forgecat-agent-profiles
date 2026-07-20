---
title: "Evidence Model"
description: "How capabilities cite graph evidence for deterministic answers."
order: 25
---

# Evidence Model

Capability answers must cite graph evidence.

Evidence items describe why a result exists and which graph nodes, edges, paths,
diagnostics, or statistics support it.

## Evidence Kinds

- `node`: direct node matches.
- `edge`: direct relationship evidence.
- `path`: traversal evidence across multiple relationships.
- `statistic`: graph or capability metrics.
- `diagnostic`: warnings or validation facts.

## Node Evidence

Node evidence includes serialized graph nodes with stable ids, names, node types,
source files, spans when available, packages, and metadata.

## Path Evidence

Path evidence includes the participating nodes and edges. Relationship evidence
keeps provenance from the Software Graph whenever the graph provided it.

## Provenance

Capabilities include graph provenance:

- repository name
- repository root
- graph hash
- graph version
- node count
- edge count

An agent or plugin should cite this provenance when presenting answers to users.

## Evidence Packs

An Evidence Pack is the compact, reusable evidence payload for LLM Enhancement,
MCP clients, CLI workflows, Skills, and the Workbench.

Evidence Packs are produced by:

- `ontoly evidence <query>`
- MCP capability `EvidencePack`
- enhancer `evidence-pack`

They are not produced by a separate router package. Evidence routing is modeled
as a deterministic enhancer/capability over existing Ontoly artifacts.

Canonical fields:

- `version`
- `query`
- `answer`
- `graphFacts`
- `topNodes`
- `topEdges`
- `relevantFiles`
- `relationships`
- `diagnostics`
- `confidence`
- `suggestedCommands`
- `stableIds`
- `filesToInspect`
- `fallbacks`
- `provenance`

Evidence Packs should stay small. The default CLI limit is 12 entities, and the
capability clamps requested limits to the 5-20 range. Agents should inspect
repository files only when the pack reports low confidence, missing evidence, or
an explicit fallback.

## Fallbacks

When graph evidence is missing, a capability returns diagnostics such as
`CAPABILITY_NOT_FOUND` or `CAPABILITY_LOW_EVIDENCE`. It should not silently search
files or invent confidence.
