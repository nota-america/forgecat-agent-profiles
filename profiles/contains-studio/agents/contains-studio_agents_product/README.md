![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Contains Studio Product Agents

Claude Code sub-agents for feedback synthesis, sprint prioritization, and trend research.

## Tags

- agents
- claude-code
- product
- research
- prioritization

## Installation

```bash
npx forgecat install @forgecat/contains-studio_agents_product
```

## Agents

| Agent | Description |
|---|---|
| `feedback-synthesizer` | Use this agent when you need to analyze user feedback from multiple sources, identify patterns in user complaints or requests, synthesize insights from reviews, or prioritize feature development based on user input. This agent excels at turning raw feedback into actionable product insights. Examples:\n\n<example>\nContext: Weekly review of user feedback<br>user: "We got a bunch of new app store reviews this week"\nassistant: "Let me analyze those reviews for actionable insights. I'll use the feedback-synthesizer agent to identify patterns and prioritize improvements."\n<commentary>\nRegular feedback analysis ensures the product evolves based on real user needs.\n</commentary>\n</example>\n\n<example>\nContext: Feature prioritization for next sprint\nuser: "What should we build next based on user feedback?"\nassistant: "I'll analyze all recent feedback to identify the most requested features. Let me use the feedback-synthesizer agent to synthesize user input across all channels."\n<commentary>\nFeature prioritization should be driven by actual user needs, not assumptions.\n</commentary>\n</example>\n\n<example>\nContext: Post-launch feedback analysis\nuser: "Our new feature has been live for a week. What are users saying?"\nassistant: "I'll compile and analyze user reactions to the new feature. Let me use the feedback-synthesizer agent to create a comprehensive feedback report."\n<commentary>\nPost-launch feedback is crucial for rapid iteration and improvement.\n</commentary>\n</example>\n\n<example>\nContext: Identifying user pain points\nuser: "Users seem frustrated but I can't pinpoint why"\nassistant: "I'll dig into the feedback to identify specific pain points. Let me use the feedback-synthesizer agent to analyze user sentiment and extract core issues."\n<commentary>\nVague frustrations often hide specific, fixable problems that feedback analysis can reveal.\n</commentary>\n</example> |
| `sprint-prioritizer` | Use this agent when planning 6-day development cycles, prioritizing features, managing product roadmaps, or making trade-off decisions. This agent specializes in maximizing value delivery within tight timelines. Examples:\n\n<example>\nContext: Planning the next sprint\nuser: "We have 50 feature requests but only 6 days"\nassistant: "I'll help prioritize for maximum impact. Let me use the sprint-prioritizer agent to create a focused sprint plan that delivers the most value."\n<commentary>\nSprint planning requires balancing user needs, technical constraints, and business goals.\n</commentary>\n</example>\n\n<example>\nContext: Making feature trade-offs\nuser: "Should we build AI chat or improve onboarding?"\nassistant: "Let's analyze the impact of each option. I'll use the sprint-prioritizer agent to evaluate ROI and make a data-driven recommendation."\n<commentary>\nFeature prioritization requires analyzing user impact, development effort, and strategic alignment.\n</commentary>\n</example>\n\n<example>\nContext: Mid-sprint scope changes\nuser: "The CEO wants us to add video calling to this sprint"\nassistant: "I'll assess the impact on current commitments. Let me use the sprint-prioritizer agent to reorganize priorities while maintaining sprint goals."\n<commentary>\nScope changes require careful rebalancing to avoid sprint failure.\n</commentary>\n</example> |
| `trend-researcher` | Use this agent when you need to identify market opportunities, analyze trending topics, research viral content, or understand emerging user behaviors. This agent specializes in finding product opportunities from TikTok trends, App Store patterns, and social media virality. Examples:\n\n<example>\nContext: Looking for new app ideas based on current trends\nuser: "What's trending on TikTok that we could build an app around?"\nassistant: "I'll research current TikTok trends that have app potential. Let me use the trend-researcher agent to analyze viral content and identify opportunities."\n<commentary>\nWhen seeking new product ideas, the trend-researcher can identify viral trends with commercial potential.\n</commentary>\n</example>\n\n<example>\nContext: Validating a product concept against market trends\nuser: "Is there market demand for an app that helps introverts network?"\nassistant: "Let me validate this concept against current market trends. I'll use the trend-researcher agent to analyze social sentiment and existing solutions."\n<commentary>\nBefore building, validate ideas against real market signals and user behavior patterns.\n</commentary>\n</example>\n\n<example>\nContext: Competitive analysis for a new feature\nuser: "Our competitor just added AI avatars. Should we care?"\nassistant: "I'll analyze the market impact and user reception of AI avatars. Let me use the trend-researcher agent to assess this feature's traction."\n<commentary>\nCompetitive features need trend analysis to determine if they're fleeting or fundamental.\n</commentary>\n</example>\n\n<example>\nContext: Finding viral mechanics for existing apps\nuser: "How can we make our habit tracker more shareable?"\nassistant: "I'll research viral sharing mechanics in successful apps. Let me use the trend-researcher agent to identify patterns we can adapt."\n<commentary>\nExisting apps can be enhanced by incorporating proven viral mechanics from trending apps.\n</commentary>\n</example> |

## Details

| Field | Value |
|---|---|
| Author | Contains Studio |
| Original repository | https://github.com/contains-studio/agents/tree/main/product |
| Version | `0.0.0` |
| Original commit | `a5a480c324cac64b9c569bca0b2f297d517240cb` |
| License | Unknown |
| Source platform | Claude Code agents |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Partial |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- None
