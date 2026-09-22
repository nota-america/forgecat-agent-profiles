---
name: forgecat-publish
description: Publish a profile to the registry, manage its versions, visibility and tags, and recover its source. Use when the user is ready to push, wants to unpublish or re-scope a profile, or lost the local source of one they own.
---

# Publishing

## 1. push is the first real test

A local path can't be installed — the CLI answers *"Only registry sources are
supported."* So the first time anyone sees where the files actually land is
**after** publishing. Plan for that:

    push private → view → install it yourself → then flip to public

That way a wrong layout costs a version number, not a public release.

## 2. Before

    forgecat whoami                      # right account, right scope
    forgecat validate && forgecat plan   # schema clean, layout as intended

The scope in `name:` must be one the account owns.

## 3. push

    forgecat push --bump minor
    forgecat push --set-version 1.0.0
    forgecat push --visibility private --tags "skills,review"

**push assigns the version** — don't write one into `profile.yml` (deprecated and
ignored). `--visibility` is required to publish public non-interactively, `--tags`
only seeds on the first push, `--json` is for automation, and `-y` is auto-detected
when there is no TTY.

Before uploading it prints the file list and a tarball summary — count, size,
integrity hash. That's the last honest look at what you're shipping; read it.

It also runs a **local pre-flight scan** (`Security scan passed`). Don't confuse that
with the registry's evaluation — the local one gates your upload, the registry's runs
afterwards and gates everyone's install.

## 4. After

Evaluation is asynchronous and typically finishes in well under a minute. Poll
`forgecat view <profile>` until the four risk axes replace
`pending (not yet evaluated)`, then install it for real. Until then installs are
refused, and `--force` does nothing about it — that gate answers only to
`--allow-unevaluated`.

## 5. Recovering source (owner-only)

    forgecat clone @scope/name --out ./work   # first time
    forgecat pull --out ./work                # refresh to the registry's latest

`clone` drops a `.forgecat-source.json` beside the files recording the profile, the
version you took, and the file list. `pull` reads it to know what to refresh, and
always fetches latest by name — it is a one-way re-fetch, not a merge. `--force`
overwrites your local edits and nothing reconciles them.

Both work non-interactively with `-y`.

## 6. Taking it back

    forgecat unpublish @scope/name@0.2.0    # one version
    forgecat unpublish @scope/name          # everything — types the name to confirm
    forgecat visibility @scope/name private
    forgecat tag add|remove|list @scope/name <tags...>

Unpublishing the last remaining version archives the whole profile in the same
transaction. Already-installed copies keep working — this pulls it from the Vault,
it doesn't reach into anyone's forge.

## Verify

    forgecat view @scope/name

🐾 Marked. `name@version` is in the Vault.
