![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# im-not-ai

Korean AI-text humanizer profile that preserves meaning while removing translationese, mechanical structure, overused AI idioms, passive phrasing, connective overuse, and rhythm uniformity.

## Tags

- korean
- humanize
- ai-detector
- translationese
- writing

## Installation

```bash
npx forgecat install @forgecat/im-not-ai
```

## Skills / Agents / Commands

- **humanize-korean** — Main Humanize KR orchestrator skill for Korean AI-tell detection and rewriting. `skill`
- **humanize** — Command-style entry skill for `/humanize` requests. `skill`
- **humanize-redo** — Command-style second-pass refinement skill. `skill`
- **humanize-monolith** — Single-call humanization agent for light/standard routes. `agent`
- **humanize-diagnostician** — Strict-mode diagnosis agent. `agent`
- **humanize-finalizer** — Strict/heavy final meaning-preservation and naturalness auditor. `agent`
- **korean-ai-tell-taxonomist** — Taxonomy maintenance specialist. `agent`

- **translationese-research-distiller**, **korean-translation-scholar**, **taxonomy-gap-analyzer**, **post-editese-metric-engineer**, **quick-rules-integrator** — Source-maintenance research/development agents; they require an upstream checkout for their development paths. `agent`

## Details

| Field | Value |
|---|---|
| Author | epoko77-ai |
| Original repository | https://github.com/epoko77-ai/im-not-ai |
| Version | `0.1.0` |
| Original commit | `53e24e8f92cf344efcb812103f7c2b203e7efffc` |
| License | MIT |
| Source platform | multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |

### Models

| Model | Role |
|---|---|
| opus | recommended |

## Dependencies

- Python 3 standard library for co-installed deterministic helper scripts and gates.
- Host LLM/agent runtime capable of invoking the bundled skills and agents.

## Conversion notes

- Claude Code, Cursor, and Codex use ForgeCat's standard conversion with the same full v2.3 runtime reference.
- Compatibility remains Partial until a published-registry fresh-install runtime scenario is recorded.
