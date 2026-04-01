#!/usr/bin/env python3
"""Fast incremental indexer for SessionStart hook.

This script is called by the SessionStart hook and must:
1. Check checkpoint quickly (< 100ms)
2. If no new files, exit immediately
3. If new files found, process them (target < 5s for 5 files)
4. Never block Claude startup

Environment Variables:
    TEMPORAL_CHECKPOINT_PATH: Override default checkpoint path
    TEMPORAL_PROJECTS_DIR: Override default projects directory

Usage:
    python index_incremental.py [--dry-run]
    python index_incremental.py --hook  # Background mode for Claude hook
"""

from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys
import time
from pathlib import Path
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from typing import Any

# Default paths - can be overridden by env vars
DEFAULT_CHECKPOINT_PATH = Path.home() / ".claude/cache/temporal-memory/checkpoint.json"
DEFAULT_PROJECTS_DIR = Path.home() / ".claude/projects"


def get_checkpoint_path() -> Path:
    """Get checkpoint path from env or default."""
    env_path = os.environ.get("TEMPORAL_CHECKPOINT_PATH")
    if env_path:
        return Path(env_path)
    return DEFAULT_CHECKPOINT_PATH


def get_projects_dir() -> Path:
    """Get projects directory from env or default."""
    env_path = os.environ.get("TEMPORAL_PROJECTS_DIR")
    if env_path:
        return Path(env_path)
    return DEFAULT_PROJECTS_DIR


def quick_check(
    checkpoint_path: Path | None = None,
    projects_dir: Path | None = None,
) -> bool:
    """Return True if there are new files to index.

    This function must be FAST (< 100ms) as it runs on every session start.
    Only does lightweight file stat comparisons, no heavy imports.

    Args:
        checkpoint_path: Path to checkpoint JSON file
        projects_dir: Directory containing JSONL project files

    Returns:
        True if there are new/modified files to index, False otherwise
    """
    if checkpoint_path is None:
        checkpoint_path = get_checkpoint_path()
    if projects_dir is None:
        projects_dir = get_projects_dir()

    # First run - no checkpoint exists
    if not checkpoint_path.exists():
        return True

    # Load checkpoint
    try:
        with open(checkpoint_path) as f:
            checkpoint: dict[str, Any] = json.load(f)
    except (json.JSONDecodeError, OSError):
        # Corrupted or unreadable - need to reindex
        return True

    indexed_files: dict[str, dict[str, float]] = checkpoint.get("files", {})

    # Check for new or modified files
    if not projects_dir.exists():
        return False

    # Scan for JSONL files
    for jsonl_file in projects_dir.glob("**/*.jsonl"):
        file_path_str = str(jsonl_file)

        # New file not in checkpoint
        if file_path_str not in indexed_files:
            return True

        # Check if modified (compare mtime and size)
        try:
            stat = jsonl_file.stat()
            indexed = indexed_files[file_path_str]

            if stat.st_mtime != indexed.get("mtime"):
                return True
            if stat.st_size != indexed.get("size"):
                return True
        except OSError:
            # Can't stat file - skip it
            continue

    return False


def _run_indexer(dry_run: bool = False, timeout: int = 10) -> None:
    """Run the indexer logic.

    Args:
        dry_run: If True, check for new files but don't process
        timeout: Maximum seconds to spend indexing

    Note:
        This function may raise exceptions - caller should handle them.
    """
    start = time.time()

    # Fast path: check if anything to do before heavy imports
    if not quick_check():
        # Nothing to do - exit fast
        return

    if dry_run:
        print("Dry run: new files detected, would process", file=sys.stderr)
        return

    # Only import heavy modules if needed
    try:
        from scripts.backfill_temporal import backfill_incremental

        backfill_incremental(quiet=True, timeout=timeout)
    except ImportError as e:
        # Backfill module not available - not fatal
        print(f"Index skip (module not ready): {e}", file=sys.stderr)

    elapsed = time.time() - start
    if elapsed > 2:
        print(f"Warning: indexing took {elapsed:.1f}s", file=sys.stderr)


def main() -> None:
    """Main entry point for incremental indexer.

    This function NEVER raises exceptions or returns non-zero exit codes
    because it must never block Claude startup.
    """
    parser = argparse.ArgumentParser(description="Fast incremental indexer")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Check for new files but don't process them",
    )
    parser.add_argument(
        "--timeout",
        type=int,
        default=10,
        help="Maximum time to spend indexing (default: 10s)",
    )
    parser.add_argument(
        "--hook",
        action="store_true",
        help="Hook mode: background self, return immediately (replaces index-sessions.sh)",
    )

    try:
        args = parser.parse_args()

        if args.hook:
            # Hook mode: spawn background process and return immediately
            # This replaces index-sessions.sh behavior
            script_path = Path(__file__).resolve()

            # Spawn detached subprocess (no --hook flag = runs normally)
            if sys.platform == "win32":
                # Windows: use CREATE_NEW_PROCESS_GROUP
                subprocess.Popen(
                    [sys.executable, str(script_path), f"--timeout={args.timeout}"],
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL,
                    creationflags=subprocess.CREATE_NEW_PROCESS_GROUP | subprocess.DETACHED_PROCESS,
                )
            else:
                # Unix: use nohup-like behavior via start_new_session
                subprocess.Popen(
                    [sys.executable, str(script_path), f"--timeout={args.timeout}"],
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL,
                    start_new_session=True,
                )

            # Return immediately (hook must not block)
            return

        _run_indexer(dry_run=args.dry_run, timeout=args.timeout)
    except Exception as e:  # noqa: BLE001
        # Catch-all: never block Claude startup
        print(f"Index error (non-fatal): {e}", file=sys.stderr)


if __name__ == "__main__":
    main()
