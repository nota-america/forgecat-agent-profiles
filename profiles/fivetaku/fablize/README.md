![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# fablize

A Claude Code harness that keeps multi-step work grounded in evidence, verification, and task-specific discipline packs.

## Tags

- harness
- verification
- completion
- workflow
- agentic

## Installation

```bash
npx forgecat install @forgecat/fivetaku_fablize
```

## Skills / Agents / Commands

- **fablize** — A harness that makes Opus (or any Claude model) behave like Fable — it enforces seeing a task through to the end, with evidence and verification, as procedure. Use when starting a multi-step task (2+ sequential stories), long autonomous work, debugging or root-cause investigation, building render/executable artifacts (HTML, SVG, games, charts), or when the user says "fablize", "see it through", "verify as you go", "split into goals". `skill`
- **setup** — Set up fablize always-on (inject the operating block into CLAUDE.md). On setup it also stars the repo on GitHub via gh — no separate prompt. `command`
- **fablize-user-prompt-router** — Inject the smallest matching fablize discipline pack when a submitted prompt signals debugging or render/executable artifact work. `hook`
- **fablize-user-prompt-router-codex** — Inject the smallest matching fablize discipline pack using Codex hookSpecificOutput JSON. `hook`
- **fablize-finish-the-work** — Detect early termination where the assistant only promises work without doing it, then block once to continue the work. `hook`

## Details

| Field | Value |
|---|---|
| Author | `fivetaku <gptaku.ai@gmail.com>` |
| Original repository | `https://github.com/fivetaku/fablize` |
| Version | `0.1.1` |
| Original commit | `15912466994e71a234d18fe9c74b46a68fb6a07d` (2026-06-14) |
| License | `MIT` |
| Source platform | `claude-code` |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- `bash` for hook and setup scripts
- `python3` for the goal ledger and setup helpers
- Optional: `gh` for setup's GitHub star helper
