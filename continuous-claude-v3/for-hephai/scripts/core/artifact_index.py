#!/usr/bin/env python3
"""
USAGE: artifact_index.py [--handoffs] [--plans] [--continuity] [--all] [--file PATH] [--db PATH]

Index handoffs, plans, and continuity ledgers into the Context Graph database.

Examples:
    # Index all handoffs
    uv run python scripts/artifact_index.py --handoffs

    # Index everything
    uv run python scripts/artifact_index.py --all

    # Index a single handoff file (fast, for hooks)
    uv run python scripts/artifact_index.py --file thoughts/shared/handoffs/session/task-01.md

    # Use custom database path
    uv run python scripts/artifact_index.py --all --db /path/to/context.db
"""

import argparse
import hashlib
import json
import re
import sqlite3
from datetime import datetime
from pathlib import Path


def get_db_path(custom_path: str | None = None) -> Path:
    """Get database path, creating directory if needed."""
    if custom_path:
        path = Path(custom_path)
    else:
        path = Path(".claude/cache/artifact-index/context.db")
    path.parent.mkdir(parents=True, exist_ok=True)
    return path


def init_db(db_path: Path) -> sqlite3.Connection:
    """Initialize database with schema."""
    conn = sqlite3.connect(db_path)
    # Set busy_timeout to prevent indefinite blocking (Finding 3: STARVATION_FINDINGS.md)
    conn.execute("PRAGMA busy_timeout = 5000")
    # Enable WAL mode for better concurrent access
    conn.execute("PRAGMA journal_mode = WAL")
    schema_path = Path(__file__).parent / "artifact_schema.sql"
    if schema_path.exists():
        conn.executescript(schema_path.read_text())
    return conn


# --- Helper functions for reduced complexity ---

def parse_frontmatter(content: str) -> tuple[dict, str]:
    """Extract YAML frontmatter from markdown content.

    Returns:
        Tuple of (frontmatter_dict, remaining_content)
    """
    if not content.startswith("---"):
        return {}, content

    parts = content.split("---", 2)
    if len(parts) < 3:
        return {}, content

    frontmatter = {}
    for line in parts[1].strip().split("\n"):
        if ":" in line:
            key, value = line.split(":", 1)
            frontmatter[key.strip()] = value.strip()

    return frontmatter, parts[2]


def extract_sections(content: str, level: int = 2) -> dict:
    """Extract markdown sections at the specified heading level.

    Args:
        content: Markdown content to parse
        level: Heading level (2 for ##, 3 for ###)

    Returns:
        Dict mapping normalized section names to content
    """
    if not content:
        return {}

    prefix = "#" * level + " "
    next_level_prefix = "#" * (level - 1) + " " if level > 1 else None

    sections = {}
    current_section = None
    current_content = []

    for line in content.split("\n"):
        if line.startswith(prefix):
            if current_section:
                sections[current_section] = "\n".join(current_content).strip()
            current_section = line[len(prefix):].strip().lower().replace(" ", "_")
            current_content = []
        elif next_level_prefix and line.startswith(next_level_prefix):
            # End section at higher-level heading
            if current_section:
                sections[current_section] = "\n".join(current_content).strip()
            current_section = None
            current_content = []
        elif current_section:
            current_content.append(line)

    if current_section:
        sections[current_section] = "\n".join(current_content).strip()

    return sections


def extract_session_info(file_path: Path) -> tuple[str, str | None]:
    """Extract session name and optional UUID from handoff file path.

    Supports paths like:
    - thoughts/shared/handoffs/my-session/task-01.md
    - thoughts/shared/handoffs/my-session-550e8400/task-01.md (with UUID suffix)

    Returns:
        Tuple of (session_name, session_uuid or None)
    """
    parts = file_path.parts

    if "handoffs" not in parts:
        return "", None

    idx = parts.index("handoffs")
    if idx + 1 >= len(parts):
        return "", None

    raw_name = parts[idx + 1]

    # Check for UUID suffix: "auth-refactor-550e8400" -> "auth-refactor", "550e8400"
    uuid_match = re.match(r"^(.+)-([0-9a-f]{8})$", raw_name, re.IGNORECASE)
    if uuid_match:
        return uuid_match.group(1), uuid_match.group(2).lower()

    return raw_name, None


