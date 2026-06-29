# Using Education Agent Skills in OpenAI Codex

This guide explains how to use the Education Agent Skills Library with OpenAI Codex without using the hosted MCP server.

Repository: https://github.com/GarethManning/education-agent-skills

The skills can run locally from your machine. Once installed locally, Codex reads the skill files directly and does **not** call the hosted MCP server.

## Recommended: install as a local Codex plugin

Use this when you want the full Education Agent Skills Library available in Codex.

1. Clone the repository:

```bash
git clone https://github.com/GarethManning/education-agent-skills.git
cd education-agent-skills
```

2. Add the repository as a local Codex plugin marketplace:

```bash
codex plugin marketplace add /absolute/path/to/education-agent-skills
```

For example, if you cloned it into your current folder:

```bash
codex plugin marketplace add "$PWD"
```

The repository includes the Codex plugin manifest:

```text
.codex-plugin/plugin.json
```

That manifest points Codex at:

```text
./skills/
```

The repository also includes a local marketplace helper at:

```text
.agents/plugins/marketplace.json
```

This is there so Codex plugin tooling can discover the repository as a single installable local plugin rather than requiring people to copy all 165 skills one by one.

3. Restart Codex.

After restart, Codex can discover and use the installed skills from the local plugin. You can then ask for education tasks in normal language, for example:

> I am planning a Year 9 science unit on cells: 6 weeks, 3 lessons per week. Build the unit using evidence-based learning science.

Codex can then use relevant skills such as backwards design, spaced practice, retrieval practice, formative assessment, and rubric design.

## Simple option: install individual skills

Use this when you only want a few skills available globally in Codex.

1. Clone the repository:

```bash
git clone https://github.com/GarethManning/education-agent-skills.git
cd education-agent-skills
```

2. Copy a skill folder into your Codex skills directory:

```bash
mkdir -p ~/.codex/skills
cp -r skills/<domain>/<skill-name> ~/.codex/skills/
```

Example:

```bash
cp -r skills/memory-learning-science/spaced-practice-scheduler ~/.codex/skills/
```

3. Restart Codex.

After restart, the installed skill can trigger automatically when relevant.

## One-off use without installing

You can also use any skill manually without setup:

1. Open a `SKILL.md` file under `skills/`.
2. Copy the prompt or instructions.
3. Paste them into Codex with your classroom context.

Example skill:

```text
skills/memory-learning-science/spaced-practice-scheduler/SKILL.md
```

This works well for testing, but it is not persistent. Codex will not automatically discover the skill in future sessions unless it is installed locally.

## Which option should I choose?

Use the local plugin if:

- You want the full library available.
- You want Codex to discover relevant education skills automatically.
- You want to avoid MCP server usage and hosted costs.
- You are comfortable cloning a GitHub repository.

Use individual skill installation if:

- You only need one or two skills.
- You want a minimal local setup.
- You want skills available across Codex projects without installing the whole library.

Use manual one-off use if:

- You are evaluating the library.
- You cannot install local files.
- You only need a single prompt once.

## MCP is optional

The hosted MCP server is useful for remote discovery, programmatic access, and clients that prefer MCP connectors.

It is not required for Codex local use.

For sustainable free use, install the skills locally from GitHub rather than connecting to the hosted MCP server.

## Updating

If you cloned the full repository, update it with:

```bash
cd education-agent-skills
git pull
```

Then restart Codex so it picks up the latest skill changes.

If you copied individual skills into `~/.codex/skills/`, copy them again after updating the repository.

## Troubleshooting

If Codex does not appear to use the skills:

- Make sure each installed skill folder contains a `SKILL.md` file.
- Make sure the `SKILL.md` file has `name` and `description` fields in the frontmatter.
- Restart Codex after installing or updating skills.
- For individual skills, make sure the folder was copied directly into `~/.codex/skills/`, not nested too deeply.

Correct:

```text
~/.codex/skills/spaced-practice-scheduler/SKILL.md
```

Incorrect:

```text
~/.codex/skills/memory-learning-science/spaced-practice-scheduler/SKILL.md
```
