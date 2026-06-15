# DOCX Helper

Use this helper when `job-post-builder` needs to deliver a `.docx` file.

Preferred output path:
- Generate the document with `python3` and `python-docx` if `python3 -c "import docx"` succeeds.
- If `python-docx` is unavailable, render the content to Markdown or HTML first and convert to `.docx` with `pandoc` or `soffice` if either tool is installed.
- If no local `.docx` path is available, explain the missing capability and return the complete formatted content inline so the user can still use it.

Document rules:
- Preserve headings, bullets, and tables in the final `.docx`.
- Use a professional default title and section structure that matches the parent skill output.
- Name the file exactly as requested by the parent skill, such as `[Role]-Job-Post.docx`.

Validation:
- Re-open or inspect the generated file when local tools allow it.
- If conversion degraded formatting, call that out before finishing.
