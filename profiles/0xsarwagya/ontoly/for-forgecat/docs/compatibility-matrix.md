---
title: "Compatibility Matrix"
description: "Runtime, package, Software Graph, Agent Skill, MCP, CLI, and release compatibility for Ontoly Release Candidate builds."
---

| Surface | Version | Status |
| ------- | ------- | ------ |
| Ontoly packages | 1.0.0-rc.5 | Release Candidate |
| Node.js | 20+ | Supported |
| pnpm | 10+ | Supported |
| TypeScript | 5.9 | Supported |
| Package module format | ESM | Supported |
| Software Graph Spec | 1.0 draft | Supported |
| Agent Skills | Vercel-style `SKILL.md` folders | Supported |
| MCP transport | JSON lines through CLI runtime | Release Candidate |

## Package Compatibility

All public packages are published under `@0xsarwagya/ontoly-*`.

## Skill Compatibility

Skills declare:

- Skill version.
- Minimum Ontoly version.
- Capability requirements.

See [skills/COMPATIBILITY_MATRIX.md](../skills/COMPATIBILITY_MATRIX.md).
