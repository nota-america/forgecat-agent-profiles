# Error System

Ontoly CLI errors are structured around stable codes.

```text
ONTOLY1003

Ambiguous node "AuthService".

Suggestion:
Use one of these stable ids: class:src/auth.service.ts:AuthService

Documentation:
docs/getting-started/query-the-graph
```

## Code Ranges

- `ONTOLY0000` unknown internal CLI failure
- `ONTOLY0001` unknown command
- `ONTOLY0002` missing command help
- `ONTOLY1000` user input and command arguments
- `ONTOLY2000` repository and validation infrastructure

## JSON Logs

Use:

```sh
ontoly build . --log-json
```

Human output remains readable by default. JSON logs are line-delimited records
for automation.
