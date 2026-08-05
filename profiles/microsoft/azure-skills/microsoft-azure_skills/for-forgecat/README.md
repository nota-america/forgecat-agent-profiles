*written by ForgeCat*

# Azure Skills Plugin

This profile packages the upstream `microsoft/azure-skills` plugin into one ForgeCat profile now that hooks are supported.

## Conversion and modifications

This profile packages the referenced upstream source in the forgecat profile
structure. The conversion adds `profile.yml`, forgecat installation metadata,
and platform packaging; profile-specific adapters or content changes are noted
elsewhere in this README when present.

## Details

| Field | Value |
|---|---|
| Original repository | https://github.com/microsoft/azure-skills |
| Version | `0.0.4` |
| License | [MIT](./LICENSE) |
| Source platform | multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Partial |
## Included
- 33 Azure and Microsoft Foundry skills from `skills/`
- Azure MCP server configuration from `.mcp.json`
- Post-tool telemetry hook from `hooks/scripts/track-telemetry.sh`
- License and security reference files

## Runtime Notes
- The MCP server runs with `npx -y @azure/mcp@latest server start`.
- Set `AZURE_MCP_COLLECT_TELEMETRY=false` to opt out of telemetry hook collection.
- Codex hook activation still requires user trust through `/hooks` after install.
