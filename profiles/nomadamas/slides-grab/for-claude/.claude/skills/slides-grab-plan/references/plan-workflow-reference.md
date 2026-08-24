# Plan Skill - Presentation Outline Planning

A **supervisor skill** that takes a user topic, generates a `slide-outline.md` outline, and manages a revision loop until the user approves.

Keeps the outline process separate from slide design. Use a runtime-native subagent/task for drafting when available, or draft directly from this reference when the current runtime has no subagent mechanism.

---

## Role Assignment

| Role | Owner | Responsibility |
|------|-------|----------------|
| **Supervisor** | plan-skill (you) | User communication, quality control, revision loop management |
| **Worker** | Outline worker | Draft and revise `slide-outline.md` |

---

## Input

- User topic (required)
- Research results (optional)
- Reference materials, tone/mood requests, etc.

## Output

- User-approved `slide-outline.md`

---

## Workflow

### 1. Create the Outline Draft

Use a runtime-native task/subagent to generate a `slide-outline.md` draft when available. If the runtime has no such mechanism, write the draft directly using the format below.

**Include in the prompt:**
- User topic and requirements
- Research results (if available)
- Tone/mood requests
- Expected format for `slide-outline.md` (see format below)

### 2. Present Outline to User

Read the generated `slide-outline.md` and present to the user:

- Total number of slides
- Slide order and each slide's role
- Key message summary
- Design tone/mood

### 3. Feedback Revision Loop

When user provides feedback:
1. Organize the feedback
2. Revise the existing `slide-outline.md` with the feedback, using a runtime-native task/subagent when available
3. Present the revised outline to the user
4. Repeat until user approves

### 4. Approval Confirmation

Complete the outline stage when the user explicitly approves.

---

## Absolute Rules

1. **Never proceed to the next stage without approval** — Maintain the revision loop until the user explicitly signals approval ("looks good", "approved", "OK", "proceed", etc.).
2. **Keep the outline stage separate** — Do not generate slide HTML while drafting or revising the outline.
3. **Never start HTML generation** — This skill's scope ends at `slide-outline.md` approval. HTML generation is the responsibility of `design-skill`.

---

## Expected slide-outline.md Format

```markdown
# [Presentation Title]

## Meta
- **Topic**: ...
- **Target Audience**: ...
- **Tone/Mood**: ...
- **Slide Count**: N slides
- **Aspect Ratio**: 16:9

## Slide Composition

### Slide 1 - Cover
- **Type**: Cover
- **Title**: ...
- **Subtitle**: ...

### Slide 2 - Table of Contents
- **Type**: Contents
- **Items**: ...

### Slide 3 - [Title]
- **Type**: Section Divider / Content / Statistics / Quote / Timeline / ...
- **Key Message**: ...
- **Details**:
  - ...
  - ...

...

### Slide N - Closing
- **Type**: Closing
- **Message**: ...
```

---

## Outline Worker Prompt Examples

```
Runtime-native task/subagent prompt:

```text
    Create a presentation outline for the following topic.

    Topic: [user topic]
    Requirements: [user requirements]
    Research results: [if available]

    Save as slide-outline.md.
    [include expected format]
```

For feedback revisions:

```
Runtime-native task/subagent prompt:

```text
    Revise the existing outline.

    Current outline: [slide-outline.md content]
    User feedback: [feedback content]

    Save the revised slide-outline.md.
```
