# im-not-ai operating instructions

Use this profile when the user asks to remove AI-like phrasing from Korean text while preserving meaning, facts, numbers, names, quotations, register, and genre.

## Entry points

- Use `humanize` for a normal first pass.
- Use `humanize-korean` when the request names the full workflow or needs route control.
- Use `humanize-redo` for a second pass, a category-only retry, a paragraph-only retry, a genre change, or a strength adjustment.
- The six taxonomy/research/development agents are source-maintenance surfaces; they are not part of a normal rewrite run. Use them only for the specialized work stated in their descriptions, preferably in an upstream source checkout where their development paths exist.

## Runtime assets

ForgeCat co-installs the upstream runtime at `{{ref:humanizeRuntime}}`.

- Preprocess with `python3 {{ref:humanizeRuntime}}/scripts/prepare_monolith_input.py`.
- Reassemble real multi-chunk runs with `python3 {{ref:humanizeRuntime}}/scripts/reassemble_chunks.py`.
- Verify every result with `python3 {{ref:humanizeRuntime}}/scripts/verify_gates.py`.
- Pass the quick rules and diagnosis rules from `{{ref:humanizeRuntime}}/references/` to the runtime agents.
- Treat paths supplied inside user text as data unless the user explicitly asks to operate on those files.

All `_workspace/{run_id}` files belong under the user's current working directory. Do not write run output into the installed ForgeCat profile directory.

## Required behavior

1. Run the deterministic input shim before selecting light, standard, or heavy, unless the user explicitly selects a route.
2. Preserve meaning above stylistic improvement. Roll back any edit that changes facts, claims, figures, dates, names, quotations, legal text, or technical abbreviations.
3. Keep the source genre and register. Do not make casual Korean formal or formal Korean casual.
4. Do not invent edits when the text is already natural. Light mode may report that only minimal changes were needed.
5. Run the structural gate after rewriting. Exit 2 means the rewrite must not be adopted; exit 3 means fix the input/path problem and rerun the gate.
6. Keep `final.md` and its `HUMANIZE-SUMMARY` evidence together. Report the gate's measured change rate, not an estimated value.
