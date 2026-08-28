*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# GPT Image Skill

Generate or edit workspace images through a native image tool or a ChatGPT-authenticated Codex CLI bridge.

## Tags

- Image generation
- Image editing
- ChatGPT subscription
- Codex CLI

## Installation

```bash
npx forgecat install @forgecat/genexis-ai_gpt-image-skill
```

## Skills

- **gpt-image** — Generate or edit raster images through the user's ChatGPT subscription and save or preview workspace PNGs. Use for text-to-image, local-reference generation, edits, follow-up revisions, variants, multi-image batches, or subscription-backed setup in Codex, Claude Code, and compatible local agents. Preserve direct prompts verbatim; develop distinct per-output prompts when the user delegates multiple concepts. Attach actual reference files. Prefer host-native image_gen; otherwise use Codex CLI with ChatGPT sign-in. Never use the Images API, OPENAI_API_KEY, or API-key login.

## Details

| Field | Value |
|---|---|
| Author | GENEXIS-AI |
| Original repository | https://github.com/GENEXIS-AI/gpt-image-skill |
| Version | `0.1.2` |
| Original commit | 9da68649d1e0eb8d618a6960cbdee88af11313ec |
| License | Unknown |
| Source platform | multi-host |

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

- Native route: a host-provided `image_gen` tool.
- Fallback route: Node.js 22 or newer, Codex CLI, and Sign in with ChatGPT in the same OS environment.
