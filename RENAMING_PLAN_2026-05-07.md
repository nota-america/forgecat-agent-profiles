# Profile Renaming Plan — 2026-05-07

## Target Convention
`[repo-author]_[repo-name]_[profile-name]`

## Scope
- Total profiles scanned: **151**
- Rename needed: **151**
- Already matching: **0**
- Manual review required: **0**

## Derivation Rules Used
1. If old name starts with `owner-repo-`, strip that prefix and keep the remainder as `profile-name`.
2. Else if old name starts with `repo-`, strip that prefix and keep the remainder as `profile-name`.
3. Else if old name equals `repo` or `owner-repo`, set `profile-name = repo`.
4. Else fallback: use old name as `profile-name` (manual-review candidate).

## Distribution by Derivation

| Derivation | Count |
|---|---:|
| `strip-owner-repo-hyphen-prefix` | 86 |
| `fallback-old-name-as-profile-segment` | 33 |
| `strip-repo-hyphen-prefix` | 27 |
| `repo-name-only` | 4 |
| `owner-repo-only` | 1 |

## Files Generated
- Mapping CSV: `/Users/openclawuser/.openclaw/workspace-forgecat/docs/profile-rename-mapping-2026-05-07.csv`
- Registry cleanup (old names): `/Users/openclawuser/.openclaw/workspace-forgecat/docs/registry-cleanup-old-names-2026-05-07.txt`

## Rename Needed (sample)

