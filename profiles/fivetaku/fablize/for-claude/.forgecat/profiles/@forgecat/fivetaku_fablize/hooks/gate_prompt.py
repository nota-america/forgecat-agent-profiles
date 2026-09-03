#!/usr/bin/env python3
"""fablize observation gate — UserPromptSubmit.

Classifies the new prompt's task mode and resets the per-prompt ledger so the
Stop gate judges only this turn's evidence. Fails open (emits {} on any error).
"""

from __future__ import annotations

import sys
from pathlib import Path

sys.dont_write_bytecode = True

_HERE = Path(__file__).resolve().parent


def _find_fablize_root() -> Path:
    candidates = [
        _HERE.parent,
        _HERE.parent / "skills" / "fablize",
        Path.cwd() / ".claude" / "skills" / "fablize",
        Path.cwd() / ".cursor" / "skills" / "fablize",
        Path.cwd() / ".agents" / "skills" / "fablize",
    ]
    for candidate in candidates:
        if (candidate / "scripts" / "gate").is_dir():
            return candidate
    return _HERE.parent


_FABLIZE_ROOT = _find_fablize_root()
sys.path.insert(0, str(_FABLIZE_ROOT / "scripts" / "gate"))

from ledger import add_unique, emit_json, read_stdin_json, update_ledger
from classify_task import classify_prompt, context_for_mode


def main() -> int:
    input_data = read_stdin_json()
    prompt = str(input_data.get("prompt") or input_data.get("user_prompt") or "")
    mode, risks = classify_prompt(prompt)

    def apply(ledger):
        ledger["task_mode"] = mode
        ledger["changed_files_seen"] = False
        ledger["change_kinds"] = []
        ledger["risk_flags"] = []
        ledger["verification_commands"] = []
        ledger["verification_results"] = []
        ledger["failures"] = []
        ledger["stop_blocks"] = 0
        add_unique(ledger, "risk_flags", risks)

    update_ledger(input_data, apply)

    emit_json(
        {
            "hookSpecificOutput": {
                "hookEventName": "UserPromptSubmit",
                "additionalContext": context_for_mode(mode, risks),
            }
        }
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:  # noqa: BLE001 — fail open, never block on our own bug
        emit_json({"systemMessage": f"fablize gate prompt hook failed open: {exc}"})
        raise SystemExit(0)
