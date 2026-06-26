---
name: tradingagents-framework
description: Work with the TradingAgents multi-agent LLM financial trading framework, including its CLI, package API, agent graph, dataflows, model providers, and research-use trading analysis workflow.
---

# TradingAgents Framework

Use this skill when a user asks to inspect, configure, run, extend, or troubleshoot TauricResearch TradingAgents.

## Bundled source

The upstream project source is preserved under `source/` in this skill. Key entry points:

- `source/README.md` — upstream installation, CLI, package usage, configuration, and citation guide.
- `source/pyproject.toml` and `source/requirements.txt` — Python package metadata and dependencies.
- `source/cli/main.py` — Typer CLI entrypoint for `tradingagents`.
- `source/main.py` — direct example runner.
- `source/tradingagents/graph/trading_graph.py` — LangGraph orchestration entrypoint.
- `source/tradingagents/default_config.py` — default runtime configuration.
- `source/tradingagents/agents/` — analyst, researcher, trader, risk-management, and manager agent implementations.
- `source/tradingagents/dataflows/` — market/news/fundamental/macro data providers.
- `source/tradingagents/llm_clients/` — LLM provider registry and client adapters.

## Usage notes

1. Read `source/README.md` first for upstream setup and financial-risk disclaimers.
2. Create an isolated Python environment before installing dependencies.
3. Configure API keys through environment variables or `.env` files as described in `source/.env.example`.
4. Treat outputs as research-only analysis; do not present them as financial, investment, or trading advice.
5. When changing code, run targeted tests from the upstream `tests/` directory in the original repository, because tests are intentionally not shipped in this ForgeCat runtime profile.
