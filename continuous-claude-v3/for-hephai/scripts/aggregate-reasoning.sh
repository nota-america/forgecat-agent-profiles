#!/bin/bash
set -e

# Usage: aggregate-reasoning.sh [base-branch]
# Outputs markdown of all reasoning for commits since base branch
# Used by /describe_pr to include "Approaches Tried" section in PR descriptions

BASE="${1:-main}"
GIT_CLAUDE_DIR=".git/claude"

echo "## Approaches Tried"
echo ""

found_any=false

# Get all commits since base (oldest first for chronological order)
commits=$(git log "$BASE"..HEAD --format="%H" --reverse 2>/dev/null || echo "")

if [[ -z "$commits" ]]; then
    echo "_No commits found between $BASE and HEAD._"
    echo ""
    echo "---"
    echo "*This section auto-generated from development session reasoning.*"
    exit 0
fi

for commit in $commits; do
    reasoning_file="$GIT_CLAUDE_DIR/commits/$commit/reasoning.md"

    if [[ -f "$reasoning_file" ]]; then
        found_any=true
        short_hash="${commit:0:8}"

        # Get commit message
        commit_msg=$(git log -1 --format="%s" "$commit")
        echo "### $commit_msg (\`$short_hash\`)"
        echo ""

        # Extract the "What was tried" section
        if grep -q "### Failed attempts" "$reasoning_file"; then
            # Show failed attempts
            sed -n '/### Failed attempts/,/### Summary/p' "$reasoning_file" | head -n -1
            echo ""
            # Show summary
            grep -A1 "### Summary" "$reasoning_file" | tail -1
        elif grep -q "### Summary" "$reasoning_file"; then
            # No failures, just show summary
            grep -A1 "### Summary" "$reasoning_file" | tail -1
        else
            echo "_No build attempts recorded._"
        fi
        echo ""
    fi
done

if [[ "$found_any" == "false" ]]; then
    echo "_No reasoning files found for commits in this PR._"
    echo ""
    echo "_This may be because:_"
    echo "- _Commits were made before reasoning tracking was enabled_"
    echo "- _No build/test commands were run during development_"
fi

echo ""
echo "---"
echo "*This section auto-generated from development session reasoning.*"
