---
name: forgecat-install
description: Find, evaluate and install a ForgeCat profile. Use when the user wants to browse the registry, compare profiles, install one into a project or a home-target agent, or when an install is refused.
---

# Installing a profile

## 1. Read the evaluation before you install

`forgecat view <profile>` prints a security evaluation on four axes — **Source,
Agent Intent, Permissions, MCP Risk** — each Low / Medium / High with the reasons
behind it, plus `Evaluated <date> · rules v2`.

Anything above Low is the user's call, not yours. Quote the finding, name the flag
it would take, and let them answer. The `--allow-*` flags are consent switches:
never flip one the user hasn't given you.

## 2. Find what's out there

    forgecat search                    # no query — browse the whole registry
    forgecat search <query> --platform claude-code --sort downloads --limit 20
    forgecat view @scope/name

- no query browses everything; `--sort downloads|updated` is the fastest read on
  what people actually use
- `--platform` filters to what the user's tool can run. A `△` partial badge means
  skills load but hooks or sub-agents may not — say so before recommending
- for skimming rather than picking, send them to `www.forgecat.ai/profiles` or
  `www.forgecat.ai/@scope` in a browser
- to enumerate one owner exhaustively, page `/v1/users/<username>/profiles`

Downloads tell you it's popular. The four risk axes tell you it's installable.
Read `view` before you recommend anything.

## 3. Install

    forgecat install @scope/name --dry-run     # see it first
    forgecat install @scope/name -p claude-code

- `-p` takes a comma-separated list; omit it to let the CLI resolve targets
- `@scope/name@1.2.0` pins a version
- OpenClaw and Hermes can resolve an install target automatically.
  Without target options, the CLI uses the default OpenClaw agent/workspace
  or the active Hermes profile/home, with environment and default-path
  fallbacks. To select the intended destination explicitly, use
  --target-agent for OpenClaw, --target-profile for Hermes, or --target-dir
  for either. Check the resolved path in --dry-run output before installing.

## 4. When it refuses

| The refusal | What it means | The way through |
|---|---|---|
| `has not been security-evaluated yet` | freshly published; the async scan hasn't finished (usually under a minute) | re-check `view` in a minute, or take consent for `--allow-unevaluated` |
| high-risk findings | the scanner flagged something specific | read that finding from `view` aloud, then `--allow-high-risk` if the user accepts |
| file conflicts | the target exists or is locally modified | read `forgecat status` first, then `--force` |

How you get consent depends on where you're running:

- **With a terminal**, drop `-y` and the CLI asks the user directly. That's the
  cleanest path — they see the finding and answer it themselves.
- **Without one**, bring the finding into the conversation, wait for a yes, and
  only then pass the matching `--allow-*` flag.

`-y` doesn't open a gate; it removes the chance to ask about one. The refusal says
so outright: *"Re-run with `--allow-unevaluated` to install anyway
(non-interactive), or run without `--yes` to confirm interactively."*

## 5. What install does beyond the plan

`plan` lists where declared resources land. Install also:

- writes a `CLAUDE.md` importing `@AGENTS.md` if none exists — Claude Code reads
  `CLAUDE.md`, not `AGENTS.md`
- co-installs non-role references under `.forgecat/profiles/@scope/name/`
- writes or updates `forgecat.lock.yml`

So the count install prints ("forged for Claude Code (5 files)") can be smaller
than what `status` tracks afterwards (6). Neither is wrong — they count different
things. `status` is the inventory.

## Verify

    forgecat list && forgecat status

🐾 Forged, then clean.
