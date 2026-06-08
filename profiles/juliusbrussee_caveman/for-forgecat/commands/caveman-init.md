---
description: "Drop the always-on caveman activation rule into the current repo for every IDE agent"
---

Run `node ./.forgecat/profiles/@forgecat/juliusbrussee_caveman/src/tools/caveman-init.js {{args}}` in the current repo and report the result. Use --dry-run first if the user did not pass --force, so we never silently overwrite an existing rule file.
