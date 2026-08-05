*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Azure Skills — Azure Rbac

Helps users find the right Azure RBAC role for an identity with least privilege access, then generate CLI commands and Bicep code to assign it. Also provides guidance on permissions required to grant roles. WHEN: bicep for role assignment, what role should I assign, least privilege role, RBAC role for, role to read blobs, role for managed identity, custom role definition, assign role to identity, what role do I need to grant access, permissions to assign roles.

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Tags

- azure
- microsoft
- azure-rbac

## Installation

```bash
npx forgecat install @forgecat/microsoft-azure_skills-azure-rbac
```

## Skills

- **azure-rbac** — Helps users find the right Azure RBAC role for an identity with least privilege access, then generate CLI commands and Bicep code to assign it. Also provides guidance on permissions required to grant roles. WHEN: bicep for role assignment, what role should I assign, least privilege role, RBAC role for, role to read blobs, role for managed identity, custom role definition, assign role to identity, what role do I need to grant access, permissions to assign roles. `skill`

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
