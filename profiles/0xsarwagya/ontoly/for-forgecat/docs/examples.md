---
title: "Examples"
description: "Run Ontoly graph generation, inspection, architecture reports, HTML graph export, Mermaid export, and MCP commands from a repository root."
---

Run the Ontoly workflow from a repository root:

```sh
ontoly build .
ontoly stats
ontoly architecture
ontoly architecture --format html > architecture.html
ontoly report
ontoly inspect src/auth.ts
ontoly trace fn:src/index.ts:main
ontoly graph --format mermaid
ontoly graph --format html > graph.html
ontoly report api
ontoly report dependencies
ontoly report configuration
ontoly mcp
```

The graph should contain syntax facts, semantic relationships, repository
metadata, configuration nodes, framework nodes, and API structure when the
repository contains deterministic evidence for them.
