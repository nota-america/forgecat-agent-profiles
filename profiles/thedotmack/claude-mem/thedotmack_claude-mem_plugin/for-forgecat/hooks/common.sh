#!/usr/bin/env bash
set -euo pipefail

claude_mem_bootstrap_env() {
  export FORGECAT_PROFILE_DIR="$ROOT_DIR"
  export CLAUDE_PLUGIN_ROOT="$PLUGIN_ROOT"
  export PLUGIN_ROOT="$PLUGIN_ROOT"
  export CLAUDE_MEM_MODES_DIR="$PLUGIN_ROOT/modes"

  local recovered_path=""
  if [ -n "${SHELL:-}" ]; then
    recovered_path="$("$SHELL" -lc 'printf %s "$PATH"' 2>/dev/null || true)"
  else
    recovered_path="$(printenv PATH 2>/dev/null || true)"
  fi
  recovered_path="$(printf '%s' "$recovered_path" | tr ' ' ':')"
  if [ -n "$recovered_path" ]; then
    export PATH="$recovered_path:$PATH"
  fi

  export PATH="$HOME/.bun/bin:$HOME/.local/bin:/usr/local/bin:/opt/homebrew/bin:$PATH"

  if [ -d "$HOME/.nvm/versions/node" ]; then
    local nvm_version
    nvm_version="$(
      ls "$HOME/.nvm/versions/node" 2>/dev/null \
        | sed 's/^v//' \
        | sort -t. -k1,1n -k2,2n -k3,3n \
        | tail -1
    )"
    if [ -n "$nvm_version" ]; then
      export PATH="$HOME/.nvm/versions/node/v$nvm_version/bin:$PATH"
    fi
  fi
}
