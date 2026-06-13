*written by ForgeCat*

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

```bash
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
| QuickBooks | `http` | https://ai-inc.quickbooks.intuit.com/v1/mcp |
| PayPal | `sse` | https://mcp.paypal.com/sse |
| HubSpot | `http` | https://mcp.hubspot.com/anthropic |
| Canva | `http` | https://mcp.canva.com/mcp |
| DocuSign | `http` | https://mcp.docusign.com/mcp |
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
| Version | `0.1.11` |
| Original commit | 69d3780 |
| License | Apache-2.0 |
| Source platform | Claude Code plugin (Cowork) |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |

## Dependencies

None

---
*written by original source*

# Small Business Plugin

Pre-built small business workflows for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — also works in Claude Code. Install it once and you get 15 building-block skills, 15 ready-to-use workflows, and a router that understands plain English.

You don't need to memorize anything. Just tell Claude what you need — "I'm stressed about making payroll," "a customer is angry," "what should I charge?" — and it figures out the right workflow and walks you through it. Every workflow pauses before taking action, so nothing happens without your say-so.

> **Important**: This plugin assists with small business workflows but does not provide financial, tax, legal, or HR advice. All outputs should be reviewed by you (and where appropriate, a qualified professional) before use.

## Installation

### Cowork

Install from [claude.com/plugins](https://claude.com/plugins/).

### Claude Code

```bash
claude plugin marketplace add anthropics/knowledge-work-plugins
claude plugin install small-business@knowledge-work-plugins
```

Once installed, say **"set me up"** to run the `smb-onboard` skill — it'll help Claude understand your business, your pain points, and the tools you already use.

## What you'll need to connect

Run `/smb-onboard` or ask Claude to "set me up."

**Core tools** (connect these first for the best experience):
- **QuickBooks** — powers all financial workflows (cash forecasts, margins, month-end close, tax prep)
- **PayPal** — transaction data, invoices, disputes, and refunds
- **HubSpot** — CRM, leads, campaigns, and customer support tickets

**Marketing & communication:**
- **Canva** — generates on-brand social and email assets
- **Gmail / Outlook** — email drafts, ticket handling, contract review
- **Google Calendar / Outlook Calendar** — meeting prep, call blocking, weekly commitments
- **Slack** — brief delivery and notifications

**Optional** (adds depth when connected):
- **Stripe** — payment and subscription data
- **Square** — POS transaction data
- **Google Drive / OneDrive** — file storage and templates
- **DocuSign** — contract review from pending envelopes

You don't need all of these to start. Connect one or two and you'll immediately see value — the plugin tells you when connecting another tool would unlock more.

## How it works

Three layers working together:

1. **Skills** — the building blocks. Each skill knows how to do one thing really well (forecast cash, score leads, draft an invoice reminder). There are 15 of these.

2. **Commands** — the workflows. Commands chain skills together into multi-step recipes with checkpoints where you approve before anything happens. There are 15 of these.

3. **The Router** — the front door. You talk to Claude in plain English. The router listens, figures out which workflow fits, and gets you there. You never need to memorize a command name.

## All 15 commands

Commands are workflows that chain skills together. Each one pauses at checkpoints for your approval before taking action.

### Money & finance

| Command | What it does | Just say... | Skills used | Required | Optional |
|---|---|---|---|---|---|
| `/plan-payroll` | Cash forecast + overdue invoice chase so you know payroll is covered. | "can I make payroll", "cash is tight", "who owes me money" | cash-flow-snapshot, invoice-chase | QuickBooks | PayPal, Stripe, Square, Mail |
| `/month-heads-up` | 30-day cash outlook with early risk flags. | "what does next month look like", "cash forecast", "runway" | cash-flow-snapshot | QuickBooks | PayPal |
| `/close-month` | Month-end close: reconcile, flag gaps, write P&L, export packet. | "close the books", "month-end", "reconcile" | month-end-prep | QuickBooks | PayPal, Stripe, Square |
| `/price-check` | Margin-by-product table and three pricing scenarios. | "what are my margins", "should I raise prices", "cost per unit" | margin-analyzer | QuickBooks | PayPal |
| `/tax-prep` | Tax prep materials for your accountant (quarterly estimates or year-end 1099s). | "tax stuff", "estimated taxes", "1099s", "accountant needs..." | tax-season-organizer | QuickBooks | PayPal, Stripe |

### Sales & marketing

| Command | What it does | Just say... | Skills used | Required | Optional |
|---|---|---|---|---|---|
| `/call-list` | Top 5 leads to call today with talking points and calendar blocks. | "who should I call", "any hot leads", "pipeline" | lead-triage | HubSpot | Mail, Google Calendar |
| `/run-campaign` | End-to-end campaign: sales analysis → content brief → Canva assets → HubSpot send. | "run a campaign", "sales are down", "I need more customers" | content-strategy, canva-creator, lead-triage | HubSpot, Canva | QuickBooks, PayPal |
| `/sales-brief` | Top and bottom sellers with a 2-week content brief. | "what's selling", "what should I promote" | content-strategy | QuickBooks or PayPal | HubSpot |

### Customers & operations

| Command | What it does | Just say... | Skills used | Required | Optional |
|---|---|---|---|---|---|
| `/customer-pulse-check` | Customer feedback themes with response templates. | "what are customers saying", "complaints", "reviews" | customer-pulse, ticket-deflector | PayPal or HubSpot | -- |
| `/handle-complaint` | End-to-end complaint resolution: pull context, draft response, suggest operational fix. | "a customer is upset", "handle this complaint", "angry email" | ticket-deflector, customer-pulse | -- (works with pasted text) | Gmail, HubSpot, PayPal |
| `/crm-cleanup` | HubSpot hygiene: stale deals, duplicates, missing fields — fixes what you approve. | "clean up the CRM", "HubSpot is a mess", "stale deals" | crm-maintenance | HubSpot | -- |
| `/review-contract` | Plain-English contract review with red flags and severity ratings. | "review this contract", "NDA", "should I sign this" | contract-review | -- (works with file upload) | DocuSign |

### Business intelligence

| Command | What it does | Just say... | Skills used | Required | Optional |
|---|---|---|---|---|---|
| `/monday-brief` | Monday morning briefing: cash, sales, pipeline, week ahead, top 3 to-dos. | "Monday brief", "what's on my plate", "start of week" | business-pulse | -- (degrades gracefully) | QuickBooks, PayPal, HubSpot, Calendar, Gmail, Slack |
| `/friday-brief` | Friday end-of-week pulse: revenue vs last week, wins, and things to watch. | "end of week", "how'd we do", "Friday recap" | business-pulse | PayPal or HubSpot | -- |
| `/quarterly-review` | Full QBR narrative: revenue, margin, customer health, opportunities, risks. | "quarterly review", "board deck", "QBR" | business-pulse | QuickBooks | PayPal, HubSpot |

## All 15 skills

Skills are the atomic building blocks. Each one does one thing well.

### Money & finance

| Skill | What it does | Just say... | Required | Optional |
|---|---|---|---|---|
| **cash-flow-snapshot** | 30/60/90-day cash forecast with confidence bands and named risk flags. Chat summary + XLSX. | "forecast my cash flow", "will I make payroll", "runway", "cash crunch" | QuickBooks, PayPal, Stripe, or Square (any one) | Others as secondary sources |
| **invoice-chase** | Drafts overdue-invoice reminders matched to each customer's payment history and tone. Sends via PayPal with approval. | "who owes me money", "overdue invoices", "follow up on unpaid" | QuickBooks | PayPal, Stripe, Gmail |
| **margin-analyzer** | Unit economics by product or service with inflation benchmarks and three pricing scenarios. | "what are my margins", "should I raise prices", "costs eating into profit", "what to charge" | QuickBooks | PayPal, Square, CSV upload |
| **month-end-prep** | Month-end close: reconciles QB against payment processors, flags gaps, writes P&L narrative, exports close packet. | "close the month", "reconcile", "P&L", "why revenue changed" | QuickBooks | PayPal, Stripe, Square |
| **tax-season-organizer** | Quarterly estimated tax calc or year-end 1099-NEC prep with accountant handoff packet. | "quarterly taxes", "estimated tax payment", "1099s", "1099-NEC", "year-end tax prep" | QuickBooks | PayPal, Stripe |

### Sales & marketing

| Skill | What it does | Just say... | Required | Optional |
|---|---|---|---|---|
| **lead-triage** | Scores HubSpot leads by engagement, fit, and urgency to produce a ranked call list with talking points. | "prioritize leads", "who to call first", "pipeline" | HubSpot | Gmail, Google Calendar |
| **content-strategy** | Analyzes sales data to find top performers and slow movers, produces a prioritized 30-day content brief. | "what should I post", "content plan", "what's selling", "what to promote" | QuickBooks or PayPal | Square |
| **canva-creator** | Takes a content brief and executes the full campaign: posting calendar, Canva assets, caption copy, HubSpot staging. | "make the content", "generate the posts", "create the assets", "turn this into a campaign" | Canva, HubSpot | -- |

### Customers & operations

| Skill | What it does | Just say... | Required | Optional |
|---|---|---|---|---|
| **customer-pulse** | Aggregates disputes, tickets, email sentiment, and reviews into a themes report with a "do these three things this week" list. | "how are customers feeling", "what people are saying", "disputes", "review analysis" | -- (degrades gracefully) | PayPal, HubSpot, Gmail |
| **ticket-deflector** | Reads a customer email or ticket, pulls order/refund status, drafts a tone-matched reply. Can issue PayPal refunds with approval. | "draft a response", "answer this customer", "where's my order", "I want a refund" | PayPal, HubSpot, Mail | Intercom, Square |
| **crm-maintenance** | Keeps HubSpot current: creates/updates contacts and deals, logs calls and notes, flags stale records. | "update the CRM", "log a call", "clean up HubSpot", "add context to a deal" | HubSpot | Gmail, Google Calendar |
| **contract-review** | Plain-English contract review with risk flags, severity ratings, and a marked-up redline DOCX. | "review this contract", "what am I signing", "flag any concerns", "check the payment terms" | -- (works with file upload) | Gmail, DocuSign |

### Hiring

| Skill | What it does | Just say... | Required | Optional |
|---|---|---|---|---|
| **job-post-builder** | Builds a complete hiring packet: job post, structured interview guide with scoring rubric, and offer letter template. | "help me hire", "write a job post", "job description", "open role", "interview questions", "draft an offer letter" | -- (works standalone) | DocuSign, Google Drive |

### Business intelligence & onboarding

| Skill | What it does | Just say... | Required | Optional |
|---|---|---|---|---|
| **business-pulse** | One-page business snapshot: cash, sales, pipeline, commitments, watch-list, and the single most important thing needing attention today. | "how's the business doing", "snapshot", "weekly summary", "catch me up" | -- (degrades gracefully) | QuickBooks, PayPal, HubSpot, Google Calendar, Gmail, Slack |
| **smb-onboard** | Walks you through connecting tools, runs a demo recipe, captures your business context, and sets a weekly check-in cadence. | "set me up", "setup", "get started", "help me get set up", "I'm new to this", "what can you do" | -- | All connectors |

## Customizing

These workflows are generic starting points. They become much more useful when you customize them for how your business actually works:

- **Add business context** — Drop your industry, products, customers, and processes into skill files so Claude understands your world.
- **Adjust thresholds** — Tune the alert thresholds in `business-pulse` and `cash-flow-snapshot` to match your scale.
- **Swap connectors** — Point skills at the tools you actually use.
