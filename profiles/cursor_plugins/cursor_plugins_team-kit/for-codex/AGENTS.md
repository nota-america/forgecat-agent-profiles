<!-- forgecat:cursor_plugins_team-kit:no-inline-imports.mdc:start -->
# No inline imports

Always place imports at the top of the module. Avoid inline imports in function bodies, type annotations, or interface fields unless there is a strict circular-dependency reason and it is documented.
<!-- forgecat:cursor_plugins_team-kit:no-inline-imports.mdc:end -->

<!-- forgecat:cursor_plugins_team-kit:typescript-exhaustive-switch.mdc:start -->
typescript-exhaustive-switch: In switch statements over discriminated unions or enums, use a `never` check in the default case so newly added variants cause compile-time failures until handled.
<!-- forgecat:cursor_plugins_team-kit:typescript-exhaustive-switch.mdc:end -->
