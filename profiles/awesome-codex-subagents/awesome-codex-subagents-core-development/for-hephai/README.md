*written by Hephai*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# 01. Core Development

Core agents for application architecture, cross-layer implementation, UI work, and protocol-specific development.

## Tags
- Engineer Team

## Installation
```bash
npx forgecat install @hephai-nota/awesome-codex-subagents-core-development
```

## Agents
- **api-designer** — Use when a task needs API contract design, evolution planning, or compatibility review before implementation starts. `gpt-5.4` `Core Development`
- **backend-developer** — Use when a task needs scoped backend implementation or backend bug fixes after the owning path is known. `gpt-5.4` `Core Development`
- **code-mapper** — Use when the parent agent needs a high-confidence map of code paths, ownership boundaries, and execution flow before changes are made. `gpt-5.3-codex-spark` `Core Development`
- **electron-pro** — Use when a task needs Electron-specific implementation or debugging across main/renderer/preload boundaries, packaging, and desktop runtime behavior. `gpt-5.4` `Core Development`
- **frontend-developer** — Use when a task needs scoped frontend implementation or UI bug fixes with production-level behavior and quality. `gpt-5.4` `Core Development`
- **fullstack-developer** — Use when one bounded feature or bug spans frontend and backend and a single worker should own the entire path. `gpt-5.4` `Core Development`
- **graphql-architect** — Use when a task needs GraphQL schema evolution, resolver architecture, federation design, or distributed graph performance/security review. `gpt-5.4` `Core Development`
- **microservices-architect** — Use when a task needs service-boundary design, inter-service contract review, or distributed-system architecture decisions. `gpt-5.4` `Core Development`
- **mobile-developer** — Use when a task needs mobile implementation or debugging across app lifecycle, API integration, and device/platform-specific UX constraints. `gpt-5.4` `Core Development`
- **ui-designer** — Use when a task needs concrete UI decisions, interaction design, and implementation-ready design guidance before or during development. `gpt-5.4` `Core Development`
- **ui-fixer** — Use when a UI issue is already reproduced and the parent agent wants the smallest safe patch. `gpt-5.3-codex-spark` `Core Development`
- **websocket-engineer** — Use when a task needs real-time transport and state work across WebSocket lifecycle, message contracts, and reconnect/failure behavior. `gpt-5.4` `Core Development`

## Details
| Field | Value |
|---|---|
| Author | `VoltAgent + community contributors` |
| Original repository | `https://github.com/VoltAgent/awesome-codex-subagents` |
| Version | `0.0.5` |
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
