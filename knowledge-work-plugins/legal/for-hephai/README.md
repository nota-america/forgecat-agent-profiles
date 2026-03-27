*written by Hephai*

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

---
*Original README.md from source:*

# Legal Productivity Plugin

An AI-powered productivity plugin for in-house legal teams, primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. Automates contract review, NDA triage, compliance workflows, legal briefings, and templated responses -- all configurable to your organization's specific playbook and risk tolerances.

> **Disclaimer:** This plugin assists with legal workflows but does not provide legal advice. Always verify conclusions with qualified legal professionals. AI-generated analysis should be reviewed by licensed attorneys before being relied upon for legal decisions. The default playbook examples in this plugin reflect U.S. legal positions and jurisdictions (Delaware, New York, California). If you operate under different legal systems (EU, UK, Netherlands, Australia, etc.), you must customize the playbook in .claude/legal.local.md to reflect your jurisdiction's specific legal requirements, standard contract terms, and compliance obligations before relying on the plugin's analysis.

## Target Personas

- **Commercial Counsel** -- Contract negotiation, vendor management, deal support
- **Product Counsel** -- Product reviews, terms of service, privacy policies, IP matters
- **Privacy / Compliance** -- Data protection regulations, DPA reviews, data subject requests, regulatory monitoring
- **Litigation Support** -- Discovery holds, document review prep, case briefings

## Installation

```
claude plugins add knowledge-work-plugins/legal
```

## Quick Start

### 1. Install the plugin

```
claude plugins add knowledge-work-plugins/legal
```

### 2. Configure your playbook

Create a local settings file to define your organization's standard positions. This is where you encode your team's negotiation playbook, risk tolerances, and standard terms.

Create a `legal.local.md` file where Claude can find it:

- **Cowork**: Save it in any folder you've shared with Cowork (via the folder picker). The plugin finds it automatically.
- **Claude Code**: Save it in your project's `.claude/` directory.

```markdown
# Legal Playbook Configuration

## Contract Review Positions

### Limitation of Liability
- Standard position: Mutual cap at 12 months of fees paid/payable
- Acceptable range: 6-24 months of fees
- Escalation trigger: Uncapped liability, consequential damages inclusion

### Indemnification
- Standard position: Mutual indemnification for IP infringement and data breach
- Acceptable: Indemnification limited to third-party claims only
- Escalation trigger: Unilateral indemnification obligations, uncapped indemnification

### IP Ownership
- Standard position: Each party retains pre-existing IP; customer owns customer data
- Escalation trigger: Broad IP assignment clauses, work-for-hire provisions for pre-existing IP

### Data Protection
- Standard position: Require DPA for any personal data processing
- Requirements: Sub-processor notification, data deletion on termination, breach notification within 72 hours
- Escalation trigger: No DPA offered, cross-border transfer without safeguards

### Term and Termination
- Standard position: Annual term with 30-day termination for convenience
- Acceptable: Multi-year with termination for convenience after initial term
- Escalation trigger: Auto-renewal without notice period, no termination for convenience

### Governing Law
- Preferred: [Your jurisdiction]
- Acceptable: Major commercial jurisdictions (NY, DE, CA, England & Wales)
- Escalation trigger: Non-standard jurisdictions, mandatory arbitration in unfavorable venue

## NDA Defaults
- Mutual obligations required
- Term: 2-3 years standard, 5 years for trade secrets
- Standard carveouts: independently developed, publicly available, rightfully received from third party
- Residuals clause: acceptable if narrowly scoped

## Response Templates
Configure paths to your template files or define inline templates for common inquiries.
```

### 3. Connect your tools

The plugin works best when connected to your existing tools via MCP. Pre-configured servers include Slack, Box, Egnyte, Atlassian, and Microsoft 365. See [CONNECTORS.md](CONNECTORS.md) for the full list of supported categories and options.

## Commands

### `/review-contract` -- Contract Review Against Playbook

Review a contract against your organization's negotiation playbook. Flags deviations, generates redlines, and provides business impact analysis.

```
/review-contract
```

Accepts: file upload, URL, or pasted contract text. Will ask for context (your side, deadline, focus areas) and review clause-by-clause against your configured playbook.

### `/triage-nda` -- NDA Pre-Screening

Rapid triage of incoming NDAs against standard criteria. Categorizes as GREEN (standard approval), YELLOW (counsel review), or RED (significant issues).

