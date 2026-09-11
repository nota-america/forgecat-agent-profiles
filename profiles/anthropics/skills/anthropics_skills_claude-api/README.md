*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Anthropic Skills — Claude API

Build, debug, and optimize Claude API and Anthropic SDK applications.

## Tags

- anthropic
- skills
- claude-api

## Installation

```bash
npx forgecat install @forgecat/anthropics_skills_claude-api
```

## Skills

- **claude-api** — Build, debug, and optimize Claude API / Anthropic SDK apps. Apps built with this skill should include prompt caching. Also handles migrating existing Claude API code between Claude model versions (4.5 → 4.6, 4.6 → 4.7, retired-model replacements). TRIGGER when: code imports `anthropic`/`@anthropic-ai/sdk`; user asks for the Claude API, Anthropic SDK, or Managed Agents; user adds/modifies/tunes a Claude feature (caching, thinking, compaction, tool use, batch, files, citations, memory) or model (Opus/Sonnet/Haiku) in a file; questions about prompt caching / cache hit rate in an Anthropic SDK project. SKIP: file imports `openai`/other-provider SDK, filename like `*-openai.py`/`*-generic.py`, provider-neutral code, general programming/ML.

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/skills |
| Version | `0.0.6` |
| Original commit | 5128e1865d670f5d6c9cef000e6dfc4e951fb5b9 |
| License | Apache-2.0 |
| Source platform | claude-code |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Tested |
| Hermes | Tested |

## Dependencies

- None required to install this profile. Individual skills may require tools or credentials documented in their own `SKILL.md` files.
