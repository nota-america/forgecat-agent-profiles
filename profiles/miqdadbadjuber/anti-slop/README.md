*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Anti Slop

Review UI, copy, accessibility, responsive layouts, and code comments with six coordinated anti-slop skills.

## Tags

- design
- writing
- accessibility

## Skills

- **antislop** — Anti Slop: Rules for AI Coding Agents. The core filter. Load always to stop generic AI slop.
- **antislop-code** — Code comment hygiene for AI coding agents: remove generic AI-slop comments, keep the valuable ones, never touch the code.
- **antislop-copywriting** — Copy and text skill for antislop. Use when writing or editing prose: headlines, tone, CTAs, and anti-AI-writing patterns. Load with the core.
- **antislop-human** — Human and accessibility skill for antislop. Contrast, keyboard, focus, and states for real people. Includes the contrast checker.
- **antislop-layoutmobile** — Mobile layout skill for antislop. Use for layouts that reflow across screen sizes, phone to desktop: grids, overflow, tap targets. Load with the core.
- **antislop-ui** — UI and visual skill for antislop. Use when building or editing any interface: color, layout, components, motion. Load with the core.

## MCPs

| Server | Transport | URL |
|---|---|---|
| `antislop-contrast` | `stdio` | `node` |

## Details

| Field | Value |
|---|---|
| Author | Miqdad Badjuber |
| Original repository | https://github.com/miqdadbadjuber/anti-slop |
| Version | `0.1.0` |
| Original commit | 3c6cdd7f0dc5423e02b9a0bf70a3d9f1c0da644a |
| License | MIT |
| Source platform | multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Partial |
| Hermes | Partial |

## Dependencies

- None required to install this profile. Individual skills may require tools or credentials documented in their own `SKILL.md` files.

## Usage and installation behavior

This conversion packages the complete six-skill set from upstream 3.2.13. Load `antislop` and the skill for your task, then choose whether to apply it during the work or audit a completed result. The upstream rules, consent questions, numbered audit approvals, and final Delivery Gate stay intact. Supply your design direction separately.

The bound operating instruction provides the existing-install pointer and resolves the upstream source paths to the installed skills. ForgeCat adds its managed `@AGENTS.md` import for Claude Code; existing user instructions remain owned by the user. OpenClaw and Hermes receive the instruction in their home bootstrap files. A fresh session is needed to load new instructions.

The Python contrast checker remains beside `antislop-human/SKILL.md`. Its MCP server and Node launcher retain their original bytes and relative layout under a shared reference directory. Node and Python 3 are needed for MCP; the direct checker needs only Python 3 and the standard library. No account, API key, network request, or package download is used by these helpers.

Upstream registers MCP only in its Claude plugin. This profile additionally delivers that same local server through the standard Cursor and Codex MCP adapters. OpenClaw and Hermes use the upstream Python checker rather than automatic MCP registration. The private release candidate targets complete delivery on Claude Code, Cursor, and Codex. OpenClaw and Hermes remain Partial because automatic MCP registration is not delivered. Native installation and runtime receipts must verify these claims before public release.

This is a local conversion candidate, not a published Registry version. After an approved release, install/update/remove it through ForgeCat as `@forgecat/anti-slop`. Do not run the upstream npm/plugin installers over this managed copy. Upstream's VERSION identifies its source release and is separate from the future ForgeCat Registry version.

The source guide, roadmap, security document and core filter are bundled for reference. Their upstream installation and removal sections describe other distribution routes. Repository navigation and presentation image links point to the pinned upstream commit; npm installer code, development tests, CI, marketplace metadata and artwork are intentionally excluded from the installed package.