```
/triage-nda
```

### `/vendor-check` -- Vendor Agreement Status

Check the status of existing agreements with a vendor across your connected systems.

```
/vendor-check [vendor name]
```

Reports on existing NDAs, MSAs, DPAs, expiration dates, and key terms.

### `/brief` -- Legal Team Briefing

Generate contextual briefings for your legal work.

```
/brief daily          # Morning brief of legal-relevant items
/brief topic [query]  # Research brief on a specific legal question
/brief incident       # Rapid brief on a developing situation
```

### `/respond` -- Generate Templated Response

Generate a response from your configured templates for common inquiry types.

```
/respond [inquiry-type]
```

Supported inquiry types include: data subject request, discovery hold, vendor question, NDA request, and custom categories you define.

## Skills

| Skill | Description |
|-------|-------------|
| `contract-review` | Playbook-based contract analysis, deviation classification, redline generation |
| `nda-triage` | NDA screening criteria, classification rules, routing recommendations |
| `compliance` | Privacy regulations (GDPR, CCPA), DPA review, data subject requests |
| `canned-responses` | Template management, response categories, escalation triggers |
| `legal-risk-assessment` | Risk severity framework, classification levels, escalation criteria |
| `meeting-briefing` | Meeting prep methodology, context gathering, action item tracking |

## Example Workflows

### Contract Review

1. Receive a vendor contract via email
2. Run `/review-contract` and upload the document
3. Provide context: "We are the customer, need to close by end of quarter, focus on data protection and liability"
4. Receive clause-by-clause analysis with GREEN/YELLOW/RED flags
5. Get specific redline language for YELLOW and RED items
6. Share the analysis with your deal team

### NDA Triage

1. Sales team sends an NDA from a new prospect
2. Run `/triage-nda` and paste or upload the NDA
3. Get instant classification: GREEN (route for signature), YELLOW (specific issues to review), or RED (needs full counsel review)
4. For GREEN NDAs, approve directly; for YELLOW/RED, address flagged issues

### Daily Brief

1. Start your morning with `/brief daily`
2. Get a summary of overnight contract requests, compliance questions, upcoming deadlines, and calendar items needing legal prep
3. Prioritize your day based on urgency and deadlines

### Vendor Check

1. Business team asks about a new engagement with an existing vendor
2. Run `/vendor-check Acme Corp`
3. See existing agreements, expiration dates, and key terms at a glance
4. Know immediately whether you need a new NDA or can proceed under existing terms

## MCP Integration

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](CONNECTORS.md).

The plugin connects to your tools through MCP (Model Context Protocol) servers:

| Category | Examples | Purpose |
|----------|----------|---------|
| Chat | Slack, Teams | Team requests, notifications, triage |
| Cloud storage | Box, Egnyte | Playbooks, templates, precedents |
| Office suite | Microsoft 365 | Email, calendar, documents |
| Project tracker | Atlassian (Jira/Confluence) | Matter tracking, tasks |

See [CONNECTORS.md](CONNECTORS.md) for the full list of supported integrations, including CLM, CRM, e-signature, and additional options.

Configure connections in `.mcp.json`. The plugin gracefully degrades when tools are unavailable -- it will note gaps and suggest manual checks.

## Customization

### Playbook Configuration

Your playbook is the heart of the contract review system. Define your positions in `legal.local.md`:

- **Standard positions**: Your preferred contract terms
- **Acceptable ranges**: What you can agree to without escalation
- **Escalation triggers**: Terms that require senior review or outside counsel

### Response Templates

Define templates for common inquiries. Templates support variable substitution and include built-in escalation triggers for situations that should not use a templated response.

### Risk Framework

Customize the risk assessment matrix to match your organization's risk appetite and classification scheme.

## File Structure

```
legal/
├── .claude-plugin/plugin.json
├── .mcp.json
├── README.md
├── commands/
│   ├── review-contract.md
│   ├── triage-nda.md
│   ├── vendor-check.md
│   ├── brief.md
│   └── respond.md
└── skills/
    ├── contract-review/SKILL.md
    ├── nda-triage/SKILL.md
    ├── compliance/SKILL.md
    ├── canned-responses/SKILL.md
    ├── legal-risk-assessment/SKILL.md
    └── meeting-briefing/SKILL.md
```
