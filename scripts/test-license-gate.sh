#!/usr/bin/env bash
# End-to-end tests for check-license-evidence.rb.
#
# The unit tests cover what counts as evidence; these cover the parts that only
# exist against a diff — the baseline list and the match receipts. Both bypasses
# below passed review at some point, so they are pinned down here.

set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FAILURES=0
SHA=d02fd24f151f5133650eaa78e7da3cac2cedd72f
OTHER_SHA=7cb89c221ecc9eccb71580aaff3695408cdeef2b

fixture() {
  # $1 repo dir, $2 profile path, $3 license, $4 repository URL
  mkdir -p "$1/$2/for-forgecat"
  cat >"$1/$2/for-forgecat/profile.yml" <<EOF
name: "@forgecat/fixture"
description: fixture
repository: $4
license: $3
visibility: public
EOF
}

new_repo() {
  local dir="$1"
  mkdir -p "$dir/scripts"
  cp "$SCRIPT_DIR/check-license-evidence.rb" "$SCRIPT_DIR/license_evidence.rb" "$dir/scripts/"
  git -C "$dir" init -q
  git -C "$dir" config user.email test@example.com
  git -C "$dir" config user.name test
}

commit_all() {
  git -C "$1" add -A
  git -C "$1" commit -q -m "$2"
}

expect() {
  # $1 description, $2 expected exit (0 pass / 1 fail), $3 output, $4 actual exit, $5 substring
  if [ "$4" != "$2" ]; then
    echo "FAIL $1 — expected exit $2, got $4"
    echo "$3" | sed 's/^/       /'
    FAILURES=$((FAILURES + 1))
    return
  fi
  if [ -n "${5:-}" ] && ! printf '%s' "$3" | grep -q "$5"; then
    echo "FAIL $1 — output missing \"$5\""
    echo "$3" | sed 's/^/       /'
    FAILURES=$((FAILURES + 1))
    return
  fi
  echo "ok   $1"
}

run_case() {
  local dir
  dir="$(mktemp -d)"
  new_repo "$dir"
  "$@" "$dir"
  rm -rf "$dir"
}

# A PR that removes its own baseline entry must be checked, even though it
# touches no file under the profile directory.
case_baseline_removal_only() {
  local dir="$1"
  fixture "$dir" profiles/o/r MIT https://github.com/o/r
  echo "profiles/o/r" >"$dir/scripts/license-baseline.txt"
  commit_all "$dir" base
  : >"$dir/scripts/license-baseline.txt"
  commit_all "$dir" "graduate the profile"
  local out status
  out="$(cd "$dir" && RUBYOPT=-EUTF-8 ruby scripts/check-license-evidence.rb --changed-only HEAD~1..HEAD 2>&1)"
  status=$?
  expect "a baseline-removal-only PR still checks the profile" 1 "$out" "$status" "must pin a full 40-character commit"
}

case_baseline_addition() {
  local dir="$1"
  fixture "$dir" profiles/o/r MIT https://github.com/o/r
  : >"$dir/scripts/license-baseline.txt"
  commit_all "$dir" base
  echo "profiles/o/r" >"$dir/scripts/license-baseline.txt"
  commit_all "$dir" "exempt myself"
  local out status
  out="$(cd "$dir" && RUBYOPT=-EUTF-8 ruby scripts/check-license-evidence.rb --changed-only HEAD~1..HEAD 2>&1)"
  status=$?
  expect "adding yourself to the baseline is refused" 1 "$out" "$status" "the baseline may only shrink"
}

case_receipt_mismatch() {
  local dir="$1"
  fixture "$dir" profiles/o/r MIT "https://github.com/o/r/tree/$SHA/skills"
  mkdir -p "$dir/profiles/o/r/for-forgecat"
  echo "MIT License" >"$dir/profiles/o/r/for-forgecat/LICENSE"
  : >"$dir/scripts/license-baseline.txt"
  printf 'profiles/o/r\t%s\n' "$OTHER_SHA" >"$dir/scripts/license-matches.tsv"
  commit_all "$dir" base
  touch "$dir/profiles/o/r/for-forgecat/marker"
  commit_all "$dir" "touch the profile"
  local out status
  out="$(cd "$dir" && RUBYOPT=-EUTF-8 ruby scripts/check-license-evidence.rb --changed-only HEAD~1..HEAD 2>&1)"
  status=$?
  expect "a pin that disagrees with its receipt is refused" 1 "$out" "$status" "but the match receipt records"
}

case_receipt_agreement() {
  local dir="$1"
  fixture "$dir" profiles/o/r MIT "https://github.com/o/r/tree/$SHA/skills"
  mkdir -p "$dir/profiles/o/r/for-forgecat"
  echo "MIT License" >"$dir/profiles/o/r/for-forgecat/LICENSE"
  : >"$dir/scripts/license-baseline.txt"
  printf 'profiles/o/r\t%s\n' "$SHA" >"$dir/scripts/license-matches.tsv"
  commit_all "$dir" base
  touch "$dir/profiles/o/r/for-forgecat/marker"
  commit_all "$dir" "touch the profile"
  local out status
  out="$(cd "$dir" && RUBYOPT=-EUTF-8 ruby scripts/check-license-evidence.rb --changed-only HEAD~1..HEAD 2>&1)"
  status=$?
  expect "a pin matching its receipt passes" 0 "$out" "$status" "check passed"
}

case_unknown_blocked() {
  local dir="$1"
  fixture "$dir" profiles/o/r Unknown "https://github.com/o/r/tree/$SHA/skills"
  : >"$dir/scripts/license-baseline.txt"
  commit_all "$dir" base
  touch "$dir/profiles/o/r/for-forgecat/marker"
  commit_all "$dir" "touch the profile"
  local out status
  out="$(cd "$dir" && RUBYOPT=-EUTF-8 ruby scripts/check-license-evidence.rb --changed-only HEAD~1..HEAD 2>&1)"
  status=$?
  expect "a new Unknown profile is refused" 1 "$out" "$status" "cannot be published"
}

run_case case_baseline_removal_only
run_case case_baseline_addition
run_case case_receipt_mismatch
run_case case_receipt_agreement
run_case case_unknown_blocked

if [ "$FAILURES" -eq 0 ]; then
  echo
  echo "All license gate tests passed."
else
  echo
  echo "$FAILURES gate test(s) failed."
  exit 1
fi
