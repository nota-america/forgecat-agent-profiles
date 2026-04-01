![Hephai](https://raw.githubusercontent.com/nota-america/agent-hub/main/assets/hephai_banner.png)

# conversiontools-agent-skills

Convert files between 140+ formats directly from AI agents using the ConversionTools MCP server.

## Tags

- file-conversion
- documents
- pdf
- images
- data-formats
- mcp
- ocr
- audio
- video
- subtitles

## Installation

```bash
npx hephai install @hephai-nota/conversiontools-agent-skills
```

## Skills

- **conversiontools** — Convert files between 140+ formats using the ConversionTools MCP server. Supports documents (Word, PDF, Excel, PowerPoint), data formats (JSON, CSV, XML, YAML, Parquet), images (PNG, JPG, WebP, AVIF, HEIC, JXL, SVG), audio (MP3, WAV, FLAC), video (MOV, MKV, AVI to MP4), e-books (EPUB, MOBI, AZW), OCR text extraction, AI-powered data extraction, AI text-to-speech (TTS), AI speech-to-text transcription (STT), subtitle conversion (SRT, VTT, ASS), and website screenshots.

## MCPs

| Server | Transport | URL |
|---|---|---|
| conversiontools | http | https://mcp.conversiontools.io/mcp |

## Details

| Field | Value |
|---|---|
| Author | Conversion Tools |
| Original repository | https://github.com/conversiontools/agent-skills |
| Version | `0.0.0` |
| Original commit | (shallow clone) |
| License | MIT |
| Source platform | Claude Code |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Partial |
| Codex | Partial |

## Authentication

On first use, you'll be prompted to authenticate via OAuth in your browser. Free accounts get 100 conversions per month (10 per day). Paid plans available at [conversiontools.io/pricing](https://conversiontools.io/pricing).

## Supported Conversions

- **Documents**: Word, PowerPoint, Excel, Markdown, ODS ↔ PDF, HTML, Text, LaTeX
- **Data**: JSON, CSV, XML, YAML, Parquet, JSONL, BSON, Excel — with validators and formatters
- **Images**: PNG, JPG, WebP, AVIF, HEIC, JXL (JPEG XL), SVG, BMP, TIFF, GIF
- **PDF**: Extract to Word, Excel, CSV, Text, HTML, Images (JPG, PNG, SVG, TIFF), EPUB
- **Audio**: MP3, WAV, FLAC — plus AI text-to-speech and speech-to-text
- **Video**: MP4, MOV, MKV, AVI — plus audio extraction
- **E-books**: EPUB, MOBI, AZW, AZW3, FB2, FBZ, PDF
- **OCR**: Extract text from images and scanned PDFs
- **AI-powered**: Smart extraction from complex documents, subtitle translation, TTS, STT
- **Subtitles**: SRT, VTT, ASS — bidirectional conversions
- **Web**: Website screenshots to PDF, JPG, PNG
