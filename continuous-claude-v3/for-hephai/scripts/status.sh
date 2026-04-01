#!/bin/bash
# StatusLine - shows what you'd forget after compaction
# Format: 145K 72% | main U:6 | ✓ Last done → Current focus
# Critical: ⚠ 160K 80% | main U:6 | Current focus

input=$(cat)

project_dir="${CLAUDE_PROJECT_DIR:-$(pwd)}"
cwd=$(echo "$input" | jq -r '.workspace.current_dir // ""' 2>/dev/null)
[[ -z "$cwd" || "$cwd" == "null" ]] && cwd="$project_dir"

# ─────────────────────────────────────────────────────────────────
# TOKENS - Context usage
# ─────────────────────────────────────────────────────────────────
input_tokens=$(echo "$input" | jq -r '.context_window.current_usage.input_tokens // 0' 2>/dev/null)
cache_read=$(echo "$input" | jq -r '.context_window.current_usage.cache_read_input_tokens // 0' 2>/dev/null)
cache_creation=$(echo "$input" | jq -r '.context_window.current_usage.cache_creation_input_tokens // 0' 2>/dev/null)

system_overhead=45000
total_tokens=$((input_tokens + cache_read + cache_creation + system_overhead))
context_size=$(echo "$input" | jq -r '.context_window.context_window_size // 200000' 2>/dev/null)

context_pct=$((total_tokens * 100 / context_size))
[[ "$context_pct" -gt 100 ]] && context_pct=100

# Write for hooks (per-session to avoid multi-instance conflicts)
# Use PPID as unique session ID since CLAUDE_SESSION_ID isn't set by Claude Code
session_id="${CLAUDE_SESSION_ID:-$PPID}"
echo "$context_pct" > "/tmp/claude-context-pct-${session_id}.txt"

# Format as K with one decimal
token_display=$(awk "BEGIN {printf \"%.1fK\", $total_tokens/1000}")

# ─────────────────────────────────────────────────────────────────
# GIT - Branch + S/U/A counts
# ─────────────────────────────────────────────────────────────────
git_info=""
if git -C "$cwd" rev-parse --git-dir > /dev/null 2>&1; then
    branch=$(git -C "$cwd" --no-optional-locks rev-parse --abbrev-ref HEAD 2>/dev/null)
    [[ ${#branch} -gt 12 ]] && branch="${branch:0:10}.."

    staged=$(git -C "$cwd" --no-optional-locks diff --cached --name-only 2>/dev/null | wc -l | tr -d ' ')
    unstaged=$(git -C "$cwd" --no-optional-locks diff --name-only 2>/dev/null | wc -l | tr -d ' ')
    added=$(git -C "$cwd" --no-optional-locks ls-files --others --exclude-standard 2>/dev/null | wc -l | tr -d ' ')

    counts=""
    [[ "$staged" -gt 0 ]] && counts="S:$staged"
    [[ "$unstaged" -gt 0 ]] && counts="${counts:+$counts }U:$unstaged"
    [[ "$added" -gt 0 ]] && counts="${counts:+$counts }A:$added"

    if [[ -n "$counts" ]]; then
        git_info="$branch \033[33m$counts\033[0m"
    else
        git_info="\033[32m$branch\033[0m"
    fi
fi

# ─────────────────────────────────────────────────────────────────
# CONTINUITY - Goal + Now from YAML handoffs (80% token savings)
# ─────────────────────────────────────────────────────────────────
goal=""
now_focus=""

# Priority 1: YAML handoffs (newest by mtime)
handoffs_dir="$project_dir/thoughts/shared/handoffs"
if [[ -d "$handoffs_dir" ]]; then
    # Find most recent yaml/yml file
    latest_handoff=$(find "$handoffs_dir" -type f \( -name "*.yaml" -o -name "*.yml" \) -print0 2>/dev/null | \
        xargs -0 ls -t 2>/dev/null | head -1)

    if [[ -n "$latest_handoff" && -f "$latest_handoff" ]]; then
        # Extract goal: from YAML (top-level field)
        goal=$(grep -E '^goal:' "$latest_handoff" 2>/dev/null | \
            sed 's/^goal:[[:space:]]*//' | head -1)

        # Extract now: from YAML (top-level field)
        now_focus=$(grep -E '^now:' "$latest_handoff" 2>/dev/null | \
            sed 's/^now:[[:space:]]*//' | head -1)
    fi
fi

# Priority 2: Legacy ledger files (fallback)
if [[ -z "$goal" && -z "$now_focus" ]]; then
    ledger=$(ls -t "$project_dir"/thoughts/ledgers/CONTINUITY_CLAUDE-*.md 2>/dev/null | head -1)
    if [[ -n "$ledger" ]]; then
        # Get goal from ## Goal section
        goal=$(grep -A1 '^## Goal' "$ledger" 2>/dev/null | tail -1 | head -c 40)

        # Get "Now:" item
        now_focus=$(grep -E '^\s*-\s*Now:' "$ledger" 2>/dev/null | \
            sed 's/^[[:space:]]*-[[:space:]]*Now:[[:space:]]*//' | head -1)
    fi
fi

# Truncate for display
[[ ${#goal} -gt 25 ]] && goal="${goal:0:23}.."
[[ ${#now_focus} -gt 30 ]] && now_focus="${now_focus:0:28}.."

# Build continuity string: "Goal → Now" or just "Goal" or "Now"
continuity=""
if [[ -n "$goal" && -n "$now_focus" ]]; then
    continuity="$goal → $now_focus"
elif [[ -n "$goal" ]]; then
    continuity="$goal"
elif [[ -n "$now_focus" ]]; then
    continuity="$now_focus"
fi

# ─────────────────────────────────────────────────────────────────
# OUTPUT - Contextual priority
# ─────────────────────────────────────────────────────────────────
# Critical context (≥80%): Warning takes priority
# Normal: Show everything

if [[ "$context_pct" -ge 80 ]]; then
    # CRITICAL - Context warning takes priority
    ctx_display="\033[31m⚠ ${token_display} ${context_pct}%\033[0m"
    output="$ctx_display"
    [[ -n "$git_info" ]] && output="$output | $git_info"
    [[ -n "$now_focus" ]] && output="$output | $now_focus"
elif [[ "$context_pct" -ge 60 ]]; then
    # WARNING - Yellow context
    ctx_display="\033[33m${token_display} ${context_pct}%\033[0m"
    output="$ctx_display"
    [[ -n "$git_info" ]] && output="$output | $git_info"
    [[ -n "$continuity" ]] && output="$output | $continuity"
else
    # NORMAL - Green, show full continuity
    ctx_display="\033[32m${token_display} ${context_pct}%\033[0m"
    output="$ctx_display"
    [[ -n "$git_info" ]] && output="$output | $git_info"
    [[ -n "$continuity" ]] && output="$output | $continuity"
fi

echo -e "$output"
