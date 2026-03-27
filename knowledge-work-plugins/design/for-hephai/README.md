*written by Hephai*

# Design

Accelerate design workflows with Claude. Covers design critique, design system management, UX writing, accessibility audits, research synthesis, and dev handoff — from early exploration to pixel-perfect specs. Connects to Figma, Slack, Linear, Notion, and more.

## Tags

- design
- ux
- accessibility
- design-system
- user-research

## Installation

```
npx hephai install design
```

## Skills

| Skill | Description |
|---|---|
| `design-critique` | Get structured design feedback on usability, hierarchy, and consistency. Trigger with "review this design", "critique this mockup", "what do you think of this screen?", or when sharing a Figma link or screenshot for feedback at any stage from exploration to final polish. `feedback` |
| `design-system` | Audit, document, or extend your design system. Use when checking for naming inconsistencies or hardcoded values across components, writing documentation for a component's variants, states, and accessibility notes, or designing a new pattern that fits the existing system. `design-system` |
| `accessibility-review` | Run a WCAG 2.1 AA accessibility audit on a design or page. Trigger with "audit accessibility", "check a11y", "is this accessible?", or when reviewing a design for color contrast, keyboard navigation, touch target size, or screen reader behavior before handoff. `a11y` |
| `ux-copy` | Write or review UX copy — microcopy, error messages, empty states, CTAs. Trigger with "write copy for", "what should this button say?", "review this error message", or when naming a CTA, wording a confirmation dialog, filling an empty state, or writing onboarding text. `copywriting` |
| `design-handoff` | Generate developer handoff specs from a design. Use when a design is ready for engineering and needs a spec sheet covering layout, design tokens, component props, interaction states, responsive breakpoints, edge cases, and animation details. `handoff` |
| `user-research` | Plan, conduct, and synthesize user research. Trigger with "user research plan", "interview guide", "usability test", "survey design", "research questions", or when the user needs help with any aspect of understanding their users through research. `research` |
| `research-synthesis` | Synthesize user research into themes, insights, and recommendations. Use when you have interview transcripts, survey results, usability test notes, support tickets, or NPS responses that need to be distilled into patterns, user segments, and prioritized next steps. `synthesis` |

## MCPs

| Server | Transport | URL |
|---|---|---|
| Slack | `http` | https://mcp.slack.com/mcp |
| Figma | `http` | https://mcp.figma.com/mcp |
| Linear | `http` | https://mcp.linear.app/mcp |
| Asana | `http` | https://mcp.asana.com/v2/mcp |
| Atlassian | `http` | https://mcp.atlassian.com/v1/mcp |
| Notion | `http` | https://mcp.notion.com/mcp |
| Intercom | `http` | https://mcp.intercom.com/mcp |
| Google Calendar | `http` | https://gcal.mcp.claude.com/mcp |
| Gmail | `http` | https://gmail.mcp.claude.com/mcp |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/design |
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

# Design Plugin

A design productivity plugin primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. Helps with design critique, system management, UX writing, accessibility, research synthesis, and developer handoff. Works with any design team — standalone with your input, supercharged when you connect Figma and other tools.

## Installation

```bash
claude plugins add knowledge-work-plugins/design
```

## Commands

Explicit workflows you invoke with a slash command:

| Command | Description |
|---|---|
| `/critique` | Get structured design feedback — usability, visual hierarchy, accessibility, and consistency |
| `/design-system` | Audit, document, or extend your design system — components, tokens, patterns |
| `/handoff` | Generate developer handoff specs — measurements, tokens, states, interactions, and edge cases |
| `/ux-copy` | Write or review UX copy — microcopy, error messages, empty states, onboarding flows |
| `/accessibility` | Run an accessibility audit — WCAG compliance, color contrast, screen reader, and keyboard navigation |
| `/research-synthesis` | Synthesize user research — interviews, surveys, usability tests into actionable insights |

All commands work **standalone** (describe your design or paste screenshots) and get **supercharged** with MCP connectors.

## Skills

Domain knowledge Claude uses automatically when relevant:

| Skill | Description |
|---|---|
| `design-critique` | Evaluate designs for usability, visual hierarchy, consistency, and adherence to design principles |
| `design-system-management` | Manage design tokens, component libraries, and pattern documentation |
| `ux-writing` | Write effective microcopy — clear, concise, consistent, and brand-aligned |
| `accessibility-review` | Audit designs and code for WCAG 2.1 AA compliance |
| `user-research` | Plan, conduct, and synthesize user research — interviews, surveys, usability testing |
| `design-handoff` | Create comprehensive developer handoff documentation from designs |

## Example Workflows

### Getting Design Feedback

```
/critique
```

Share a Figma link, screenshot, or describe your design. Get structured feedback on usability, visual hierarchy, consistency, and accessibility.

### Auditing Your Design System

```
/design-system audit
```

I'll review your component library for consistency, completeness, and naming conventions. Get a report with specific improvement recommendations.

### Writing UX Copy

```
/ux-copy error messages for payment flow
```

Get context-appropriate copy with tone guidance, alternatives, and localization notes.

### Developer Handoff

```
/handoff
```

Share a Figma link and get a complete spec: measurements, design tokens, component states, interaction notes, and edge cases.

### Accessibility Check

```
/accessibility
```

Share a design or URL. Get a WCAG 2.1 AA compliance report with specific issues, severity, and remediation steps.

### Synthesizing Research

```
/research-synthesis
```

Upload interview transcripts, survey results, or usability test notes. Get themes, insights, and prioritized recommendations.

## Standalone + Supercharged

Every command and skill works without any integrations:

| What You Can Do | Standalone | Supercharged With |
|-----------------|------------|-------------------|
| Design critique | Describe or screenshot | Figma MCP (pull designs directly) |
| Design system | Describe your system | Figma MCP (audit component library) |
| Handoff specs | Describe or screenshot | Figma MCP (exact measurements, tokens) |
| UX copy | Describe the context | Knowledge base (brand voice guidelines) |
| Accessibility | Describe or screenshot | Figma MCP, analytics for real usage data |
| Research synthesis | Paste transcripts | User feedback tools (pull raw data) |

## MCP Integrations

> If you see unfamiliar placeholders or need to check which tools are connected, see [CONNECTORS.md](CONNECTORS.md).

Connect your tools for a richer experience:

| Category | Examples | What It Enables |
|---|---|---|
| **Design tool** | Figma | Pull designs, inspect components, access design tokens |
| **User feedback** | Intercom, Productboard | Raw feedback, feature requests, NPS data |
| **Project tracker** | Linear, Asana, Jira | Link designs to tickets, track implementation |
| **Knowledge base** | Notion | Brand guidelines, design principles, research repository |
| **Product analytics** | Amplitude, Mixpanel | Usage data for research synthesis and design decisions |

See [CONNECTORS.md](CONNECTORS.md) for the full list of supported integrations.