# Dispatch table for outcome normalization
OUTCOME_MAP = {
    "SUCCESS": "SUCCEEDED",
    "SUCCEEDED": "SUCCEEDED",
    "PARTIAL": "PARTIAL_PLUS",
    "PARTIAL_PLUS": "PARTIAL_PLUS",
    "PARTIAL_MINUS": "PARTIAL_MINUS",
    "FAILED": "FAILED",
    "FAILURE": "FAILED",
    "UNKNOWN": "UNKNOWN",
}


def normalize_outcome(status: str) -> str:
    """Normalize status string to canonical outcome value.

    Uses dispatch table for O(1) lookup instead of if/elif chains.
    """
    return OUTCOME_MAP.get(status.upper(), "UNKNOWN")


# --- End helper functions ---


def parse_handoff(file_path: Path) -> dict:
    """Parse a handoff markdown file into structured data.

    Uses helper functions for reduced complexity:
    - parse_frontmatter(): Extract YAML frontmatter
    - extract_sections(): Extract markdown sections
    - extract_session_info(): Parse session from path
    - normalize_outcome(): Map status to canonical outcome
    """
    raw_content = file_path.read_text()

    # Use helper functions for parsing
    frontmatter, content = parse_frontmatter(raw_content)

    # Extract sections at both levels and merge (h3 overrides h2)
    sections = extract_sections(content, level=2)
    subsections = extract_sections(content, level=3)
    sections.update(subsections)

    # Generate ID from file path
    file_id = hashlib.md5(str(file_path).encode()).hexdigest()[:12]

    # Use helper for session info extraction
    session_name, session_uuid = extract_session_info(file_path)

    # Extract task number
    task_match = re.search(r"task-(\d+)", file_path.stem)
    task_number = int(task_match.group(1)) if task_match else None

    # Use dispatch table for outcome normalization
    status = frontmatter.get("status", "UNKNOWN")
    outcome = normalize_outcome(status)

    return {
        "id": file_id,
        "session_name": session_name,
        "session_uuid": session_uuid,  # UUID suffix from directory name (if present)
        "task_number": task_number,
        "file_path": str(file_path),
        "task_summary": sections.get("what_was_done", sections.get("summary", ""))[:500],
        "what_worked": sections.get("what_worked", ""),
        "what_failed": sections.get("what_failed", ""),
        "key_decisions": sections.get("key_decisions", sections.get("decisions", "")),
        "files_modified": json.dumps(extract_files(sections.get("files_modified", ""))),
        "outcome": outcome,
        # Braintrust trace links
        "root_span_id": frontmatter.get("root_span_id", ""),
        "turn_span_id": frontmatter.get("turn_span_id", ""),
        "session_id": frontmatter.get("session_id", ""),
        "braintrust_session_id": frontmatter.get("braintrust_session_id", ""),
        "created_at": frontmatter.get("date", datetime.now().isoformat()),
    }


def extract_files(content: str) -> list:
    """Extract file paths from markdown content."""
    files = []
    for line in content.split("\n"):
        # Match common patterns like "- `path/to/file.py`" or "- `path/to/file.py:123`"
        # Group 1 captures path up to extension, Group 2 captures optional :line-range
        matches = re.findall(r"`([^`]+\.[a-z]+)(:[^`]*)?`", line)
        files.extend([m[0] for m in matches])  # Only take the path, not line range
        # Match **File**: format
        matches = re.findall(r"\*\*File\*\*:\s*`?([^\s`]+)`?", line)
        files.extend(matches)
    return files


