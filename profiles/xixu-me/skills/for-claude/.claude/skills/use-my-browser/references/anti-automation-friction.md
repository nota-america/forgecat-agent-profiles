# Anti-Automation Friction

Load this reference only after the task is already `browser-required` and the current failure shape suggests a soft 404, content-unavailable state, suspicious no-op interaction, auth wall, rate limit, or anti-automation defense.

This file is for diagnosis and stop-loss behavior when a browser task begins to look blocked for reasons other than an ordinary product bug.

## Core rule

Do not answer uncertainty with faster retries.

When the page starts behaving like a defensive surface:

- slow down
- collect one fresh round of evidence
- classify the failure
- try one deliberate alternative only when the classification supports it

Do not brute-force the same click, navigation, or form action.

## Three diagnoses

Classify the failure into one of these buckets before doing anything else:

### Route or parameter error

Typical signals:

- a hand-built URL fails while a DOM-discovered path is still available
- the page says `not found` or `unavailable`, but surrounding list pages still show the target
- the same content becomes reachable only through a site-generated `href`

Preferred response:

- prefer the DOM-discovered route over the hand-built route
- preserve site-generated query parameters and route shape
- retry once with the site-generated path, not with more guessed URLs

### Missing auth or session

Typical signals:

- redirect to a login route
- sign-in wall replaces the target content or control
- the page clearly indicates that the current session lacks permission

Preferred response:

- confirm that the missing content or action is actually blocked
- keep the diagnosis specific to the blocked control or content
- ask for login help only when the current session truly cannot continue

### Anti-automation friction

Typical signals:

- repeated no-op clicks on controls that should be actionable
- content intermittently flips between available and unavailable without a product-level explanation
- rate-limit, bot-check, or defensive copy appears
- the same route behaves inconsistently within a short span
- the page seems present, but the action path becomes unusually fragile after repeated automation

Preferred response:

- reduce mutation frequency
- switch to the smallest reliable read-only probe
- stop and report once the page is plausibly in a defensive state

## Compact decision path

Use this order:

1. Re-snapshot and confirm current visible state.
2. Ask whether the failure is better explained by route shape, auth state, or defensive behavior.
3. If route shape is the strongest hypothesis, prefer a DOM-discovered link.
4. If auth is the strongest hypothesis, confirm the specific blocked content or control.
5. If defensive behavior is the strongest hypothesis, stop escalating mutation pressure.

Do not pursue all three branches at once.

## Stop-loss behavior

When defensive behavior is plausible:

- do not hammer the same action
- do not fan out many fresh tabs
- do not keep inventing new hand-built URLs
- do not convert a read-only task into a write-heavy task

Prefer:

- one current page
- one fresh snapshot
- one deliberate alternative if warranted
- then stop and report

The goal is to preserve evidence quality while minimizing additional pressure on the site.

## Read-only bias

When the target is a social platform, creator surface, production control plane, or other high-risk authenticated site, prefer read-only investigation whenever that still answers the user's question.

If a write action is required and defensive behavior is already plausible, say so explicitly before retrying.

## What to report

When you stop on anti-automation grounds, report:

- the strongest diagnosis
- the key evidence that supports it
- the smallest next step that would be safe, if any

Good examples:

- the site-generated detail link exists, but the hand-built URL produces a soft 404
- the current session is still being redirected to sign-in for the requested control
- the control became no-op after repeated attempts and the page now looks rate-limited

## Boundary

This file is for failure classification and stop-loss behavior. It does not replace the ordinary browser loop or domain-note discipline.

Once the failure is classified, return to the skill entrypoint for the next reference instead of expanding this file into a second routing hub.
