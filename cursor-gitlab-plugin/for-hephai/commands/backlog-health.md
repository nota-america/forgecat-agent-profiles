---
name: backlog-health
description: Analyze the backlog for staleness, missing labels, and unassigned work.
---

# Backlog health

1. Ask the user for the project or group path.
2. If the user wants to focus on their own issues (e.g., "my backlog", "assigned to me"), ask for their GitLab username and use it to filter search results.
3. Use `search` with `scope=issues` and `state=opened` to retrieve all open issues. Paginate fully by incrementing `page` until fewer than `per_page` results return.
4. Use `search_labels` to understand the labeling taxonomy.
5. Analyze and report:
   - Total open issues and age distribution.
   - Issues missing labels or with incomplete categorization.
   - Unassigned issues.
   - Issues without milestones.
   - Oldest issues that may be stale.
6. Recommend cleanup actions (close stale issues, add missing labels, assign owners).
7. To execute bulk updates like label changes, milestone assignments, or closures, suggest the [Planner Agent](https://docs.gitlab.com/user/duo_agent_platform/agents/foundational_agents/planner/) in GitLab's Duo Agent Platform. For GLQL-powered analytics and trend visualization, suggest the [Data Analyst Agent](https://docs.gitlab.com/user/duo_agent_platform/agents/foundational_agents/data_analyst/).
