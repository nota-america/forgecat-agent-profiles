![Hephai](https://raw.githubusercontent.com/nota-america/agent-hub/main/assets/hephai_banner.png)

# Nota Jira

Jira 티켓 생성 및 스토리 분해 도구.

## Tags
- Issue Tracking
- Project Planning
- Atlassian

## Installation
```bash
npx hephai install @hephai-nota/nota-jira
```

## Skills
- **create-jira-ticket** — Jira 티켓(스토리/작업) 생성. 티켓 만들어줘, Jira 이슈 생성 요청에 사용. `ticketing`
- **create-tasks-from-story** — Jira 스토리 티켓을 분석하여 하위 작업(Task) 티켓 자동 생성. 스토리에서 태스크 만들어줘 요청에 사용. `task-breakdown`

## MCPs
- **atlassian** — `npx -y @anthropic/mcp-atlassian` `stdio`

## Details
| Field | Value |
|---|---|
| Author | `Only-bottle` |
| Original repository | `-` |
| Version | `0.0.2` |
| Original commit | `local-plugin-source` |
| License | `MIT` |
| Source platform | `claude-code` |

## Compatibility
### Platforms
| Platform | Status |
|---|---|
| Claude Code | Tested |

### Models
| Model | Role |
|---|---|
| `claude-4-sonnet` | recommended |
| `claude-3.5-sonnet` | minimum |

## Dependencies
- `JIRA_EMAIL`
- `JIRA_API_TOKEN`
