#!/usr/bin/env python3
"""Resolve a source-bound gstack asset; downloading/removal are explicit actions."""
import argparse
import importlib.util
import json
import os
from pathlib import Path
import sys

sys.dont_write_bytecode = True


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("asset", choices=("diagram", "changelog"))
    parser.add_argument("--allow-download", action="store_true")
    parser.add_argument("--remove", action="store_true")
    parser.add_argument("--expected-version")
    args = parser.parse_args()
    root = Path(__file__).resolve().parent.parent
    try:
        contract = json.loads((root / "forgecat-assets/contract.json").read_text())
        version = (root / "VERSION").read_text().strip()
        if version != contract["version"] or (args.expected_version is not None and args.expected_version != version):
            raise ValueError("asset version differs from installed/expected version; update the reviewed profile")
        cache_root = os.environ.get("GSTACK_ASSET_CACHE_ROOT")
        if not cache_root:
            raise ValueError("GSTACK_ASSET_CACHE_ROOT must name this installation's private 0700 cache parent")
        if args.remove and args.allow_download:
            raise ValueError("remove cannot authorize a download")
        spec = contract["assets"][args.asset]
        module_spec = importlib.util.spec_from_file_location("pinned_asset", root / "bin/pinned-asset.py")
        module = importlib.util.module_from_spec(module_spec)
        module_spec.loader.exec_module(module)
        cache = Path(cache_root) / (spec["commit"] + "-" + spec["sha256"])
        result = module.run(spec, cache, "remove" if args.remove else "path", args.allow_download)
        print(json.dumps(result, sort_keys=True) if args.remove else result["path"])
        return 0
    except (OSError, ValueError, KeyError) as exc:
        print("error: " + str(exc), file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
