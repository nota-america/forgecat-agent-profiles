# Dead Code Analysis

This is an official Ontoly Agent Skill. It is independently installable and teaches an agent how to use Ontoly for dead code analysis.

## Version

- Skill version: 1.0.0-rc.5
- Minimum Ontoly version: 1.0.0-rc.5
- Required capabilities: `FindDeadCode`, `FindUnusedFeature`, `FindEntrypoints`, `FindDependents`, `EvidencePack`
- Enhancement: LLM Enhancement
- Deprecated: no

## Install

Install this skill with any Agent Skills compatible installer that supports `SKILL.md` directories, or copy this folder into your agent skills directory.

## Use

Ask the agent a task such as:

> Which nodes lack inbound usage?

The agent should build or verify the Ontoly graph, use MCP capabilities, cite evidence, and only inspect files as a fallback.

## Public Docs

- [Agent Skills](https://oss.sarwagya.wtf/ontoly/docs/agent-skills)
- [Skills Overview](https://oss.sarwagya.wtf/ontoly/docs/skills-overview)
- [MCP](https://oss.sarwagya.wtf/ontoly/docs/mcp)
- [Capabilities](https://oss.sarwagya.wtf/ontoly/docs/capabilities)
- [Skills Validation](https://oss.sarwagya.wtf/ontoly/docs/skills-validation)

## Shared References

This skill depends on the shared Ontoly workflow in [reference/workflow.md](reference/workflow.md).

## Learn more

- Documentation: https://ontoly.sarwagya.wtf/docs
- This skill on the web: https://ontoly.sarwagya.wtf/skills#dead-code-analysis
- All Ontoly Agent Skills: https://ontoly.sarwagya.wtf/skills
- Install via skills.sh: https://www.skills.sh/?q=0xsarwagya/ontoly
