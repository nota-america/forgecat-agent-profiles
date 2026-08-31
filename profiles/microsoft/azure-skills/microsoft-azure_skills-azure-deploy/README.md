![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Azure Skills — Azure Deploy

Execute Azure deployments for ALREADY-PREPARED applications that have existing .azure/deployment-plan.md and infrastructure files. DO NOT use this skill when the user asks to CREATE a new application — use azure-prepare instead. This skill runs azd up, azd deploy, terraform apply, and az deployment commands with built-in error recovery. Requires .azure/deployment-plan.md from azure-prepare and validated status from azure-validate. WHEN: "run azd up", "run azd deploy", "execute deployment", "push to production", "push to cloud", "go live", "ship it", "bicep deploy", "terraform apply", "publish to Azure", "launch on Azure". DO NOT USE WHEN: "create and deploy", "build and deploy", "create a new app", "set up infrastructure", "create and deploy to Azure using Terraform" — use azure-prepare for these.

## Tags

- azure
- microsoft
- azure-deploy

## Installation

```bash
npx forgecat install @forgecat/microsoft-azure_skills-azure-deploy
```

## Skills

- **azure-deploy** — Execute Azure deployments for ALREADY-PREPARED applications that have existing .azure/deployment-plan.md and infrastructure files. DO NOT use this skill when the user asks to CREATE a new application — use azure-prepare instead. This skill runs azd up, azd deploy, terraform apply, and az deployment commands with built-in error recovery. Requires .azure/deployment-plan.md from azure-prepare and validated status from azure-validate. WHEN: "run azd up", "run azd deploy", "execute deployment", "push to production", "push to cloud", "go live", "ship it", "bicep deploy", "terraform apply", "publish to Azure", "launch on Azure". DO NOT USE WHEN: "create and deploy", "build and deploy", "create a new app", "set up infrastructure", "create and deploy to Azure using Terraform" — use azure-prepare for these. `skill`

## Details

| Field | Value |
|---|---|
| Author | Microsoft |
| Original repository | https://github.com/microsoft/azure-skills |
| Version | `0.0.5` |
| Original commit | `a990650` |
| License | MIT |
| Source platform | Claude Code, Cursor |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Partial |
| Hermes | Partial |

## Dependencies

- None
