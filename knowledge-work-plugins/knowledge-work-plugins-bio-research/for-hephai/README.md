*written by Hephai*

![Hephai](https://raw.githubusercontent.com/nota-america/agent-hub/main/assets/hephai_banner.png)


# Bio-Research

AI-powered research assistant for the life sciences. Connects Claude to 10 preclinical research databases and tools, and bundles 6 analysis skills covering single-cell genomics, bioinformatics pipelines, instrument data standardization, and scientific strategy.

## Tags

- bio-research
- single-cell
- genomics
- life-sciences
- bioinformatics

## Installation

```
npx hephai install @hephai-nota/knowledge-work-plugins-bio-research
```

## Skills

| Skill | Description |
|---|---|
| `start` | Set up your bio-research environment and explore available tools. Use when first getting oriented with the plugin, checking which literature, drug-discovery, or visualization MCP servers are connected, or surveying available analysis skills before starting a new project. `orientation` |
| `single-cell-rna-qc` | Performs quality control on single-cell RNA-seq data (.h5ad or .h5 files) using scverse best practices with MAD-based filtering and comprehensive visualizations. Use when users request QC analysis, filtering low-quality cells, assessing data quality, or following scverse/scanpy best practices for single-cell analysis. `single-cell` |
| `scvi-tools` | Deep learning for single-cell analysis using scvi-tools. Covers scVI/scANVI data integration and batch correction, ATAC-seq analysis with PeakVI, CITE-seq multi-modal analysis with totalVI, multiome RNA+ATAC with MultiVI, spatial transcriptomics deconvolution with DestVI, label transfer with scANVI/scArches, and RNA velocity with veloVI. `deep-learning` `single-cell` |
| `nextflow-development` | Run nf-core bioinformatics pipelines (rnaseq, sarek, atacseq) on sequencing data. Use when analyzing RNA-seq, WGS/WES, or ATAC-seq data—either local FASTQs or public datasets from GEO/SRA. Triggers on nf-core, Nextflow, FASTQ analysis, variant calling, gene expression, differential expression, GEO reanalysis, GSE/GSM/SRR accessions, or samplesheet creation. `pipelines` |
| `instrument-data-to-allotrope` | Convert laboratory instrument output files (PDF, CSV, Excel, TXT) to Allotrope Simple Model (ASM) JSON format or flattened 2D CSV. Supports auto-detection of instrument types across 40+ categories including cell counters, spectrophotometers, plate readers, qPCR, and chromatography systems. `data-standardization` |
| `scientific-problem-selection` | Systematic framework for research problem selection, project ideation, troubleshooting stuck projects, and strategic scientific decisions. Based on Fischbach & Walsh's framework. Covers ideation, risk assessment, optimization, decision trees, adversity planning, and integration synthesis. `strategy` |

## MCPs

| Server | Transport | URL | Category |
|---|---|---|---|
| PubMed | `http` | https://pubmed.mcp.claude.com/mcp | `literature` |
| bioRxiv/medRxiv | `http` | https://mcp.deepsense.ai/biorxiv/mcp | `literature` |
| Wiley Scholar Gateway | `http` | https://connector.scholargateway.ai/mcp | `journal access` |
| Synapse | `http` | https://mcp.synapse.org/mcp | `data repository` |
| ChEMBL | `http` | https://mcp.deepsense.ai/chembl/mcp | `chemical database` |
| Open Targets | `http` | https://mcp.platform.opentargets.org/mcp | `drug targets` |
| ClinicalTrials.gov | `http` | https://mcp.deepsense.ai/clinical_trials/mcp | `clinical trials` |
| BioRender | `http` | https://mcp.services.biorender.com/mcp | `scientific illustration` |
| Owkin | `http` | https://mcp.k.owkin.com/mcp | `AI research` |
| Benchling | `http` | *(URL not yet configured)* | `lab platform` |

## Details

| Field | Value |
|---|---|
| Author | Anthropic |
| Original repository | https://github.com/anthropics/knowledge-work-plugins/tree/main/bio-research |
| Version | `0.0.1` |
| Original commit | d2ba7f6 |
| License | Apache-2.0 |
| Source platform | Claude Code plugin (Cowork) |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Codex | Partial |
| Cursor | Partial |

## Dependencies

None
