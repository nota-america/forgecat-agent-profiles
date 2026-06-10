*written by Forgecat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Running Claude Code via LiteLLM Copilot

Use when routing Claude Code through a local LiteLLM proxy to GitHub Copilot, reducing direct Anthropic spend, configuring ANTHROPIC_BASE_URL or ANTHROPIC_MODEL overrides, or troubleshooting Copilot proxy setup failures such as model-not-found, no localhost traffic, or GitHub 401/403 auth errors.

## Tags

- skills
- claude-code
- litellm
- copilot

## Installation

```bash
npx forgecat install @forgecat/xixu-me_skills_running-claude-code-via-litellm-copilot
```

## Skills

| Skill | Description |
|---|---|
| `running-claude-code-via-litellm-copilot` | Use when routing Claude Code through a local LiteLLM proxy to GitHub Copilot, reducing direct Anthropic spend, configuring ANTHROPIC_BASE_URL or ANTHROPIC_MODEL overrides, or troubleshooting Copilot proxy setup failures such as model-not-found, no localhost traffic, or GitHub 401/403 auth errors. |

## Details

| Field | Value |
|---|---|
| Author | Xi Xu |
| Original repository | https://github.com/xixu-me/skills/tree/main/skills/running-claude-code-via-litellm-copilot |
| Version | `0.1.0` |
| Original commit | `fa39ac2eafbf727ea4dd3ae1c8af36fcb82f32e4` (2026-05-28) |
| License | MIT |
| Source platform | Agent Skills |

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
| Any model | recommended |

## Dependencies

- Runtime dependencies are skill-specific. See the bundled `SKILL.md`, `references/`, and `scripts/` files for each workflow.
