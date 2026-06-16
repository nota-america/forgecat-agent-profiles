# Contributing to ForgeCat Agent Profiles

Thanks for helping improve the ForgeCat profile catalog. This repository exists to make useful agent workflows easy to find, inspect, install, and improve across Claude Code, Cursor, and Codex.

## What to Contribute

Good contributions include:

- New profiles converted from public source repositories
- Fixes for profiles that install incorrectly
- Missing `for-<platform>` artifacts after real platform testing
- README improvements that make profiles easier to understand and install
- License, source attribution, and metadata corrections
- Issue reports with exact install/runtime failures

Please keep changes focused. A PR should usually touch one profile, one collection, or one repo-level maintenance concern.

## Profile Requirements

Every profile must have a canonical ForgeCat source directory:

```text
profiles/<source-owner>/<source-repository-or-collection>/<profile-name>/for-forgecat/
```

Small single-profile repositories may use:

```text
profiles/<source-owner>/<source-repository>/for-forgecat/
```

The canonical package must include:

- `for-forgecat/profile.yml`
- A useful README for the profile or collection
- Source attribution back to the original repository
- License metadata when the original source provides it
- Only files needed for the profile to work

## Source Fidelity

Profiles should preserve the behavior and intent of the original source repository.

Before converting or changing a profile:

1. Inspect the upstream repository directly.
2. Check the actual files being packaged, not only README prose.
3. Do not invent commands, skills, agents, hooks, or MCP servers that are not present in the source unless the PR clearly explains the compatibility shim.
4. Preserve relative file references used by skills, scripts, hooks, and MCP configuration.
5. Keep original wording where it affects tool behavior.

If a profile intentionally differs from upstream behavior, call that out in the PR.

## License and Attribution

Each profile can carry content from a different upstream project, so license review is required.

Before opening a PR:

1. Check the upstream repository for `LICENSE`, `LICENSE.md`, `LICENSE.txt`, package metadata, and README license notes.
2. Use an SPDX identifier in `for-forgecat/profile.yml` when the license is clear.
3. Include the upstream repository URL in `repository`.
4. Keep license files from the upstream source when they are part of the package.
5. Do not mark an unknown license as permissive.

If the license is missing or ambiguous, open an issue before publishing the profile publicly.

## Platform Compatibility

ForgeCat supports:

| Platform | Profile id |
|---|---|
| Claude Code | `claude-code` |
| Cursor | `cursor` |
| Codex | `codex` |

Use `compatibility.platforms.tested` only after a real install/runtime check in that platform.

When a platform is marked tested:

- The matching native artifact should exist in the profile directory:
  - `for-claude/` for Claude Code
  - `for-cursor/` for Cursor
  - `for-codex/` for Codex
- The PR should describe the install command, runtime surface, and result.
- README platform tables and `for-forgecat/profile.yml` should agree.

Use `compatibility.platforms.partial` for profiles that install but have known limitations.

## Validation

Run validation from the canonical package directory:

```bash
cd profiles/<source-owner>/<source-repository-or-collection>/<profile-name>/for-forgecat
forgecat validate
```

For stricter local checks, also run:

```bash
forgecat validate --strict
```

Before submitting a repo-level documentation change, run:

```bash
ruby scripts/check-readme-catalog.rb
```

## Pull Requests

Open a PR with:

- The source repository URL
- A short summary of what changed
- License evidence
- Validation results
- Platform install/runtime evidence when compatibility metadata changed
- Notes for known limitations or intentional behavior changes

Keep generated files, local tool state, and unrelated profile changes out of the PR.

## Issues and Profile Requests

Use the issue templates for:

- Broken installs or runtime failures
- New profile requests
- Requests to test or add support for another platform

Include exact commands, error output, profile name, ForgeCat CLI version, platform, and workspace details when reporting a failure.
