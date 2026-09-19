#!/usr/bin/env python3
"""Run the sibling gstack profile controller using an absolute installed path."""
from pathlib import Path
import runpy
runpy.run_path(str(Path(__file__).resolve().parents[2] / "garrytan_gstack/scripts/profile.py"), run_name="__main__")
