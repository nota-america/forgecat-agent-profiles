## Summary

<!-- What changed, and why? Keep this short and concrete. -->

## Scope

- [ ] New profile
- [ ] Existing profile fix
- [ ] Platform artifact or compatibility update
- [ ] README, metadata, or license correction
- [ ] Repo maintenance

## Source and License

- Source repository:
- Source path or subdirectory:
- License evidence:

Checklist:

- [ ] I inspected the upstream source repository directly.
- [ ] I preserved source attribution in the profile README or metadata.
- [ ] I confirmed the license and reflected it in `for-forgecat/profile.yml`.
- [ ] I did not add files that are unrelated to the profile runtime.

## Validation

Commands run:

```text

```

Results:

```text

```

Checklist:

- [ ] `forgecat validate` passes from the profile's `for-forgecat/` directory.
- [ ] README install commands and profile metadata agree.
- [ ] No secrets, local state, logs, or generated tool cache files are included.

## Profile Conversion Review Checklist

Complete this table for new profiles, profile fixes, and platform compatibility updates.

| Review item | Required detail |
|---|---|
| Internal file edits | List any edits made inside copied upstream files. Write `None` if upstream files were preserved without internal edits. |
| Behavior parity risk | Explain whether the conversion could change upstream behavior. Include the reason and mitigation for any non-low risk. |
| Platform install/runtime | For each tested platform, include the install command, installed skill/agent/hook/command/MCP surface exercised, and exact result. |
| Notes / special cases | Record partial support, auth requirements, MCP prompts, unsupported files, source limitations, or other reviewer context. |

## Platform Evidence

Complete this section when `compatibility.platforms` changes.

| Platform | Status | Install command | Runtime surface tested | Result |
|---|---|---|---|---|
| Claude Code | not tested |  |  |  |
| Cursor | not tested |  |  |  |
| Codex | not tested |  |  |  |

Checklist:

- [ ] Tested platforms have matching native `for-<platform>` directories.
- [ ] Partial platforms list known limitations.
- [ ] Runtime testing exercised the installed skill, agent, hook, command, or MCP surface, not only a generic prompt.

## Notes

<!-- Known limitations, intentional source differences, reviewer context. -->
