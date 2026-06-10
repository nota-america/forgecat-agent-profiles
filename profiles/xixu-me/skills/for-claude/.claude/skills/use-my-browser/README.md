# `use-my-browser` skill

**_[汉语](README.zh.md)_**

`use-my-browser` is a strategy-first skill for agents that need evidence from the user's live browser session rather than from static retrieval alone. Use it when the browser itself is the evidence: a logged-in dashboard, a localhost app, a dynamic or lazy-loaded page, a rendered-state UX review, or an active DevTools context such as a selected request or element.

Inspired by [`web-access`](https://github.com/eze-is/web-access), this skill is a specialized refactor for the Chrome DevTools MCP era. It is designed as a browser-session strategy layer for live debugging, not as a generic browsing default or a replacement for ordinary static retrieval.

## When to Use This Skill

Use this skill when the answer depends on live browser state, for example:

- a page is already authenticated in the user's current browser session
- the rendered UI is the evidence, such as above-the-fold layout, visible confirmation, or lazy-loaded content
- the workflow depends on in-browser interaction, such as uploads, drag-and-drop, hover states, or rich text entry
- the user already has useful DevTools context open, such as a selected request or element
- the target is a localhost app or another page where browser state is easier to trust than URL guessing

Prefer a static path instead when a stable URL plus direct retrieval can already answer the question. This skill is intentionally not the default for ordinary web fetching.

## Example Prompts

Examples are easiest to understand when grouped by intent.

### Logged-in browser actions

- "Post this video on YouTube and leave the last click to me."
- "Check this logged-in dashboard without making me sign in again."

### Website inspection and UX review

- "Visit the Chrome Developers homepage and review its UX and visual design."
- "Compare these public sources, cite them, and only use the browser if the static path fails."
- "Open this pricing page and tell me what the user actually sees above the fold."

### Local app and localhost debugging

- "Open my localhost app, reproduce the broken upload flow, and tell me why it silently fails."
- "Inspect this local dashboard and confirm whether the saved state is actually visible after publishing."

### Social and dynamic site research

- "Go to X.com and find this company's account to see what it has posted recently."
- "Pull the real image or video source from this lazy-loaded page."
- "Inspect this infinite-scroll page and extract the actual links it reveals in the rendered UI."

### DevTools-context handoff

- "I already have the failing request selected in DevTools. Explain why it returns 403."
- "I clicked into the broken element in Elements. Figure out why the layout is wrong."

### Parallel comparison work

- "Research the websites of these five projects simultaneously and provide a comparative summary."
- "Compare these three product pages and tell me how their onboarding flows differ."

## Why This Skill Exists

The core idea comes from the newer Chrome DevTools MCP workflow described in [Let your Coding Agent debug your browser session with Chrome DevTools MCP](https://developer.chrome.com/blog/chrome-devtools-mcp-debug-your-browser-session):

- coding agents can reuse an existing browser session instead of forcing a second sign-in
- coding agents can take over an active debugging context, such as a selected request in Network or a selected element in Elements
- manual debugging and AI-assisted debugging can now flow into each other instead of living in separate browser sessions

That changes the job of a browser skill.

Broader browser-toolbox skills are often built around transport: search, fetch, `curl`, CDP, and site-specific tricks all bundled into one place. That is useful, but live-session debugging has a different center of gravity. Once an agent can attach to the browser you are already using, the hard part is no longer only "how do I reach the page?" It becomes:

- when should the agent stay on a static path versus take over the live browser?
- how should it continue from the current page or selected DevTools context instead of reproducing from scratch?
- how should it prove that browser capability is really available before it mutates anything?
- how should it recover from stale page state, rerenders, ambiguous saves, and stale action targets?
- how should it preserve reusable site knowledge without turning that knowledge into stale superstition?

`use-my-browser` exists to answer those questions.

## Capabilities

The skill is organized around the situations that become important once a coding agent can connect to the user's current browser session.

### Goal-first routing

- Classifies each task as `static-capable` or `browser-required`
- Keeps static tasks on the cheapest path that still produces the right evidence
- Prevents silent downgrade once a task truly depends on live browser state

### Live-session browser work

- Reuses the user's current browser session when that session is the real source of truth
- Treats rendered UI, visible confirmation, login state, lazy-loaded content, and browser-only structures as first-class evidence
- Prefers MCP-native browser actions over script-heavy improvisation when the task is truly in-browser

### Rendered-state inspection and UX review

- Supports review of what the page visibly shows, not just what static HTML or extracted text suggests
- Fits UX inspection, above-the-fold review, layout confirmation, and other tasks where rendered state is the evidence
- Escalates into the browser only when the visible experience matters more than a static extract

### DevTools handoff

- Starts from the current debugging context when the user already has the page, element, or request open
- Supports handoff from selected Elements and selected Network requests
- Avoids replaying an entire repro flow when the browser already contains the clue

### Control-plane safety

- Adds stronger confirmation discipline for save, publish, upload, and settings workflows
- Separates read-only inspection from state-changing actions
- Requires visible and structural proof before claiming a state change succeeded
- Supports stopping before the final high-risk mutation when the user wants the last click or publish step to remain manual

### Deep DOM and media inspection

- Handles Shadow DOM, iframe, collapsed content, lazy-loaded content, and rendered-only evidence
- Uses DOM-level inspection only when snapshots are insufficient
- Distinguishes between extracting the real media source and inspecting the rendered media state

### Selector-to-MCP bridging

- Bridges known selectors into MCP-native `uid` targets
- Helps preserve real browser interaction even when the a11y tree does not directly expose the target you need
- Improves upload and action targeting without rebuilding a custom executor

### Recovery and ambiguity handling

- Responds to stale `uid`s, unexpected navigation, ambiguous results, and interaction failures with a defined recovery loop
- Escalates to console or network inspection only when that evidence can change the next action
- Stops cleanly when capability or page ownership becomes ambiguous

### Reusable site knowledge

- Stores verified site-specific operating facts under `references/site-patterns/`
- Treats site knowledge as operational evidence, not folklore
- Explicitly supports downgrading or removing stale claims when a site pattern stops working

### Parallel browser ownership

- Supports multi-page and multi-agent work without page collisions
- Defines one-owner-per-page discipline
- Makes cleanup and page ownership explicit instead of implicit

## Installation

Install this skill with the [`skills` CLI](https://github.com/vercel-labs/skills):

```bash
bunx skills add xixu-me/skills -s use-my-browser
```

If Bun is not available, use npm:

```bash
npx skills add xixu-me/skills -s use-my-browser
```

## Prerequisites

> [!IMPORTANT]
> Make sure Chrome is already running before you start. Otherwise, the agent may be unable to attach to your current browser session and may fall back to a separate isolated browser session instead.

For the automatic live-session flow described in the [Chrome DevTools MCP README](https://github.com/ChromeDevTools/chrome-devtools-mcp?tab=readme-ov-file#automatically-connecting-to-a-running-chrome-instance):

1. In Chrome (`>=144`), navigate to `chrome://inspect/#remote-debugging` to enable remote debugging.
2. Keep Chrome running.
3. Configure Chrome DevTools MCP with `--autoConnect`.

![Screenshot showing how to enable remote debugging in Chrome](https://developer.chrome.com/static/blog/chrome-devtools-mcp-debug-your-browser-session/image/chrome-remote-debugging.png)

The default examples below use Bun. If you prefer npm, an `npx` variant is included right after.

```bash
bunx chrome-devtools-mcp@latest --autoConnect
```

```bash
npx chrome-devtools-mcp@latest --autoConnect
```

If you want to opt out of Chrome DevTools MCP usage statistics, add `--no-usage-statistics` to either command or configuration example below.

If the MCP server runs in a sandbox or on a different machine than the browser, use a manual connection such as `--browserUrl=http://127.0.0.1:9222` instead of `--autoConnect`. That manual route requires Chrome to be started with a remote debugging port; see the [Chrome DevTools MCP README](https://github.com/ChromeDevTools/chrome-devtools-mcp?tab=readme-ov-file#manual-connection-using-port-forwarding) for the platform-specific launch command.

Many agent runtimes use a JSON-style MCP configuration like this:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "bunx",
      "args": ["chrome-devtools-mcp@latest", "--autoConnect"]
    }
  }
}
```

For Codex, the MCP configuration can look like this:

```toml
[mcp_servers.chrome-devtools]
command = "bunx"
args = ["chrome-devtools-mcp@latest", "--autoConnect"]
```

> [!TIP]
> During an active Chrome DevTools MCP debugging session, it is normal for Chrome to ask for permission first and then show the "Chrome is being controlled by automated test software" banner while the session is active.

## Strategy Layer

The strategy is intentionally simple:

1. Decide whether the task is `static-capable` or `browser-required`.
2. Use the cheapest route that can still produce the evidence the user actually needs.
3. If the task is `browser-required`, stay on the browser path instead of silently downgrading.
4. If the user already has a live debugging context, continue from that context before attempting a fresh repro.
5. Before finishing, decide whether the run produced reusable site knowledge or disproved an old assumption.

This is the main distinction from broader networking skills.

In practice, this means:

- `localhost`, local dashboards, uploads, drag-and-drop flows, and save/publish confirmation are usually `browser-required`
- public pages with stable URLs and small extraction goals usually stay on the static path
- high-risk control-plane work can stop before the final mutation if the user wants to keep the last action manual

## How It Works

The skill is structured as one entrypoint plus focused references:

- [`SKILL.md`](./SKILL.md): entrypoint, scope, task classification, hard rules, and reference loading guide
- [`references/task-routing.md`](./references/task-routing.md): static retrieval versus live browser routing
- [`references/browser-playbook.md`](./references/browser-playbook.md): default live-browser operating loop
- [`references/browser-capability-matrix.md`](./references/browser-capability-matrix.md): prove browser capability with real browser-tool calls
- [`references/debug-handoff.md`](./references/debug-handoff.md): continue from the user's active DevTools context
- [`references/control-plane-workflows.md`](./references/control-plane-workflows.md): safer save, publish, upload, and update workflows
- [`references/anti-automation-friction.md`](./references/anti-automation-friction.md): soft 404s, auth walls, suspicious no-op interactions, and anti-automation friction
- [`references/deep-dom.md`](./references/deep-dom.md): iframe, Shadow DOM, collapsed content, and lazy-loaded evidence
- [`references/media-inspection.md`](./references/media-inspection.md): real media source extraction and rendered media inspection
- [`references/parallel-browser-ownership.md`](./references/parallel-browser-ownership.md): multi-page and multi-agent browser ownership
- [`references/selector-bridge.md`](./references/selector-bridge.md): convert selector knowledge into MCP-native action targets
- [`references/browser-recovery.md`](./references/browser-recovery.md): recover from stale targets, rerenders, and ambiguous UI state
- [site-pattern maintenance rules](./references/site-patterns/README.md): rules for maintaining domain-specific operating knowledge

The references are intentionally one level deep. The entrypoint decides which document to load next so the protocol stays understandable and composable.

## Implementation Details

This skill does not implement a custom browser proxy. It documents a browser-session operating model for MCP-capable agents.

Key implementation choices:

- **Capability-first, not tool-first.** The skill proves live-browser capability through real browser-tool calls instead of shell guesses or assumed integration details.
- **Session reuse over fresh automation.** The skill assumes the user's current browser session is often the most valuable artifact, especially for logged-in pages and DevTools investigations.
- **MCP-native action bias.** The default loop prefers snapshots and MCP-native actions before broad DOM scripting.
- **Focused escalation.** `evaluate_script`, console inspection, and network inspection are escalation tools, not the default operating mode.
- **Ownership discipline.** Pages created by the task are tracked and cleaned up conservatively; user-owned pages are left alone.
- **Experience loop.** Site-specific knowledge is only stored when it is verified and reusable, and it can be downgraded when it becomes stale.

This makes the skill more modern than a custom browser automation stack skill in one important way: it is built for the live-session debugging model that Chrome DevTools MCP is moving toward, not just for remote control of a browser tab.

## Relationship to `web-access`

This skill is openly inspired by `web-access`, especially its emphasis on routing by evidence, preserving site knowledge, and treating browser work as a serious operating mode rather than a last-resort hack.

The difference is scope. `web-access` is a broader web toolbox; `use-my-browser` narrows the mission to correctly taking over the user's live browser session inside an MCP-native workflow.

That means:

- less "all web tasks go here"
- more "this is how to operate safely and efficiently inside the user's current browser"
- less emphasis on custom browser transport
- more emphasis on routing, debugging handoff, confirmation discipline, recovery, and page ownership

Read this skill as a specialized strategy-layer refactor for the live-session debugging paradigm, not as a replacement for `web-access`.
