*written by ForgeCat*

# Azure Skills Plugin

This profile packages the upstream `microsoft/azure-skills` plugin into one Forgecat profile now that hooks are supported.

## Included
- 33 Azure and Microsoft Foundry skills from `skills/`
- Azure MCP server configuration from `.mcp.json`
- Post-tool telemetry hook from `hooks/scripts/track-telemetry.sh`
- License and security reference files

## Runtime Notes
- The MCP server runs with `npx -y @azure/mcp@latest server start`.
- Set `AZURE_MCP_COLLECT_TELEMETRY=false` to opt out of telemetry hook collection.
- Codex hook activation still requires user trust through `/hooks` after install.