| Profile path | Old name | New name | Derivation |
|---|---|---|---|
| `addyosmani-agent-skills` | `addyosmani-agent-skills` | `addyosmani_agent-skills_agent-skills` | `owner-repo-only` |
| `agency-agents/agency-academic` | `agency-academic` | `msitarzewski_agency-agents_agency-academic` | `fallback-old-name-as-profile-segment` |
| `agency-agents/agency-design` | `agency-design` | `msitarzewski_agency-agents_agency-design` | `fallback-old-name-as-profile-segment` |
| `agency-agents/agency-engineering` | `agency-engineering` | `msitarzewski_agency-agents_agency-engineering` | `fallback-old-name-as-profile-segment` |
| `agency-agents/agency-game-development` | `agency-game-development` | `msitarzewski_agency-agents_agency-game-development` | `fallback-old-name-as-profile-segment` |
| `agency-agents/agency-marketing` | `agency-marketing` | `msitarzewski_agency-agents_agency-marketing` | `fallback-old-name-as-profile-segment` |
| `agency-agents/agency-paid-media` | `agency-paid-media` | `msitarzewski_agency-agents_agency-paid-media` | `fallback-old-name-as-profile-segment` |
| `agency-agents/agency-product` | `agency-product` | `msitarzewski_agency-agents_agency-product` | `fallback-old-name-as-profile-segment` |
| `agency-agents/agency-project-management` | `agency-project-management` | `msitarzewski_agency-agents_agency-project-management` | `fallback-old-name-as-profile-segment` |
| `agency-agents/agency-sales` | `agency-sales` | `msitarzewski_agency-agents_agency-sales` | `fallback-old-name-as-profile-segment` |
| `agency-agents/agency-spatial-computing` | `agency-spatial-computing` | `msitarzewski_agency-agents_agency-spatial-computing` | `fallback-old-name-as-profile-segment` |
| `agency-agents/agency-specialized` | `agency-specialized` | `msitarzewski_agency-agents_agency-specialized` | `fallback-old-name-as-profile-segment` |
| `agency-agents/agency-support` | `agency-support` | `msitarzewski_agency-agents_agency-support` | `fallback-old-name-as-profile-segment` |
| `agency-agents/agency-testing` | `agency-testing` | `msitarzewski_agency-agents_agency-testing` | `fallback-old-name-as-profile-segment` |
| `aidlc-workflows/aidlc-workflows` | `aidlc-workflows` | `awslabs_aidlc-workflows_aidlc-workflows` | `repo-name-only` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-agent-sdk-dev` | `anthropics-claude-plugins-official-agent-sdk-dev` | `anthropics_claude-plugins-official_agent-sdk-dev` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-claude-code-setup` | `anthropics-claude-plugins-official-claude-code-setup` | `anthropics_claude-plugins-official_claude-code-setup` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-claude-md-management` | `anthropics-claude-plugins-official-claude-md-management` | `anthropics_claude-plugins-official_claude-md-management` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-code-review` | `anthropics-claude-plugins-official-code-review` | `anthropics_claude-plugins-official_code-review` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-code-simplifier` | `anthropics-claude-plugins-official-code-simplifier` | `anthropics_claude-plugins-official_code-simplifier` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-commit-commands` | `anthropics-claude-plugins-official-commit-commands` | `anthropics_claude-plugins-official_commit-commands` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-example-plugin` | `anthropics-claude-plugins-official-example-plugin` | `anthropics_claude-plugins-official_example-plugin` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-feature-dev` | `anthropics-claude-plugins-official-feature-dev` | `anthropics_claude-plugins-official_feature-dev` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-frontend-design` | `anthropics-claude-plugins-official-frontend-design` | `anthropics_claude-plugins-official_frontend-design` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-math-olympiad` | `anthropics-claude-plugins-official-math-olympiad` | `anthropics_claude-plugins-official_math-olympiad` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-mcp-server-dev` | `anthropics-claude-plugins-official-mcp-server-dev` | `anthropics_claude-plugins-official_mcp-server-dev` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-playground` | `anthropics-claude-plugins-official-playground` | `anthropics_claude-plugins-official_playground` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-plugin-dev` | `anthropics-claude-plugins-official-plugin-dev` | `anthropics_claude-plugins-official_plugin-dev` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-pr-review-toolkit` | `anthropics-claude-plugins-official-pr-review-toolkit` | `anthropics_claude-plugins-official_pr-review-toolkit` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-session-report` | `anthropics-claude-plugins-official-session-report` | `anthropics_claude-plugins-official_session-report` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-claude-plugins-official/anthropics-claude-plugins-official-skill-creator` | `anthropics-claude-plugins-official-skill-creator` | `anthropics_claude-plugins-official_skill-creator` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-skills/anthropics-skills-algorithmic-art` | `anthropics-skills-algorithmic-art` | `anthropics_skills_algorithmic-art` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-skills/anthropics-skills-brand-guidelines` | `anthropics-skills-brand-guidelines` | `anthropics_skills_brand-guidelines` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-skills/anthropics-skills-canvas-design` | `anthropics-skills-canvas-design` | `anthropics_skills_canvas-design` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-skills/anthropics-skills-claude-api` | `anthropics-skills-claude-api` | `anthropics_skills_claude-api` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-skills/anthropics-skills-doc-coauthoring` | `anthropics-skills-doc-coauthoring` | `anthropics_skills_doc-coauthoring` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-skills/anthropics-skills-docx` | `anthropics-skills-docx` | `anthropics_skills_docx` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-skills/anthropics-skills-frontend-design` | `anthropics-skills-frontend-design` | `anthropics_skills_frontend-design` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-skills/anthropics-skills-internal-comms` | `anthropics-skills-internal-comms` | `anthropics_skills_internal-comms` | `strip-owner-repo-hyphen-prefix` |
| `anthropics-skills/anthropics-skills-mcp-builder` | `anthropics-skills-mcp-builder` | `anthropics_skills_mcp-builder` | `strip-owner-repo-hyphen-prefix` |

## Next Execution Plan (after approval)
1. Rename profile directories and `profile.yml:name` to `new_name`.
2. Update README install commands to `@forgecat/<new_name>`.
3. Re-run schema/validation sweep.
4. Open single PR with full mapping table attached.
5. After approval, push all renamed profiles to registry.
6. Use cleanup list to remove deprecated old names from registry (separate cleanup step).
