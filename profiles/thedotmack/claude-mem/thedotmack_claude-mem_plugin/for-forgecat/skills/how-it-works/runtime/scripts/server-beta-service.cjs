#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const parts = fs.readdirSync(__dirname)
  .filter((file) => /^server-beta-service\.part\d+\.txt$/.test(file))
  .sort();

if (parts.length === 0) {
  throw new Error('claude-mem server-beta-service chunks are missing');
}

const bundle = parts
  .map((file) => fs.readFileSync(path.join(__dirname, file), 'utf8'))
  .join('');

const runtimePath = path.join(__dirname, '.server-beta-service.runtime.cjs');
if (!fs.existsSync(runtimePath) || fs.readFileSync(runtimePath, 'utf8') !== bundle) {
  fs.writeFileSync(runtimePath, bundle);
}

const runtime = process.env.BUN || process.execPath || 'bun';
const child = spawn(runtime, [runtimePath, ...process.argv.slice(2)], {
  stdio: 'inherit',
  cwd: process.cwd(),
  env: process.env,
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code == null ? 1 : code);
});
