# Installed gstack runtime

This profile preserves 55 source workflow families. Claude Code omits its own
`claude-code` outside-review wrapper; Codex omits its own `codex` wrapper, as
upstream does. A discovered wrapper is an entry point, not the complete workflow.
Read the entire workflow returned by `instructions` and its referenced sections.

## Preparation

Resolve `profile.py` alongside this contract. Invoke it by absolute path with
`--host claude-code|cursor|codex|openclaw|hermes`. Never infer another gstack root.

1. `prepare` verifies installed assets and creates a private, versioned runtime.
   It does not download dependencies or change native host settings.
2. After explaining the required network access and obtaining consent, run
   `build --allow-download` to install frozen Bun dependencies and build the
   browser, design, PDF and security helpers. Bun, Node, Python 3 and a native C
   compiler must already be available. Platform-specific source prerequisites
   still apply; e.g. iOS requires macOS/Xcode and security scans may require
   container images. Do not install or authenticate those silently.
3. `download-assets --allow-download` fetches the pinned renderer and full
   changelog, validates their size and SHA-256 and records cache ownership.
   There is no font download. Renderer-only CSP blocks external requests;
   fallback fonts can change appearance and wrapping.
4. If the chosen browser backend needs Playwright Chromium, obtain consent for
   `browser-install --allow-download`. Cookies, logged-in browser connections,
   telemetry, external accounts and uploads retain the source consent rules.
5. On OpenClaw or Hermes run `native-plan --native-home ABSOLUTE_PATH` to inspect
   the plugin target. OpenClaw also requires `--agent AGENT_ID` matching the
   installed workspace. After explicit native-settings consent, `native-install`
   installs and enables the local plugin through the host manager. Honor its
   security scanner and consent prompts. Restart the host session afterward.

Use the returned environment prefix on EVERY shell invocation. Native tools do
not share shell state. Treat source `./setup` as managed preparation above and
source upgrades as `forgecat update @forgecat/garrytan_gstack`, with confirmation.
Never run an upstream setup/updater that overwrites installed skills/settings.

## Native home execution

Before a home workflow acts, call `gstack_control` with operation `context` and
its source skill name. Read the returned workflow and verify it identifies the
same installation. If the tool is absent, stop and complete native setup.
`freeze`, `guard`, `careful`, `investigate` and `unfreeze` use the native control
calls embedded in their workflows. Protection is session-specific; native
session IDs come from the host, never from model-provided arguments.

OpenClaw requires absolute write/edit/patch paths and an explicit absolute
`workdir` for commands while protection is active. Hermes uses the native local
filesystem backend's working directory. Active guards reject container paths
that cannot be evaluated against the local boundary. Source shell guards remain
heuristics for their documented tools, not a general sandbox. Do not claim that
arbitrary shell scripts, custom tools or isolated children inherit protection.
Activate protection separately in a child when its task requires it.

For every source subagent instruction (including agents named with Claude
terms), preserve its complete task, allowed changes, source consent exceptions,
`GSTACK_SESSION_KIND=spawned` and expected result. Use `gstack_control` operation
`child-request` to obtain the native invocation, then invoke that named native
tool. OpenClaw uses an isolated one-shot `sessions_spawn`; Hermes uses a fresh
`delegate_task` leaf. Do not pass Claude-only `subagent_type`, foreground flags,
model overrides or arbitrary tool/permission overrides. Preserve source intent
using the complete task in the fresh child.

Record the returned run/delegation identity. Accepted/dispatched is not completed.
Pause dependent steps until the matching native completion arrives. Ignore
unrelated completions. On timeout, cancel via the native lifecycle facility and
confirm termination before reconciliation; if cancellation cannot be confirmed,
stop the workflow. Do not run an inline replacement concurrently. Validate the
source-required output and inspect actual repository changes before continuing.
For `/ship` documentation work, the final line must satisfy the source JSON
contract (`files_updated`, `commit_sha`, `pushed`, `documentation_section`, and
optional `decisions`); failures follow the source reconciliation path. None of
these helpers authorizes commits, pushes, PRs, deployments or messages on its own.

Questions use each platform's native question tool when available, otherwise
ask in a normal message and wait, as the source permits. Cursor/Codex retain the
source-generated advisory safety behavior; do not claim Claude hooks execute
there. Optional Claude question-preference/team/timeline settings integrations
are source tooling retained in the runtime, not automatically activated by this
profile. Review their exact native settings changes before enabling them.

## Update and removal

Stop this runtime's own services and finish its native sessions first. Run
`native-remove` with the same native home/agent BEFORE a ForgeCat update or
uninstall. The helper checks ownership and all plugin bytes, preserves a recovery
copy, and uses the host manager to remove only its plugin. OpenClaw removal
requires an interactive terminal and its normal confirmation; declining leaves
the plugin configuration, files and ownership receipt in place. The helper does
not disable it before that confirmation. Restart native sessions to unload
callbacks. It refuses modified or unowned targets.

Then `clean` verifies source ownership and quarantines the runtime reversibly.
External asset and browser caches are separate, clearly named directories under
the returned owner directory. Use `bin/forgecat-asset.py ASSET --remove` only
with the returned cache environment to remove verified owned external assets;
modified assets are retained. Inspect other generated cache content before moving
its owner directory to Trash. ForgeCat uninstall only removes its tracked files;
it cannot silently delete these separately owned caches or native registrations.
After a profile update, prepare/build the new runtime and reinstall its native
binding. Stale bindings must not be used with new workflow bytes.
