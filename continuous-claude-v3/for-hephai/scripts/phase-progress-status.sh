#!/bin/bash
# Phase Progress Status - Shows multi-phase implementation progress
# Format: Phase 3/7: Database Schema [40%]
# Reads from ledger's checkbox state: [x] completed, [->] active, [ ] pending

set -e

project_dir="${CLAUDE_PROJECT_DIR:-$(pwd)}"

# Find most recent ledger file (check both locations)
ledger=""

# 1. Check thoughts/ledgers/ (deprecated but still used)
if [[ -d "$project_dir/thoughts/ledgers" ]]; then
    ledger=$(ls -t "$project_dir"/thoughts/ledgers/CONTINUITY_CLAUDE-*.md 2>/dev/null | head -1)
fi

# 2. Check root directory (older pattern)
if [[ -z "$ledger" ]]; then
    ledger=$(ls -t "$project_dir"/CONTINUITY_CLAUDE-*.md 2>/dev/null | head -1)
fi

# No ledger found - exit silently
if [[ -z "$ledger" || ! -f "$ledger" ]]; then
    exit 0
fi

# Extract phase information from the State section
# Look for lines with checkbox patterns: [x], [ ], [->], [→]

# Count completed phases (lines with [x] that contain "Phase" or numbered items)
completed=0
active_phase=""
active_name=""
total=0
pending=0

# Read the State section and parse checkboxes
in_state=false
while IFS= read -r line; do
    # Detect State section start
    if [[ "$line" =~ ^##[[:space:]]*State ]]; then
        in_state=true
        continue
    fi

    # Detect next section (exit State)
    if [[ "$in_state" == true && "$line" =~ ^##[[:space:]] && ! "$line" =~ ^##[[:space:]]*State ]]; then
        in_state=false
        continue
    fi

    if [[ "$in_state" == true ]]; then
        # Match checkbox patterns with Phase keyword or numbered items
        # [x] Phase 1: Description  OR  [x] **Phase 1: Description**
        if [[ "$line" =~ \[x\][[:space:]].*([Pp]hase[[:space:]]*[0-9]+|Step[[:space:]]*[0-9]+) ]]; then
            ((completed++))
            ((total++))
        # [->] or [→] marks the active phase
        elif [[ "$line" =~ \[[-\>→]+\][[:space:]]*(.*) ]]; then
            active_text="${BASH_REMATCH[1]}"
            # Extract phase number and name
            if [[ "$active_text" =~ ([Pp]hase[[:space:]]*([0-9]+)|Step[[:space:]]*([0-9]+))[[:space:]]*:?[[:space:]]*(.*) ]]; then
                phase_num="${BASH_REMATCH[2]:-${BASH_REMATCH[3]}}"
                active_phase="$phase_num"
                active_name="${BASH_REMATCH[4]}"
                # Clean up markdown formatting
                active_name=$(echo "$active_name" | sed 's/\*\*//g' | sed 's/^[[:space:]]*//' | sed 's/[[:space:]]*$//')
            else
                # No phase number, just use the text
                active_name="$active_text"
                active_name=$(echo "$active_name" | sed 's/\*\*//g' | sed 's/^[[:space:]]*//' | sed 's/[[:space:]]*$//')
            fi
            ((total++))
        # [ ] marks pending phases
        elif [[ "$line" =~ \[[[:space:]]\][[:space:]].*([Pp]hase[[:space:]]*[0-9]+|Step[[:space:]]*[0-9]+) ]]; then
            ((pending++))
            ((total++))
        fi

        # Also check for "Now:" line with [->] marker (alternative format)
        if [[ "$line" =~ ^-[[:space:]]*Now:[[:space:]]*\[[-\>→]+\][[:space:]]*(.*) ]]; then
            active_text="${BASH_REMATCH[1]}"
            if [[ "$active_text" =~ ([Pp]hase[[:space:]]*([0-9]+))[[:space:]]*:?[[:space:]]*(.*) ]]; then
                active_phase="${BASH_REMATCH[2]}"
                active_name="${BASH_REMATCH[3]}"
                active_name=$(echo "$active_name" | sed 's/\*\*//g' | sed 's/^[[:space:]]*//' | sed 's/[[:space:]]*$//')
            else
                active_name="$active_text"
                active_name=$(echo "$active_name" | sed 's/\*\*//g' | sed 's/^[[:space:]]*//' | sed 's/[[:space:]]*$//')
            fi
        fi
    fi
done < "$ledger"

# If no phases found via checkbox pattern, try alternative "Now:" pattern
if [[ -z "$active_name" && -z "$active_phase" ]]; then
    # Look for "- Now: [->] Something" pattern
    now_line=$(grep -E "^-[[:space:]]*Now:" "$ledger" 2>/dev/null | head -1)
    if [[ -n "$now_line" ]]; then
        # Extract what's after "Now:"
        active_text=$(echo "$now_line" | sed 's/^-[[:space:]]*Now:[[:space:]]*//' | sed 's/\[[-\>→]*\][[:space:]]*//')
        active_name=$(echo "$active_text" | sed 's/\*\*//g' | sed 's/^[[:space:]]*//' | sed 's/[[:space:]]*$//')
    fi
fi

# No phase information found
if [[ -z "$active_name" && "$total" -eq 0 ]]; then
    exit 0
fi

# Calculate total if we have phases
if [[ "$total" -eq 0 ]]; then
    total=$((completed + 1 + pending))
fi

# Calculate percentage
if [[ "$total" -gt 0 ]]; then
    pct=$((completed * 100 / total))
else
    pct=0
fi

# Build output
output=""

# Add checkmark for completed phases
if [[ "$completed" -gt 0 ]]; then
    output="$output\033[32m\xE2\x9C\x93\033[0m "  # Green checkmark
fi

# Format: "Phase 3/7: Description" or just "Description"
if [[ -n "$active_phase" && "$total" -gt 0 ]]; then
    output="${output}Phase ${active_phase}/${total}"
    if [[ -n "$active_name" ]]; then
        # Truncate name if too long
        [[ ${#active_name} -gt 30 ]] && active_name="${active_name:0:28}.."
        output="${output}: ${active_name}"
    fi
elif [[ -n "$active_name" ]]; then
    # No phase number, just show name
    [[ ${#active_name} -gt 40 ]] && active_name="${active_name:0:38}.."
    output="${output}${active_name}"
fi

# Add percentage if we have multiple phases
if [[ "$total" -gt 1 ]]; then
    output="${output} [\033[33m${pct}%\033[0m]"
fi

echo -e "$output"
