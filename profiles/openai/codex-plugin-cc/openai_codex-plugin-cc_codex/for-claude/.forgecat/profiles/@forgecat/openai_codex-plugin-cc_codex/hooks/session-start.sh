#!/bin/sh
set -eu

profile_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
exec node "$profile_dir/scripts/session-lifecycle-hook.mjs" SessionStart
