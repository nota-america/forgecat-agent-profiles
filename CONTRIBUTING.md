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
2. Use an SPDX identifier in `for-forgecat/profile.yml` when the license is clear, or `LicenseRef-<name>` when the terms are custom.

   A new profile may declare `MIT`, `MIT-0`, `Apache-2.0`, `BSD-2-Clause`,
   `BSD-3-Clause`, `ISC`, `0BSD`, `CC0-1.0`, or `Unlicense` without further
   discussion. Copyleft (GPL, LGPL, AGPL, MPL), the Creative Commons licenses,
   and any `LicenseRef-*` carry obligations that depend on what the profile does
   rather than what it declares — ForgeCat converts packages and redistributes
   them, so share-alike and non-commercial terms need a decision before the
   files are copied. Open an issue with the redistribution terms instead of
   opening a PR.
3. Point `repository` at the exact commit the profile was built from, using the full
   40-character SHA, not a branch. A branch URL moves, so it cannot show which terms
   applied when the files were copied. Record the same revision in
   `scripts/license-matches.tsv` once the profile's files have been compared against it.
4. Keep license files from the upstream source when they are part of the package.
5. Do not mark an unknown license as permissive.

`scripts/check-license-evidence.rb` runs on the profiles a PR touches and requires
each one to redistribute its evidence in one of three forms:

- an upstream `LICENSE*` file kept inside `for-forgecat/`
- a `for-forgecat/LICENSE-SOURCE.md`, for upstreams that declare their terms
  somewhere other than a license file
- a file shipped in `for-forgecat/` whose frontmatter carries the upstream
  author's own `license:` line

`for-forgecat/LICENSE-SOURCE.md` needs an `upstream:` line linking the pinned path the terms
were read from, a `scope:` line naming the files they cover, an `exceptions:`
line, and the upstream's own wording quoted in a `>` block. It records what the
upstream said, not a license we grant on their behalf — if the upstream never
declared terms, the profile is not ready to publish.

Only a real YAML frontmatter block counts for the third form. A `license:` line
in prose or in a profile's own metadata table restates the manifest field rather
than evidencing it.

Profiles listed in `scripts/license-baseline.txt` predate these rules and are held
to the license-string check only. That list may only shrink: remove a profile from
it in the same PR that gives it a pinned source and its evidence. Adding an entry
fails the check, and the profile is held to the full rules anyway.

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

When changing profile platform metadata or native artifacts, run:

```bash
ruby scripts/check-profile-artifacts.rb --changed-only origin/main...HEAD
```

To audit the whole repository, run:

```bash
ruby scripts/check-profile-artifacts.rb
```

For a license provenance report across every profile, run:

```bash
ruby scripts/license-audit.rb --snapshots <upstream-snapshots-dir>
```

The report is generated on demand and not committed — `scripts/license-baseline.txt`
and `scripts/license-matches.tsv` hold the state it reads.

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
- Metadata, license, or attribution corrections
- Requests to test or add support for another platform
- Maintainer requests for corrections, removal, or ownership changes

Include exact commands, error output, profile name, ForgeCat CLI version, platform, and workspace details when reporting a failure.

If you maintain an upstream project that has been converted into a ForgeCat profile, use the maintainer request template. We can correct the profile, remove it, or help you submit and maintain it directly.
