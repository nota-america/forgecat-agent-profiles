# Browser capability matrix

Use this reference when the task is already `browser-required` but you still need to prove that the live browser stack is actually usable in the current session.

This file complements the live-browser playbook. It makes the capability gate executable.

## Rule

Do not probe by searching for shell commands, guessed binaries, or text labels. Prove capability through real browser-tool calls.

## Capability matrix

| Capability               | Example proof in a live-browser host                                                                                          | What counts as failure                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| page inventory           | `list_pages` returns the current page inventory                                                                               | no browser tool call exists or the call errors before inventory is returned        |
| task-owned page creation | `new_page` creates an isolated task page                                                                                      | no browser tool can create a page, or creation is forbidden in the current session |
| page selection           | `select_page` succeeds on the created page                                                                                    | selection cannot be targeted to the task-owned page                                |
| visible-state read       | `take_snapshot` or equivalent visible-state call returns page state                                                           | only static fetching is available                                                  |
| DOM-level script read    | `evaluate_script` can read `document.title`, `location.href`, or a scoped DOM target when the task needs DOM-level inspection | the task depends on DOM-level reads but no DOM-evaluation path exists              |
| upload support           | `upload_file` is callable on a known file input for upload tasks                                                              | the task depends on upload behavior but uploads require unsupported tool behavior  |

## Minimum proof sequence

For a fresh browser-required task, prove the smallest set of capabilities that the task actually depends on:

1. Call `list_pages`.
2. Create one task-owned page with `new_page`.
3. Select that page.
4. Read visible state from a snapshot-style call.
5. Add one DOM-level script read only when the task needs DOM inspection, selector bridging, deep extraction, or similar script-level understanding.
6. Add one upload proof only when the task really depends on upload behavior.

If the required steps for the current task succeed, the browser capability gate is satisfied for that run.

## Localhost rule

If the task targets `localhost` or `127.0.0.1`:

- do not treat a generic static opener as equivalent to browser capability
- the proof must come from a task-owned browser page that can actually be selected and inspected

## Failure handling

If any required step fails:

- record the missing capability by name
- stop the run as `blocked`
- do not switch to `curl`, `Invoke-WebRequest`, shell HTTP fetches, or a generic page opener for the same browser-required task
