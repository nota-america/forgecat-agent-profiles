# Maintainer Outreach

Use this when contacting maintainers of repositories that have been converted into ForgeCat profiles. Prefer GitHub Discussions when the upstream repo has them enabled. Use an issue only when Discussions are unavailable or the maintainer already asks for issues.

Keep the message low-key. The goal is to check consent, attribution, and accuracy before asking for docs or install mentions.

## Stage 1: Profile Check

```md
Hi, I work on ForgeCat, a tool for making agent profiles such as skills, agents, rules, and MCP configs easier to install across tools like Claude Code, Cursor, and Codex.

We converted this repository into a ForgeCat profile:

- Profile: <profile-link>
- Install: `<install-command>`

The goal is to help people reuse this project across different agent platforms while keeping attribution and links back to the original repository.

I wanted to check with you first:

- Is it okay for us to keep this ForgeCat profile available?
- Is the description, attribution, license, or platform note inaccurate anywhere?
- If you prefer that we remove it, we can take it down.

If you want to test it locally, this guide explains the flow:

- <guide-link>

Thanks.
```

## Stage 2: Optional Docs Mention

Send this only after the maintainer is comfortable with the profile.

```md
Thanks for taking a look.

If you are okay with the ForgeCat profile, would you be open to adding a small optional install note to the docs?

Suggested text:

### Install with ForgeCat

This project is also available as a ForgeCat profile for cross-platform agent setup:

`<install-command>`

Profile: <profile-link>

No pressure if you would rather not add it. We can keep the ForgeCat profile only in our catalog and continue linking back to this original repository.
```

## If They Ask for Changes

```md
Thanks for checking. We can update that.

I opened a maintainer request here so the change is tracked:

- <issue-link>

We will update the profile before promoting it further.
```

## If They Ask for Removal

```md
Understood. We will remove the ForgeCat profile and stop linking to it from the catalog.

Thanks for letting us know.
```

## If They Want to Manage It Directly

```md
That would be great. You can either send a PR to the profile repo or tell us what should change and we can prepare the PR.

Profile contribution guide:

- <contributing-link>
```
