#!/usr/bin/env python3
"""Fetch one reviewed GitHub artifact; never execute it or edit a ForgeCat lock.

The manifest is a trusted, reviewed input shipped with the eventual profile.
Each installation/asset must use its own private cache directory. This is not
a shared cache or an automatic install/uninstall hook. Python 3.9+, POSIX only.
"""
import argparse
import contextlib
import fcntl
import hashlib
import json
import os
from pathlib import Path
import re
import stat
import sys
import time
import urllib.request


RECEIPT = "receipt.json"
PAYLOAD = "asset.html"
MAX_BYTES = 16 * 1024 * 1024


def validate(spec):
    keys = {"schema", "repository", "commit", "path", "sha256", "bytes"}
    if not isinstance(spec, dict) or set(spec) != keys or spec["schema"] != 1:
        raise ValueError("invalid asset manifest")
    patterns = {"repository": r"[A-Za-z0-9_-]+/[A-Za-z0-9_.-]+",
                "commit": r"[0-9a-f]{40}", "sha256": r"[0-9a-f]{64}",
                "path": r"[A-Za-z0-9_./-]+"}
    for key, pattern in patterns.items():
        if not isinstance(spec[key], str) or not re.fullmatch(pattern, spec[key]):
            raise ValueError("invalid " + key)
    if any(p in {"", ".", ".."} for p in spec["path"].split("/")):
        raise ValueError("unsafe artifact path")
    if type(spec["bytes"]) is not int or not 0 < spec["bytes"] <= MAX_BYTES:
        raise ValueError("invalid artifact size")
    if Path(spec["path"]).suffix not in {".html", ".md"}:
        raise ValueError("this helper only handles reviewed HTML/Markdown artifacts")
    return ("https://raw.githubusercontent.com/" + spec["repository"] + "/" +
            spec["commit"] + "/" + spec["path"])


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        raise ValueError("redirects are not permitted")


def request(url):
    # No cookies, auth headers, netrc, or project credentials are read.
    opener = urllib.request.build_opener(NoRedirect())
    return opener.open(urllib.request.Request(url, headers={
        "User-Agent": "forgecat-pinned-asset/1", "Accept-Encoding": "identity"
    }), timeout=20)


@contextlib.contextmanager
def directory(path):
    """Walk an explicit absolute path without following any symlink component."""
    if not path.is_absolute() or ".." in path.parts:
        raise ValueError("use an absolute cache path without parent traversal")
    fd = os.open("/", os.O_RDONLY | os.O_DIRECTORY)
    try:
        for part in path.parts[1:]:
            child = os.open(part, os.O_RDONLY | os.O_DIRECTORY | os.O_NOFOLLOW,
                            dir_fd=fd)
            os.close(fd)
            fd = child
        yield fd
    finally:
        os.close(fd)


def read_file(fd, name, limit):
    opened = os.open(name, os.O_RDONLY | os.O_NOFOLLOW | os.O_NONBLOCK, dir_fd=fd)
    with os.fdopen(opened, "rb") as handle:
        info = os.fstat(handle.fileno())
        if (not stat.S_ISREG(info.st_mode) or info.st_nlink != 1 or
                info.st_uid != os.getuid() or stat.S_IMODE(info.st_mode) != 0o600):
            raise ValueError("cache file is not a private owned regular file")
        value = handle.read(limit + 1)
        if len(value) > limit:
            raise ValueError("cache file exceeds declared size")
        return value


def write_file(fd, name, data):
    opened = os.open(name, os.O_WRONLY | os.O_CREAT | os.O_EXCL | os.O_NOFOLLOW,
                     0o600, dir_fd=fd)
    with os.fdopen(opened, "wb") as handle:
        handle.write(data)
        handle.flush()
        os.fsync(handle.fileno())


def payload_name(spec):
    return "asset" + Path(spec["path"]).suffix


def expected_receipt(spec):
    return {"owner": "forgecat-pinned-asset-v1", "asset": spec,
            "payload": payload_name(spec), "forgecatLockManaged": False}


def check(fd, spec):
    payload = payload_name(spec)
    # Unknown files are never adopted, overwritten or removed.
    if set(os.listdir(fd)) != {RECEIPT, payload}:
        raise ValueError("cache contains unknown or incomplete files; preserved")
    if json.loads(read_file(fd, RECEIPT, 4096)) != expected_receipt(spec):
        raise ValueError("cache ownership/asset receipt mismatch")
    value = read_file(fd, payload, spec["bytes"])
    if len(value) != spec["bytes"] or hashlib.sha256(value).hexdigest() != spec["sha256"]:
        raise ValueError("cached artifact hash/size mismatch; preserved")


