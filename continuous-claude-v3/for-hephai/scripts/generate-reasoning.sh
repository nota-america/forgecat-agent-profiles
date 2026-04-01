#!/bin/bash
set -e

# Usage: generate-reasoning.sh <commit-hash> <commit-message>
# Reads from current branch's attempts file, writes to commit-keyed reasoning
#
# This script is called by the /commit skill after each commit to capture
# what was tried during development (build failures, fixes, etc.)

COMMIT_HASH="$1"
COMMIT_MSG="$2"
GIT_CLAUDE_DIR=".git/claude"

if [[ -z "$COMMIT_HASH" ]]; then
    echo "Usage: generate-reasoning.sh <commit-hash> <commit-message>"
    exit 1
fi

# Get current branch
current_branch=$(git branch --show-current 2>/dev/null || echo "detached")
safe_branch=$(echo "$current_branch" | tr '/' '-')

# Branch-keyed attempts file
ATTEMPTS_FILE="$GIT_CLAUDE_DIR/branches/$safe_branch/attempts.jsonl"
OUTPUT_DIR="$GIT_CLAUDE_DIR/commits/$COMMIT_HASH"

mkdir -p "$OUTPUT_DIR"

# Start reasoning file
cat > "$OUTPUT_DIR/reasoning.md" << EOF
# Commit: ${COMMIT_HASH:0:8}

## Branch
$current_branch

## What was committed
$COMMIT_MSG

## What was tried
EOF

# Parse attempts and add to reasoning
if [[ -f "$ATTEMPTS_FILE" ]] && [[ -s "$ATTEMPTS_FILE" ]]; then
    # Group failures - extract first line of error for each
    failures=$(jq -r 'select(.type == "build_fail") | "- `\(.command | split(" ") | .[0:3] | join(" "))...`: \(.error | split("\n")[0] | .[0:100])"' "$ATTEMPTS_FILE" 2>/dev/null || echo "")

    if [[ -n "$failures" ]]; then
        echo "" >> "$OUTPUT_DIR/reasoning.md"
        echo "### Failed attempts" >> "$OUTPUT_DIR/reasoning.md"
        echo "$failures" >> "$OUTPUT_DIR/reasoning.md"
    fi

    # Count attempts
    fail_count=$(jq -r 'select(.type == "build_fail")' "$ATTEMPTS_FILE" 2>/dev/null | wc -l | tr -d ' ')
    pass_count=$(jq -r 'select(.type == "build_pass")' "$ATTEMPTS_FILE" 2>/dev/null | wc -l | tr -d ' ')

    echo "" >> "$OUTPUT_DIR/reasoning.md"
    echo "### Summary" >> "$OUTPUT_DIR/reasoning.md"
    if [[ "$fail_count" -gt 0 ]]; then
        echo "Build passed after **$fail_count failed attempt(s)** and $pass_count successful build(s)." >> "$OUTPUT_DIR/reasoning.md"
    else
        echo "Build passed on first try ($pass_count successful build(s))." >> "$OUTPUT_DIR/reasoning.md"
    fi

    # Clear attempts for next feature (branch-specific)
    > "$ATTEMPTS_FILE"
else
    echo "" >> "$OUTPUT_DIR/reasoning.md"
    echo "_No build attempts recorded for this commit._" >> "$OUTPUT_DIR/reasoning.md"
fi

# Add files changed
echo "" >> "$OUTPUT_DIR/reasoning.md"
echo "## Files changed" >> "$OUTPUT_DIR/reasoning.md"
git diff-tree --no-commit-id --name-only -r "$COMMIT_HASH" 2>/dev/null | sed 's/^/- /' >> "$OUTPUT_DIR/reasoning.md" || echo "- (unable to determine files)" >> "$OUTPUT_DIR/reasoning.md"

echo "Reasoning saved to $OUTPUT_DIR/reasoning.md"
