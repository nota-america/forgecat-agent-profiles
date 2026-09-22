---
name: forgecat-authoring
description: Write or fix a profile.yml — pick the right resource kind for each file, bind operating references, and verify the install layout before publishing. Use when creating a ForgeCat profile, adding a skill/agent/rule/hook to one, or when `forgecat validate` or `plan` reports something unexpected.
---

# Authoring a profile

## 1. Sort every file first

This is the judgment the CLI can't make for you — decide it once, at the door.

| The file is | Declare as | Lands as |
|---|---|---|
| a capability invoked by name | `skills:` (path must end in `SKILL.md`) | `.claude/skills/<name>/SKILL.md`, `.agents/skills/…` |
| a named sub-agent persona | `agents:` | platform-specific agent file |
| guidance auto-applied to globs | `rules:` | Cursor `.cursor/rules/`, converted elsewhere |
| a slash-command snippet | `commands:` | `/name` |
| MCP server config | `mcp:` (one `mcp.jsonc`) | platform MCP config |
| a script on a tool event | `hooks:` | translated per platform |
| **the operating manual, or any bundled asset** | `references:` **+ a role binding** | root `AGENTS.md` section / co-install |

`forgecat init` scaffolds every kind above **except `references` and
`instructions`** — they aren't in the template. That's the most common way an
operating manual ends up mis-declared as a rule.

## 2. Operating instructions take two lines, not one

    references:
      - id: agents-md
        path: AGENTS.md
        type: operating-instructions
    instructions:
      operatingRef: agents-md

Dropping an `AGENTS.md` in the repo root does nothing by itself — `scan` calls it
`type: other`, `trackable: false`, and `plan` installs zero files. **The declaration
is what counts, not the filename.**

Role-typed references must be bound or install rejects them as inert:
`persona`→`personaRef`, `identity`→`identityRef`,
`operating-instructions`→`operatingRef`, `tool-conventions`→`additionalRefs`.

Only **operating** reaches every platform. `persona` / `identity` /
`tool-conventions` are written to files on **home-target platforms only**
(OpenClaw, Hermes); on Claude Code, Cursor and Codex they co-install as assets and
nothing more. If the content must reach every user, it goes in operating.

## 3. Keep companion files with the skill

A skill can include companion files under its directory, such as
references/ and scripts/. Standard installation preserves their relative
paths alongside SKILL.md. Declare executable scripts in skills[].scripts.

Profile-level references declared separately in profile.yml are
co-installed under .forgecat/profiles/@scope/name/. Use a declared
reference token to reach those assets.

Check relative links against the installed layout. Links to sibling
skills or project-root files need separate verification.

## 4. The loop

    forgecat init .     # scaffold
    forgecat scan       # find files on disk that aren't declared
    forgecat track      # add them interactively
    forgecat validate   # schema, names, paths, hooks — no network
    forgecat plan       # what lands where, per platform — no writes

**When `scan` and `plan` disagree, `plan` wins.** `scan` guesses from files on disk;
`plan` reads declarations. A `scan` warning that a reference "will be dropped at
install" is often a false alarm — read `plan` before changing anything.

But `plan` shows where declared resources land, not everything install does. It
won't mention the `CLAUDE.md` import shim or co-installed reference assets, so the
file count after install can exceed the plan. `plan` is authoritative about
placement, not about the total.

You can't test-install from a local path (`Only registry sources are supported`).
`validate` + `plan` is as far as verification goes before you publish.

## Verify

    forgecat validate && forgecat plan

🐾✓ when both come back clean.
