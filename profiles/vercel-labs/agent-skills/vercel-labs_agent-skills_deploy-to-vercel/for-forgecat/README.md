*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Deploy to Vercel

Deploy applications and websites to Vercel. Use when the user requests deployment actions like "deploy my app", "deploy and give me the link", "push this live", or "create a preview deployment".

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags

- vercel
- deployment
- agent-skill

## Installation

```bash
npx forgecat install @forgecat/vercel-labs_agent-skills_deploy-to-vercel
```

## Skills

- **deploy-to-vercel** — Deploy applications and websites to Vercel. Use when the user requests deployment actions like "deploy my app", "deploy and give me the link", "push this live", or "create a preview deployment".

## Details

| Field | Value |
|---|---|
| Author | vercel |
| Original repository | https://github.com/vercel-labs/agent-skills |
| Version | `0.0.8` |
| Original commit | `47863b2` |
| License | MIT |
| Source platform | Claude Code skills (Agent Skills format) |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Tested |

## Dependencies

- None
