![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# JuliusBrussee Caveman

Ultra-compressed communication mode for coding agents, with caveman response style, commit/review helpers, memory-file compression, Cavecrew subagents, and Claude/Codex activation hooks.

## Tags

- productivity
- communication
- brevity
- token-efficiency

## Installation

```bash
npx forgecat install @forgecat/juliusbrussee_caveman
```

## Skills / Agents / Commands

- **caveman** — Ultra-compressed communication mode with lite, full, ultra, and wenyan intensity levels. `skill`
- **caveman-commit** — Terse Conventional Commit message generation. `skill`
- **caveman-review** — One-line actionable code review comments. `skill`
- **caveman-compress** — Compress natural-language memory files while preserving code, URLs, paths, and structure. `skill`
- **caveman-help** — Quick reference for caveman modes, skills, and commands. `skill`
- **caveman-stats** — Claude Code token usage and savings display backed by the stats hook. `skill`
- **cavecrew** — Delegation guide for caveman-compressed subagent output. `skill`
- **cavecrew-builder** — Bounded 1-2 file edit subagent. `agent`
- **cavecrew-investigator** — Read-only file and symbol locator subagent. `agent`
- **cavecrew-reviewer** — Diff/file review subagent. `agent`
- **caveman** — Switch caveman intensity mode. `command`
- **caveman-commit** — Generate a caveman-style commit message. `command`
- **caveman-review** — Generate one-line review comments. `command`
- **caveman-init** — Write always-on caveman rule files into a target repo. `command`

## Details

| Field | Value |
|---|---|
| Author | Julius Brussee |
| Original repository | https://github.com/JuliusBrussee/caveman |
| Version | `0.1.7` |
| Original commit | `655b7d9c5431f822264b7732e9901c5578ac84cf` |
| License | MIT |
| Source platform | Multi-platform: Claude Code plugin, Codex plugin/config, Gemini extension, opencode plugin, and skills installer |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Partial |
| OpenClaw | Tested |
| Hermes | Tested |

### Models

| Model | Role |
|---|---|
| `haiku` | recommended |

## Dependencies

- Node.js >=18 for hook scripts and `caveman-init`.
- Python 3.10+ for `caveman-compress`.
- Claude Code session logs are required for full `/caveman-stats` behavior.
