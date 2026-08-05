*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Azure Skills — Azure Validate

Pre-deployment validation for Azure readiness. Run deep checks on configuration, infrastructure (Bicep or Terraform), RBAC role assignments, managed identity permissions, and prerequisites before deploying. WHEN: validate my app, check deployment readiness, run preflight checks, verify configuration, check if ready to deploy, validate azure.yaml, validate Bicep, test before deploying, troubleshoot deployment errors, validate Azure Functions, validate function app, validate serverless deployment, verify RBAC roles, check role assignments, review managed identity permissions, what-if analysis, validate Container Apps deployment.

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags

- azure
- microsoft
- azure-validate

## Installation

```bash
npx forgecat install @forgecat/microsoft-azure_skills-azure-validate
```

## Skills

- **azure-validate** — Pre-deployment validation for Azure readiness. Run deep checks on configuration, infrastructure (Bicep or Terraform), RBAC role assignments, managed identity permissions, and prerequisites before deploying. WHEN: validate my app, check deployment readiness, run preflight checks, verify configuration, check if ready to deploy, validate azure.yaml, validate Bicep, test before deploying, troubleshoot deployment errors, validate Azure Functions, validate function app, validate serverless deployment, verify RBAC roles, check role assignments, review managed identity permissions, what-if analysis, validate Container Apps deployment. `skill`

## Details

| Field | Value |
|---|---|
| Author | Microsoft |
| Original repository | https://github.com/microsoft/azure-skills |
| Version | `0.0.4` |
| Original commit | `a990650` |
| License | [MIT](./LICENSE) |
| Source platform | Claude Code, Cursor |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |

## Dependencies

- None
