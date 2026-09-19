<!-- AUTO-GENERATED from SKILL.md.tmpl — do not edit directly -->
<!-- Regenerate: bun run gen:skill-docs -->
> **Safety Advisory:** This skill includes safety checks that check bash commands for destructive operations (rm -rf, DROP TABLE, force-push, git reset --hard, etc.) before execution, and verify file edits are within the allowed scope boundary before applying, and verify file writes are within the allowed scope boundary before applying. When using this skill, always pause and verify before executing potentially destructive operations. If uncertain about a command's safety, ask the user for confirmation before proceeding.


# /guard — Full Safety Mode

Activates both destructive command warnings and directory-scoped edit restrictions.
This is the combination of `/careful` + `/freeze` in a single command.

**Dependency note:** This skill references hook scripts from the sibling `/careful`
and `/freeze` skill directories. Both must be installed (they are installed together
by the gstack setup script).

```bash
mkdir -p ~/.gstack/analytics
echo '{"skill":"guard","ts":"'$(date -u +%Y-%m-%dT%H:%M:%SZ)'","repo":"'$(basename "$(git rev-parse --show-toplevel 2>/dev/null)" 2>/dev/null || echo "unknown")'"}'  >> ~/.gstack/analytics/skill-usage.jsonl 2>/dev/null || true
```

## Setup

Ask the user which directory to restrict edits to. Use AskUserQuestion:

- Question: "Guard mode: which directory should edits be restricted to? Destructive command warnings are always on. Files outside the chosen path will be blocked from editing."
- Text input (not multiple choice) — the user types a path.

Once the user provides a directory path:

1. Resolve it to an absolute path:
```bash
FREEZE_DIR=$(cd "<user-provided-path>" 2>/dev/null && pwd)
echo "$FREEZE_DIR"
```

2. Ensure trailing slash and save to the freeze state file:
Call the native `gstack_control` tool with `operation: "activate"`, `mode: "guard"`, and the resolved absolute `boundary`. Only report protection active after the tool confirms success. If the tool is unavailable, stop and complete native setup; do not substitute a prose warning.

Tell the user:
- "**Guard mode active.** Two protections are now running:"
- "1. **Destructive command guard** — rm -rf, DROP TABLE, force-push, etc. warn before executing (overridable); catastrophic shapes (recursive delete of / or ~, force-push to the default branch) are hard-denied"
- "2. **Edit boundary** — file edits restricted to `<path>/`. Edits outside this directory are blocked."
- "To remove the edit boundary, run `/unfreeze`. To deactivate everything, end the session."

## What's protected

See `/careful` for the full list of destructive command patterns and safe exceptions.
See `/freeze` for how edit boundary enforcement works.
