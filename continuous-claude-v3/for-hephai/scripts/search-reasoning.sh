#!/bin/bash

# Usage: search-reasoning.sh <query>
# Searches all reasoning files for relevant content
#
# This enables semantic search over past reasoning to find:
# - Failed approaches that were tried before
# - Solutions that worked for similar problems
# - Decisions and their rationale

QUERY="$1"
GIT_CLAUDE_DIR=".git/claude"

if [[ -z "$QUERY" ]]; then
    echo "Usage: search-reasoning.sh <query>"
    echo ""
    echo "Examples:"
    echo "  search-reasoning.sh 'rate limiting'"
    echo "  search-reasoning.sh 'authentication'"
    echo "  search-reasoning.sh 'build fail'"
    exit 1
fi

echo "Searching past reasoning for: \"$QUERY\""
echo "==========================================="

# Check if any reasoning files exist
if ! ls "$GIT_CLAUDE_DIR/commits/"*/reasoning.md >/dev/null 2>&1; then
    echo ""
    echo "No reasoning files found."
    echo ""
    echo "Reasoning files are created when you use /commit after running builds."
    echo "They capture what was tried during development."
    exit 0
fi

# Find all reasoning files and search
matches=$(grep -l -i "$QUERY" "$GIT_CLAUDE_DIR/commits/"*/reasoning.md 2>/dev/null || echo "")

if [[ -z "$matches" ]]; then
    echo ""
    echo "No matches found for: \"$QUERY\""
    echo ""
    echo "Try different search terms or check available reasoning files:"
    echo "  ls $GIT_CLAUDE_DIR/commits/*/reasoning.md"
    exit 0
fi

echo ""

for file in $matches; do
    commit_hash=$(basename "$(dirname "$file")")

    # Get commit info if available
    commit_msg=$(git log -1 --format="%s" "$commit_hash" 2>/dev/null || echo "Unknown commit")
    commit_date=$(git log -1 --format="%ci" "$commit_hash" 2>/dev/null | cut -d' ' -f1 || echo "Unknown date")

    echo "## Commit \`${commit_hash:0:8}\` - $commit_date"
    echo "**$commit_msg**"
    echo ""

    # Show context around matches (2 lines before/after)
    grep -B 2 -A 2 -i --color=never "$QUERY" "$file" | head -30
    echo ""
    echo "---"
    echo ""
done

echo "Found matches in $(echo "$matches" | wc -l | tr -d ' ') reasoning file(s)."
