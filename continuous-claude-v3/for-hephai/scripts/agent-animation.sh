#!/bin/bash
# Animated ASCII agent display
# Usage: agent-animation.sh <agent-name> <marker-file>

AGENT_NAME="${1:-debug}"
MARKER_FILE="${2:-/tmp/agent-running}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
FRAMES_DIR="$PROJECT_DIR/.claude/art/frames"

# Create marker file
touch "$MARKER_FILE"

# Hide cursor
tput civis

# Cleanup on exit
cleanup() {
    tput cnorm  # Show cursor
    rm -f "$MARKER_FILE"
    clear
    exit 0
}
trap cleanup EXIT INT TERM

# Animation loop
frame=1
max_frames=4
spinner_chars=('⠋' '⠙' '⠹' '⠸' '⠼' '⠴' '⠦' '⠧' '⠇' '⠏')
spinner_idx=0

while [ -f "$MARKER_FILE" ]; do
    clear

    # Show frame
    if [ -f "$FRAMES_DIR/${AGENT_NAME}-${frame}.txt" ]; then
        cat "$FRAMES_DIR/${AGENT_NAME}-${frame}.txt"
    fi

    # Status line with spinner
    echo ""
    echo "  ${spinner_chars[$spinner_idx]} Investigating..."
    echo ""
    echo "  Press Ctrl+C to close"

    # Advance frame
    frame=$((frame % max_frames + 1))
    spinner_idx=$(( (spinner_idx + 1) % ${#spinner_chars[@]} ))

    sleep 0.3
done
