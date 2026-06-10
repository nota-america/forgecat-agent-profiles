# Parallel Browser Ownership

Load this reference only after the task is already `browser-required` and browser work should be split across multiple task-owned pages or multiple browser-capable agents.

The goal is to preserve concurrency benefits without creating cross-agent page collisions.

## Ownership model

Default to an ownership-first browser model.

The rule is simple: one owner per page.

This host environment can behave like a mixed model:

- task-owned pages created by one agent may still appear in the shared page pool
- different agents may not agree on the same selected page

Treat that as shared page visibility plus partially isolated selection state unless you have better evidence in the current run.

The operating consequence is that page visibility is not permission to operate the page. Even if another agent can see a page in `list_pages`, it should not select, mutate, or close that page unless it is the explicit owner.

What still makes ownership discipline necessary:

- another agent can still see a page that you created
- cleanup ownership becomes ambiguous once multiple agents start touching the same page
- stale `uid`s remain a risk if two agents interact with one page and one of them rerenders it

## Page ledger fields

Whenever a live browser stack is in use, maintain a lightweight page ledger in working memory. Track at least:

- a stable page handle
- the MCP `pageId`
- the current URL or identifying title
- the page owner
- the `isolatedContext`
- whether the page was created by you
- whether it should be closed at task exit

This ledger is session-local working state, not runtime state inside the application under test.

Use the ledger to answer three questions quickly:

1. Which pages do I own?
2. Which page should I select before acting?
3. Which pages am I allowed to close at the end?

## `isolatedContext` rules

Create task-owned pages deliberately. Use a distinct `isolatedContext` for each browser owner unless you have verified that the workflow requires shared auth state or shared storage.

Use isolated contexts when:

- you want clean ownership boundaries
- the investigation does not depend on inheriting another task-owned page's browser state
- you want cleanup to remain unambiguous

Be careful with authenticated control planes. Some sites behave as if `isolatedContext` also isolates auth state. When that happens:

- keep the user-owned page read-only
- open one non-isolated child page for safe, read-only investigation if needed
- avoid destructive actions until the auth behavior is understood
- prefer overview, activity, audit, or other read-only tabs while validating the behavior
- record the verified exception in the matching site-pattern note

Do not assume this exception globally. Treat it as domain-specific until verified.

## Parallel delegation rules

Parallel browser work is a good fit when:

- the task contains several independent targets
- each target can be researched without depending on another target's in-page state
- the subtasks are large enough to justify the delegation cost

Parallel browser work is a bad fit when:

- one page has evolving local state that later steps depend on
- step 2 depends directly on what step 1 discovered on the same page
- the task is small enough that delegation overhead outweighs any gain

Good splits:

- one agent per independent page or domain
- one browser owner plus supporting non-browser agents for search, synthesis, or candidate comparison
- one browser owner validating controls while another browser owner inspects a separate target page

Bad splits:

- two agents clicking around the same SPA tab
- one agent taking snapshots while another mutates the same page
- shared cleanup responsibility with no explicit owner

When delegating, describe:

- the goal
- the evidence target
- the success condition

Do not over-constrain the sub-agent with a brittle step-by-step browser script unless the sequence itself is the task.

Useful responsibility split:

- browser page owners create pages, select pages, take snapshots, and perform page mutations on their own task-owned pages
- supporting agents handle web search, source comparison, summarization, and structured follow-up requests without touching the page

## Do-not-touch rules

Never:

- select a page owned by another agent
- mutate a page owned by another agent
- close a page owned by another agent
- assume the currently selected page is globally shared state
- treat shared page visibility as shared ownership

If another agent needs a browser action, hand it off request-style instead of sharing the page. Good requests look like:

- "Open this URL in your own task page and confirm whether an upload control exists."
- "Inspect this page and tell me whether selector bridge is necessary."
- "Submit this form in your own page and report the confirmation text."

That keeps ownership crisp, stale `uid` risk low, and cleanup safe.
