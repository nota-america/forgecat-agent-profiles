![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# TradingAgents

TradingAgents is a multi-agent LLM financial trading framework profile bundling the upstream Python framework source for agent-assisted inspection, configuration, and extension.

## Tags

- trading
- finance
- multi-agent
- langgraph
- python

## Installation

```bash
npx forgecat install @forgecat/tradingagents
```

## Skills / Agents / Commands

- **tradingagents-framework** — Work with the TradingAgents multi-agent LLM financial trading framework, including its CLI, package API, agent graph, dataflows, model providers, and research-use trading analysis workflow. `skill`

## Details

| Field | Value |
|---|---|
| Author | TauricResearch |
| Original repository | https://github.com/TauricResearch/TradingAgents |
| Version | `pending-registry-publish` |
| Original commit | `85946c2f60768ab2dae23a5a36cd927662feef94` |
| License | Apache-2.0 |
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
| `gpt-5.5` | recommended |
| `claude-4.6` | recommended |
| `gemini-3.1` | recommended |

## Dependencies

- Python >=3.10
- Runtime Python dependencies listed in `for-forgecat/skills/tradingagents-framework/source/pyproject.toml` and `for-forgecat/skills/tradingagents-framework/source/requirements.txt`
- Optional market-data/LLM provider API keys configured via environment variables
