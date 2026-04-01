#!/usr/bin/env python3
"""
Build AST-based symbol index using TLDR-code API.

Replaces build-symbol-index.sh with a cleaner Python implementation.
Outputs JSON index compatible with smart-search-router.

Usage:
    python build_symbol_index.py [path]
    python build_symbol_index.py .
    python build_symbol_index.py /path/to/project

    # Hook mode (backgrounds itself, returns immediately):
    python build_symbol_index.py --hook [path]
"""

import argparse
import json
import os
import subprocess
import sys
from pathlib import Path

# Add tldr-code to path
sys.path.insert(0, str(Path(__file__).parent.parent / "packages" / "tldr-code"))

# Try to import TLDR API, but gracefully handle missing deps
try:
    from tldr.api import (
        scan_project_files,
        extract_file,
        build_function_index,
    )
    TLDR_AVAILABLE = True
except ImportError as e:
    TLDR_AVAILABLE = False
    TLDR_IMPORT_ERROR = str(e)

# Cross-platform: ~/.claude/cache/symbol-index/ (works on Windows, Mac, Linux)
INDEX_DIR = Path.home() / ".claude" / "cache" / "symbol-index"
INDEX_DIR.mkdir(parents=True, exist_ok=True)


def build_index(search_path: str) -> dict:
    """Build symbol index from source files."""
    symbols = {}

    # Scan for source files
    files = scan_project_files(search_path)
    print(f"Scanning {len(files)} files in {search_path}", file=sys.stderr)

    for file_path in files:
        try:
            # Extract file info (functions, classes, imports)
            info = extract_file(file_path)

            # Add functions
            for func in info.get("functions", []):
                name = func.get("name", "")
                if name and name not in symbols:
                    symbols[name] = {
                        "type": "function",
                        "location": f"{file_path}:{func.get('start_line', 1)}"
                    }

            # Add classes
            for cls in info.get("classes", []):
                name = cls.get("name", "")
                if name and name not in symbols:
                    symbols[name] = {
                        "type": "class",
                        "location": f"{file_path}:{cls.get('start_line', 1)}"
                    }

            # Add imports (lower priority - don't overwrite functions/classes)
            for imp in info.get("imports", []):
                name = imp.get("name", "")
                if name and name not in symbols:
                    symbols[name] = {
                        "type": "import",
                        "location": f"{file_path}:{imp.get('line', 1)}"
                    }
        except Exception as e:
            print(f"Warning: {file_path}: {e}", file=sys.stderr)

    return symbols


def build_callers_index(search_path: str) -> dict:
    """Build reverse index mapping functions to their file locations."""
    callers = {}

    try:
        # Build function index (maps function names to file paths)
        index = build_function_index(search_path, language="python")

        # The index maps (module, func) or "module.func" -> file path
        for key, file_path in index.items():
            if isinstance(key, str) and "." in key:
                func_name = key.split(".")[-1]
                if func_name not in callers:
                    callers[func_name] = {"file": file_path}
    except Exception as e:
        print(f"Warning building function index: {e}", file=sys.stderr)

    return callers


def run_indexer(search_path: str) -> None:
    """Run the actual indexing (called directly or in background)."""
    if not TLDR_AVAILABLE:
        print(f"Skipping symbol index (deps not installed): {TLDR_IMPORT_ERROR}", file=sys.stderr)
        return

    search_path = str(Path(search_path).resolve())

    print(f"Building symbol index for: {search_path}", file=sys.stderr)

    # Build forward index (symbol → definition)
    symbols = build_index(search_path)
    index_file = INDEX_DIR / "symbols.json"
    index_file.write_text(json.dumps(symbols, indent=2))

    # Build reverse index (symbol → callers)
    callers = build_callers_index(search_path)
    callers_file = INDEX_DIR / "callers.json"
    callers_file.write_text(json.dumps(callers, indent=2))

    print(f"Indexed {len(symbols)} symbols, {len(callers)} call targets -> {index_file}", file=sys.stderr)
    print(str(index_file))


def main():
    parser = argparse.ArgumentParser(description="Build AST-based symbol index")
    parser.add_argument("path", nargs="?", default=".", help="Path to index")
    parser.add_argument(
        "--hook",
        action="store_true",
        help="Hook mode: background self, return immediately with JSON status",
    )
    args = parser.parse_args()

    search_path = os.environ.get("CLAUDE_PROJECT_DIR", args.path)

    if args.hook:
        # Hook mode: spawn background process and return immediately
        # This replaces session-symbol-index.sh behavior
        script_path = Path(__file__).resolve()

        # Spawn detached subprocess (no --hook flag = runs normally)
        if sys.platform == "win32":
            # Windows: use CREATE_NEW_PROCESS_GROUP
            subprocess.Popen(
                [sys.executable, str(script_path), search_path],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                creationflags=subprocess.CREATE_NEW_PROCESS_GROUP | subprocess.DETACHED_PROCESS,
            )
        else:
            # Unix: use nohup-like behavior via start_new_session
            subprocess.Popen(
                [sys.executable, str(script_path), search_path],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                start_new_session=True,
            )

        # Return immediately with status JSON (for Claude hook)
        print(json.dumps({"status": "indexing_started", "path": search_path}))
        return

    # Normal mode: run indexer synchronously
    run_indexer(search_path)


if __name__ == "__main__":
    main()
