---
name: conversiontools
description: Convert files between 140+ formats using the ConversionTools MCP server. Use when the user needs to convert documents (Word, PDF, Excel, PowerPoint), data formats (JSON, CSV, XML, YAML, Parquet), images (PNG, JPG, WebP, AVIF, HEIC, JXL, SVG), audio (MP3, WAV, FLAC), video (MOV, MKV, AVI to MP4), e-books (EPUB, MOBI, AZW), OCR text extraction, AI-powered data extraction, AI text-to-speech (TTS), AI speech-to-text transcription (STT), subtitle conversion (SRT, VTT, ASS), or website screenshots.
compatibility: Requires connection to the ConversionTools MCP server. Works with Claude Code, Claude Desktop, and any MCP-compatible agent.
metadata:
  author: conversiontools
  version: "1.1"
  website: https://conversiontools.io
---

# ConversionTools File Conversion

Convert files between 140+ formats directly from your agent using the ConversionTools MCP server.

## Setup

If the ConversionTools MCP server is already connected, skip to **Available Tools**.

If the MCP server is not connected, add it:

```bash
claude mcp add --transport http conversiontools https://mcp.conversiontools.io/mcp
```

Restart Claude Code after adding the server. MCP server changes require a restart to take effect.

On first use, you will be prompted to authenticate via OAuth in your browser. Free accounts get 100 conversions per month (10 per day). Paid plans available at [conversiontools.io/pricing](https://conversiontools.io/pricing).

## Available Tools

All tools use the `conversiontools` MCP server prefix: `conversiontools:tool_name`.

### `conversiontools:convert_file` — Convert a file

The primary tool. Provide input and output paths — the converter is auto-detected from file extensions.

Parameters:
- `input_path` (required): Path to the input file
- `output_path` (required): Path for the converted output file
- `file_content` (optional): Base64-encoded file content for files up to 5MB
- `file_id` (optional): File ID from a previous `conversiontools:request_upload_url` call
- `converter` (optional): Explicit converter type like `convert.pdf_to_excel`. Auto-detected if omitted.
- `options` (optional): Converter-specific options

### `conversiontools:request_upload_url` — Upload large files

Get a signed URL for uploading files larger than 5MB.

Parameters:
- `filename` (required): Name of the file to upload

Flow for large files:
1. Call `conversiontools:request_upload_url` with the filename
2. Upload file to the returned URL using PUT
3. Call `conversiontools:convert_file` with the returned `file_id`

### `conversiontools:list_converters` — Browse available converters

Use this to discover what conversions are currently supported. New converters are added regularly — always check here for the latest.

Parameters:
- `category` (optional): `documents`, `data`, `images`, `pdf`, `audio`, `video`, `ebook`, `ocr`, `ai`, `subtitles`, `web`
- `input_format` (optional): Filter by input format, e.g. `pdf`
- `output_format` (optional): Filter by output format, e.g. `csv`

### `conversiontools:find_converter` — Find the right converter

Parameters:
- `input_format` (required): e.g. `pdf`
- `output_format` (required): e.g. `excel`

### `conversiontools:get_converter_info` — Get converter details

Parameters:
- `converter` (required): Converter type, e.g. `convert.pdf_to_excel`

### `conversiontools:auth_status` — Check login status

### `conversiontools:auth_login` — Trigger OAuth login

### `conversiontools:auth_logout` — Clear credentials

## How to Convert Files

You must provide the file content — the server cannot read local paths. Choose the method based on file size. The response includes a `download_url` — download the result with curl.

### Small files (up to 5MB)

1. Base64-encode the file
2. Call `conversiontools:convert_file` with `file_content`, `input_path`, and `output_path`
3. Download the result from the returned `download_url`

```bash
# 1. Encode
base64_content=$(base64 -w 0 data.json)
```

```
# 2. Convert
conversiontools:convert_file({
  input_path: "data.json",
  output_path: "data.csv",
  file_content: "<base64_content>"
})
```

```bash
# 3. Download
curl -sL "<download_url>" -o data.csv
```

### Large files (over 5MB)

1. Call `conversiontools:request_upload_url` with the filename to get a signed upload URL and `file_id`
2. Upload the file to the returned URL with `curl -X PUT`
3. Call `conversiontools:convert_file` with the `file_id` instead of `file_content`
4. Download the result from the returned `download_url`

## Supported Categories

The following categories are available. Use `conversiontools:list_converters` with a `category`, `input_format`, or `output_format` filter to discover specific converters — new formats are added regularly.

- **Documents** — Word (DOCX, DOC), PowerPoint (PPTX, PPT), Excel (XLSX, XLS), Markdown, ODS, HTML, Text, LaTeX
- **PDF** — Convert to/from Word, Excel, CSV, Text, HTML, Images (JPG, PNG, SVG, TIFF), EPUB
- **Data Formats** — JSON, CSV, XML, YAML, Parquet, JSONL, BSON, Excel — with validators and formatters
- **Images** — PNG, JPG, WebP, AVIF, HEIC, JXL (JPEG XL), SVG, BMP, TIFF, GIF, PGM, PPM — plus EXIF removal
- **Audio** — MP3, WAV, FLAC — plus AI text-to-speech (Text/DOCX/PDF/Markdown to MP3) and AI speech-to-text transcription (MP3/WAV/FLAC to Text)
- **Video** — MP4, MOV, MKV, AVI — plus audio extraction (MP4 to MP3)
- **E-books** — EPUB, MOBI, AZW, AZW3, FB2, FBZ, PDF
- **OCR** — Extract text from scanned PDFs and images (JPG, PNG) — output as Text or searchable PDF
- **AI-Powered** — Smart extraction from PDFs and images to JSON, CSV, Excel, Markdown — plus AI subtitle translation, text-to-speech (TTS), and speech-to-text (STT)
- **Subtitles** — SRT, VTT, ASS, CSV, Excel, Text — bidirectional conversions
- **Web** — Website screenshots (URL to PDF, JPG, PNG), HTML to images/Word, HTML table extraction

## Discovering Converters

When unsure if a specific conversion is supported, use the discovery tools rather than guessing:

```
# Check what PDF can convert to
conversiontools:list_converters({ input_format: "pdf" })

# Check what can produce Parquet
conversiontools:list_converters({ output_format: "parquet" })

# Browse all data converters
conversiontools:list_converters({ category: "data" })

# Find the right converter for a specific pair
conversiontools:find_converter({ input_format: "xlsx", output_format: "parquet" })

# Get full details and options for a converter
conversiontools:get_converter_info({ converter: "convert.csv_to_parquet" })
```

## Tips

- Auto-detection works well — just provide file paths with correct extensions and skip the `converter` parameter
- Use `conversiontools:list_converters` with filters when unsure what's available
- AI converters (`convert.ai_pdf_to_json`, etc.) use AI to intelligently extract structured data from complex documents — use these when standard converters produce poor results
- OCR converters are for scanned documents and images containing text — use when the source is an image or non-searchable PDF
- For batch conversions, upload a ZIP, 7z, XZ, or RAR archive containing all files — they will all be converted and returned as a `.result.zip` file. Alternatively, call `conversiontools:convert_file` once per file.
