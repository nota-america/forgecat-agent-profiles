*written by ForgeCat*

![Forgecat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Anthropic Skills — Xlsx

Use this skill any time a spreadsheet file is the primary input or output. This means any task where the user wants to: open, read, edit, or fix an existing .xlsx, .xlsm, .csv, or .tsv file (e.g., adding columns, computing formulas, formatting, charting, cleaning messy data); create a new spreadsheet from scratch or from other data sources; or convert between tabular file formats. Trigger especially when the user references a spreadsheet file by name or path — even casually (like "the xlsx in my downloads") — and wants something done to it or produced from it. Also trigger for cleaning or restructuring messy tabular data files (malformed rows, misplaced headers, junk data) into proper spreadsheets. The deliverable must be a spreadsheet file. Do NOT trigger when the primary deliverable is a Word document, HTML report, standalone Python script, database pipeline, or Google Sheets API integration, even if tabular data is involved.

## Tags

- anthropic
- skills
- xlsx

## Installation

```bash
npx forgecat install @forgecat/anthropics_skills_xlsx
```

## Skills

- **xlsx** — Use this skill any time a spreadsheet file is the primary input or output. This means any task where the user wants to: open, read, edit, or fix an existing .xlsx, .xlsm, .csv, or .tsv file (e.g., adding columns, computing formulas, formatting, charting, cleaning messy data); create a new spreadsheet from scratch or from other data sources; or convert between tabular file formats. Trigger especially when the user references a spreadsheet file by name or path — even casually (like "the xlsx in my downloads") — and wants something done to it or produced from it. Also trigger for cleaning or restructuring messy tabular data files (malformed rows, misplaced headers, junk data) into proper spreadsheets. The deliverable must be a spreadsheet file. Do NOT trigger when the primary deliverable is a Word document, HTML report, standalone Python script, database pipeline, or Google Sheets API integration, even if tabular data is involved. `skill`

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/skills |
| Version | `0.0.0` |
| Original commit | `5128e18` |
| License | Proprietary. LICENSE.txt has complete terms |
| Source platform | Claude Code |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

## Dependencies

- None
