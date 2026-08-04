#!/usr/bin/env python3
"""ForgeCat path adapter for the unmodified upstream input shim."""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path


RUNTIME_ROOT = Path(__file__).resolve().parents[1]
UPSTREAM_SCRIPT = RUNTIME_ROOT / "scripts" / "prepare_monolith_input.py"

spec = importlib.util.spec_from_file_location(
    "im_not_ai_prepare_monolith_input", UPSTREAM_SCRIPT
)
if spec is None or spec.loader is None:
    raise SystemExit(f"Unable to load upstream script: {UPSTREAM_SCRIPT}")

module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

# The upstream script is designed to run from a repository checkout. ForgeCat
# keeps the packaged source read-only, so only its project-output root changes.
module.PROJECT_ROOT = Path.cwd()

if __name__ == "__main__":
    sys.exit(module.main())
