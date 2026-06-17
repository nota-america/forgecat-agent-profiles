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

## Converter Agent Checklist

Complete this section for profile conversions, profile fixes, and platform compatibility updates. For repo maintenance PRs, mark non-applicable rows `N/A`.

### At a glance

| Field | Value |
|---|---|
| Profile |  |
| Source repo |  |
| Profile PR |  |
| Registry version |  |
| Overall status |  |
| Main caveat |  |
| Operator next action |  |

### Review checklist

| Area | Status | Evidence | Risk / next action | Notes / special cases |
|---|---|---|---|---|
| PR scope |  |  |  |  |
| Profile identity |  |  |  |  |
| Source inventory |  |  |  |  |
| Converted components |  |  |  |  |
| Internal file edits |  |  |  |  |
| Behavior parity risk |  |  |  |  |
| Manifest/schema |  |  |  |  |
| README/docs |  |  |  |  |
| QA findings |  |  |  |  |
| Validation gates |  |  |  |  |
| Registry/version |  |  |  |  |
| Platform install/runtime |  |  |  |  |
| Native artifacts |  |  |  |  |
| License/security |  |  |  |  |
| Archive/history |  |  |  |  |
| Operator decision |  |  |  |  |

Checklist:

- [ ] Tested platforms have matching native `for-<platform>` directories.
- [ ] Partial platforms list known limitations.
- [ ] Runtime testing exercised the installed skill, agent, hook, command, or MCP surface, not only a generic prompt.
- [ ] The same filled checklist is included in the converter agent's final reply.

## Notes

<!-- Known limitations, intentional source differences, reviewer context. -->
