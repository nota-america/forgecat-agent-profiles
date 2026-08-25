Find the installed caveman init helper in the current repo and run it with `node`:

- `./.claude/skills/caveman/src/tools/caveman-init.js`
- `./.cursor/skills/caveman/src/tools/caveman-init.js`
- `./.agents/skills/caveman/src/tools/caveman-init.js`

Use the first path that exists. Pass through `{{args}}`. Use `--dry-run` first if the user did not pass `--force`, so we never silently overwrite an existing rule file.