![Hephai](https://raw.githubusercontent.com/nota-america/agent-hub/main/assets/hephai_banner.png)


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
npx forgecat install @hephai-nota/knowledge-work-plugins-design
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
| Codex | Partial |
| Cursor | Partial |

## Dependencies

None
