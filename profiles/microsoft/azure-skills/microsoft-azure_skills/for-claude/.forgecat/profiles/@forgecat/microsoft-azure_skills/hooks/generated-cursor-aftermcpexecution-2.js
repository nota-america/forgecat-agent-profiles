#!/usr/bin/env node
const fs = require('node:fs'), path = require('node:path'), {spawnSync} = require('node:child_process');
const spec = {"nativeDir": ".cursor", "owner": "skills/azure-app-onboard", "script": "track-telemetry.js", "interpreter": "node", "rootEnv": "AZURE_SKILLS_PLUGIN_ROOT", "version": "references/azure-plugin.json", "profileDepth": 4, "prefixes": []};
const profileRoot = path.resolve(__dirname, '..');
const projectRoot = path.resolve(profileRoot, ...Array(spec.profileDepth).fill('..'));
const nativeRoot = path.join(projectRoot, spec.nativeDir);
const owner = path.join(nativeRoot, spec.owner);
if (!fs.existsSync(path.join(owner, 'SKILL.md'))) throw new Error('Installed owning skill not found');
const raw = fs.readFileSync(0, 'utf8');
let input = raw;
if (raw.trim()) {
  const event = JSON.parse(raw);
  if (typeof event.tool_name === 'string') for (const [from, to] of spec.prefixes) {
    if (event.tool_name.startsWith(from)) { event.tool_name = to + event.tool_name.slice(from.length); break; }
  }
  input = JSON.stringify(event);
}
const result = spawnSync(spec.interpreter, [path.join(owner, 'scripts/plugin-telemetry', spec.script)], {
  input, encoding:'utf8', env:{...process.env, [spec.rootEnv]:nativeRoot,
    [spec.rootEnv+'_SKILLS_DIR']:path.join(nativeRoot, 'skills'),
    [spec.rootEnv+'_MANIFEST']:path.join(profileRoot, spec.version)}
});
if (result.stdout) process.stdout.write(result.stdout);
if (result.stderr) process.stderr.write(result.stderr);
if (result.error) throw result.error;
process.exitCode = result.status === null ? 1 : result.status;
