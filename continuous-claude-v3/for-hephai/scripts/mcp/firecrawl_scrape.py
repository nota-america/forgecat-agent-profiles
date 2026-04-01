#!/usr/bin/env python3
"""Firecrawl Scrape - Web scraping and search via Firecrawl API.

Use Cases:
- Scrape any URL to markdown/html/text
- Search the web with AI-powered results
- Extract main content from pages

Usage:
  # Scrape a URL
  uv run python scripts/firecrawl_scrape.py --url "https://example.com"

  # Scrape with specific format
  uv run python scripts/firecrawl_scrape.py --url "https://example.com" --format html

  # Search the web
  uv run python scripts/firecrawl_scrape.py --search "firecrawl python tutorial"

Requires: FIRECRAWL_API_KEY in environment or ~/.claude/.env
"""

import argparse
import asyncio
import os
import sys
from collections.abc import Callable
from pathlib import Path

# API configuration
FIRECRAWL_SCRAPE_URL = "https://api.firecrawl.dev/v1/scrape"
FIRECRAWL_SEARCH_URL = "https://api.firecrawl.dev/v1/search"


# =============================================================================
# Dispatch table for format handlers - reduces cyclomatic complexity
# =============================================================================


def _get_markdown(result: dict) -> str:
    """Extract markdown content from result."""
    return result.get("markdown", "")


def _get_html(result: dict) -> str:
    """Extract html content from result, fallback to markdown."""
    return result.get("html", "") or result.get("markdown", "")


def _get_text(result: dict) -> str:
    """Extract text content from result, fallback to markdown."""
    return result.get("text", "") or result.get("markdown", "")


FORMAT_HANDLERS: dict[str, Callable[[dict], str]] = {
    "markdown": _get_markdown,
    "html": _get_html,
    "text": _get_text,
}


# =============================================================================
# Extracted helper functions - reduce main() complexity
# =============================================================================


def print_metadata(meta: dict) -> None:
    """Print metadata (title, description) if present."""
    if not meta:
        return

    if meta.get("title"):
        print(f"\n[Title] {meta['title']}")

    if meta.get("description"):
        desc = meta["description"][:200]
        print(f"[Description] {desc}...")


def handle_scrape_result(result: dict, fmt: str) -> int:
    """Handle scrape result output. Returns exit code (0=success, 1=error)."""
    if result.get("error"):
        print(f"\n[Error] {result['error']}")
        return 1

    print("[OK] Scrape complete\n")

    # Use dispatch table for format selection
    handler = FORMAT_HANDLERS.get(fmt, FORMAT_HANDLERS["markdown"])
    content = handler(result)
    if content:
        print(content)

    # Print metadata if available
    if result.get("metadata"):
        print_metadata(result["metadata"])

    return 0


def handle_search_result(result: dict) -> int:
    """Handle search result output. Returns exit code (0=success, 1=error)."""
    if result.get("error"):
        print(f"\n[Error] {result['error']}")
        return 1

    print("[OK] Search complete\n")

    results = result.get("results", [])
    for i, item in enumerate(results, 1):
        title = item.get("title", "No title")
        url = item.get("url", "")
        snippet = item.get("description", item.get("snippet", ""))[:200]
        print(f"{i}. {title}")
        print(f"   {url}")
        if snippet:
            print(f"   {snippet}...")
        print()

    return 0


# =============================================================================
# Core functions
# =============================================================================


def load_api_key() -> str:
    """Load API key from environment or ~/.claude/.env."""
    api_key = os.environ.get("FIRECRAWL_API_KEY", "")

    if not api_key:
        # Try loading from ~/.claude/.env
        env_file = Path.home() / ".claude" / ".env"
        if env_file.exists():
            with open(env_file) as f:
                for line in f:
                    line = line.strip()
                    if line.startswith("FIRECRAWL_API_KEY="):
                        api_key = line.split("=", 1)[1].strip().strip('"').strip("'")
                        break

    return api_key


def parse_args():
    """Parse CLI arguments."""
    parser = argparse.ArgumentParser(description="Web scraping via Firecrawl API")

    # Modes (mutually exclusive)
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--url", help="URL to scrape")
    group.add_argument("--search", help="Search query")

    # Options
    parser.add_argument(
        "--format",
        choices=["markdown", "html", "text"],
        default="markdown",
        help="Output format (default: markdown)",
    )
    parser.add_argument("--limit", type=int, default=5, help="Max results for search")
    parser.add_argument(
        "--main-only",
        action="store_true",
        default=True,
        help="Only extract main content (default: true)",
    )

    args_to_parse = [arg for arg in sys.argv[1:] if not arg.endswith(".py")]
    return parser.parse_args(args_to_parse)


async def firecrawl_scrape(url: str, formats: list[str], main_only: bool = True) -> dict:
    """Scrape a URL using Firecrawl API."""
    import aiohttp

    api_key = load_api_key()
    if not api_key:
        return {"error": "FIRECRAWL_API_KEY not found in environment or ~/.claude/.env"}

    headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}

    payload = {"url": url, "formats": formats, "onlyMainContent": main_only}

    async with aiohttp.ClientSession() as session:
        async with session.post(
            FIRECRAWL_SCRAPE_URL,
            headers=headers,
            json=payload,
            timeout=aiohttp.ClientTimeout(total=60),
        ) as response:
            if response.status != 200:
                error_text = await response.text()
                return {"error": f"API error {response.status}: {error_text}"}

            result = await response.json()

            # Extract content based on format
            if result.get("success") and result.get("data"):
                data = result["data"]
                return {
                    "success": True,
                    "markdown": data.get("markdown", ""),
                    "html": data.get("html", ""),
                    "metadata": data.get("metadata", {}),
                    "links": data.get("links", []),
                }
            else:
                return {"error": result.get("error", "Unknown error")}


async def firecrawl_search(query: str, limit: int = 5) -> dict:
    """Search the web using Firecrawl API."""
    import aiohttp

    api_key = load_api_key()
    if not api_key:
        return {"error": "FIRECRAWL_API_KEY not found in environment or ~/.claude/.env"}

    headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}

    payload = {"query": query, "limit": limit}

    async with aiohttp.ClientSession() as session:
        async with session.post(
            FIRECRAWL_SEARCH_URL,
            headers=headers,
            json=payload,
            timeout=aiohttp.ClientTimeout(total=60),
        ) as response:
            if response.status != 200:
                error_text = await response.text()
                return {"error": f"API error {response.status}: {error_text}"}

            result = await response.json()

            if result.get("success") and result.get("data"):
                return {"success": True, "results": result["data"]}
            else:
                return {"error": result.get("error", "Unknown error")}


async def main():
    """Main entry point - delegates to handler functions."""
    args = parse_args()

    if args.url:
        print(f"Scraping: {args.url}")
        result = await firecrawl_scrape(
            url=args.url, formats=[args.format], main_only=args.main_only
        )
        exit_code = handle_scrape_result(result, args.format)
    else:
        print(f"Searching: {args.search}")
        result = await firecrawl_search(query=args.search, limit=args.limit)
        exit_code = handle_search_result(result)

    if exit_code != 0:
        sys.exit(exit_code)


if __name__ == "__main__":
    asyncio.run(main())
