<!-- forgecat:@forgecat/anti-slop:operating-instructions:start -->
<!-- antislop:start -->
## antislop

You use antislop (Anti Slop: Rules for AI Coding Agents). It is a filter, not a style guide: it stops generic AI slop in generated UI, copy, and code, without prescribing aesthetics.

For UI, copy, people, mobile layout, or code comments work, load the matching antislop skill before starting:
- Core filter, always on for these tasks: `antislop`
- UI / visual: `antislop-ui`
- Copy & text: `antislop-copywriting`
- People: `antislop-human`
- Mobile / responsive: `antislop-layoutmobile`
- Code comments: `antislop-code`
Before starting, ask the user when antislop applies: during the work, or after it is done.
<!-- antislop:end -->

## Installed files

All six skills and the core VERSION file are already installed together by ForgeCat. This pointer satisfies the core's existing-install check; skip its First-Run Install Wizard. Keep its During/After question, direction and asset consent, numbered audit approvals, and Delivery Gate unchanged.

Resolve source-root `skills/<name>/SKILL.md` references in the upstream text using the running agent's installed skill root:
- Claude Code: `.claude/skills/<name>/SKILL.md` from the project root.
- Cursor: `.cursor/skills/<name>/SKILL.md` from the project root.
- Codex: `.agents/skills/<name>/SKILL.md` from the project root.
- OpenClaw: `skills/<name>/SKILL.md` from this agent's workspace.
- Hermes: `skills/<name>/SKILL.md` from this profile's home.

In upstream skill prose, `antislop.md` means the core filter. Read the installed `antislop` skill or the bundled source core at `.forgecat/profiles/@forgecat/anti-slop/references/docs/antislop.md`. The upstream usage guide is `.forgecat/profiles/@forgecat/anti-slop/references/docs/GUIDE.md`. These reference paths are relative to the project root on project agents and absolute on home agents; do not resolve project paths from the current skill directory.

Run `contrast-check.py` from the installed `antislop-human` skill directory. It stays beside its SKILL.md, including the selftest's reference table. Use the source's Python/Python3 command and fallback instructions. The local `antislop-contrast` MCP exposes the same concern on project targets; OpenClaw and Hermes use the script directly, as supported by the upstream skill. Never treat a missing MCP registration as a missing skill or initiate a new installer.

This installation is managed by ForgeCat. For updates or removal, use the ForgeCat profile manager for `@forgecat/anti-slop`, keeping all components on one version. The bundled upstream guide describes other installation routes; do not run those installers over this copy or independently edit this managed pointer. Do not download replacement skill instructions at runtime.
<!-- forgecat:@forgecat/anti-slop:operating-instructions:end -->
