*written by ForgeCat*

# @forgecat/im-not-ai

ForgeCat conversion of [epoko77-ai/im-not-ai](https://github.com/epoko77-ai/im-not-ai), a Korean-text humanizer that removes recurring AI-writing patterns while preserving the source's meaning, facts, register, and genre.

## Included surfaces

- `humanize-korean`: v2.3 route-aware orchestration for light, standard, and heavy runs.
- `humanize` and `humanize-redo`: command-style entry and second-pass skills.
- `humanize-monolith`, `humanize-diagnostician`, and `humanize-finalizer`: the active runtime agents.
- Six upstream taxonomy, scholarship, research, metric, gap-analysis, and integration agents for source-maintenance workflows.
- `runtime/`: deterministic preprocessing, chunk reassembly, metric, taxonomy, and structural-gate assets co-installed as a ForgeCat reference.
- `platforms/codex/`: upstream's native standalone Codex skill as an override.

The five research/development agents beyond the taxonomist are shipped source-faithfully for completeness. They depend on an upstream source checkout's development workspace and tests, and the current v2.3 text-humanization runtime does not call them.

## Installation

```bash
forgecat install @forgecat/im-not-ai -p claude-code
```

Choose `cursor` or `codex` with `-p` for those targets. All three are marked partial until a published-registry fresh-install runtime scenario has been recorded.

## Runtime notes

- Python 3 is required; the helper scripts use the standard library.
- Run outputs are created under `_workspace/` in the user's current working directory.
- The standard conversion uses ForgeCat reference tokens for every bundled runtime path.
- The Codex override retains the upstream native fast-path skill and colocated references.

## Provenance

- Upstream repository: https://github.com/epoko77-ai/im-not-ai
- Converted commit: `53e24e8f92cf344efcb812103f7c2b203e7efffc`
- Upstream release represented: v2.3.0
- License: MIT
- Source platforms: Claude Code plugin/commands, Codex skill, Gemini commands

The upstream license is preserved in `LICENSE`; source installation and release documents are preserved under the `sourceDocs` reference.
