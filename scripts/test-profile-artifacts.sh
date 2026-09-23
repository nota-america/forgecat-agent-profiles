#!/usr/bin/env bash
# End-to-end tests for check-profile-artifacts.rb.
#
# The README row rule exists because cff10ac2 renamed `license:` in five
# manifests and left the README tables saying the old thing; the catalog then
# described the same terms two ways for 26 days and every check passed. These
# cases pin down what the rule accepts, so the next rename cannot do it again.

set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FAILURES=0

new_repo() {
  local dir="$1"
  mkdir -p "$dir/scripts"
  cp "$SCRIPT_DIR/check-profile-artifacts.rb" "$dir/scripts/"
}

manifest() {
  # $1 repo dir, $2 license, $3... extra manifest lines
  local dir="$1" license="$2"
  shift 2
  mkdir -p "$dir/profiles/o/r/for-forgecat"
  {
    echo 'name: "@forgecat/fixture"'
    echo "license: $license"
    echo "visibility: public"
    for line in "$@"; do echo "$line"; done
  } >"$dir/profiles/o/r/for-forgecat/profile.yml"
}

readme() {
  # $1 path, $2 License cell ("-" writes a Details table with no License row)
  mkdir -p "$(dirname "$1")"
  {
    echo "# Fixture"
    echo
    echo "## Details"
    echo
    echo "| Field | Value |"
    echo "|---|---|"
    echo "| Author | Fixture |"
    [ "$2" = "-" ] || echo "| License | $2 |"
    echo "| Source platform | Claude Code |"
  } >"$1"
}

expect() {
  # $1 description, $2 expected exit, $3 output, $4 actual exit, $5 substring
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

check() {
  ruby "$1/scripts/check-profile-artifacts.rb" 2>&1
}

# Both authored READMEs agreeing with the manifest is the whole point.
case_rows_agree() {
  local dir="$1"
  manifest "$dir" Apache-2.0
  readme "$dir/profiles/o/r/README.md" Apache-2.0
  readme "$dir/profiles/o/r/for-forgecat/README.md" Apache-2.0
  local out rc
  out="$(check "$dir")"; rc=$?
  expect "matching License rows pass" 0 "$out" "$rc" "Profile artifact check passed"
}

# Older renders wrap the value in backticks. Same string, not a finding.
case_backticks_are_equivalent() {
  local dir="$1"
  manifest "$dir" MIT
  readme "$dir/profiles/o/r/README.md" '`MIT`'
  readme "$dir/profiles/o/r/for-forgecat/README.md" '`MIT`'
  local out rc
  out="$(check "$dir")"; rc=$?
  expect "backticked value equals the bare manifest value" 0 "$out" "$rc" "Profile artifact check passed"
}

# The regression: manifest renamed, packaged README left behind.
case_packaged_readme_disagrees() {
  local dir="$1"
  manifest "$dir" LicenseRef-Anthropic-Terms
  readme "$dir/profiles/o/r/README.md" LicenseRef-Anthropic-Terms
  readme "$dir/profiles/o/r/for-forgecat/README.md" "Proprietary. LICENSE.txt has complete terms"
  local out rc
  out="$(check "$dir")"; rc=$?
  expect "packaged README disagreeing with the manifest is refused" 1 "$out" "$rc" "for-forgecat/README.md says License"
}

# The catalog-facing copy is held to the same value.
case_profile_readme_disagrees() {
  local dir="$1"
  manifest "$dir" Apache-2.0
  readme "$dir/profiles/o/r/README.md" LicenseRef-Figma-Developer-Terms
  readme "$dir/profiles/o/r/for-forgecat/README.md" Apache-2.0
  local out rc
  out="$(check "$dir")"; rc=$?
  expect "catalog-facing README disagreeing is refused" 1 "$out" "$rc" "profiles/o/r/README.md says License"
}

# The published package has to state its own terms somewhere.
case_packaged_readme_missing_row() {
  local dir="$1"
  manifest "$dir" MIT
  readme "$dir/profiles/o/r/README.md" MIT
  readme "$dir/profiles/o/r/for-forgecat/README.md" -
  local out rc
  out="$(check "$dir")"; rc=$?
  expect "packaged README with no License row is refused" 1 "$out" "$rc" "has no \`| License |\` row"
}

case_packaged_readme_absent() {
  local dir="$1"
  manifest "$dir" MIT
  readme "$dir/profiles/o/r/README.md" MIT
  local out rc
  out="$(check "$dir")"; rc=$?
  expect "missing packaged README is refused" 1 "$out" "$rc" "to describe the package"
}

# A collection README that never had a Details table is not this rule's business.
case_profile_readme_absent() {
  local dir="$1"
  manifest "$dir" MIT
  readme "$dir/profiles/o/r/for-forgecat/README.md" MIT
  local out rc
  out="$(check "$dir")"; rc=$?
  expect "absent catalog-facing README is not this rule's finding" 0 "$out" "$rc" "Profile artifact check passed"
}

case_profile_readme_without_row() {
  local dir="$1"
  manifest "$dir" MIT
  readme "$dir/profiles/o/r/README.md" -
  readme "$dir/profiles/o/r/for-forgecat/README.md" MIT
  local out rc
  out="$(check "$dir")"; rc=$?
  expect "catalog-facing README without a License row is allowed" 0 "$out" "$rc" "Profile artifact check passed"
}

# The install snapshots keep describing the version that was installed.
case_platform_snapshot_is_not_checked() {
  local dir="$1"
  manifest "$dir" Apache-2.0 "compatibility:" "  platforms:" "    tested:" "      - claude-code"
  readme "$dir/profiles/o/r/README.md" Apache-2.0
  readme "$dir/profiles/o/r/for-forgecat/README.md" Apache-2.0
  readme "$dir/profiles/o/r/for-claude/.forgecat/profiles/@forgecat/fixture/README.md" "Proprietary. LICENSE.txt has complete terms"
  local out rc
  out="$(check "$dir")"; rc=$?
  expect "for-claude install snapshot is left alone" 0 "$out" "$rc" "Profile artifact check passed"
}

# The rule this file is named after still fires.
case_tested_without_artifact() {
  local dir="$1"
  manifest "$dir" MIT "compatibility:" "  platforms:" "    tested:" "      - claude-code"
  readme "$dir/profiles/o/r/README.md" MIT
  readme "$dir/profiles/o/r/for-forgecat/README.md" MIT
  local out rc
  out="$(check "$dir")"; rc=$?
  expect "tested platform without its artifact dir is refused" 1 "$out" "$rc" "marks \"claude-code\" tested"
}

run_case case_rows_agree
run_case case_backticks_are_equivalent
run_case case_packaged_readme_disagrees
run_case case_profile_readme_disagrees
run_case case_packaged_readme_missing_row
run_case case_packaged_readme_absent
run_case case_profile_readme_absent
run_case case_profile_readme_without_row
run_case case_platform_snapshot_is_not_checked
run_case case_tested_without_artifact

echo
if [ "$FAILURES" -ne 0 ]; then
  echo "$FAILURES profile artifact test(s) failed."
  exit 1
fi
echo "All profile artifact tests passed."
