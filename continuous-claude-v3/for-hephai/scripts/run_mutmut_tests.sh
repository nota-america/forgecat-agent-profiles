#!/bin/bash
# Wrapper script for mutmut to run tests with correct PYTHONPATH
cd "$(dirname "$0")/.." || exit
export PYTHONPATH="$PWD:$PYTHONPATH"
exec python -m pytest tests/unit/test_coordination_pg.py -x -q "$@"
