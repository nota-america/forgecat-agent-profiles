# Draft PR: VoltAgent/awesome-agent-skills listing

This is a draft only. Do not submit without Gareth's approval.

## Target repository

- Repository: `VoltAgent/awesome-agent-skills`
- File: `README.md`
- Section: `Community Skills` → `Specialized Domains`

## Why this section

The awesome list does not currently have an Education category. Its contribution guide says to add community entries to the closest matching subcategory, or `Other` if no category fits. `Specialized Domains` is the cleanest current fit for an education-specific skill library.

## Proposed PR title

```text
Add skill: GarethManning/education-agent-skills
```

## Proposed README entry

Add this to the end of `Community Skills` → `Specialized Domains`:

```markdown
- **[GarethManning/education-agent-skills](https://github.com/GarethManning/education-agent-skills)** - Evidence-based education skills for curriculum, assessment, and learning
```

The description is 8 words after the dash, within the repository's “10 words or fewer” requirement.

## Proposed PR body

```markdown
## Summary

Adds the Education Agent Skills Library to the Community Skills → Specialized Domains section.

## Why it fits

- Public GitHub repository with working `SKILL.md` files.
- 165 education skills across 20 domains.
- Supports Claude Code, Codex, Hermes Agent selected installs, and a read-only hosted MCP server.
- Includes README, evidence standards, exclusions, privacy notes, and contribution guidance.
- Education is a specialised domain not currently represented in the list.

## Link checked

- https://github.com/GarethManning/education-agent-skills
```

## Contribution-guide caveat

Their `CONTRIBUTING.md` says skills should have “real community usage” and may reject brand-new skills. If submitting now, the PR should foreground that the repository is a mature public library rather than a just-created single skill. If we want a lower-risk submission, wait until the Hermes docs are merged and there is visible external usage.
