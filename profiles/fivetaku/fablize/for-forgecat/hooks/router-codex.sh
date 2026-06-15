#!/usr/bin/env bash
# Codex adapter for the shared fablize UserPromptSubmit router.
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
FABLIZE_HOOK_OUTPUT=codex exec "$DIR/router.sh" "$@"
