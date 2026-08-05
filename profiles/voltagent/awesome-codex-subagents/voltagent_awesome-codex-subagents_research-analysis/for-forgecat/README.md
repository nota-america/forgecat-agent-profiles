*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# 10. Research & Analysis

Read-heavy research agents for searching, validating, comparing, and synthesizing information.

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags
- Research & Analysis

## Installation
```bash
npx forgecat install @forgecat/voltagent_awesome-codex-subagents_research-analysis
```

## Agents
- **competitive-analyst** — Use when a task needs a grounded comparison of tools, products, libraries, or implementation options. `gpt-5.3-codex-spark` `Research & Analysis`
- **data-researcher** — Use when a task needs source gathering and synthesis around datasets, metrics, data pipelines, or evidence-backed quantitative questions. `gpt-5.3-codex-spark` `Research & Analysis`
- **docs-researcher** — Use when a task needs documentation-backed verification of APIs, version-specific behavior, or framework options. `gpt-5.3-codex-spark` `Research & Analysis`
- **market-researcher** — Use when a task needs market landscape, positioning, or demand-side research tied to a technical product or category. `gpt-5.3-codex-spark` `Research & Analysis`
- **research-analyst** — Use when a task needs a structured investigation of a technical topic, implementation approach, or design question. `gpt-5.4` `Research & Analysis`
- **search-specialist** — Use when a task needs fast, high-signal searching of the codebase or external sources before deeper analysis begins. `gpt-5.3-codex-spark` `Research & Analysis`
- **trend-analyst** — Use when a task needs trend synthesis across technology shifts, adoption patterns, or emerging implementation directions. `gpt-5.3-codex-spark` `Research & Analysis`

## Details
| Field | Value |
|---|---|
| Author | `VoltAgent + community contributors` |
| Original repository | `https://github.com/VoltAgent/awesome-codex-subagents` |
| Version | `0.0.10` |
| Original commit | `5b7a405` (2026-03-19) |
| License | [MIT](./LICENSE) |
| Source platform | `codex` |

## Compatibility
### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |

### Models
| Model | Role |
|---|---|
| `gpt-5.4` | recommended |
| `gpt-5.3-codex-spark` | minimum |

## Dependencies
- None
