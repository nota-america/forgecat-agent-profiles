#!/usr/bin/env bash
# Tests for how license-audit.rb decides a profile's status.
#
# `resolved` is the one claim the table makes on its own behalf, so each way of
# not earning it is pinned here: no receipt, a receipt that disagrees with the
# pin, a receipt naming a revision no snapshot has, and evidence missing.

set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FAILURES=0
SHA=d02fd24f151f5133650eaa78e7da3cac2cedd72f
OTHER_SHA=7cb89c221ecc9eccb71580aaff3695408cdeef2b

# $1 root, $2 pin commit (or "main"), $3 ship evidence (yes/no)
build_tree() {
  local root="$1" pin="$2" evidence="$3"
  mkdir -p "$root/scripts" "$root/profiles/o/r/for-forgecat"
  cp "$SCRIPT_DIR/license-audit.rb" "$SCRIPT_DIR/license_evidence.rb" "$root/scripts/"
  local url="https://github.com/o/r/tree/$pin/skills"
  cat >"$root/profiles/o/r/for-forgecat/profile.yml" <<EOF
name: "@forgecat/fixture"
description: fixture
repository: $url
license: MIT
visibility: public
EOF
  [ "$evidence" = "yes" ] && echo "MIT License" >"$root/profiles/o/r/for-forgecat/LICENSE"

  # A snapshot archive holding exactly one revision of o/r.
  mkdir -p "$root/snapshots/github.com__o__r/commits/${SHA:0:12}"
  cat >"$root/snapshots/github.com__o__r/commits/${SHA:0:12}/source.yml" <<EOF
---
source_repo: https://github.com/o/r
archived_commit: $SHA
EOF
}

status_of() {
  ruby "$1/scripts/license-audit.rb" --snapshots "$1/snapshots" 2>/dev/null |
    grep '^| profiles/o/r ' | awk -F'|' '{gsub(/^ +| +$/,"",$10); print $10}'
}

expect_status() {
  # $1 description, $2 expected, $3 actual
  if [ "$2" = "$3" ]; then
    echo "ok   $1"
  else
    echo "FAIL $1 — expected \"$2\", got \"$3\""
    FAILURES=$((FAILURES + 1))
  fi
}

run_case() {
  # $1 description, $2 pin, $3 evidence, $4 receipt commit ("" for none), $5 expected
  local dir
  dir="$(mktemp -d)"
  build_tree "$dir" "$2" "$3"
  [ -n "$4" ] && printf 'profiles/o/r\t%s\n' "$4" >"$dir/scripts/license-matches.tsv"
  expect_status "$1" "$5" "$(RUBYOPT=-EUTF-8 status_of "$dir")"
  rm -rf "$dir"
}

run_case "no receipt leaves the profile unresolved" "$SHA" yes "" unresolved-needs-match
run_case "a receipt disagreeing with the pin is not resolved" "$SHA" yes "$OTHER_SHA" matched-needs-pin-or-evidence
run_case "a receipt for a revision no snapshot has is not resolved" "$OTHER_SHA" yes "$OTHER_SHA" matched-needs-pin-or-evidence
run_case "a matching receipt without evidence is not resolved" "$SHA" no "$SHA" matched-needs-pin-or-evidence
run_case "receipt, pin, snapshot and evidence agreeing is resolved" "$SHA" yes "$SHA" resolved
run_case "an unpinned repository is never resolved" main yes "$SHA" matched-needs-pin-or-evidence

if [ "$FAILURES" -eq 0 ]; then
  echo
  echo "All license audit tests passed."
else
  echo
  echo "$FAILURES audit test(s) failed."
  exit 1
fi
