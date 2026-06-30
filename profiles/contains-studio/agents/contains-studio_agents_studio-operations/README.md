![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Contains Studio Operations Agents

Claude Code sub-agents for analytics, finance, infrastructure, legal compliance, and customer support.

## Tags

- agents
- claude-code
- operations
- analytics
- support

## Installation

```bash
npx forgecat install @forgecat/contains-studio_agents_studio-operations
```

## Agents

| Agent | Description |
|---|---|
| `analytics-reporter` | Use this agent when analyzing metrics, generating insights from data, creating performance reports, or making data-driven recommendations. This agent excels at transforming raw analytics into actionable intelligence that drives studio growth and optimization. Examples:\n\n<example>\nContext: Monthly performance review needed<br>user: "I need to understand how our apps performed last month"<br>assistant: "I'll analyze your app performance metrics comprehensively. Let me use the analytics-reporter agent to generate insights from your data."<br><commentary><br>Regular performance reviews identify trends and opportunities that daily monitoring might miss.<br></commentary><br></example>\n\n<example>\nContext: User behavior analysis for feature decisions<br>user: "Which features are users actually using in our fitness app?"<br>assistant: "Feature usage data is crucial for prioritization. I'll use the analytics-reporter agent to analyze user behavior patterns and identify your most valuable features."<br><commentary><br>Data-driven feature decisions prevent wasting resources on unused functionality.<br></commentary><br></example>\n\n<example>\nContext: Revenue optimization analysis<br>user: "Our revenue is plateauing, need to find growth opportunities"<br>assistant: "Let's dive deep into your revenue metrics. I'll use the analytics-reporter agent to identify conversion bottlenecks and untapped opportunities."<br><commentary><br>Revenue plateau often hides multiple small optimization opportunities that compound.<br></commentary><br></example>\n\n<example>\nContext: A/B test results interpretation<br>user: "We ran three different onboarding flows, which performed best?"<br>assistant: "I'll analyze your A/B test results for statistical significance and practical impact. Let me use the analytics-reporter agent to interpret the data."<br><commentary><br>Proper test analysis prevents false positives and ensures meaningful improvements.<br></commentary><br></example> |
| `finance-tracker` | Use this agent when managing budgets, optimizing costs, forecasting revenue, or analyzing financial performance. This agent excels at transforming financial chaos into strategic clarity, ensuring studio resources generate maximum return. Examples:\n\n<example>\nContext: Planning next quarter's development budget<br>user: "We have $50k for Q2, how should we allocate it?"<br>assistant: "I'll create an optimized budget allocation plan. Let me use the finance-tracker agent to analyze your needs and maximize ROI."<br><commentary><br>Strategic budget allocation can be the difference between growth and stagnation in app development.<br></commentary><br></example>\n\n<example>\nContext: App profitability analysis<br>user: "Our fitness app has 10k users but we're still losing money"<br>assistant: "Let's analyze your unit economics and find the path to profitability. I'll use the finance-tracker agent to break down costs and revenue opportunities."<br><commentary><br>Many apps fail not from lack of users but from unsustainable unit economics.<br></commentary><br></example>\n\n<example>\nContext: Evaluating monetization strategies<br>user: "Should we switch from ads to subscriptions?"<br>assistant: "This requires careful financial modeling. I'll use the finance-tracker agent to project revenues and compare monetization strategies."<br><commentary><br>Monetization model changes can dramatically impact both revenue and user experience.<br></commentary><br></example>\n\n<example>\nContext: Investor reporting preparation<br>user: "I need to show our investors our burn rate and runway"<br>assistant: "I'll prepare comprehensive financial reports for your investors. Let me use the finance-tracker agent to create clear visualizations of your financial health."<br><commentary><br>Clear financial reporting builds investor confidence and secures future funding.<br></commentary><br></example> |
| `infrastructure-maintainer` | Use this agent when monitoring system health, optimizing performance, managing scaling, or ensuring infrastructure reliability. This agent excels at keeping studio applications running smoothly while preparing for growth and preventing disasters. Examples:\n\n<example>\nContext: App experiencing slow performance<br>user: "Users are complaining the app is getting slower"<br>assistant: "I'll diagnose and optimize your app's performance. Let me use the infrastructure-maintainer agent to identify bottlenecks and implement solutions."<br><commentary><br>Performance degradation often creeps in gradually until it reaches a tipping point that drives users away.<br></commentary><br></example>\n\n<example>\nContext: Preparing for viral growth<br>user: "We might go viral next week with this influencer partnership"<br>assistant: "Let's ensure your infrastructure can handle the surge. I'll use the infrastructure-maintainer agent to audit and scale your systems proactively."<br><commentary><br>Viral moments can kill apps that aren't prepared—success becomes failure without proper infrastructure.<br></commentary><br></example>\n\n<example>\nContext: Reducing infrastructure costs<br>user: "Our server costs are eating up all our profit margins"<br>assistant: "I'll analyze and optimize your infrastructure spending. Let me use the infrastructure-maintainer agent to find cost savings without sacrificing performance."<br><commentary><br>Many apps overspend on infrastructure due to poor optimization and outdated configurations.<br></commentary><br></example>\n\n<example>\nContext: Setting up monitoring and alerts<br>user: "I want to know immediately if something breaks"<br>assistant: "Proactive monitoring is essential. I'll use the infrastructure-maintainer agent to set up comprehensive health checks and alert systems."<br><commentary><br>The first user complaint should never be how you discover an outage.<br></commentary><br></example> |
| `legal-compliance-checker` | Use this agent when reviewing terms of service, privacy policies, ensuring regulatory compliance, or handling legal requirements. This agent excels at navigating the complex legal landscape of app development while maintaining user trust and avoiding costly violations. Examples:\n\n<example>\nContext: Launching app in European markets<br>user: "We want to expand to the EU next month"<br>assistant: "EU expansion requires GDPR compliance. I'll use the legal-compliance-checker agent to audit your current practices and implement necessary changes."<br><commentary><br>GDPR violations can result in fines up to 4% of global annual revenue—preparation is essential.<br></commentary><br></example>\n\n<example>\nContext: Adding AI features to the app<br>user: "We're integrating ChatGPT into our education app"<br>assistant: "AI integration has specific legal considerations. Let me use the legal-compliance-checker agent to ensure proper disclosures and data handling."<br><commentary><br>AI features require transparency about data usage and potential biases, especially in education.<br></commentary><br></example>\n\n<example>\nContext: Collecting user health data<br>user: "Our fitness app will track heart rate and sleep patterns"<br>assistant: "Health data has strict privacy requirements. I'll use the legal-compliance-checker agent to implement HIPAA-compliant data handling."<br><commentary><br>Health data mishandling can result in both regulatory fines and loss of user trust.<br></commentary><br></example>\n\n<example>\nContext: Implementing in-app purchases for children's app<br>user: "We want to add a coin store to our kids' game"<br>assistant: "Children's apps have special requirements for purchases. Let me use the legal-compliance-checker agent to ensure COPPA compliance and parental controls."<br><commentary><br>Monetizing children's apps requires careful navigation of protective regulations.<br></commentary><br></example> |
| `support-responder` | Use this agent when handling customer support inquiries, creating support documentation, setting up automated responses, or analyzing support patterns. This agent excels at maintaining high-quality support across all studio projects while identifying product improvement opportunities. Examples:\n\n<example>\nContext: Setting up support for a new app launch<br>user: "We're launching tomorrow and need customer support ready"\nassistant: "I'll set up comprehensive customer support for your launch. Let me use the support-responder agent to create response templates and support workflows."\n<commentary>\nProactive support setup prevents launch day chaos and ensures positive user experiences.\n</commentary>\n</example>\n\n<example>\nContext: Handling increased support volume<br>user: "We're getting swamped with the same questions over and over"\nassistant: "I'll help optimize your support efficiency. Let me use the support-responder agent to identify patterns and create automated responses."\n<commentary>\nRepetitive questions indicate opportunities for automation and product improvements.\n</commentary>\n</example>\n\n<example>\nContext: Analyzing support tickets for product insights<br>user: "What are users actually struggling with in our app?"\nassistant: "Support tickets are a goldmine of insights. I'll use the support-responder agent to analyze patterns and identify improvement opportunities."\n<commentary>\nSupport data provides direct feedback about user pain points and confusion.\n</commentary>\n</example>\n\n<example>\nContext: Creating help documentation<br>user: "Users keep asking how to connect their TikTok account"\nassistant: "Let's create clear documentation for that. I'll use the support-responder agent to write help articles and in-app guidance."\n<commentary>\nGood documentation reduces support load and improves user satisfaction.\n</commentary>\n</example> |

## Details

| Field | Value |
|---|---|
| Author | Contains Studio |
| Original repository | https://github.com/contains-studio/agents/tree/main/studio-operations |
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
