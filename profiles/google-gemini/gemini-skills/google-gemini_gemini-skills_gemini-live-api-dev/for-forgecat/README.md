*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Google Gemini Skills — Gemini Live Api Dev

Use this skill when building real-time, bidirectional streaming applications with the Gemini Live API. Covers WebSocket-based audio/video/text streaming, voice activity detection (VAD), native audio features, function calling, session management, ephemeral tokens for client-side auth, and all Live API configuration options. SDKs covered - google-genai (Python), @google/genai (JavaScript/TypeScript).

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags

- google-gemini
- skills
- gemini-live-api-dev

## Installation

```bash
npx forgecat install @forgecat/google-gemini_gemini-skills_gemini-live-api-dev
```

## Skills

- **gemini-live-api-dev** — Use this skill when building real-time, bidirectional streaming applications with the Gemini Live API. Covers WebSocket-based audio/video/text streaming, voice activity detection (VAD), native audio features, function calling, session management, ephemeral tokens for client-side auth, and all Live API configuration options. SDKs covered - google-genai (Python), @google/genai (JavaScript/TypeScript). `skill`

## Details

| Field | Value |
|---|---|
| Author | Google Gemini |
| Original repository | https://github.com/google-gemini/gemini-skills |
| Version | `0.0.4` |
| Original commit | `f9138ae` |
| License | [Apache-2.0](./LICENSE) |
| Source platform | Claude Code, Gemini CLI, Cursor |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |

## Dependencies

- None
