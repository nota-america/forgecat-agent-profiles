*written by ForgeCat*

# OpenAI Codex Plugin for Claude Code

Use Codex from Claude Code for code review, task delegation, session transfer, and background job management.

## Tags

- codex
- claude-code
- code-review
- delegation
- hooks

## Installation

```bash
npx forgecat install @forgecat/openai_codex-plugin-cc_codex
```

## Skills / Agents / Commands

- **codex-rescue** — Proactively use when Claude Code is stuck, wants a second implementation or diagnosis pass, needs a deeper root-cause investigation, or should hand a substantial coding task to Codex through the shared runtime `agent`
- **adversarial-review** — Run a Codex review that challenges the implementation approach and design choices `command`
- **cancel** — Cancel an active background Codex job in this repository `command`
- **rescue** — Delegate investigation, an explicit fix request, or follow-up rescue work to the Codex rescue subagent `command`
- **result** — Show the stored final output for a finished Codex job in this repository `command`
- **review** — Run a Codex code review against local git state `command`
- **setup** — Check whether the local Codex CLI is ready and optionally toggle the stop-time review gate `command`
- **status** — Show active and recent Codex jobs for this repository, including review-gate status `command`
- **transfer** — Transfer the current Claude Code session into a resumable Codex thread `command`
- **codex-cli-runtime** — Internal helper contract for calling the codex-companion runtime from Claude Code `skill`
- **codex-result-handling** — Internal guidance for presenting Codex helper output back to the user `skill`
- **gpt-5-4-prompting** — Internal guidance for composing Codex and GPT-5.4 prompts for coding, review, diagnosis, and research tasks inside the Codex Claude Code plugin `skill`

## Details

| Field | Value |
|---|---|
| Author | OpenAI |
| Original repository | https://github.com/openai/codex-plugin-cc/tree/main/plugins/codex |
| Version | `0.1.0` |
| Original commit | `80c31f99570876c3ef40327838b0a2ca1ae2cd9c` |
| License | Apache-2.0 |
| Source platform | Claude Code |

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
| `gpt-5.4` | recommended |

## Dependencies

- Node.js 18.18 or later
- Codex CLI available on `PATH`
- Codex authentication through ChatGPT or an OpenAI API key
