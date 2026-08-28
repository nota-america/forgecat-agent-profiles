# Cross-platform setup

Read this reference only when Node.js, Codex CLI, PATH, or OS compatibility is missing or uncertain.

## Supported environments

| Environment | Node and agent host | Codex installer | Important boundary |
| --- | --- | --- | --- |
| macOS | macOS user environment | `https://chatgpt.com/codex/install.sh` | Apple Silicon and Intel are both valid; inspect `uname -m`. |
| Native Linux | Linux user environment | `https://chatgpt.com/codex/install.sh` | Use a supported distribution. |
| Native Windows | PowerShell and Windows paths | `https://chatgpt.com/codex/install.ps1` | Keep Node, Codex, the agent host, and workspace on the Windows side. |
| WSL2 | WSL Linux home and Linux paths | `https://chatgpt.com/codex/install.sh` | Install everything inside WSL2 and prefer `~/...`, not `/mnt/c/...`. |
| WSL1 | Not supported | Do not install for this route | Current Codex no longer supports WSL1; migrate to WSL2 or use native Windows. |

Do not mix a Windows `node.exe` with a WSL workspace, or a WSL Codex binary with a native Windows Claude Code session. The calling agent, Node runtime, Codex CLI, ForgeCat-installed skill, workspace, and generated output must belong to the same environment.

## Stage 0: inspect before changing the machine

On macOS, Linux, or WSL:

```bash
uname -s
uname -m
printf 'WSL=%s\n' "${WSL_DISTRO_NAME:-no}"
node --version
command -v codex || true
```

On native Windows PowerShell:

```powershell
[System.Environment]::OSVersion.VersionString
$env:PROCESSOR_ARCHITECTURE
Get-Command node -ErrorAction SilentlyContinue
Get-Command codex -ErrorAction SilentlyContinue
```

Report what is missing. Node, Codex, WSL, or package-manager installation changes the user environment, so require authorization before installing it. Never request elevated privileges until the chosen installer actually needs them.

## Stage 1: install Node.js when missing

This skill requires Node.js 22 or newer and recommends the latest supported LTS from <https://nodejs.org/en/download>. Node.js 18 and 20 are end-of-life and must not be treated as ready.

### macOS

If Homebrew is already present, a simple maintained path is:

```bash
brew install node
```

Otherwise use the signed macOS installer from the official Node.js download page. Do not install Homebrew solely as an unannounced side effect of installing this skill.

### Native Linux and WSL2

If an existing Node version manager is present, install its latest LTS, for example:

```bash
nvm install --lts
nvm use --lts
```

Otherwise use the official Node.js download/package-manager instructions for the distribution. A distribution package is acceptable only when `node --version` is 22 or newer; do not accept an old repository version merely because installation exited successfully.

### Native Windows

With Windows Package Manager available:

```powershell
winget install -e --id OpenJS.NodeJS.LTS
```

Otherwise use the LTS `.msi` from the official Node.js download page. Close and reopen PowerShell after installation so `PATH` refreshes.

### Verify Node

```text
node --version
```

Require major version 22 or newer. Then run the skill's `doctor --json`; its runtime check is authoritative for the installed bridge.

## Stage 2: keep the ForgeCat installation

ForgeCat has already installed this skill into the selected host. Do not clone the source repository or create additional Codex and Claude skill links. The fallback bridge only needs the Codex CLI runtime and ChatGPT sign-in prepared below.

## Stage 3: bootstrap the fallback runtime

From the ForgeCat-installed skill directory, after the user authorizes Codex installation and device login:

```text
node scripts/gpt_image.mjs bootstrap --yes --json
```

The ForgeCat adapter preserves the existing skill installation. Bootstrap checks the runtime, installs a missing Codex CLI through the guarded official-installer path, and starts user-completed ChatGPT device authorization when signed out.

## Stage 4: install Codex CLI when missing

Optionally verify both current official installers without executing them:

```text
node scripts/gpt_image.mjs verify-installers --json
```

This follows HTTPS redirects only to `chatgpt.com` or `releases.openai.com` and returns SHA-256 receipts.

After the user approves the external installation:

```text
node scripts/gpt_image.mjs install-codex --yes
```

The runner downloads the exact official installer into an OS temporary directory, checks that the response is a script rather than HTML, executes it, and removes the temporary file. It uses the shell installer on macOS/Linux/WSL2 and the PowerShell installer on Windows.

If the runner cannot be used, follow the current official Codex installation documentation and inspect the downloaded installer before executing it. Do not pipe a remote response directly into a shell.

## Stage 5: sign in with ChatGPT

```text
node scripts/gpt_image.mjs login
```

The user completes browser/device authorization. Do not type credentials for them, read `auth.json`, or accept API-key login. Then run:

```text
node scripts/gpt_image.mjs doctor --json
```

Do not generate until `ready=true` and `chatgpt_subscription_login=true`.

## PATH and host refresh

If an installer succeeds but `doctor` still cannot find a command:

1. Close and reopen the terminal or agent host.
2. Run `node --version` and `codex --version` in that same terminal.
3. On WSL2, confirm the paths are Linux paths and `echo $WSL_DISTRO_NAME` is non-empty.
4. Restart Codex or Claude Code after first skill installation if its skill list is stale.
5. Do not work around PATH failure by invoking an API endpoint.

## Setup completion checks

The bridge is ready only when `doctor --json` reports:

```json
{
  "platform_supported": true,
  "node_supported": true,
  "codex_available": true,
  "chatgpt_subscription_login": true,
  "api_environment_forwarded": false,
  "best_practice_pass": true
}
```

After setup, generate directly. Planning and the no-image setup check (`generate --dry-run`) are optional troubleshooting tools, not first-use gates. In user-facing messages, call the latter “a setup check that does not create an image.” A normal result needs only a workspace-contained usable PNG, its absolute path, and an inline preview. SHA-256 remains relevant to verifying a downloaded installer, not to ordinary generated images.
