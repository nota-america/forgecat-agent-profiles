![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# math-olympiad

Solve competition math (IMO, Putnam, USAMO) with adversarial verification that catches what self-verification misses. Fresh-context verifiers attack proofs with specific failure patterns. Calibrated abstention over bluffing.

## Tags

- anthropic
- claude-official
- math-proofs

## Installation

```bash
npx forgecat install @forgecat/anthropics_claude-plugins-official_math-olympiad
```

## Skills

- **math-olympiad** — Solve competition math problems (IMO, Putnam, USAMO, AIME) with adversarial verification that catches the errors self-verification misses. Activates when asked to 'solve this IMO problem', 'prove this olympiad inequality', 'verify this competition proof', 'find a counterexample', 'is this proof correct', or for any problem with 'IMO', 'Putnam', 'USAMO', 'olympiad', or 'competition math' in it. Uses pure reasoning (no tools) — then a fresh-context adversarial verifier attacks the proof using specific failure patterns, not generic 'check logic'. Outputs calibrated confidence — will say 'no confident solution' rather than bluff. If LaTeX is available, produces a clean PDF after verification passes.

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/claude-plugins-official/tree/main/plugins/math-olympiad |
| Version | `0.0.4` |
| Original commit | `7e401ed` |
| License | Apache-2.0 |
| Source platform | Claude Code plugin |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
