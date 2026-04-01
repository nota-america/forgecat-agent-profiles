# `conversiontools/agent-skills`

**[Conversion Tools](https://conversiontools.io) agent skills** — convert 140+ file formats directly from AI agents.

## Installation

### Claude Code Plugin (Recommended)

Installs both the skill and the MCP server connection automatically:

```bash
claude plugin marketplace add conversiontools/agent-skills
claude plugin install conversiontools@conversiontools-skills
```

Restart Claude Code after installation. The MCP server connects automatically.

### Skills CLI (Other Agents)

Installs the skill instructions for Cursor, Gemini CLI, Amp, Codex, and other agents:

```bash
npx skills add conversiontools/agent-skills --skill conversiontools
```

MCP server must be configured separately for non-plugin agents. Connect to: `https://mcp.conversiontools.io/mcp`

---

| Skill | Description |
|-------|-------------|
| [conversiontools](https://github.com/conversiontools/agent-skills/tree/main/skills/conversiontools) | Convert files between 140+ formats using the ConversionTools MCP server. Supports documents, data formats (incl. Parquet), images (incl. JXL), audio, video, e-books, OCR, AI extraction, text-to-speech (TTS), speech-to-text (STT), subtitles (SRT, VTT, ASS), and website screenshots. |

```bash
claude plugin install conversiontools@conversiontools-skills
```

```bash
npx skills add conversiontools/agent-skills --skill conversiontools
```

---

## Supported Conversions

- **Documents**: Word, PowerPoint, Excel, Markdown, ODS ↔ PDF, HTML, Text, LaTeX
- **Data**: JSON, CSV, XML, YAML, Parquet, JSONL, BSON, Excel — with validators and formatters
- **Images**: PNG, JPG, WebP, AVIF, HEIC, JXL (JPEG XL), SVG, BMP, TIFF, GIF
- **PDF**: Extract to Word, Excel, CSV, Text, HTML, Images (JPG, PNG, SVG, TIFF), EPUB
- **Audio**: MP3, WAV, FLAC — plus AI text-to-speech and speech-to-text
- **Video**: MP4, MOV, MKV, AVI — plus audio extraction
- **E-books**: EPUB, MOBI, AZW, AZW3, FB2, FBZ, PDF
- **OCR**: Extract text from images and scanned PDFs — output as Text or searchable PDF
- **AI-powered**: Smart extraction from complex documents, subtitle translation, TTS, STT
- **Subtitles**: SRT, VTT, ASS — bidirectional conversions
- **Web**: Website screenshots to PDF, JPG, PNG

## Authentication

On first use, you'll be prompted to authenticate via OAuth in your browser. Free accounts get 100 conversions per month (10 per day). Paid plans available at [conversiontools.io/pricing](https://conversiontools.io/pricing).

## Links

- [Documentation](https://conversiontools.io/docs/mcp)
- [Pricing](https://conversiontools.io/pricing)
- [Support](https://conversiontools.io/contact)

## License

MIT
