---
name: ralph-wiggum
description: Support files for Ralph Wiggum loop commands and setup.
---

# Ralph Wiggum Support

This skill carries the setup script used by the `/ralph-loop` command. Use the installed slash commands for normal operation:

- `/ralph-loop` starts an iterative Ralph loop.
- `/cancel-ralph` removes the active loop state file.
- `/help` explains the technique and available options.

The setup script writes `.claude/ralph-loop.local.md`; the registered Claude Code Stop hook reads that state file to decide whether to continue the loop.
