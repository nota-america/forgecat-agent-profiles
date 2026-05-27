![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# gstack

Self-contained Forgecat conversion of [garrytan/gstack](https://github.com/garrytan/gstack), an AI engineering workflow stack for planning, review, QA, security, browser automation, design, deployment, iOS workflows, documentation, and OpenClaw companion skills.

## Installation

```bash
npx forgecat install @forgecat/garrytan_gstack
```

## Conversion Notes

This profile vendors the functional gstack runtime under:

```text
for-forgecat/skills/garrytan-gstack/
```

Forgecat only installs standard resources such as `skills/`, `agents/`, `rules/`, `commands/`, hooks, and MCP files. Source folders such as `bin/`, `lib/`, `hosts/`, `design/`, `openclaw/`, `scripts/`, and `docs/` are therefore placed inside the main skill directory so they are preserved during install.

The root `for-forgecat/` directory intentionally contains only profile metadata plus `skills/`:

```text
for-forgecat/
  profile.yml
  README.md
  LICENSE
  skills/garrytan-gstack/
    bin/
    browse/
    docs/
    hosts/
    lib/
    openclaw/
    scripts/
    */SKILL.md
```

## Included Skills

The manifest declares 58 installable `SKILL.md` files from the source tree, including the root `gstack` skill, browser workflow skills, planning/review/QA/deploy skills, iOS skills, gbrain setup/sync skills, OpenClaw companion skills, and the `connect-chrome` compatibility alias.

## Source

| Field | Value |
|---|---|
| Original repository | https://github.com/garrytan/gstack |
| Source commit | `22f8c7f` |
| Source platform | Claude Code |
| Forgecat version | `0.0.2` |
| License | MIT |

## Compatibility

| Platform | Status |
|---|---|
| Claude Code | Tested source platform |
| Cursor | Partial |
| Codex | Partial |
