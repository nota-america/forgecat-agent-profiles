---
name: forgecat-manage
description: Inspect, update, replace and remove installed ForgeCat profiles. Use when the user asks what's installed, sees modified files, wants to upgrade or roll back a profile, run two profiles side by side, or configure MCP env vars.
---

# Managing what's installed

## 1. Order matters when replacing a profile

    secure the source → tidy it → uninstall → install

Uninstall first and the source you were about to edit goes with it. Worse: if
`uninstall` succeeds and `install` then hits the evaluation gate, the user is left
with **no profile at all**. Confirm the incoming version is installable with
`forgecat view` *before* removing the outgoing one.

## 2. What's here

    forgecat list          # one line per profile
    forgecat list -v       # file-level detail
    forgecat status        # per-file clean / modified
    forgecat status --json # for scripts

All of these read `forgecat.lock.yml` **in the current directory**. Run them
anywhere else and `list` reports "No profiles installed" — truthfully, about a
forge that isn't this one.

`status` is the real inventory. The number install printed on the way in counts
platform files only — co-installed assets show up here and not there.

## 3. Drift

`status` marks each tracked file `clean` or `modified`. Modified means the user
edited an installed file, and it changes what the other commands do:

- `uninstall` leaves modified files behind; `uninstall --force` deletes them too
- `update --force` overwrites them — there is no merge, and no revert verb
- an update that drops a resource keeps the user's edited copy, with a warning

## 4. Update

    forgecat update --dry-run
    forgecat update [target]

Same gates as install (`--allow-unevaluated`, `--allow-high-risk`), and the same
rule about consent: `-y` doesn't open a gate, it removes the chance to ask about
one. See `forgecat-install` §4.

## 5. Remove

`uninstall` takes back only the profile's own marker section of `AGENTS.md` —
handwritten text around it survives. But **a re-install appends its marker at the
end of the file**, not where it used to be. If a handwritten note refers to "the
section above", fix it in the same pass.

## 6. Two profiles in one project

The lockfile is keyed per profile, so coexistence is by design. The one real
collision is **skill directory names** — two profiles both shipping
`.claude/skills/review/` will mark each other `modified`. Rename before installing.

## 7. MCP environment

    forgecat setup                 # fill in what's missing
    forgecat setup --reconfigure   # re-prompt everything

## Verify

    forgecat status

🐾 all clean, or a named list of what drifted.
