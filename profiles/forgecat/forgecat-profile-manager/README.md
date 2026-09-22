*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# ForgeCat Profile Manager

A ForgeCat profile that teaches an agent to browse, install, manage, author, and publish profiles.

## Tags

- forgecat
- profile-management
- registry
- authoring
- publishing

## Installation

```bash
npx forgecat install @forgecat/forgecat-profile-manager
```

## Skills

- **forgecat-authoring** — Write or fix a profile.yml — pick the right resource kind for each file, bind operating references, and verify the install layout before publishing. Use when creating a ForgeCat profile, adding a skill/agent/rule/hook to one, or when `forgecat validate` or `plan` reports something unexpected.
- **forgecat-install** — Find, evaluate and install a ForgeCat profile. Use when the user wants to browse the registry, compare profiles, install one into a project or a home-target agent, or when an install is refused.
- **forgecat-manage** — Inspect, update, replace and remove installed ForgeCat profiles. Use when the user asks what's installed, sees modified files, wants to upgrade or roll back a profile, run two profiles side by side, or configure MCP env vars.
- **forgecat-publish** — Publish a profile to the registry, manage its versions, visibility and tags, and recover its source. Use when the user is ready to push, wants to unpublish or re-scope a profile, or lost the local source of one they own.

## Details

| Field | Value |
|---|---|
| Author | ForgeCat |
| Original repository | Local Git source; no remote repository |
| Version | `0.1.2` |
| Original commit | 4919d44e4242d7b98cdea2ec77512b1fee6aa2e9 |
| License | MIT |
| Source platform | claude-code |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Tested |
| Hermes | Tested |

## Dependencies

- None required to install this profile. Individual skills may require tools or credentials documented in their own `SKILL.md` files.
