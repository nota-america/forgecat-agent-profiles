*written by Hephai*

# Customer Support

A customer support co-pilot that handles ticket triage, response drafting, escalation packaging, customer research, and knowledge base authoring. Designed primarily for [Cowork](https://claude.com/product/cowork) with full support for Claude Code.

## Tags

- customer-support
- triage
- knowledge-base
- escalation

## Installation

```
npx hephai install customer-support
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
| Cursor | Partial |
| Codex | Partial |

## Dependencies

None

---
*Original README.md from source:*

# Customer Support Plugin

A customer support plugin primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. Provides ticket triage, escalation management, response drafting, customer research, and knowledge base authoring for support teams.

## Installation

```
claude plugins add knowledge-work-plugins/customer-support
```

## What It Does

This plugin turns Claude into a customer support co-pilot. It helps you:

- **Triage incoming tickets** with structured categorization, priority assessment, and routing recommendations
- **Research customer questions** by synthesizing information from multiple sources with confidence scoring
- **Draft professional responses** tailored to the situation, urgency, and communication channel
- **Package escalations** with full context, reproduction steps, and business impact for engineering or product
- **Write KB articles** from resolved issues to reduce future ticket volume

## Commands

| Command | Description |
|---|---|
| `/triage` | Categorize, prioritize, and route a support ticket or customer issue |
| `/research` | Multi-source research on a customer question or topic |
| `/draft-response` | Draft a customer-facing response for any situation |
| `/escalate` | Package an escalation for engineering, product, or leadership |
| `/kb-article` | Draft a knowledge base article from a resolved issue |

## Skills

| Skill | Description |
|---|---|
| `ticket-triage` | Category taxonomy, priority framework (P1-P4), routing rules, duplicate detection |
| `customer-research` | Multi-source research methodology, source prioritization, answer synthesis |
| `response-drafting` | Communication best practices, tone guidelines, templates for common scenarios |
| `escalation` | Escalation tiers, structured escalation format, impact assessment, follow-up cadence |
| `knowledge-management` | Article structure standards, writing for searchability, review cadence, maintenance |

## Data Sources

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](CONNECTORS.md).

Connect your support platform, knowledge base, and communication tools for the best experience. Without them, provide customer context manually.

**Included MCP connections:**
- Chat (Slack) for internal discussions and customer channel context
- Support platform (Intercom) for ticket history and customer conversations
- CRM (HubSpot) for account details and contact information
- Knowledge base (Guru, Notion) for internal documentation and runbooks
- Project tracker (Atlassian) for bug reports and feature requests
- Email and cloud storage (Microsoft 365) for customer correspondence

**Additional options:**
- See [CONNECTORS.md](CONNECTORS.md) for alternative tools in each category

## Example Workflows

### Triaging an Incoming Ticket

```
You: /triage Customer says their dashboard has been showing a blank
     page since this morning — they're on the Enterprise plan

Claude: Analyzing the issue...

## Triage: Dashboard blank page — Enterprise customer

**Category:** Bug
**Priority:** P2 — High (core feature broken, enterprise customer)
**Product area:** Dashboard / Frontend

### Routing Recommendation
Route to: Tier 2 Support (investigate browser/account specifics,
then escalate to Engineering if reproducible)

### Suggested Initial Response
[Draft acknowledging the issue, asking clarifying questions
about browser and any recent changes, offering status page link]
```

### Researching a Customer Question

```
You: /research Does our platform support SSO with Okta?

Claude: Let me check across available sources...

[Searches docs, knowledge base, previous conversations,
 and web sources — synthesizes answer with confidence
 level and source attribution]
```

### Packaging an Escalation

```
You: /escalate API returning 500 errors intermittently — 3
     Enterprise customers reported this week

Claude: I'll gather context and build the escalation brief...

[Pulls ticket history, identifies affected accounts,
 structures reproduction steps, assesses business impact,
 and generates a structured escalation for engineering]
```

### Drafting a Response

```
You: /draft-response Customer escalation — their integration
     has been down for 2 days and they're frustrated

Claude: [Generates empathetic, professional response acknowledging
 the frustration, taking ownership, providing a clear action
 plan with timeline, and offering a call]
```

### Writing a KB Article

```
You: /kb-article How to configure webhook notifications —
     just resolved this for the third customer this month

Claude: [Generates a structured how-to article with prerequisites,
 step-by-step instructions, verification steps, and common
 issues — optimized for search]
```

## Configuration

The plugin works out of the box with the included MCP connections. For the richest experience, connect additional data sources through your Claude settings:

1. **Support platform**: Add your ticketing system for ticket history and customer context
2. **Knowledge base**: Add your wiki for internal documentation and existing KB articles
3. **Project tracker**: Add your issue tracker for bug reports and feature requests
4. **CRM**: Add your CRM for account details and contact information

Without these connections, the plugin will ask you to provide context manually and offer frameworks and templates you can fill in with your own data.
