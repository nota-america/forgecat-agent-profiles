![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Azure Skills Plugin

Microsoft Azure skills, Azure MCP configuration, and telemetry hook support packaged as one ForgeCat profile.

## Tags
- Azure
- Cloud
- Infrastructure
- Deployment
- Microsoft Foundry
- MCP

## Installation
```bash
npx forgecat install @forgecat/microsoft-azure_skills
```

## Skills
- **33 Azure skills** covering prepare, validate, deploy, diagnostics, cost, quotas, RBAC, Kubernetes, AI services, storage, messaging, Kusto, Entra, and Microsoft Foundry workflows.
- Includes nested Microsoft Foundry model deployment and fine-tuning skills.

## Details
| Field | Value |
|---|---|
| Author | `Microsoft` |
| Original repository | `https://github.com/microsoft/azure-skills` |
| Version | `0.0.4` |
| Original commit | `7cb89c2` (2026-05-28) |
| License | `MIT` |
| Source platform | `multi-host` |

## Compatibility
### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Partial |

### Models
| Model | Role |
|---|---|
| None specified | recommended |
| None specified | minimum |

## Dependencies
- Requires Node.js 18+ and `npx` for `@azure/mcp@latest`.
- Azure workflows expect Azure CLI authentication with `az login`.
- Deployment workflows may require Azure Developer CLI authentication with `azd auth login`.
