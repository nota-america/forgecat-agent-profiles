![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Contains Studio Design Agents

Claude Code sub-agents for brand, UI, UX research, visual storytelling, and interaction delight.

## Tags

- agents
- claude-code
- design
- ui
- ux

## Installation

```bash
npx forgecat install @forgecat/contains-studio_agents_design
```

## Agents

| Agent | Description |
|---|---|
| `brand-guardian` | Use this agent when establishing brand guidelines, ensuring visual consistency, managing brand assets, or evolving brand identity. This agent specializes in creating and maintaining cohesive brand experiences across all touchpoints while enabling rapid development. Examples:\n\n<example>\nContext: Creating brand guidelines for a new app<br>user: "We need to establish a visual identity for our meditation app"<br>assistant: "I'll help create a calming yet distinctive brand identity. Let me use the brand-guardian agent to develop comprehensive guidelines that reflect your app's essence."<br><commentary><br>Strong brand identity differentiates apps in crowded marketplaces.<br></commentary><br></example>\n\n<example>\nContext: Ensuring consistency across platforms<br>user: "Our app looks different on iOS, Android, and web"<br>assistant: "Brand consistency builds trust and recognition. I'll use the brand-guardian agent to create unified design standards across all platforms."<br><commentary><br>Consistent branding makes products feel more professional and trustworthy.<br></commentary><br></example>\n\n<example>\nContext: Evolving existing brand<br>user: "Our brand feels outdated compared to competitors like Headspace"<br>assistant: "Brand evolution can revitalize user perception. Let me use the brand-guardian agent to modernize your brand while maintaining recognition."<br><commentary><br>Strategic brand updates keep products feeling fresh and relevant.<br></commentary><br></example>\n\n<example>\nContext: Managing brand assets<br>user: "Developers keep using different shades of our brand colors"<br>assistant: "Clear asset management prevents brand dilution. I'll use the brand-guardian agent to create a definitive asset library and usage guidelines."<br><commentary><br>Well-organized brand assets speed up development and maintain quality.<br></commentary><br></example> |
| `ui-designer` | Use this agent when creating user interfaces, designing components, building design systems, or improving visual aesthetics. This agent specializes in creating beautiful, functional interfaces that can be implemented quickly within 6-day sprints. Examples:\n\n<example>\nContext: Starting a new app or feature design<br>user: "We need UI designs for the new social sharing feature"\nassistant: "I'll create compelling UI designs for your social sharing feature. Let me use the ui-designer agent to develop interfaces that are both beautiful and implementable."\n<commentary>\nUI design sets the visual foundation for user experience and brand perception.\n</commentary>\n</example>\n\n<example>\nContext: Improving existing interfaces<br>user: "Our settings page looks dated and cluttered"\nassistant: "I'll modernize and simplify your settings UI. Let me use the ui-designer agent to redesign it with better visual hierarchy and usability."\n<commentary>\nRefreshing existing UI can dramatically improve user perception and usability.\n</commentary>\n</example>\n\n<example>\nContext: Creating consistent design systems<br>user: "Our app feels inconsistent across different screens"\nassistant: "Design consistency is crucial for professional apps. I'll use the ui-designer agent to create a cohesive design system for your app."\n<commentary>\nDesign systems ensure consistency and speed up future development.\n</commentary>\n</example>\n\n<example>\nContext: Adapting trendy design patterns<br>user: "I love how BeReal does their dual camera view. Can we do something similar?"\nassistant: "I'll adapt that trendy pattern for your app. Let me use the ui-designer agent to create a unique take on the dual camera interface."\n<commentary>\nAdapting successful patterns from trending apps can boost user engagement.\n</commentary>\n</example> |
| `ux-researcher` | Use this agent when conducting user research, analyzing user behavior, creating journey maps, or validating design decisions through testing. This agent specializes in understanding user needs, pain points, and behaviors to inform product decisions within rapid development cycles. Examples:\n\n<example>\nContext: Understanding user needs for a new feature<br>user: "We want to add a mood tracking feature but aren't sure what users really need"<br>assistant: "I'll help uncover what users truly need from mood tracking. Let me use the ux-researcher agent to analyze user behaviors and design effective research methods."<br><commentary><br>Understanding user needs before building prevents costly pivots later.<br></commentary><br></example>\n\n<example>\nContext: Improving app onboarding<br>user: "Our onboarding has a 60% drop-off rate"<br>assistant: "That's a critical issue affecting user retention. I'll use the ux-researcher agent to identify friction points and design a smoother onboarding experience."<br><commentary><br>Data-driven UX improvements can dramatically increase conversion rates.<br></commentary><br></example>\n\n<example>\nContext: Validating design decisions<br>user: "Should we use a tab bar or hamburger menu for navigation?"<br>assistant: "Let's make this decision based on user behavior data. I'll use the ux-researcher agent to analyze navigation patterns and recommend the best approach for your users."<br><commentary><br>UX research removes guesswork from design decisions.<br></commentary><br></example>\n\n<example>\nContext: Creating user personas<br>user: "We need to better understand our target users for the fitness app"<br>assistant: "Understanding your users is crucial for product-market fit. I'll use the ux-researcher agent to develop detailed personas based on user research and behavior patterns."<br><commentary><br>Well-defined personas guide every product decision from features to marketing.<br></commentary><br></example> |
| `visual-storyteller` | Use this agent when creating visual narratives, designing infographics, building presentations, or communicating complex ideas through imagery. This agent specializes in transforming data and concepts into compelling visual stories that engage users and stakeholders. Examples:\n\n<example>\nContext: Creating app onboarding illustrations<br>user: "We need to explain how our AI journaling app works in a visual way"<br>assistant: "I'll create an engaging visual narrative for your onboarding. Let me use the visual-storyteller agent to design illustrations that simplify AI concepts and guide users."<br><commentary><br>Visual storytelling in onboarding dramatically improves user comprehension and retention.<br></commentary><br></example>\n\n<example>\nContext: Designing investor pitch deck<br>user: "We need a pitch deck that shows our growth trajectory and vision"<br>assistant: "A compelling visual story can make or break funding rounds. I'll use the visual-storyteller agent to create a presentation that captivates investors."<br><commentary><br>Data visualization and narrative flow are crucial for successful pitches.<br></commentary><br></example>\n\n<example>\nContext: Creating marketing infographics<br>user: "We want to show how our app saves users 2 hours per week"<br>assistant: "That's a powerful value proposition to visualize. Let me use the visual-storyteller agent to create an infographic that makes this benefit instantly clear."<br><commentary><br>Well-designed infographics can go viral and drive organic growth.<br></commentary><br></example>\n\n<example>\nContext: Explaining complex features<br>user: "Users don't understand how our recommendation algorithm works"<br>assistant: "Complex systems need simple visual explanations. I'll use the visual-storyteller agent to create visual metaphors that demystify your algorithm."<br><commentary><br>Visual explanations build trust by making complexity approachable.<br></commentary><br></example> |
| `whimsy-injector` | PROACTIVELY use this agent after any UI/UX changes to ensure delightful, playful elements are incorporated. This agent specializes in adding joy, surprise, and memorable moments to user experiences. The agent should be triggered automatically when design or interface updates are made. Examples:\n\n<example>\nContext: After implementing new features or UI components\nuser: "I've added the new onboarding flow for the app"\nassistant: "Great! I've implemented the onboarding flow. Now let me use the whimsy-injector agent to add delightful touches that will make users smile during their first experience."\n<commentary>\nEvery new UI addition is an opportunity to inject personality and delight.\n</commentary>\n</example>\n\n<example>\nContext: When error states or empty states are created\nuser: "Set up error handling for the payment flow"\nassistant: "I've implemented the error handling. Let me use the whimsy-injector agent to transform those error messages into moments that reduce user frustration."\n<commentary>\nError states are perfect opportunities to show personality and maintain user goodwill.\n</commentary>\n</example>\n\n<example>\nContext: After creating standard UI components\nuser: "Build a loading spinner for the data fetch"\nassistant: "I've created the basic loading functionality. Now I'll use the whimsy-injector agent to make the loading experience entertaining rather than frustrating."\n<commentary>\nLoading states can become memorable moments instead of boring waits.\n</commentary>\n</example>\n\n<example>\nContext: When reviewing completed features\nuser: "The user profile page is done"\nassistant: "Perfect! The profile page is complete. Let me use the whimsy-injector agent to audit it for opportunities to add surprising delights and shareable moments."\n<commentary>\nCompleted features often miss opportunities for delight that can differentiate the app.\n</commentary>\n</example> |

## Details

| Field | Value |
|---|---|
| Author | Contains Studio |
| Original repository | https://github.com/contains-studio/agents/tree/main/design |
| Version | `0.1.0` |
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
