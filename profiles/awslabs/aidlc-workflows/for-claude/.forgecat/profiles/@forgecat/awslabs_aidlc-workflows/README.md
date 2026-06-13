*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# AI-DLC Workflows (AWS)

Converted rule bundle for teams using AI-DLC core workflow with detailed stage rules.

## Tags

- ai-dlc
- workflow
- rules
- aws

## Installation

```bash
npx forgecat install @forgecat/awslabs_aidlc-workflows
```

## Skills

- None (rule-only profile)

## Rules

- **aws-aidlc-rules/core-workflow.md** — primary AI-DLC workflow entrypoint rule.
- **aws-aidlc-rule-details/common/** — shared process, validation, and formatting rules.
- **aws-aidlc-rule-details/inception/** — planning and requirement phase rules.
- **aws-aidlc-rule-details/construction/** — implementation/build/test phase rules.
- **aws-aidlc-rule-details/extensions/** — optional security/testing extension rules.
- **aws-aidlc-rule-details/operations/** — operations-stage rule set.

## Details

| Field | Value |
|---|---|
| Author | AWS Labs |
| Original repository | https://github.com/awslabs/aidlc-workflows |
| Version | `0.0.3` |
| Original commit | 182b6e9edcbfca5357987ed22dccc8582ee52288 |
| License | MIT-0 |
| Source platform | Multi-agent rules (Claude Code, Cursor) |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Partial |

## Dependencies

- None
