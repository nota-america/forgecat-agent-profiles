# ForgeCat Profile Quality Bar

This repository is a curated catalog of ForgeCat-compatible agent profiles. A profile should be useful, source-faithful, installable, and easy for humans to review.

## Acceptance Criteria

Every profile should meet these requirements before it is published or updated:

| Area | Requirement |
|---|---|
| Source | The upstream repository or source path was inspected directly. |
| Runtime surface | Skills, agents, rules, commands, hooks, MCP config, docs, and runtime helpers were inventoried. |
| Source fidelity | Converted files preserve upstream behavior unless the PR explicitly documents a compatibility shim or limitation. |
| Attribution | The profile links back to the original source repository. |
| License | The upstream license is checked and reflected in `for-forgecat/profile.yml` when clear. |
| Manifest | `for-forgecat/profile.yml` passes current ForgeCat validation. |
| README | The profile or collection README explains what the profile contains and how to install it. |
| Tested platforms | A platform appears in `compatibility.platforms.tested` only after a real install/runtime check. |
| Native artifacts | Tested platforms include matching `for-claude/`, `for-cursor/`, or `for-codex/` directories. |
| Review evidence | The PR records validation commands, runtime evidence, known limitations, and next action. |

## Tested Platform Rule

`sourcePlatform` records where a profile came from. It is not the same as tested support.

Use `compatibility.platforms.tested` only when all of these are true:

1. The profile was installed into a fresh workspace for that platform.
2. The installed skill, agent, command, hook, rule, or MCP surface was invoked directly.
3. The result was recorded in the PR.
4. The matching native artifact directory exists in the profile repo.

Use `compatibility.platforms.partial` for platforms that should be installable but still have limitations, missing runtime proof, or missing native artifacts.

## Contribution Types

Use the smallest issue or PR type that matches the work:

| Type | Use when |
|---|---|
| Profile request | A public source repository should be considered for conversion. |
| New profile | A source repository is being converted into a ForgeCat profile. |
| Profile fix | Existing profile files, metadata, docs, or install behavior need correction. |
| Platform support | A profile needs runtime testing or a missing native artifact for a platform. |
| Metadata/license correction | Source URL, attribution, license, or README details are wrong. |
| Maintainer request | An upstream maintainer wants a profile changed, removed, or handed over. |

## Review Checklist

Before asking a human to merge, make sure the PR answers:

- What source repository and commit/path was used?
- What changed inside the profile?
- Were any copied upstream files edited internally?
- Could the converted profile behave differently from upstream?
- Which platforms were installed and runtime-tested?
- Which platforms remain partial, and why?
- Are upstream license and attribution preserved?
- What exact action should the reviewer take?
