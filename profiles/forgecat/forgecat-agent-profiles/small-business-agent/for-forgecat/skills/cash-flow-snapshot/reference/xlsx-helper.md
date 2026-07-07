# XLSX Helper

Use this helper when `cash-flow-snapshot` needs to deliver an `.xlsx` workbook.

Preferred output path:
- Build the workbook directly with `python3` and `openpyxl` if `python3 -c "import openpyxl"` succeeds.
- If `openpyxl` is unavailable, create a clean CSV fallback for each sheet and, if `soffice` is available, convert the workbook to `.xlsx` with LibreOffice headless mode.
- If neither path is available, tell the user exactly which local capability is missing and provide the cash-flow tables inline so nothing is lost.

Workbook rules:
- Create the three sheets requested by the parent skill: `Summary`, `Detail`, and `Risks`.
- Preserve money as numeric cells with currency formatting instead of plain strings.
- Keep dates as real date cells when possible.
- Name the file `cash-flow-snapshot-[YYYY-MM-DD].xlsx`.

Validation:
- Re-open or inspect the produced file before finishing when local tooling allows it.
- If you had to fall back to CSV or inline tables, say so explicitly.
