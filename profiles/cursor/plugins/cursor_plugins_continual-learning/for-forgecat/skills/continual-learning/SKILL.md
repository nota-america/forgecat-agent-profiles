---
name: continual-learning
description: Orchestrate continual learning by delegating transcript mining and AGENTS.md updates to `agents-memory-updater`.
disable-model-invocation: true
---

# Continual Learning

Keep `AGENTS.md` current by delegating the memory update flow to one subagent.

## Trigger

Use when the user asks to mine prior chats, maintain `AGENTS.md`, or run the continual-learning loop.

## Workflow

1. Call `agents-memory-updater`.
2. Return the updater result.

## Guardrails

- Keep the parent skill orchestration-only.
- Do not mine transcripts or edit files in the parent flow.
- Do not bypass the subagent.
