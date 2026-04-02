![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)


# Customer Support

A customer support co-pilot that handles ticket triage, response drafting, escalation packaging, customer research, and knowledge base authoring. Designed primarily for [Cowork](https://claude.com/product/cowork) with full support for Claude Code.

## Tags

- customer-support
- triage
- knowledge-base
- escalation

## Installation

```
npx forgecat install @hephai-nota/knowledge-work-plugins-customer-support
```

## Skills

| Skill | Description |
|---|---|
| `ticket-triage` | Triage and prioritize a support ticket or customer issue. Use when a new ticket comes in and needs categorization, assigning P1-P4 priority, deciding which team should handle it, or checking whether it's a duplicate or known issue before routing. `triage` |
| `customer-research` | Multi-source research on a customer question or topic with source attribution. Use when a customer asks something you need to look up, investigating whether a bug has been reported before, checking what was previously told to a specific account, or gathering background before drafting a response. `research` |
| `draft-response` | Draft a professional customer-facing response tailored to the situation and relationship. Use when answering a product question, responding to an escalation or outage, delivering bad news like a delay or won't-fix, declining a feature request, or replying to a billing issue. `drafting` |
| `customer-escalation` | Package an escalation for engineering, product, or leadership with full context. Use when a bug needs engineering attention beyond normal support, multiple customers report the same issue, a customer is threatening to churn, or an issue has sat unresolved past its SLA. `escalation` |
| `kb-article` | Draft a knowledge base article from a resolved issue or common question. Use when a ticket resolution is worth documenting for self-service, the same question keeps coming up, a workaround needs to be published, or a known issue should be communicated to customers. `knowledge-base` |

## MCPs

| Server | Transport | URL |
|---|---|---|
| Slack | `http` | https://mcp.slack.com/mcp |
| Intercom | `http` | https://mcp.intercom.com/mcp |
| HubSpot | `http` | https://mcp.hubspot.com/anthropic |
| Guru | `http` | https://mcp.api.getguru.com/mcp |
| Atlassian | `http` | https://mcp.atlassian.com/v1/mcp |
| Notion | `http` | https://mcp.notion.com/mcp |
| Microsoft 365 | `http` | https://microsoft365.mcp.claude.com/mcp |
| Google Calendar | `http` | https://gcal.mcp.claude.com/mcp |
| Gmail | `http` | https://gmail.mcp.claude.com/mcp |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/customer-support |
| Version | `0.0.1` |
| Original commit | d2ba7f6 |
| License | Apache-2.0 |
| Source platform | Claude Code plugin |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Codex | Partial |
| Cursor | Partial |

## Dependencies

None
