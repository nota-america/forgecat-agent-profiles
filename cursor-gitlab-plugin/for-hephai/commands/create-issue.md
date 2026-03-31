---
name: create-issue
description: Create a GitLab issue with labels and milestone using the MCP server.
---

# Create issue

1. Ask the user for the project path and issue title.
2. Ask for a description, or offer to help draft one.
3. Use `search_labels` to show available labels and let the user pick.
4. Optionally ask about milestone, assignees, confidentiality, and linked epic. If the user wants to assign the issue to themselves, ask for their GitLab username.
5. Use the GitLab MCP `create_issue` tool with the gathered details.
6. Report the resulting issue URL.
