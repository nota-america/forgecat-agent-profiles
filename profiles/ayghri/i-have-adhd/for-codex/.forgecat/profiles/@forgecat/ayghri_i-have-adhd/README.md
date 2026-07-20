*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# I Have ADHD

ADHD-friendly output shaping for agent replies: action first, numbered steps, no tangents, and visible progress.

## Tags

- adhd
- output-style
- productivity
- skills

## Installation

```bash
npx forgecat install @forgecat/ayghri_i-have-adhd
```

## Skills

- **i-have-adhd** — Shape output for a reader with ADHD. Use this skill whenever responding to ANY user message including coding tasks, debugging, explanations, planning, and casual conversation. Output should lead with concrete next actions, number multi-step work, externalize state across turns, suppress tangents, give specific time estimates, and make wins visible. Trigger even on casual messages and even when the user did not explicitly ask for brevity.

## Details

| Field | Value |
|---|---|
| Author | Ayoub G. |
| Original repository | https://github.com/ayghri/i-have-adhd |
| Version | `0.1.1` |
| Original commit | 559f8e0 |
| License | MIT |
| Source platform | multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Tested |

## Dependencies

- None

---
*written by original source*

<p align="center">
  <img src="https://raw.githubusercontent.com/ayghri/i-have-adhd/559f8e041dc92de0c47032a8a9289cea2ef5496b/logo.png" alt="i-have-adhd" width="140" />
</p>
<p align="center">
  <strong align="center">ADHD-friendly outputs. No ADHD diagnosis needed!</strong>
</p>
<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/ayghri/i-have-adhd?style=flat" alt="License"></a>
</p>


## Install

<details>
<summary><strong>Claude Code</strong></summary>

```bash
claude plugin marketplace add ayghri/i-have-adhd
claude plugin install i-have-adhd@i-have-adhd
```

Then type `/i-have-adhd`. No local clone needed — Claude Code fetches the repo and keeps it updated.

</details>

<details>
<summary><strong>Codex</strong></summary>

```bash
codex plugin marketplace add ayghri/i-have-adhd --ref main
codex plugin add i-have-adhd@i-have-adhd
```

Then type `$i-have-adhd` to apply the output style explicitly. The skill can also be invoked implicitly when Codex sees a task that benefits from it.

</details>

Install instructions for other coding agents live in [INSTALL.md](https://github.com/ayghri/i-have-adhd/blob/559f8e041dc92de0c47032a8a9289cea2ef5496b/INSTALL.md).

## What it does

A skill for Claude Code, Codex, and Cursor that stops burying the answer. Action first. Steps numbered. No "Hope this helps!"


## What changes


<table>
<tr>
<td width="50%">

## Before

> Great question! Let me think about this. Your auth flow has a few moving pieces: the middleware, the token verification, and the cookie handling. Looking at `src/auth.ts`, the `verifyToken` function (around lines 42-58) seems to be using an older `jsonwebtoken` API. One approach would be to update the package and rewrite that function. After making the change, you'd want to run the auth tests to confirm nothing breaks. By the way, you might also want to look at your dependency versions overall. Hope this helps! Let me know if you want to dig deeper.

</td>

<td width="50%">

## After

> Run `npm install jsonwebtoken@latest`, then edit `src/auth.ts:42`.
>
> 1. Open `src/auth.ts`
> 2. Replace `verifyToken` (lines 42–58) with the snippet below
> 3. Run `npm test -- auth.spec.ts`
>
> Next: paste the first failing line if any test fails.

</td>
</tr>
</table>


## The rules

10 rules. Full text in [SKILL.md](./skills/i-have-adhd/SKILL.md).

1. Lead with the next action.
2. Number multi-step tasks.
3. End with one concrete next step.
4. Suppress tangents.
5. Restate state every turn.
6. Specific time estimates (minutes, not "a bit").
7. Make wins visible.
8. Matter-of-fact errors.
9. Cap lists at 5 items.
10. No preamble. No recap. No closers.

## Tune it

Fork, edit `skills/i-have-adhd/SKILL.md`, install your fork: `claude plugin marketplace add <your-username>/i-have-adhd`. Re-invoke `/i-have-adhd`.

## Credits

Loosely based on *The Adult ADHD Tool Kit* by J. Russell Ramsay and Anthony L. Rostain. Adapted for how an LLM should respond, not how a human should organize their day.

## License

MIT.

Star ⭐ if it saved you one scroll past one "Great question!"
