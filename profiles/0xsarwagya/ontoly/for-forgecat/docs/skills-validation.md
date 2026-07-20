---
title: "Skills Validation"
description: "Validate Ontoly Agent Skill metadata, references, templates, examples, installed artifacts, and release-gate behavior."
---

Run:

```bash
ontoly skills validate
```

CI should run:

```bash
ontoly skills validate --ci
```

The validator checks:

- `SKILL.md` exists
- frontmatter is valid
- skill name matches directory
- required metadata exists
- skill enhancement is the mandatory `LLM Enhancement`
- capability requirements are known Ontoly MCP capabilities
- README, examples, templates, and reference files exist
- local Markdown links resolve
- local installed-artifact references are used
- templates include repository, question, capabilities, evidence, and confidence
- examples cover Ovok Core, Ghost, durable-local, 0xsarwagya, and Innosphere
- agent evaluation passes

Agent evaluation verifies that each skill:

- uses Ontoly
- uses MCP
- avoids unnecessary repository search
- requires LLM Enhancement
- produces evidence
- produces confidence
- falls back gracefully

Reports are written to `validation/skills/`.

CI also runs installed-artifact validation. It installs a single skill and the
full skill collection into temporary workspaces, then validates those installed
folders rather than only the source repository.
