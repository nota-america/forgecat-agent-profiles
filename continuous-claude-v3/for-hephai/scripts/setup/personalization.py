#!/usr/bin/env python3
"""Personalization Module for OPC v3.

Handles preference extraction from JSONL session logs and
configuration of default agent behaviors.

USAGE:
    python -m scripts.setup.personalization --jsonl-dir ~/.claude/logs/
"""

import asyncio
import json
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any

try:
    from rich.console import Console

    console = Console()
except ImportError:

    class Console:
        def print(self, *args, **kwargs):
            print(*args)

    console = Console()


# Extension to language mapping
EXTENSION_TO_LANGUAGE = {
    ".py": "python",
    ".ts": "typescript",
    ".tsx": "typescript",
    ".js": "javascript",
    ".jsx": "javascript",
    ".rs": "rust",
    ".go": "go",
    ".java": "java",
    ".rb": "ruby",
    ".php": "php",
    ".swift": "swift",
    ".kt": "kotlin",
    ".scala": "scala",
    ".cs": "csharp",
    ".cpp": "cpp",
    ".c": "c",
    ".h": "c",
    ".hpp": "cpp",
    ".lua": "lua",
    ".sh": "bash",
    ".sql": "sql",
    ".md": "markdown",
    ".json": "json",
    ".yaml": "yaml",
    ".yml": "yaml",
    ".toml": "toml",
}


async def run_jsonl_backfill(jsonl_dir: Path) -> dict[str, Any]:
    """Extract preferences from JSONL session logs.

    Scans all .jsonl files in the directory and extracts:
    - File extension preferences (what languages are used)
    - Test framework preferences (pytest, jest, etc.)
    - Database preferences (postgres, sqlite, etc.)

    Args:
        jsonl_dir: Directory containing .jsonl session files

    Returns:
        dict with preference categories and counts
    """
    if not jsonl_dir.exists():
        return {}

    preferences: dict[str, Counter] = defaultdict(Counter)

    jsonl_files = list(jsonl_dir.glob("*.jsonl"))
    if not jsonl_files:
        return {}

    for jsonl_file in jsonl_files:
        try:
            with open(jsonl_file) as f:
                for line in f:
                    if not line.strip():
                        continue

                    try:
                        event = json.loads(line)
                    except json.JSONDecodeError:
                        continue

                    # Extract file extension preferences from Write tool
                    if event.get("type") == "tool_use" and event.get("tool_name") == "Write":
                        path = event.get("parameters", {}).get("path", "")
                        if path:
                            ext = Path(path).suffix
                            if ext:
                                preferences["file_extension"][ext] += 1

                    # Extract test framework preferences from Bash commands
                    if event.get("type") == "tool_use" and event.get("tool_name") == "Bash":
                        cmd = event.get("parameters", {}).get("command", "")

                        if "pytest" in cmd:
                            preferences["test_framework"]["pytest"] += 1
                        elif "jest" in cmd:
                            preferences["test_framework"]["jest"] += 1
                        elif "vitest" in cmd:
                            preferences["test_framework"]["vitest"] += 1
                        elif "mocha" in cmd:
                            preferences["test_framework"]["mocha"] += 1
                        elif "rspec" in cmd:
                            preferences["test_framework"]["rspec"] += 1
                        elif "cargo test" in cmd:
                            preferences["test_framework"]["cargo_test"] += 1
                        elif "go test" in cmd:
                            preferences["test_framework"]["go_test"] += 1

                    # Extract database preferences from content
                    event_str = str(event).lower()
                    if "postgres" in event_str or "postgresql" in event_str:
                        preferences["database"]["postgres"] += 1
                    if "sqlite" in event_str:
                        preferences["database"]["sqlite"] += 1
                    if "mysql" in event_str:
                        preferences["database"]["mysql"] += 1
                    if "mongodb" in event_str or "mongo" in event_str:
                        preferences["database"]["mongodb"] += 1
                    if "redis" in event_str:
                        preferences["database"]["redis"] += 1

        except Exception as e:
            console.print(f"[yellow]Warning: Could not process {jsonl_file}: {e}[/yellow]")
            continue

    # Convert defaultdict(Counter) to regular dict
    return {k: dict(v) for k, v in preferences.items()}


