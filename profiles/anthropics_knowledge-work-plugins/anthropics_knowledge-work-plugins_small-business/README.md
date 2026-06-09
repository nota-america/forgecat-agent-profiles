![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)


# Small Business

Pre-built small business workflows (including payroll planning, month-end close, weekly briefs, and growth campaigns) using your QuickBooks, PayPal, HubSpot, Docusign, Gsuite, O365, Canva, and other connected tools. You approve every step that touches money or customers.

## Tags

- smb
- finance
- marketing
- hr
- operations
- all-in-one
- small business

## Installation

```
npx forgecat install @forgecat/anthropics_knowledge-work-plugins_small-business
```

## Skills

| Skill | Description |
|---|---|
| `business-pulse` | Produces a one-page cross-functional business snapshot for SMB owners — cash position (QuickBooks), sales trend (PayPal/Square), pipeline movement (HubSpot), this week's commitments (Calendar), urgent watch-list items (Gmail/Slack), and the single most important thing needing attention today. Proactively tries every available connector and gracefully scopes to whatever is connected — one connector gives a partial pulse; the full stack gives the full picture. Trigger when the user asks how the business is doing, wants a snapshot, a weekly summary, a Monday brief, or says anything like "what am I missing" or "catch me up on the business." |
| `call-list` | Ranks the top-5 leads most worth calling today, supplies talking points from email history, blocks time on the calendar, and drafts follow-up messages. Accepts optional count and date arguments. |
| `canva-creator` | Takes an approved content brief and executes a campaign end-to-end: builds the posting calendar, generates Canva designs for social posts, drafts caption and email copy, and stages social sends in HubSpot. Canva is used for social posts only (Instagram, Facebook, X, LinkedIn) — email content is drafted as plain text and surfaced inline for the owner to send from their own tool. Every step requires explicit owner approval. Use when the user says "make the content," "generate the posts," "create the assets," "turn this into a campaign," or hands off an approved brief for execution. |
| `cash-flow-snapshot` | Reads AR/AP, historical cash timing, and known fixed costs from QuickBooks, PayPal, Stripe, or Square — or a CSV upload — and produces a 30/60/90-day cash flow forecast with percentage-variance confidence bands and named risk flags. Delivers a chat summary and a downloadable XLSX. Use when the user asks "forecast my cash flow," "will I make payroll," mentions "runway," or says "cash crunch." Falls back to CSV upload when no connector is live. |
| `close-month` | Closes the month — reconciles QB vs payment processors, flags gaps, writes P&L narrative, exports close packet. Accepts optional month and save-to arguments. |
| `content-strategy` | Analyzes sales data from PayPal and QuickBooks to find top performers and slow movers, layers in seasonality, and produces a prioritized 30-day content brief: what to push, what offers to run, what to hold. Strategic output only — no calendars or assets. Use when the user asks what to post, wants a content plan, asks what's selling, or what to promote this month. |
| `contract-review` | Lightweight NDA, MSA, and vendor contract review for SMBs without legal on staff. Reads contracts from local files, Gmail attachments, or DocuSign envelopes; flags non-standard terms; explains risks in plain English; and outputs a marked-up redline as a separate DOCX. Use when the user says "review this contract," "what am I signing," "red flags," "flag any concerns," "check the payment terms," or uploads/forwards a contract or legal agreement. |
| `crm-cleanup` | Scans HubSpot for stale deals, duplicate contacts, and missing fields, then fixes what the owner approves. Accepts optional scope argument for deals, contacts, or all. |
| `crm-maintenance` | Keeps HubSpot current without the owner opening it: creates and updates contacts and deals from email and calendar context, logs notes and calls, and flags stale records. The "stop doing data entry" skill. Use when the user asks to update the CRM, log a call, clean up HubSpot, or add context to a deal. |
| `customer-pulse` | Aggregates PayPal disputes, HubSpot feedback and tickets, and email sentiment (plus pasted or exported Google/Yelp reviews) into a themes report with verbatim evidence and a "do these three things this week" list. Use when the user asks how customers are feeling, for review analysis, what people are saying, or about disputes. |
| `customer-pulse-check` | Synthesizes themes from PayPal disputes, HubSpot tickets, and review exports into a top-3 fixable issues list with drafted response templates. Accepts optional since-date argument. |
| `friday-brief` | Delivers the Friday end-of-week pulse — revenue vs prior week, top sellers, wins and watches. Accepts optional lookback window of 7 or 14 days. |
| `handle-complaint` | Handles an incoming customer complaint end-to-end — pulls context, drafts a response, and suggests an operational fix. Accepts optional email or ticket ID argument. |
| `invoice-chase` | Drafts overdue-invoice reminder emails from QuickBooks and PayPal data, matched to each customer's payment history and tone (gentle for good customers, firm for repeat late payers). Sends via PayPal with owner approval; non-PayPal invoices queue as mail drafts. Use when the user asks "who owes me money," mentions overdue invoices, or wants to follow up on unpaid invoices. |
| `job-post-builder` | Builds end-to-end hiring packets — job post, structured interview guide with scoring rubric, and offer letter template — from a hiring brief. Triggers on: "help me hire", "we're hiring for", "write a job post", "job description", "JD", "open role", "create a job ad", "interview questions", "scoring rubric", "draft an offer letter", "send an offer", "make a hiring packet", or any request to recruit for a position. When in doubt, trigger — covers the full hiring workflow from job post through DocuSign envelope creation via browser. Does NOT screen or rank applicants. |
| `lead-triage` | Scores inbound HubSpot leads by engagement signals, company fit, and urgency markers to produce a "call these 5 today" list with talking points, drafts the follow-ups, and blocks Calendar time. Use when the user asks to prioritize leads, who to call first, or about their pipeline. |
| `margin-analyzer` | Analyzes unit economics by product or service using PayPal merchant insights and QuickBooks cost data, benchmarks against inflation and cost changes, and shows pricing-scenario data (e.g. "a 5% increase historically correlates with ~3% volume drop"). Surfaces analysis only — does not recommend a price. Use when the user asks about raising prices, pricing, margin analysis, what to charge, whether costs are eating into profit, or how a price change might affect their business. Trigger even if the user doesn't say "margin" explicitly — phrases like "am I making enough?", "should I charge more?", or "my costs are going up" all call for this skill. |
| `monday-brief` | Generates a one-page Monday morning briefing — cash, sales, pipeline, week ahead, top three to-dos. Accepts optional post destination and save-to arguments. |
| `month-end-prep` | Walks an SMB owner through month-end close: reconciles QuickBooks against PayPal (and Square/Stripe) settlements, flags uncategorized transactions, suspicious duplicates, and missing receipts, then writes a plain-English P&L narrative and exports a close packet (xlsx + one-page PDF). Use when the user says "close the month," "month-end," "reconcile," "what's missing," "P&L," or asks why revenue or margin changed this month. |
| `month-heads-up` | Runs on the 25th — shows the next 30-day cash-flow outlook and flags anything that needs attention before month-end. Accepts optional 30 or 60 day horizon. |
| `plan-payroll` | Forecasts cash, ranks overdue invoices, and stages PayPal reminders so the owner can confidently run payroll. Accepts optional horizon and payroll-date arguments. |
| `price-check` | Produces a margin-by-product table and three pricing-scenario data views so the owner can see the full financial picture before making a pricing decision. Accepts optional product name argument. |
| `quarterly-review` | Generates a full QBR narrative — revenue trend, margin trend, customer health, top opportunities and risks — as a presentation-ready PDF or deck. Accepts optional quarter and save-to arguments. |
| `review-contract` | Reviews a contract in plain English, surfaces red flags with severity ratings, and produces a marked-up docx/PDF with suggested redlines. Accepts optional file path or DocuSign envelope ID. |
| `run-campaign` | Runs an end-to-end marketing campaign — sales analysis, content brief, Canva assets, HubSpot send. Accepts optional lookback and channel arguments. |
| `sales-brief` | Surfaces top and bottom sellers, identifies seasonality patterns, and produces a 2-week content brief to push winners and clear slow movers. Accepts optional lookback window of 30, 60, or 90 days. |
| `smb-onboard` | Claude as the trainer. Walks an SMB owner through connecting their first two tools, runs one recipe to prove immediate value, interviews them about their business (industry, size, top three headaches), stores that context persistently so every other skill benefits, and sets a weekly check-in cadence. Use when the owner is getting started or says any of: "set me up," "setup," "help me get set up," "get started," "help me get started," "get me started," "what can you do," "I'm new to this," or is in their first session. |
| `smb-router` | The front door to the Small Business plugin. Listens to what the owner needs right now — vague or specific — and routes them to the best skill or slash command for the moment. Also serves as a guide: explains what's available, suggests what to try next, and adapts recommendations based on stored business context. Trigger whenever the owner asks "what can you do," "help me with my business," "what should I focus on," "I don't know where to start," or any open-ended business request that doesn't clearly match a single skill. |
| `tax-prep` | Prepares tax-season materials — quarterly estimated tax calculation or year-end 1099 prep — and produces an accountant handoff packet. Accepts optional mode and year arguments. |
| `tax-season-organizer` | Prepares tax-season materials for small business owners — framed as deliverables for their accountant, not tax advice. Two modes: (1) quarterly estimated tax calculation — pulls YTD net income from QuickBooks and calculates the federal income tax + self-employment tax liability and quarterly payment due; (2) year-end 1099 prep — scans QuickBooks, PayPal, and Stripe for contractors paid over $600, builds a 1099-NEC candidate list with missing W-9 flags, and produces a plain-English summary a CPA can work from directly.
Trigger this skill whenever the user mentions: quarterly taxes, estimated tax payment, how much to set aside for taxes, 1099s, 1099-NEC, year-end tax prep, contractor payments, W-9s, or any phrase suggesting they are preparing for a tax deadline or handing materials to an accountant. Also trigger proactively when a user asks about net profit or YTD income in a context that suggests they are worried about their tax bill. |
| `ticket-deflector` | Reads a forwarded customer email or ticket, pulls order/refund status from PayPal and account history from HubSpot, drafts a tone-matched reply in the owner's writing voice, and can issue a PayPal refund with explicit owner approval. Use when the user says "draft a response," "answer this customer," "where's my order," or "I want a refund." |

## MCPs

| Server | Transport | URL |
|---|---|---|
| Quickbooks | `http` | https://ai-inc.quickbooks.intuit.com/v1/mcp |
| Paypal | `sse` | https://mcp.paypal.com/sse |
| Hubspot | `http` | https://mcp.hubspot.com/anthropic |
| Canva | `http` | https://mcp.canva.com/mcp |
| Docusign | `http` | https://mcp.docusign.com/mcp |
| Slack | `http` | https://mcp.slack.com/mcp |
| Stripe | `http` | https://mcp.stripe.com |
| Square | `http` | https://mcp.squareup.com/sse |
| Gmail | `http` | https://gmailmcp.googleapis.com/mcp/v1 |
| Google Calendar | `http` | https://calendarmcp.googleapis.com/mcp/v1 |
| Google Drive | `http` | https://drivemcp.googleapis.com/mcp/v1 |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/small-business |
| Original commit | 69d3780 |
| License | Apache-2.0 |
| Source platform | Claude Code plugin (Cowork) |
| Tested runtime status | Untested in Forgecat runtime; source platform preserved from Claude Code plugin. |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Codex | Partial |
| Cursor | Partial |

## Dependencies

None
