*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Notion Spec To Implementation

Turn Notion specs into implementation plans, tasks, and progress tracking; use when implementing PRDs/feature specs and creating Notion plans + tasks from them.

## Tags

- skills
- notion-spec-to-implementation

## Installation

```bash
npx forgecat install @forgecat/openai_skills_notion-spec-to-implementation
```

## Skills

- **notion-spec-to-implementation** — Turn Notion specs into implementation plans, tasks, and progress tracking; use when implementing PRDs/feature specs and creating Notion plans + tasks from them.

## MCPs

| Server | Transport | URL |
|---|---|---|
| `notion` | `http` | https://mcp.notion.com/mcp |

## Details

| Field | Value |
|---|---|
| Author | OpenAI |
| Original repository | https://github.com/openai/skills |
| Version | `0.0.11` |
| Original commit | 49f948faa9258a0c61caceaf225e179651397431 |
| License | MIT |
| Source platform | codex |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Partial |
| Hermes | Partial |

### Models

| Model | Role |
|---|---|
| `gpt-5.4` | recommended |
| `gpt-4o` | minimum |

## Dependencies

- None required to install this profile. Individual skills may require tools or credentials documented in their own `SKILL.md` files.

## Notion connection and verification

The Notion MCP endpoint requires OAuth authorization before it can read or write pages. The original skill's Codex setup instructions are preserved. Authentication-boundary checks do not connect a Notion workspace or verify document operations.

Claude Code, Cursor and Codex receive the skill and MCP configuration through standard ForgeCat installation. OpenClaw and Hermes currently receive the skill; this profile does not deliver their MCP connection or onboarding, so they remain Partial. This describes the current profile adapter, not a limitation of the platforms themselves.

Release verification covers installed skill loading, MCP discovery and the authentication boundary, plus cleanup. Actual Notion document operations require separate authenticated verification.
