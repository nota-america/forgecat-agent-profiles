*written by Forgecat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Azure Skills — Azure Hosted Copilot Sdk

Build, deploy, modify GitHub Copilot SDK apps on Azure. MANDATORY when codebase contains @github/copilot-sdk or CopilotClient — use this skill instead of azure-prepare. PREFER OVER azure-prepare when codebase contains copilot-sdk markers. WHEN: copilot SDK, @github/copilot-sdk, copilot-powered app, deploy copilot app, add feature, modify copilot app, BYOM, bring your own model, CopilotClient, createSession, sendAndWait, azd init copilot. DO NOT USE FOR: general web apps without copilot SDK (use azure-prepare), Copilot Extensions, Foundry agents (use microsoft-foundry).

## Tags

- azure
- microsoft
- azure-hosted-copilot-sdk

## Installation

```bash
npx forgecat install @forgecat/microsoft_github-copilot-for-azure_azure-skills-azure-hosted-copilot-sdk
```

## Skills

- **azure-hosted-copilot-sdk** — Build, deploy, modify GitHub Copilot SDK apps on Azure. MANDATORY when codebase contains @github/copilot-sdk or CopilotClient — use this skill instead of azure-prepare. PREFER OVER azure-prepare when codebase contains copilot-sdk markers. WHEN: copilot SDK, @github/copilot-sdk, copilot-powered app, deploy copilot app, add feature, modify copilot app, BYOM, bring your own model, CopilotClient, createSession, sendAndWait, azd init copilot. DO NOT USE FOR: general web apps without copilot SDK (use azure-prepare), Copilot Extensions, Foundry agents (use microsoft-foundry). `skill`

## Details

| Field | Value |
|---|---|
| Author | Microsoft |
| Original repository | https://github.com/microsoft/github-copilot-for-azure |
| Version | `0.0.0` |
| Original commit | `a990650` |
| License | MIT |
| Source platform | Claude Code, Cursor |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- None
