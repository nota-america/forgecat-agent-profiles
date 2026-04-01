#!/bin/bash
# Cross-platform RAM detection utility
# Outputs JSON: {"freeMemMB": N, "totalMemMB": N}

if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS: use vm_stat for free memory (pages free + inactive + speculative)
    # More accurate than just "Pages free" which is very low on macOS
    page_size=4096
    free_pages=$(vm_stat | grep "Pages free" | awk '{print $3}' | tr -d '.')
    inactive_pages=$(vm_stat | grep "Pages inactive" | awk '{print $3}' | tr -d '.')
    speculative_pages=$(vm_stat | grep "Pages speculative" | awk '{print $3}' | tr -d '.')

    # Default to 0 if not found
    free_pages=${free_pages:-0}
    inactive_pages=${inactive_pages:-0}
    speculative_pages=${speculative_pages:-0}

    # Calculate available memory (free + inactive + speculative)
    available_pages=$((free_pages + inactive_pages + speculative_pages))
    free_mb=$((available_pages * page_size / 1024 / 1024))

    total_mb=$(($(sysctl -n hw.memsize) / 1024 / 1024))
else
    # Linux: use /proc/meminfo (MemAvailable is most accurate)
    free_mb=$(grep MemAvailable /proc/meminfo 2>/dev/null | awk '{print int($2/1024)}')
    if [[ -z "$free_mb" ]]; then
        # Fallback to MemFree + Buffers + Cached if MemAvailable not available
        mem_free=$(grep "^MemFree:" /proc/meminfo | awk '{print $2}')
        buffers=$(grep "^Buffers:" /proc/meminfo | awk '{print $2}')
        cached=$(grep "^Cached:" /proc/meminfo | awk '{print $2}')
        free_mb=$(( (mem_free + buffers + cached) / 1024 ))
    fi
    total_mb=$(grep MemTotal /proc/meminfo | awk '{print int($2/1024)}')
fi

# Ensure we have valid numbers (default to reasonable fallback)
free_mb=${free_mb:-4096}
total_mb=${total_mb:-16384}

echo "{\"freeMemMB\": $free_mb, \"totalMemMB\": $total_mb}"
