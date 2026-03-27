![Hephai](https://raw.githubusercontent.com/nota-america/agent-hub/main/assets/hephai_banner.png)

Hephai is the open agent registry - package, share, and install AI Agents across platforms.

# Legal

Speed up contract review, NDA triage, and compliance workflows for in-house legal teams. Covers contract review with redlines, NDA triage, compliance checks, risk assessment, legal briefings, meeting prep, templated responses, e-signature routing, and vendor agreement tracking. Connects to Box, Egnyte, DocuSign, Slack, Atlassian, and Microsoft 365.

## Tags

- legal
- contracts
- compliance
- nda
- e-signature

## Installation

```
npx hephai install legal
```

## Skills

| Skill | Description |
|---|---|
| `review-contract` | Review a contract against your organization's negotiation playbook — flag deviations, generate redlines, provide business impact analysis. Use when reviewing vendor or customer agreements, when you need clause-by-clause analysis against standard positions, or when preparing a negotiation strategy with prioritized redlines and fallback positions. `contracts` |
| `triage-nda` | Rapidly triage an incoming NDA and classify it as GREEN (standard approval), YELLOW (counsel review), or RED (full legal review). Use when a new NDA arrives from sales or business development, when screening for embedded non-solicits, non-competes, or missing carveouts, or when deciding whether an NDA can be signed under standard delegation. `nda` |
| `compliance-check` | Run a compliance check on a proposed action, product feature, or business initiative, surfacing applicable regulations, required approvals, and risk areas. Use when launching a feature that touches personal data, when marketing or product proposes something with regulatory implications, or when you need to know which approvals and jurisdictional requirements apply before proceeding. `compliance` |
| `legal-risk-assessment` | Assess and classify legal risks using a severity-by-likelihood framework with escalation criteria. Use when evaluating contract risk, assessing deal exposure, classifying issues by severity, or determining whether a matter needs senior counsel or outside legal review. `risk` |
| `brief` | Generate contextual briefings for legal work — daily summary, topic research, or incident response. Use when starting your day and need a scan of legal-relevant items across email, calendar, and contracts, when researching a specific legal question across internal sources, or when a developing situation (data breach, litigation threat, regulatory inquiry) needs rapid context. `briefing` |
| `meeting-briefing` | Prepare structured briefings for meetings with legal relevance and track resulting action items. Use when preparing for contract negotiations, board meetings, compliance reviews, or any meeting where legal context, background research, or action tracking is needed. `meetings` |
| `legal-response` | Generate a response to a common legal inquiry using configured templates, with built-in escalation checks for situations that shouldn't use a templated reply. Use when responding to data subject requests, litigation hold notices, vendor legal questions, NDA requests from business teams, or subpoenas. `response-drafting` |
| `signature-request` | Prepare and route a document for e-signature — run a pre-signature checklist, configure signing order, and send for execution. Use when a contract is finalized and ready to sign, when verifying entity names, exhibits, and signature blocks before sending, or when setting up an envelope with sequential or parallel signers. `e-signature` |
| `vendor-check` | Check the status of existing agreements with a vendor across all connected systems — CLM, CRM, email, and document storage — with gap analysis and upcoming deadlines. Use when onboarding or renewing a vendor, when you need a consolidated view of what's signed and what's missing (MSA, DPA, SOW), or when checking for approaching expirations and surviving obligations. `vendor-management` |

## MCPs

| Server | Transport | URL |
|---|---|---|
| Slack | `http` | https://mcp.slack.com/mcp |
| Box | `http` | https://mcp.box.com |
| Egnyte | `http` | https://mcp-server.egnyte.com/mcp |
| Atlassian | `http` | https://mcp.atlassian.com/v1/mcp |
| Microsoft 365 | `http` | https://microsoft365.mcp.claude.com/mcp |
| DocuSign | `http` | https://mcp.docusign.com/mcp |
| Google Calendar | `http` | https://gcal.mcp.claude.com/mcp |
| Gmail | `http` | https://gmail.mcp.claude.com/mcp |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/legal |
| Version | `0.0.1` |
| Original commit | d2ba7f6 |
| License | Apache-2.0 |
| Source platform | Claude Code plugin (Cowork) |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

None
