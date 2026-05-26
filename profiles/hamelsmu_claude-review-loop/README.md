![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# hamelsmu-claude-review-loop

Forgecat profile converted from the `review-loop` Claude Code plugin in `hamelsmu/claude-review-loop`.

## Installation

```bash
npx forgecat install @forgecat/hamelsmu_claude-review-loop
```

## Included

- Commands: `/review-loop`, `/cancel-review`
- Hook: Claude Code `Stop` hook for review-loop phase control
- Rule: review-loop operating guidelines from the source `AGENTS.md`

## Requirements

- Claude Code
- `jq`
- Codex CLI (`codex`) with multi-agent enabled

## Details

| Field | Value |
|---|---|
| Original repository | https://github.com/hamelsmu/claude-review-loop |
| Original commit | `244f4c7` |
| Source plugin | `plugins/review-loop` |
| Source version | `1.8.0` |
| Source platform | Claude Code |
| License | MIT |
