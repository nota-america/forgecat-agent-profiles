*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Contains Studio Project Management Agents

Claude Code sub-agents for experiments, shipping coordination, and studio production workflows.

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags

- agents
- claude-code
- project-management
- launch
- experiments

## Installation

```bash
npx forgecat install @forgecat/contains-studio_agents_project-management
```

## Agents
| Agent | Description |
|---|---|
| `experiment-tracker` | Data-driven feature validation |
| `project-shipper` | Launch products that don't crash |
| `studio-producer` | Keep teams shipping, not meeting |
## Details

| Field | Value |
|---|---|
| Author | Contains Studio |
| Original repository | https://github.com/contains-studio/agents/tree/main/project-management |
| Version | `0.1.2` |
| Original commit | `a5a480c324cac64b9c569bca0b2f297d517240cb` |
| License | Unknown |
| Source platform | Claude Code agents |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |

## Dependencies

- None
