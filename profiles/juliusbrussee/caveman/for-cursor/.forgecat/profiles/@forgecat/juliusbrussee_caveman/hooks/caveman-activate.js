#!/usr/bin/env node
// Forgecat hook launcher.
// The real runtime lives under the installed caveman skill so its support
// files are installed by Forgecat's normal skill-resource copy.

(async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const processMod = await import('node:process');
  const { spawnSync } = await import('node:child_process');

  const process = processMod.default;
  const cwd = process.cwd();
  const candidates = [
    path.join(cwd, '.claude', 'skills', 'caveman', 'hooks', 'caveman-activate.js'),
    path.join(cwd, '.cursor', 'skills', 'caveman', 'hooks', 'caveman-activate.js'),
    path.join(cwd, '.agents', 'skills', 'caveman', 'hooks', 'caveman-activate.js'),
  ];
  const target = candidates.find((p) => fs.existsSync(p));

  if (!target) {
    process.stderr.write(
      'caveman-activate: installed runtime not found. Checked:\n' +
      candidates.map((p) => `  - ${p}`).join('\n') + '\n'
    );
    process.exit(1);
  }

  const result = spawnSync(process.execPath, [target, ...process.argv.slice(2)], {
    cwd,
    env: process.env,
    encoding: 'utf8',
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  process.exit(result.status == null ? 1 : result.status);
})().catch((err) => {
  process.stderr.write(`caveman-activate: ${err && err.stack ? err.stack : err}\n`);
  process.exit(1);
});
