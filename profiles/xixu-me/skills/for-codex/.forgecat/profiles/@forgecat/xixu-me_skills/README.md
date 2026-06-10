*written by Forgecat*

# Xi Xu Skills

This profile packages the upstream `xixu-me/skills` Agent Skills collection as one forgecat profile.

## Details

| Field | Value |
|---|---|
| Original repository | https://github.com/xixu-me/skills/tree/main/skills |
| Version | `0.1.2` |
| License | MIT |
| Source platform | agent-skills |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Codex | Tested |
| Claude Code | Tested |
| Cursor | Partial |

## Included

- 12 upstream Agent Skills from `skills/`
- MIT license from the source repository

## Skills

| Skill | Description |
|---|---|
| `develop-userscripts` | Use when building, debugging, packaging, or publishing browser userscripts for Tampermonkey or ScriptCat, including GM APIs, metadata blocks, permission issues, @match/@grant/@connect setup, ScriptCat background or scheduled scripts, UserConfig blocks, or subscription workflows. |
| `github-actions-docs` | Use when users ask how to write, explain, customize, migrate, secure, or troubleshoot GitHub Actions workflows, workflow syntax, triggers, matrices, runners, reusable workflows, artifacts, caching, secrets, OIDC, deployments, custom actions, or Actions Runner Controller, especially when they need official GitHub documentation, exact links, or docs-grounded YAML guidance. |
| `openclaw-secure-linux-cloud` | Use when self-hosting OpenClaw on a cloud server, hardening a remote OpenClaw gateway, choosing between SSH tunneling, Tailscale, or reverse-proxy exposure, or reviewing Podman, pairing, sandboxing, token auth, and tool-permission defaults for a secure personal deployment. |
| `opensource-guide-coach` | Use when a user wants guidance on starting, contributing to, growing, governing, funding, securing, or sustaining an open source project, or asks about contributor onboarding, community health, maintainer burnout, code of conduct, metrics, legal basics, or open source project adoption. |
| `readme-i18n` | Use when the user wants to translate a repository README, make a repo multilingual, localize docs, add a language switcher, internationalize the README, or update localized README variants in a GitHub-style repository. |
| `running-claude-code-via-litellm-copilot` | Use when routing Claude Code through a local LiteLLM proxy to GitHub Copilot, reducing direct Anthropic spend, configuring ANTHROPIC_BASE_URL or ANTHROPIC_MODEL overrides, or troubleshooting Copilot proxy setup failures such as model-not-found, no localhost traffic, or GitHub 401/403 auth errors. |
| `secure-linux-web-hosting` | Use when setting up, hardening, or reviewing a cloud server for self-hosting, including DNS, SSH, firewalls, Nginx, static-site hosting, reverse-proxying an app, HTTPS with Let's Encrypt or ACME clients, safe HTTP-to-HTTPS redirects, or optional post-launch network tuning such as BBR. |
| `skills-cli` | Use when users ask to discover, install, list, check, update, remove, back up, restore, sync, or initialize Agent Skills, mention `bunx skills`, `npx skills`, `skills.sh`, or `skills-lock.json`, ask "find a skill for X", or want help extending agent capabilities with installable skills. |
| `tzst` | Use when the user needs to create, extract, flatten, list, test, install, script, or troubleshoot `tzst` CLI workflows for `.tzst` or `.tar.zst` archives, including compression levels, streaming mode, extraction filters, conflict resolution, JSON output, or standalone binary setup, even if they describe the archive task without naming `tzst`. |
| `use-my-browser` | Use when work depends on the user's live browser session or visible rendered state rather than static fetches, especially for browser debugging contexts or DevTools-selected elements or requests, logged-in dashboards or CMS flows, localhost apps, forms, uploads, downloads, media inspection, DOM or iframe inspection, Shadow DOM, or browser failures that look like soft 404s, auth walls, anti-bot checks, or rate limits. |
| `xdrop` | Use this skill when the user wants to send or fetch files through an Xdrop server from the terminal, asks to automate encrypted Xdrop share-link workflows, provides an Xdrop `/t/:transferId#k=...` link to download and decrypt locally, or needs Xdrop CLI flags such as `--quiet`, `--json`, `--expires-in`, `--output`, or `--api-url`, even if they do not explicitly mention the skill name. |
| `xget` | Use when tasks involve Xget URL rewriting, registry/package/container/API acceleration, integrating Xget into Git, download tools, package managers, container builds, AI SDKs, CI/CD, deployment, self-hosting, or adapting commands and config from the live README `Use Cases` section into files, environments, shells, or base URLs. |
