*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Agent SDK Dev

Create Claude Agent SDK applications and invoke Python or TypeScript verification agents.

## Tags

- agent-sdk
- development

## Installation

```bash
npx forgecat install @forgecat/anthropics_claude-plugins-official_agent-sdk-dev
```

## Agents

- **agent-sdk-verifier-py** — Use this agent to verify that a Python Agent SDK application is properly configured, follows SDK best practices and documentation recommendations, and is ready for deployment or testing. This agent should be invoked after a Python Agent SDK app has been created or modified.
- **agent-sdk-verifier-ts** — Use this agent to verify that a TypeScript Agent SDK application is properly configured, follows SDK best practices and documentation recommendations, and is ready for deployment or testing. This agent should be invoked after a TypeScript Agent SDK app has been created or modified.

## Commands

- **new-sdk-app** — Create and setup a new Claude Agent SDK application

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/agent-sdk-dev |
| Version | `0.0.4` |
| Original commit | 3deb821cb71ccfaaf2ffa9935e977df314ce5cd5 |
| License | Apache-2.0 |
| Source platform | claude-code |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Unsupported |
| Hermes | Unsupported |

## Dependencies

- None required to install this profile. Individual skills may require tools or credentials documented in their own `SKILL.md` files.

## Platform invocation

Claude Code uses `/new-sdk-app`. Cursor receives the command as a rule and the two verifier agents. Codex receives an explicit `$new-sdk-app` skill with both native verifier agents; text supplied with the skill invocation replaces the source command's `$ARGUMENTS` convention. Codex verifier agents inherit the parent model instead of the source-only `sonnet` alias; original source agent files retain that hint. The Codex verifier sandbox is read-only. Full setup/delegation behavior still requires exact runtime verification. OpenClaw and Hermes have no delivered callable-agent surface for this profile.
