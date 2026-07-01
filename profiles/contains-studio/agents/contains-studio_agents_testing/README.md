![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Contains Studio Testing Agents

Claude Code sub-agents for API testing, performance benchmarking, result analysis, tool evaluation, and workflow optimization.

## Tags

- agents
- claude-code
- testing
- performance
- qa

## Installation

```bash
npx forgecat install @forgecat/contains-studio_agents_testing
```

## Agents

| Agent | Description |
|---|---|
| `api-tester` | Use this agent for comprehensive API testing including performance testing, load testing, and contract testing. This agent specializes in ensuring APIs are robust, performant, and meet specifications before deployment. Examples:\n\n<example>\nContext: Testing API performance under load<br>user: "We need to test if our API can handle 10,000 concurrent users"<br>assistant: "I'll help test your API's performance under load. Let me use the api-tester agent to simulate 10,000 concurrent users and analyze response times, error rates, and resource usage."<br><commentary><br>Load testing prevents embarrassing outages when products go viral.<br></commentary><br></example>\n\n<example>\nContext: Validating API contracts<br>user: "Make sure our API responses match the OpenAPI spec"<br>assistant: "I'll validate your API against the OpenAPI specification. Let me use the api-tester agent to test all endpoints and ensure contract compliance."<br><commentary><br>Contract testing prevents breaking changes that frustrate API consumers.<br></commentary><br></example>\n\n<example>\nContext: API performance optimization<br>user: "Our API is slow, can you identify bottlenecks?"<br>assistant: "I'll analyze your API performance and identify bottlenecks. Let me use the api-tester agent to profile endpoints and provide optimization recommendations."<br><commentary><br>Performance profiling reveals hidden inefficiencies that compound at scale.<br></commentary><br></example>\n\n<example>\nContext: Security testing<br>user: "Test our API for common security vulnerabilities"<br>assistant: "I'll test your API for security vulnerabilities. Let me use the api-tester agent to check for common issues like injection attacks, authentication bypasses, and data exposure."<br><commentary><br>Security testing prevents costly breaches and maintains user trust.<br></commentary><br></example> |
| `performance-benchmarker` | Use this agent for comprehensive performance testing, profiling, and optimization recommendations. This agent specializes in measuring speed, identifying bottlenecks, and providing actionable optimization strategies for applications. Examples:\n\n<example>\nContext: Application speed testing<br>user: "Our app feels sluggish, can you benchmark it?"<br>assistant: "I'll benchmark your application's performance comprehensively. Let me use the performance-benchmarker agent to measure load times, identify bottlenecks, and provide optimization recommendations."<br><commentary><br>Performance benchmarking reveals invisible problems that frustrate users.<br></commentary><br></example>\n\n<example>\nContext: Frontend performance optimization<br>user: "Our website takes 5 seconds to load"<br>assistant: "I'll analyze your website's performance issues. Let me use the performance-benchmarker agent to profile load times, bundle sizes, and rendering performance."<br><commentary><br>Every second of load time costs conversions and user satisfaction.<br></commentary><br></example>\n\n<example>\nContext: Database query optimization<br>user: "Some queries are taking forever"<br>assistant: "I'll profile your database queries to find the slow ones. Let me use the performance-benchmarker agent to analyze query performance and suggest optimizations."<br><commentary><br>Slow queries compound into application-wide performance degradation.<br></commentary><br></example>\n\n<example>\nContext: Mobile app performance<br>user: "Our React Native app is janky on older phones"<br>assistant: "I'll benchmark your app's performance on various devices. Let me use the performance-benchmarker agent to measure frame rates, memory usage, and identify optimization opportunities."<br><commentary><br>Mobile performance issues eliminate huge segments of potential users.<br></commentary><br></example> |
| `test-results-analyzer` | Use this agent for analyzing test results, synthesizing test data, identifying trends, and generating quality metrics reports. This agent specializes in turning raw test data into actionable insights that drive quality improvements. Examples:\n\n<example>\nContext: Analyzing test suite results<br>user: "Our test suite has been flaky lately, can you analyze the patterns?"<br>assistant: "I'll analyze your test suite results to identify flaky patterns. Let me use the test-results-analyzer agent to examine failure trends, timing patterns, and provide stability recommendations."<br><commentary><br>Flaky tests erode confidence and slow development velocity.<br></commentary><br></example>\n\n<example>\nContext: Quality metrics reporting<br>user: "Generate a quality report for this sprint"<br>assistant: "I'll generate a comprehensive quality report for your sprint. Let me use the test-results-analyzer agent to analyze test coverage, defect trends, and quality metrics."<br><commentary><br>Quality metrics make invisible problems visible and actionable.<br></commentary><br></example>\n\n<example>\nContext: Test trend analysis<br>user: "Are our tests getting slower over time?"<br>assistant: "I'll analyze your test execution trends over time. Let me use the test-results-analyzer agent to examine historical data and identify performance degradation patterns."<br><commentary><br>Slow tests compound into slow development cycles.<br></commentary><br></example>\n\n<example>\nContext: Coverage analysis<br>user: "Which parts of our codebase lack test coverage?"<br>assistant: "I'll analyze your test coverage to find gaps. Let me use the test-results-analyzer agent to identify uncovered code paths and suggest priority areas for testing."<br><commentary><br>Coverage gaps are where bugs love to hide.<br></commentary><br></example> |
| `tool-evaluator` | Use this agent when evaluating new development tools, frameworks, or services for the studio. This agent specializes in rapid tool assessment, comparative analysis, and making recommendations that align with the 6-day development cycle philosophy. Examples:\n\n<example>\nContext: Considering a new framework or library<br>user: "Should we use the new Vite 5.0 for our next project?"\nassistant: "I'll evaluate Vite 5.0 for your needs. Let me use the tool-evaluator agent to assess its benefits, migration effort, and impact on development speed."\n<commentary>\nTool choices significantly impact development velocity and should be evaluated systematically.\n</commentary>\n</example>\n\n<example>\nContext: Comparing similar tools or services<br>user: "Supabase vs Firebase vs AWS Amplify - which should we use?"\nassistant: "I'll compare these backend services for your use case. Let me use the tool-evaluator agent to analyze features, pricing, and development speed."\n<commentary>\nBackend service choices affect both development time and long-term costs.\n</commentary>\n</example>\n\n<example>\nContext: Evaluating AI/ML service providers<br>user: "We need to add AI features. OpenAI, Anthropic, or Replicate?"\nassistant: "I'll evaluate these AI providers for your specific needs. Let me use the tool-evaluator agent to compare capabilities, costs, and integration complexity."\n<commentary>\nAI service selection impacts both features and operational costs significantly.\n</commentary>\n</example>\n\n<example>\nContext: Assessing no-code/low-code tools<br>user: "Could Bubble or FlutterFlow speed up our prototyping?"\nassistant: "Let's evaluate if no-code tools fit your workflow. I'll use the tool-evaluator agent to assess the speed gains versus flexibility trade-offs."\n<commentary>\nNo-code tools can accelerate prototyping but may limit customization.\n</commentary>\n</example> |
| `workflow-optimizer` | Use this agent for optimizing human-agent collaboration workflows and analyzing workflow efficiency. This agent specializes in identifying bottlenecks, streamlining processes, and ensuring smooth handoffs between human creativity and AI assistance. Examples:\n\n<example>\nContext: Improving development workflow efficiency<br>user: "Our team spends too much time on repetitive tasks"<br>assistant: "I'll analyze your workflow to identify automation opportunities. Let me use the workflow-optimizer agent to map current processes and recommend optimizations."<br><commentary><br>Workflow optimization can reclaim hours of productive time each week.<br></commentary><br></example>\n\n<example>\nContext: Human-AI collaboration testing<br>user: "Test how well our AI coding assistant integrates with developer workflows"<br>assistant: "I'll evaluate the human-AI collaboration effectiveness. Let me use the workflow-optimizer agent to measure handoff efficiency and identify friction points."<br><commentary><br>Smooth human-AI collaboration multiplies productivity rather than just adding to it.<br></commentary><br></example>\n\n<example>\nContext: Process bottleneck analysis<br>user: "Our deployment process takes too long"<br>assistant: "I'll analyze your deployment workflow for bottlenecks. Let me use the workflow-optimizer agent to time each step and identify optimization opportunities."<br><commentary><br>Deployment bottlenecks compound, turning minutes into hours across releases.<br></commentary><br></example>\n\n<example>\nContext: Tool integration efficiency<br>user: "Are we using our tools effectively together?"<br>assistant: "I'll analyze your tool integration and usage patterns. Let me use the workflow-optimizer agent to identify redundancies and missing automations."<br><commentary><br>Poor tool integration creates hidden time taxes on every task.<br></commentary><br></example> |

## Details

| Field | Value |
|---|---|
| Author | Contains Studio |
| Original repository | https://github.com/contains-studio/agents/tree/main/testing |
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