def index_handoffs(conn: sqlite3.Connection, base_path: Path = Path("thoughts/shared/handoffs")):
    """Index all handoffs into the database."""
    if not base_path.exists():
        print(f"Handoffs directory not found: {base_path}")
        return 0

    count = 0
    for handoff_file in base_path.rglob("*.md"):
        try:
            data = parse_handoff(handoff_file)
            conn.execute(
                """
                INSERT OR REPLACE INTO handoffs
                (id, session_name, task_number, file_path, task_summary, what_worked,
                 what_failed, key_decisions, files_modified, outcome,
                 root_span_id, turn_span_id, session_id, braintrust_session_id, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
                (
                    data["id"],
                    data["session_name"],
                    data["task_number"],
                    data["file_path"],
                    data["task_summary"],
                    data["what_worked"],
                    data["what_failed"],
                    data["key_decisions"],
                    data["files_modified"],
                    data["outcome"],
                    data["root_span_id"],
                    data["turn_span_id"],
                    data["session_id"],
                    data["braintrust_session_id"],
                    data["created_at"],
                ),
            )
            count += 1
        except Exception as e:
            print(f"Error indexing {handoff_file}: {e}")

    conn.commit()
    print(f"Indexed {count} handoffs")
    return count


def parse_plan(file_path: Path) -> dict:
    """Parse a plan markdown file into structured data."""
    content = file_path.read_text()

    # Generate ID
    file_id = hashlib.md5(str(file_path).encode()).hexdigest()[:12]

    # Extract title from first H1
    title_match = re.search(r"^# (.+)$", content, re.MULTILINE)
    title = title_match.group(1) if title_match else file_path.stem

    # Extract sections
    sections = {}
    current_section = None
    current_content = []

    for line in content.split("\n"):
        if line.startswith("## "):
            if current_section:
                sections[current_section] = "\n".join(current_content).strip()
            current_section = line[3:].strip().lower().replace(" ", "_")
            current_content = []
        elif current_section:
            current_content.append(line)

    if current_section:
        sections[current_section] = "\n".join(current_content).strip()

    # Extract phases
    phases = []
    for key in sections:
        if key.startswith("phase_"):
            phases.append({"name": key, "content": sections[key][:500]})

    return {
        "id": file_id,
        "title": title,
        "file_path": str(file_path),
        "overview": sections.get("overview", "")[:1000],
        "approach": sections.get("implementation_approach", sections.get("approach", ""))[:1000],
        "phases": json.dumps(phases),
        "constraints": sections.get("what_we're_not_doing", sections.get("constraints", "")),
    }


def index_plans(conn: sqlite3.Connection, base_path: Path = Path("thoughts/shared/plans")):
    """Index all plans into the database."""
    if not base_path.exists():
        print(f"Plans directory not found: {base_path}")
        return 0

    count = 0
    for plan_file in base_path.glob("*.md"):
        try:
            data = parse_plan(plan_file)
            conn.execute(
                """
                INSERT OR REPLACE INTO plans
                (id, title, file_path, overview, approach, phases, constraints)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
                (
                    data["id"],
                    data["title"],
                    data["file_path"],
                    data["overview"],
                    data["approach"],
                    data["phases"],
                    data["constraints"],
                ),
            )
            count += 1
        except Exception as e:
            print(f"Error indexing {plan_file}: {e}")

    conn.commit()
    print(f"Indexed {count} plans")
    return count


