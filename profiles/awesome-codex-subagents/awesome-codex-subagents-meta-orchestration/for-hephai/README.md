*written by Hephai*

![Hephai](https://raw.githubusercontent.com/nota-america/agent-hub/main/assets/hephai_banner.png)

# 09. Meta & Orchestration

Agents that help plan or coordinate multi-agent Codex workflows without inventing unsupported mechanics.

## Tags
- Meta & Orchestration

## Installation
```bash
npx forgecat install @hephai-nota/awesome-codex-subagents-meta-orchestration
```

## Agents
- **agent-installer** — Use when a task needs help selecting, copying, or organizing custom agent files from this repository into Codex agent directories. `gpt-5.3-codex-spark` `Meta & Orchestration`
- **agent-organizer** — Use when the parent agent needs help choosing subagents and dividing a larger task into clean delegated threads. `gpt-5.4` `Meta & Orchestration`
- **context-manager** — Use when a task needs a compact project context summary that other subagents can rely on before deeper work begins. `gpt-5.3-codex-spark` `Meta & Orchestration`
- **error-coordinator** — Use when multiple errors or symptoms need to be grouped, prioritized, and assigned to the right debugging or review agents. `gpt-5.4` `Meta & Orchestration`
- **it-ops-orchestrator** — Use when a task needs coordinated operational planning across infrastructure, incident response, identity, endpoint, and admin workflows. `gpt-5.4` `Meta & Orchestration`
- **knowledge-synthesizer** — Use when multiple agents have returned findings and the parent agent needs a distilled, non-redundant synthesis. `gpt-5.3-codex-spark` `Meta & Orchestration`
- **multi-agent-coordinator** — Use when a task needs a concrete multi-agent plan with clear role separation, dependencies, and result integration. `gpt-5.4` `Meta & Orchestration`
- **performance-monitor** — Use when a task needs ongoing performance-signal interpretation across build, runtime, or operational metrics before deeper optimization starts. `gpt-5.3-codex-spark` `Meta & Orchestration`
- **task-distributor** — Use when a broad task needs to be broken into concrete sub-tasks with clear boundaries for multiple agents or contributors. `gpt-5.4` `Meta & Orchestration`
- **workflow-orchestrator** — Use when the parent agent needs an explicit Codex subagent workflow for a complex task with multiple stages. `gpt-5.4` `Meta & Orchestration`

## Details
| Field | Value |
|---|---|
| Author | `VoltAgent + community contributors` |
| Original repository | `https://github.com/VoltAgent/awesome-codex-subagents` |
| Version | `0.0.3` |
| Original commit | `5b7a405` (2026-03-19) |
| License | `MIT` |
| Source platform | `codex` |

## Compatibility
### Platforms
| Platform | Status |
|---|---|
| Codex | Tested |
| Claude Code | Partial |
| Cursor | Partial |

### Models
| Model | Role |
|---|---|
| `gpt-5.4` | recommended |
| `gpt-5.3-codex-spark` | minimum |

## Dependencies
- None
