*written by Forgecat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Azure Skills — Azure Resource Lookup

List, find, and show Azure resources across subscriptions or resource groups. Handles prompts like "list the websites in my subscription", "list my web apps", "show my app services", "list virtual machines", "list my VMs", "show storage accounts", "find container apps", and "what resources do I have". USE FOR: list websites, list web apps, list app services, show websites in subscription, resource inventory, find resources by tag, tag analysis, orphaned resource discovery (not for cost analysis), unattached disks, count resources by type, cross-subscription lookup, and Azure Resource Graph queries. DO NOT USE FOR: deploying/changing resources (use azure-deploy), cost optimization (use azure-cost), or non-Azure clouds.

## Tags

- azure
- microsoft
- azure-resource-lookup

## Installation

```bash
npx forgecat install @forgecat/azure-skills-azure-resource-lookup
```

## Skills

- **azure-resource-lookup** — List, find, and show Azure resources across subscriptions or resource groups. Handles prompts like "list the websites in my subscription", "list my web apps", "show my app services", "list virtual machines", "list my VMs", "show storage accounts", "find container apps", and "what resources do I have". USE FOR: list websites, list web apps, list app services, show websites in subscription, resource inventory, find resources by tag, tag analysis, orphaned resource discovery (not for cost analysis), unattached disks, count resources by type, cross-subscription lookup, and Azure Resource Graph queries. DO NOT USE FOR: deploying/changing resources (use azure-deploy), cost optimization (use azure-cost), or non-Azure clouds. `skill`

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