def parse_continuity(file_path: Path) -> dict:
    """Parse a continuity ledger into structured data."""
    content = file_path.read_text()

    # Generate ID
    file_id = hashlib.md5(str(file_path).encode()).hexdigest()[:12]

    # Extract session name from filename (CONTINUITY_CLAUDE-<session>.md)
    session_match = re.search(r"CONTINUITY_CLAUDE-(.+)\.md", file_path.name)
    session_name = session_match.group(1) if session_match else file_path.stem

    # Extract sections
    sections = {}
    current_section = None
    current_content = []

    for line in content.split("\n"):
        if line.startswith("## "):
            if current_section:
                sections[current_section] = "\n".join(current_content).strip()
            current_section = line[3:].strip().lower().replace(" ", "_")
            current_content = []
        elif current_section:
            current_content.append(line)

    if current_section:
        sections[current_section] = "\n".join(current_content).strip()

    # Parse state section
    state = sections.get("state", "")
    state_done = []
    state_now = ""
    state_next = ""

    for line in state.split("\n"):
        if "[x]" in line.lower():
            state_done.append(line.strip())
        elif "[->]" in line or "now:" in line.lower():
            state_now = line.strip()
        elif "[ ]" in line or "next:" in line.lower():
            state_next = line.strip()

    return {
        "id": file_id,
        "session_name": session_name,
        "goal": sections.get("goal", "")[:500],
        "state_done": json.dumps(state_done),
        "state_now": state_now,
        "state_next": state_next,
        "key_learnings": sections.get(
            "key_learnings", sections.get("key_learnings_(this_session)", "")
        ),
        "key_decisions": sections.get("key_decisions", ""),
        "snapshot_reason": "manual",
    }


