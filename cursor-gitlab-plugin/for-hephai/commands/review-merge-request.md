---
name: review-merge-request
description: Review a GitLab merge request — summarize changes, check pipelines, and flag concerns.
---

# Review merge request

1. Ask the user for the project path and merge request IID.
2. Use `get_merge_request` to fetch MR details (title, description, state, author).
3. Use `get_merge_request_diffs` to retrieve file changes.
4. Use `get_merge_request_commits` to list commits.
5. Use `get_merge_request_pipelines` to check pipeline status.
6. Summarize: what changed, how many files and commits, pipeline health.
7. Flag potential concerns (large diffs, failing pipelines, missing description, no issue reference).
8. If the user wants to leave feedback, use `create_workitem_note` to add a comment on the MR.
9. For a full AI-native code review with actionable feedback, suggest the [Code Review Flow](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/code_review/) in GitLab's Duo Agent Platform.
