# ForgeCat adapter for im-not-ai

Read and follow the unmodified upstream project instructions at `{{ref:sourceInstructions}}`.

ForgeCat installs the upstream runtime source at `{{ref:humanizeRuntime}}`. When the upstream instructions show a repository-relative executable command:

- run `prepare_monolith_input.py` through `python3 {{ref:humanizeRuntime}}/forgecat/prepare_monolith_input.py`
- run the other upstream Python helpers from `{{ref:humanizeRuntime}}/scripts/`
- keep every `_workspace/{run_id}` output under the user's current working directory

These path adaptations do not change the upstream workflow, rules, agents, or output contract.
