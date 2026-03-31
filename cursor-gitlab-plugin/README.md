![Hephai](https://raw.githubusercontent.com/nota-america/agent-hub/main/assets/hephai_banner.png)

# GitLab Plugin for Cursor

Connect Cursor to GitLab with the GitLab MCP server. Plan, track, and manage issues, merge requests, and pipelines from your editor.

## Tags

- devops
- gitlab
- mcp
- ci-cd
- project-management
- issue-tracking
- merge-requests

## Installation

```bash
npx hephai install cursor-gitlab-plugin
```

## Agents

- **gitlab-assistant** — GitLab Assistant — AI agent with product management capabilities that uses the GitLab MCP server for Agile planning, prioritization, delivery tracking, and stakeholder communication. Refers to Duo Agent Platform agents and flows for specialized tasks. `product-management` `planning` `devops`

## Skills

- **gitlab-ci-author** — Write, debug, and optimize GitLab CI/CD pipeline configuration files. `ci-cd` `devops` `yaml`

## Commands

- **backlog-health** — Analyze the backlog for staleness, missing labels, and unassigned work.
- **create-issue** — Create a GitLab issue with labels and milestone using the MCP server.
- **create-merge-request** — Create a GitLab merge request from the current branch using the MCP server.
- **pipeline-status** — Check CI/CD pipeline health and drill into failed jobs.
- **plan-sprint** — Analyze open issues and suggest sprint scope and priorities.
- **review-merge-request** — Review a GitLab merge request — summarize changes, check pipelines, and flag concerns.

## MCPs

| Server | Transport | URL |
|---|---|---|
| GitLab | HTTP | https://gitlab.com/api/v4/mcp (or self-managed instance) |

## Details

| Field | Value |
|---|---|
| Author | GitLab |
| Original repository | https://github.com/nickveenhof/cursor-gitlab-plugin |
| Version | `0.0.0` |
| Original commit | HEAD |
| License | MIT |
| Source platform | Cursor |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Cursor | Tested |
| Claude Code | Partial |
| Codex | Partial |

### Models

No specific model requirements.

## Dependencies

None