async def import_existing_preferences(file_path: Path) -> dict[str, Any]:
    """Import preferences from an exported JSON file.

    Args:
        file_path: Path to JSON file with preferences

    Returns:
        Imported preferences dict, or empty dict if file not found
    """
    if not file_path.exists():
        return {}

    try:
        with open(file_path) as f:
            return json.load(f)
    except (OSError, json.JSONDecodeError) as e:
        console.print(f"[yellow]Warning: Could not import preferences: {e}[/yellow]")
        return {}


async def configure_defaults(preferences: dict[str, Any]) -> dict[str, Any]:
    """Configure default settings based on detected preferences.

    Analyzes preference counts and determines:
    - Primary programming language
    - Preferred test framework
    - Preferred database

    Args:
        preferences: Raw preference counts from backfill

    Returns:
        dict with recommended defaults
    """
    config: dict[str, Any] = {}

    # Determine primary language from file extensions
    file_ext_counts = preferences.get("file_extension", {})
    if file_ext_counts:
        # Map extensions to languages and sum counts
        language_counts: Counter = Counter()
        for ext, count in file_ext_counts.items():
            lang = EXTENSION_TO_LANGUAGE.get(ext, "unknown")
            if lang != "unknown":
                language_counts[lang] += count

        if language_counts:
            primary_lang = language_counts.most_common(1)[0][0]
            config["primary_language"] = primary_lang
        else:
            config["primary_language"] = "python"  # Default
    else:
        config["primary_language"] = "python"  # Default

    # Determine test framework
    test_framework_counts = preferences.get("test_framework", {})
    if test_framework_counts:
        # Find most common
        top_framework = max(test_framework_counts, key=test_framework_counts.get)
        config["test_framework"] = top_framework
    else:
        # Default based on primary language
        lang_to_test = {
            "python": "pytest",
            "typescript": "jest",
            "javascript": "jest",
            "rust": "cargo_test",
            "go": "go_test",
            "ruby": "rspec",
        }
        config["test_framework"] = lang_to_test.get(
            config.get("primary_language", "python"), "pytest"
        )

    # Determine database preference
    db_counts = preferences.get("database", {})
    if db_counts:
        top_db = max(db_counts, key=db_counts.get)
        config["database"] = top_db
    else:
        config["database"] = "postgres"  # Default for OPC

    return config


async def export_preferences(preferences: dict[str, Any], file_path: Path) -> None:
    """Export preferences to a JSON file.

    Args:
        preferences: Preferences to export
        file_path: Path to write JSON file
    """
    file_path.parent.mkdir(parents=True, exist_ok=True)

    with open(file_path, "w") as f:
        json.dump(preferences, f, indent=2)


async def main():
    """CLI entry point for personalization operations."""
    import argparse

    parser = argparse.ArgumentParser(description="OPC Personalization Tool")
    parser.add_argument(
        "--jsonl-dir",
        type=Path,
        default=Path.home() / ".claude" / "logs",
        help="Directory containing JSONL session logs",
    )
    parser.add_argument("--import-file", type=Path, help="Import preferences from JSON file")
    parser.add_argument("--export-file", type=Path, help="Export preferences to JSON file")
    parser.add_argument(
        "--configure", action="store_true", help="Generate default configuration from preferences"
    )

    args = parser.parse_args()

    # Import or backfill preferences
    if args.import_file:
        preferences = await import_existing_preferences(args.import_file)
        console.print(f"Imported {len(preferences)} preference categories")
    else:
        console.print(f"Scanning JSONL files in {args.jsonl_dir}...")
        preferences = await run_jsonl_backfill(args.jsonl_dir)

        if preferences:
            console.print(f"Found preferences in {len(preferences)} categories:")
            for cat, counts in preferences.items():
                top_items = sorted(counts.items(), key=lambda x: -x[1])[:3]
                console.print(f"  {cat}: {dict(top_items)}")
        else:
            console.print("No preferences detected")

    # Configure defaults
    if args.configure:
        config = await configure_defaults(preferences)
        console.print("\nRecommended configuration:")
        for key, value in config.items():
            console.print(f"  {key}: {value}")

    # Export if requested
    if args.export_file:
        await export_preferences(preferences, args.export_file)
        console.print(f"\nExported to {args.export_file}")


if __name__ == "__main__":
    asyncio.run(main())
