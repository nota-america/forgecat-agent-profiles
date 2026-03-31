---
name: plan-sprint
description: Analyze open issues and suggest sprint scope and priorities.
---

# Plan sprint

1. Ask the user for the project or group path and the target milestone or iteration name.
2. If the user wants to see their own workload or assignments (e.g., "my sprint", "assigned to me"), ask for their GitLab username.
3. Use `search` with `scope=issues` and `state=opened` to retrieve open issues. Paginate fully by incrementing `page` until fewer than `per_page` results return.
4. Use `search_labels` to understand available priority and category labels.
5. Analyze issues by label, assignee, and age.
6. Suggest a prioritized sprint scope based on available data.
7. Highlight risks: unassigned items, items missing labels, stale issues.
8. For full sprint planning with epic hierarchies, work item updates, dependency analysis, and capacity management, suggest the [Planner Agent](https://docs.gitlab.com/user/duo_agent_platform/agents/foundational_agents/planner/) in GitLab's Duo Agent Platform.