def fetch(spec, url, opener):
    deadline = time.monotonic() + 120
    with opener(url) as response:
        if response.status != 200 or response.geturl() != url:
            raise ValueError("unexpected HTTP status or URL")
        if response.headers.get("Content-Encoding", "identity") != "identity":
            raise ValueError("encoded transfer rejected")
        size = response.headers.get("Content-Length")
        if size is not None and int(size) != spec["bytes"]:
            raise ValueError("HTTP size mismatch")
        value = bytearray()
        while True:
            chunk = response.read(min(65536, spec["bytes"] + 1 - len(value)))
            if time.monotonic() > deadline:
                raise ValueError("download deadline exceeded")
            if not chunk:
                break
            value.extend(chunk)
            if len(value) > spec["bytes"]:
                raise ValueError("download exceeds declared size")
    if len(value) != spec["bytes"] or hashlib.sha256(value).hexdigest() != spec["sha256"]:
        raise ValueError("download hash/size mismatch")
    return value


def run(spec, cache, action="path", allow_download=False, opener=request):
    url = validate(spec)
    payload = payload_name(spec)
    if action not in {"path", "remove"}:
        raise ValueError("unsupported action")
    if not cache.is_absolute() or ".." in cache.parts or cache == Path("/"):
        raise ValueError("use a dedicated absolute cache directory")
    created = False
    with directory(cache.parent) as parent:
        parent_info = os.fstat(parent)
        if parent_info.st_uid != os.getuid() or stat.S_IMODE(parent_info.st_mode) != 0o700:
            raise ValueError("cache parent must be a dedicated private directory (0700)")
        try:
            info = os.stat(cache.name, dir_fd=parent, follow_symlinks=False)
        except FileNotFoundError:
            if action == "remove":
                return {"status": "absent"}
            if not allow_download:
                raise ValueError("cache absent; explicit --allow-download consent required")
            os.mkdir(cache.name, mode=0o700, dir_fd=parent)
            created = True
            info = os.stat(cache.name, dir_fd=parent, follow_symlinks=False)
        if (not stat.S_ISDIR(info.st_mode) or info.st_uid != os.getuid() or
                stat.S_IMODE(info.st_mode) != 0o700):
            raise ValueError("cache must be a private owned directory, not a symlink")
        fd = os.open(cache.name, os.O_RDONLY | os.O_DIRECTORY | os.O_NOFOLLOW, dir_fd=parent)
        try:
            fcntl.flock(fd, fcntl.LOCK_EX | fcntl.LOCK_NB)
            identity = (info.st_dev, info.st_ino)

            def same_directory():
                current = os.stat(cache.name, dir_fd=parent, follow_symlinks=False)
                opened = os.fstat(fd)
                if identity != (current.st_dev, current.st_ino) or identity != (opened.st_dev, opened.st_ino):
                    raise ValueError("cache directory replaced during operation")

            same_directory()
            if created:
                try:
                    value = fetch(spec, url, opener)
                except Exception:
                    # Only the empty directory created by this call may be removed.
                    same_directory()
                    if not os.listdir(fd):
                        os.rmdir(cache.name, dir_fd=parent)
                    raise
                # EXCL prevents overwriting even if another actor adds files.
                write_file(fd, payload, value)
                write_file(fd, RECEIPT, (json.dumps(expected_receipt(spec), sort_keys=True) + "\n").encode())
                os.fsync(fd)
            check(fd, spec)
            same_directory()
            if action == "remove":
                os.unlink(payload, dir_fd=fd)
                os.unlink(RECEIPT, dir_fd=fd)
                os.rmdir(cache.name, dir_fd=parent)
                return {"status": "removed", "sha256": spec["sha256"]}
            return {"status": "downloaded" if created else "cached",
                    "path": str(cache / payload), "bytes": spec["bytes"],
                    "sha256": spec["sha256"], "url": url,
                    "forgecatLockManaged": False}
        finally:
            os.close(fd)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("manifest", type=Path)
    parser.add_argument("--cache-dir", required=True, type=Path)
    parser.add_argument("--allow-download", action="store_true",
                        help="consent to fetch the declared immutable artifact (never executes it)")
    parser.add_argument("--remove", action="store_true",
                        help="explicitly remove only an unchanged private cache with matching receipt")
    args = parser.parse_args()
    try:
        if args.remove and args.allow_download:
            raise ValueError("remove cannot authorize a download")
        result = run(json.loads(args.manifest.read_text()), args.cache_dir,
                     "remove" if args.remove else "path", args.allow_download)
        print(json.dumps(result, sort_keys=True))
        return 0
    except (OSError, ValueError) as exc:
        print("error: " + str(exc), file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
