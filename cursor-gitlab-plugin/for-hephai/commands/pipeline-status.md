---
name: pipeline-status
description: Check CI/CD pipeline health and drill into failed jobs.
---

# Pipeline status

1. Ask the user for the project path. If the user asks about "my pipelines" or "my branch", ask for their GitLab username or the specific branch name.
2. Use `manage_pipeline` with `list=true` to fetch recent pipelines.
3. Summarize pipeline statuses (passed, failed, running, pending).
4. For any failed pipeline, use `get_pipeline_jobs` to list jobs and identify failures.
5. Offer to retry failed pipelines using `manage_pipeline` with `retry=true`.
6. For root-cause diagnosis and automated fixes beyond retrying, suggest the [Fix CI/CD Pipeline Flow](https://docs.gitlab.com/user/duo_agent_platform/flows/foundational_flows/fix_pipeline/) in GitLab's Duo Agent Platform.