def index_continuity(conn: sqlite3.Connection, base_path: Path = Path(".")):
    """Index all continuity ledgers into the database."""
    count = 0
    for ledger_file in base_path.glob("CONTINUITY_CLAUDE-*.md"):
        try:
            data = parse_continuity(ledger_file)
            conn.execute(
                """
                INSERT OR REPLACE INTO continuity
                (id, session_name, goal, state_done, state_now, state_next,
                 key_learnings, key_decisions, snapshot_reason)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
                (
                    data["id"],
                    data["session_name"],
                    data["goal"],
                    data["state_done"],
                    data["state_now"],
                    data["state_next"],
                    data["key_learnings"],
                    data["key_decisions"],
                    data["snapshot_reason"],
                ),
            )
            count += 1
        except Exception as e:
            print(f"Error indexing {ledger_file}: {e}")

    conn.commit()
    print(f"Indexed {count} continuity ledgers")
    return count


def index_single_file(conn: sqlite3.Connection, file_path: Path) -> bool:
    """Index a single file based on its location/type.

    Returns True if indexed successfully, False otherwise.
    """
    file_path = Path(file_path).resolve()

    # Determine file type based on path
    path_str = str(file_path)

    if "handoffs" in path_str and file_path.suffix == ".md":
        try:
            data = parse_handoff(file_path)
            conn.execute(
                """
                INSERT OR REPLACE INTO handoffs
                (id, session_name, task_number, file_path, task_summary, what_worked,
                 what_failed, key_decisions, files_modified, outcome,
                 root_span_id, turn_span_id, session_id, braintrust_session_id, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
                (
                    data["id"],
                    data["session_name"],
                    data["task_number"],
                    data["file_path"],
                    data["task_summary"],
                    data["what_worked"],
                    data["what_failed"],
                    data["key_decisions"],
                    data["files_modified"],
                    data["outcome"],
                    data["root_span_id"],
                    data["turn_span_id"],
                    data["session_id"],
                    data["braintrust_session_id"],
                    data["created_at"],
                ),
            )
            conn.commit()
            print(f"Indexed handoff: {file_path.name}")
            return True
        except Exception as e:
            print(f"Error indexing handoff {file_path}: {e}")
            return False

    elif "plans" in path_str and file_path.suffix == ".md":
        try:
            data = parse_plan(file_path)
            conn.execute(
                """
                INSERT OR REPLACE INTO plans
                (id, title, file_path, overview, approach, phases, constraints)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
                (
                    data["id"],
                    data["title"],
                    data["file_path"],
                    data["overview"],
                    data["approach"],
                    data["phases"],
                    data["constraints"],
                ),
            )
            conn.commit()
            print(f"Indexed plan: {file_path.name}")
            return True
        except Exception as e:
            print(f"Error indexing plan {file_path}: {e}")
            return False

    elif file_path.name.startswith("CONTINUITY_CLAUDE-"):
        try:
            data = parse_continuity(file_path)
            conn.execute(
                """
                INSERT OR REPLACE INTO continuity
                (id, session_name, goal, state_done, state_now, state_next,
                 key_learnings, key_decisions, snapshot_reason)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
                (
                    data["id"],
                    data["session_name"],
                    data["goal"],
                    data["state_done"],
                    data["state_now"],
                    data["state_next"],
                    data["key_learnings"],
                    data["key_decisions"],
                    data["snapshot_reason"],
                ),
            )
            conn.commit()
            print(f"Indexed continuity: {file_path.name}")
            return True
        except Exception as e:
            print(f"Error indexing continuity {file_path}: {e}")
            return False

    else:
        print(f"Unknown file type, skipping: {file_path}")
        return False


def main():
    parser = argparse.ArgumentParser(description="Index context graph artifacts")
    parser.add_argument("--handoffs", action="store_true", help="Index handoffs")
    parser.add_argument("--plans", action="store_true", help="Index plans")
    parser.add_argument("--continuity", action="store_true", help="Index continuity ledgers")
    parser.add_argument("--all", action="store_true", help="Index everything")
    parser.add_argument("--file", type=str, help="Index a single file (fast, for hooks)")
    parser.add_argument("--db", type=str, help="Custom database path")

    args = parser.parse_args()

    # Handle single file indexing (fast path for hooks)
    if args.file:
        file_path = Path(args.file)
        if not file_path.exists():
            print(f"File not found: {file_path}")
            return

        db_path = get_db_path(args.db)
        conn = init_db(db_path)
        success = index_single_file(conn, file_path)
        conn.close()
        return 0 if success else 1

    if not any([args.handoffs, args.plans, args.continuity, args.all]):
        parser.print_help()
        return

    db_path = get_db_path(args.db)
    conn = init_db(db_path)

    print(f"Using database: {db_path}")

    if args.all or args.handoffs:
        index_handoffs(conn)

    if args.all or args.plans:
        index_plans(conn)

    if args.all or args.continuity:
        index_continuity(conn)

    # After bulk indexing, rebuild FTS5 indexes and optimize
    print("Rebuilding FTS5 indexes...")
    conn.execute("INSERT INTO handoffs_fts(handoffs_fts) VALUES('rebuild')")
    conn.execute("INSERT INTO plans_fts(plans_fts) VALUES('rebuild')")
    conn.execute("INSERT INTO continuity_fts(continuity_fts) VALUES('rebuild')")
    conn.execute("INSERT INTO queries_fts(queries_fts) VALUES('rebuild')")

    # Configure BM25 column weights
    conn.execute(
        "INSERT OR REPLACE INTO handoffs_fts(handoffs_fts, rank) VALUES('rank', 'bm25(10.0, 5.0, 3.0, 3.0, 1.0)')"
    )
    conn.execute(
        "INSERT OR REPLACE INTO plans_fts(plans_fts, rank) VALUES('rank', 'bm25(10.0, 5.0, 3.0, 3.0, 1.0)')"
    )

    # Optimize for query performance
    print("Optimizing indexes...")
    conn.execute("INSERT INTO handoffs_fts(handoffs_fts) VALUES('optimize')")
    conn.execute("INSERT INTO plans_fts(plans_fts) VALUES('optimize')")
    conn.execute("INSERT INTO continuity_fts(continuity_fts) VALUES('optimize')")
    conn.execute("INSERT INTO queries_fts(queries_fts) VALUES('optimize')")
    conn.commit()

    conn.close()
    print("Done!")


if __name__ == "__main__":
    main()
