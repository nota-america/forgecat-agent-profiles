#!/usr/bin/env node
// ponytail — Claude Code SessionStart activation hook
//
// Runs on every session start:
//   1. Writes flag file at ~/.claude/.ponytail-active (statusline reads this)
//   2. Emits ponytail ruleset as hidden SessionStart context
//   3. Detects missing statusline config and emits setup nudge

const fs = require('fs');
const path = require('path');
const os = require('os');

const DEFAULT_MODE = 'full';
const VALID_MODES = ['off', 'lite', 'full', 'ultra', 'review'];
const RUNTIME_MODES = ['off', 'lite', 'full', 'ultra'];
const isCodex = Boolean(process.env.PLUGIN_DATA);

function normalizeMode(mode) {
  if (typeof mode !== 'string') return null;
  const normalized = mode.trim().toLowerCase();
  return RUNTIME_MODES.includes(normalized) ? normalized : null;
}

function getConfigDir() {
  if (process.env.XDG_CONFIG_HOME) {
    return path.join(process.env.XDG_CONFIG_HOME, 'ponytail');
  }
  if (process.platform === 'win32') {
    return path.join(
      process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming'),
      'ponytail'
    );
  }
  return path.join(os.homedir(), '.config', 'ponytail');
}

function getClaudeDir() {
  // ponytail: CLAUDE_CONFIG_DIR overrides ~/.claude, matching Claude Code.
  return process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), '.claude');
}

function getDefaultMode() {
  const envMode = process.env.PONYTAIL_DEFAULT_MODE;
  if (envMode && VALID_MODES.includes(envMode.toLowerCase())) {
    return envMode.toLowerCase();
  }

  try {
    const configPath = path.join(getConfigDir(), 'config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    if (config.defaultMode && VALID_MODES.includes(config.defaultMode.toLowerCase())) {
      return config.defaultMode.toLowerCase();
    }
  } catch (e) {
    // Config file does not exist or is invalid -- fall through to default.
  }

  return DEFAULT_MODE;
}

const statePath = isCodex
  ? path.join(process.env.PLUGIN_DATA, '.ponytail-active')
  : path.join(getClaudeDir(), '.ponytail-active');

function setMode(mode) {
  fs.mkdirSync(path.dirname(statePath), { recursive: true });
  fs.writeFileSync(statePath, mode);
}

function clearMode() {
  try { fs.unlinkSync(statePath); } catch (e) {}
}

function writeHookOutput(event, mode, context = '') {
  if (!isCodex) {
    process.stdout.write(context);
    return;
  }
  const output = { systemMessage: `PONYTAIL:${mode.toUpperCase()}` };
  if (context) {
    output.hookSpecificOutput = {
      hookEventName: event,
      additionalContext: context,
    };
  }
  process.stdout.write(JSON.stringify(output));
}

function getPonytailInstructions(mode) {
  const effectiveMode = normalizeMode(mode) || DEFAULT_MODE;
  return 'PONYTAIL MODE ACTIVE -- level: ' + effectiveMode + '\n\n' +
    'You are a lazy senior developer. Lazy means efficient, not careless. The best code is the code never written.\n\n' +
    '## Persistence\n\n' +
    'ACTIVE EVERY RESPONSE. No drift back to over-building. Still active if unsure. Off only: "stop ponytail" / "normal mode".\n\n' +
    'Current level: **' + effectiveMode + '**. Switch: `/ponytail lite|full|ultra`.\n\n' +
    '## The ladder\n\n' +
    'Before any code, stop at the first rung that holds:\n' +
    '1. Does this need to be built at all? (YAGNI)\n' +
    '2. Does the standard library do this? Use it.\n' +
    '3. Does a native platform feature cover it? Use it.\n' +
    '4. Does an already-installed dependency solve it? Use it.\n' +
    '5. Can this be one line? Make it one line.\n' +
    '6. Only then: write the minimum code that works.\n\n' +
    '## Rules\n\n' +
    'No abstractions that were not requested. No avoidable dependencies. No boilerplate nobody asked for. ' +
    'Deletion over addition. Boring over clever. Fewest files possible. ' +
    'Ship the lazy version and question the complex request in the same response -- never stall. ' +
    'Between two same-size stdlib options, pick the one correct on edge cases. ' +
    'Mark intentional simplifications with a `ponytail:` comment -- a shortcut with a known ceiling names the ceiling and the upgrade path in the comment.\n\n' +
    '## Output\n\n' +
    'Code first. Then at most three short lines: what was skipped, when to add it. ' +
    'If the explanation is longer than the code, delete the explanation. ' +
    'Explanation the user explicitly asked for is not debt, give it in full.\n\n' +
    '## When NOT to be lazy\n\n' +
    'Never simplify away: input validation at trust boundaries, error handling that prevents data loss, ' +
    'security measures, accessibility basics, the calibration real hardware needs (the platform is never the spec ideal), anything the user explicitly asked to keep. ' +
    'Lazy code without its check is unfinished: non-trivial logic leaves ONE runnable check behind (assert-based demo/self-check or one small test file; no frameworks). Trivial one-liners need no test.\n\n' +
    '## Boundaries\n\n' +
    'Ponytail governs what you build, not how you talk. "stop ponytail" or "normal mode": revert. Level persists until changed or session end.';
}

const claudeDir = getClaudeDir();
const settingsPath = path.join(claudeDir, 'settings.json');

const mode = getDefaultMode();

// "off" mode — skip activation entirely, don't write flag or emit rules
if (mode === 'off') {
  clearMode();
  writeHookOutput('SessionStart', 'off', isCodex ? '' : 'OK');
  process.exit(0);
}

// 1. Write flag file
try {
  setMode(mode);
} catch (e) {
  // Silent fail -- flag is best-effort, don't block the hook
}

// 2. Emit the ponytail ruleset, filtered to the active intensity level.
let output = getPonytailInstructions(mode);

// 3. Detect missing statusline config — nudge Claude to help set it up
if (!isCodex) try {
  let hasStatusline = false;
  if (fs.existsSync(settingsPath)) {
    const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
    if (settings.statusLine) {
      hasStatusline = true;
    }
  }

  if (!hasStatusline) {
    const command = 'bash -lc ' + JSON.stringify(
      'flag="$HOME/.claude/.ponytail-active"; ' +
      '[ -f "$flag" ] || exit 0; ' +
      'mode=$(head -n1 "$flag" | tr -d "[:space:]"); ' +
      'if [ -z "$mode" ] || [ "$mode" = "full" ]; then ' +
      'printf "\\033[38;5;108m[PONYTAIL]\\033[0m"; ' +
      'else printf "\\033[38;5;108m[PONYTAIL:%s]\\033[0m" "$(printf "%s" "$mode" | tr "[:lower:]" "[:upper:]")"; fi'
    );
    const statusLineSnippet =
      '"statusLine": { "type": "command", "command": ' + JSON.stringify(command) + ' }';
    output += "\n\n" +
      "STATUSLINE SETUP NEEDED: The ponytail plugin includes a statusline badge showing active mode " +
      "(e.g. [PONYTAIL], [PONYTAIL:ULTRA]). It is not configured yet. " +
      "To enable, add this to ~/.claude/settings.json: " +
      statusLineSnippet + " " +
      "Proactively offer to set this up for the user on first interaction.";
  }
} catch (e) {
  // Silent fail — don't block session start over statusline detection
}

writeHookOutput('SessionStart', mode, output);
