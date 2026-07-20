# Skills Best Practices

Keep skills small and procedural.

## Do

- Tell agents which Ontoly capability to use.
- Require graph evidence.
- Require confidence.
- Require LLM Enhancement whenever an LLM uses Ontoly.
- Separate graph facts from inference.
- Use shared references for common workflow.
- Keep examples deterministic.
- Mark fallback file inspection explicitly.

## Avoid

- Duplicating Ontoly compiler or query behavior.
- Hardcoding repository-specific answers.
- Embedding framework analysis in the skill.
- Searching files before querying Ontoly.
- Producing confident answers without graph evidence.
- Adding provider-specific assumptions.

## Answer Shape

Preferred answer:

```text
Summary
Capabilities invoked
Evidence
Confidence
Fallbacks used
Recommended next action
```

Confidence is high only when Ontoly directly provides the needed nodes and
relationships. Use medium for partial graph evidence and low when fallback file
inspection was required.
