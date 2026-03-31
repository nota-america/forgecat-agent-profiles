---
name: create-merge-request
description: Create a GitLab merge request from the current branch using the MCP server.
---

# Create merge request

1. Determine the current branch name and the default target branch.
2. Ask the user for a merge request title. Suggest a conventional commit format (`feat:`, `fix:`, `chore:`, etc.) per the gitlab-workflow rule.
3. Ask for a description. Remind the user to reference related issues with `#<issue-number>`.
4. Use `search_labels` to show available labels and let the user pick relevant ones.
5. Optionally ask about milestone, assignees, and reviewers. If the user wants to assign themselves or add themselves as a reviewer, ask for their GitLab username.
6. Use the GitLab MCP `create_merge_request` tool with the project path, source branch, target branch, title, description, labels, milestone, assignees, and reviewers.
7. Report the resulting merge request URL.
