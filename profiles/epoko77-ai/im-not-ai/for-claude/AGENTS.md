<!-- forgecat:@forgecat/im-not-ai:operating-instructions:start -->
# ForgeCat adapter for im-not-ai

Read and follow the unmodified upstream project instructions at `.forgecat/profiles/@forgecat/im-not-ai/AGENTS.md`.

ForgeCat installs the upstream runtime source at `.forgecat/profiles/@forgecat/im-not-ai/runtime`. When the upstream instructions show a repository-relative executable command:

- run `prepare_monolith_input.py` through `python3 .forgecat/profiles/@forgecat/im-not-ai/runtime/forgecat/prepare_monolith_input.py`
- run the other upstream Python helpers from `.forgecat/profiles/@forgecat/im-not-ai/runtime/scripts/`
- keep every `_workspace/{run_id}` output under the user's current working directory

These path adaptations do not change the upstream workflow, rules, agents, or output contract.
<!-- forgecat:@forgecat/im-not-ai:operating-instructions:end -->
