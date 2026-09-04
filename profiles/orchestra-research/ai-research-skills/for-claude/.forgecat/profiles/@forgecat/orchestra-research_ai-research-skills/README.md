*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Orchestra Research AI Research Skills

Comprehensive AI research skill library for autonomous research workflows, model training, evaluation, inference, MLOps, RAG, multimodal systems, and paper writing.

## Tags

- skills
- ai-research
- machine-learning
- research
- claude-code
- autonomous-research

## Installation

```bash
npx forgecat install @forgecat/orchestra-research_ai-research-skills
```

## Skills / Agents / Commands

- **autoresearch** — Orchestrates end-to-end autonomous AI research projects using a two-loop architecture. The inner loop runs rapid experiment iterations with clear optimization targets. The outer loop synthesizes results, identifies patterns, and steers research direction. Routes to domain-specific skills for execution, supports continuous agent operation via Claude Code /loop and OpenClaw heartbeat, and produces research presentations and papers. Use when starting a research project, running autonomous experiments, or managing a multi-hypothesis research effort. `skill`
- **implementing-llms-litgpt** — Implements and trains LLMs using Lightning AI's LitGPT with 20+ pretrained architectures (Llama, Gemma, Phi, Qwen, Mistral). Use when need clean model implementations, educational understanding of architectures, or production fine-tuning with LoRA/QLoRA. Single-file implementations, no abstraction layers. `skill`
- **mamba-architecture** — State-space model with O(n) complexity vs Transformers' O(n²). 5× faster inference, million-token sequences, no KV cache. Selective SSM with hardware-aware design. Mamba-1 (d_state=16) and Mamba-2 (d_state=128, multi-head). Models 130M-2.8B on HuggingFace. `skill`
- **nanogpt** — Educational GPT implementation in ~300 lines. Reproduces GPT-2 (124M) on OpenWebText. Clean, hackable code for learning transformers. By Andrej Karpathy. Perfect for understanding GPT architecture from scratch. Train on Shakespeare (CPU) or OpenWebText (multi-GPU). `skill`
- **rwkv-architecture** — RNN+Transformer hybrid with O(n) inference. Linear time, infinite context, no KV cache. Train like GPT (parallel), infer like RNN (sequential). Linux Foundation AI project. Production at Windows, Office, NeMo. RWKV-7 (March 2025). Models up to 14B parameters. `skill`
- **distributed-llm-pretraining-torchtitan** — Provides PyTorch-native distributed LLM pretraining using torchtitan with 4D parallelism (FSDP2, TP, PP, CP). Use when pretraining Llama 3.1, DeepSeek V3, or custom models at scale from 8 to 512+ GPUs with Float8, torch.compile, and distributed checkpointing. `skill`
- **huggingface-tokenizers** — Fast tokenizers optimized for research and production. Rust-based implementation tokenizes 1GB in <20 seconds. Supports BPE, WordPiece, and Unigram algorithms. Train custom vocabularies, track alignments, handle padding/truncation. Integrates seamlessly with transformers. Use when you need high-performance tokenization or custom tokenizer training. `skill`
- **sentencepiece** — Language-independent tokenizer treating text as raw Unicode. Supports BPE and Unigram algorithms. Fast (50k sentences/sec), lightweight (6MB memory), deterministic vocabulary. Used by T5, ALBERT, XLNet, mBART. Train on raw text without pre-tokenization. Use when you need multilingual support, CJK languages, or reproducible tokenization. `skill`
- **axolotl** — Expert guidance for fine-tuning LLMs with Axolotl - YAML configs, 100+ models, LoRA/QLoRA, DPO/KTO/ORPO/GRPO, multimodal support `skill`
- **llama-factory** — Expert guidance for fine-tuning LLMs with LLaMA-Factory - WebUI no-code, 100+ models, 2/3/4/5/6/8-bit QLoRA, multimodal support `skill`
- **peft-fine-tuning** — Parameter-efficient fine-tuning for LLMs using LoRA, QLoRA, and 25+ methods. Use when fine-tuning large models (7B-70B) with limited GPU memory, when you need to train <1% of parameters with minimal accuracy loss, or for multi-adapter serving. HuggingFace's official library integrated with transformers ecosystem. `skill`
- **unsloth** — Expert guidance for fast fine-tuning with Unsloth - 2-5x faster training, 50-80% less memory, LoRA/QLoRA optimization `skill`
- **nnsight-remote-interpretability** — Provides guidance for interpreting and manipulating neural network internals using nnsight with optional NDIF remote execution. Use when needing to run interpretability experiments on massive models (70B+) without local GPU resources, or when working with any PyTorch architecture. `skill`
- **pyvene-interventions** — Provides guidance for performing causal interventions on PyTorch models using pyvene's declarative intervention framework. Use when conducting causal tracing, activation patching, interchange intervention training, or testing causal hypotheses about model behavior. `skill`
- **sparse-autoencoder-training** — Provides guidance for training and analyzing Sparse Autoencoders (SAEs) using SAELens to decompose neural network activations into interpretable features. Use when discovering interpretable features, analyzing superposition, or studying monosemantic representations in language models. `skill`
- **transformer-lens-interpretability** — Provides guidance for mechanistic interpretability research using TransformerLens to inspect and manipulate transformer internals via HookPoints and activation caching. Use when reverse-engineering model algorithms, studying attention patterns, or performing activation patching experiments. `skill`
- **nemo-curator** — GPU-accelerated data curation for LLM training. Supports text/image/video/audio. Features fuzzy deduplication (16× faster), quality filtering (30+ heuristics), semantic deduplication, PII redaction, NSFW detection. Scales across GPUs with RAPIDS. Use for preparing high-quality training datasets, cleaning web data, or deduplicating large corpora. `skill`
- **ray-data** — Scalable data processing for ML workloads. Streaming execution across CPU/GPU, supports Parquet/CSV/JSON/images. Integrates with Ray Train, PyTorch, TensorFlow. Scales from single machine to 100s of nodes. Use for batch inference, data preprocessing, multi-modal data loading, or distributed ETL pipelines. `skill`
- **grpo-rl-training** — Expert guidance for GRPO/RL fine-tuning with TRL for reasoning and task-specific model training `skill`
- **miles-rl-training** — Provides guidance for enterprise-grade RL training using miles, a production-ready fork of slime. Use when training large MoE models with FP8/INT4, needing train-inference alignment, or requiring speculative RL for maximum throughput. `skill`
- **openrlhf-training** — High-performance RLHF framework with Ray+vLLM acceleration. Use for PPO, GRPO, RLOO, DPO training of large models (7B-70B+). Built on Ray, vLLM, ZeRO-3. 2× faster than DeepSpeedChat with distributed architecture and GPU resource sharing. `skill`
- **simpo-training** — Simple Preference Optimization for LLM alignment. Reference-free alternative to DPO with better performance (+6.4 points on AlpacaEval 2.0). No reference model needed, more efficient than DPO. Use for preference alignment when want simpler, faster training than DPO/PPO. `skill`
- **slime-rl-training** — Provides guidance for LLM post-training with RL using slime, a Megatron+SGLang framework. Use when training GLM models, implementing custom data generation workflows, or needing tight Megatron-LM integration for RL scaling. `skill`
- **torchforge-rl-training** — Provides guidance for PyTorch-native agentic RL using torchforge, Meta's library separating infra from algorithms. Use when you want clean RL abstractions, easy algorithm experimentation, or scalable training with Monarch and TorchTitan. `skill`
- **fine-tuning-with-trl** — Fine-tune LLMs using reinforcement learning with TRL - SFT for instruction tuning, DPO for preference alignment, PPO/GRPO for reward optimization, and reward model training. Use when need RLHF, align model with preferences, or train from human feedback. Works with HuggingFace Transformers. `skill`
- **verl-rl-training** — Provides guidance for training LLMs with reinforcement learning using verl (Volcano Engine RL). Use when implementing RLHF, GRPO, PPO, or other RL algorithms for LLM post-training at scale with flexible infrastructure backends. `skill`
- **constitutional-ai** — Anthropic's method for training harmless AI through self-improvement. Two-phase approach - supervised learning with self-critique/revision, then RLAIF (RL from AI Feedback). Use for safety alignment, reducing harmful outputs without human labels. Powers Claude's safety system. `skill`
- **llamaguard** — Meta's 7-8B specialized moderation model for LLM input/output filtering. 6 safety categories - violence/hate, sexual content, weapons, substances, self-harm, criminal planning. 94-95% accuracy. Deploy with vLLM, HuggingFace, Sagemaker. Integrates with NeMo Guardrails. `skill`
- **nemo-guardrails** — NVIDIA's runtime safety framework for LLM applications. Features jailbreak detection, input/output validation, fact-checking, hallucination detection, PII filtering, toxicity detection. Uses Colang 2.0 DSL for programmable rails. Production-ready, runs on T4 GPU. `skill`
- **prompt-guard** — Meta's 86M prompt injection and jailbreak detector. Filters malicious prompts and third-party data for LLM apps. 99%+ TPR, <1% FPR. Fast (<2ms GPU). Multilingual (8 languages). Deploy with HuggingFace or batch processing for RAG security. `skill`
- **huggingface-accelerate** — Simplest distributed training API. 4 lines to add distributed support to any PyTorch script. Unified API for DeepSpeed/FSDP/Megatron/DDP. Automatic device placement, mixed precision (FP16/BF16/FP8). Interactive config, single launch command. HuggingFace ecosystem standard. `skill`
- **deepspeed** — Expert guidance for distributed training with DeepSpeed - ZeRO optimization stages, pipeline parallelism, FP16/BF16/FP8, 1-bit Adam, sparse attention `skill`
- **training-llms-megatron** — Trains large language models (2B-462B parameters) using NVIDIA Megatron-Core with advanced parallelism strategies. Use when training models >1B parameters, need maximum GPU efficiency (47% MFU on H100), or require tensor/pipeline/sequence/context/expert parallelism. Production-ready framework used for Nemotron, LLaMA, DeepSeek. `skill`
- **pytorch-fsdp2** — Adds PyTorch FSDP2 (fully_shard) to training scripts with correct init, sharding, mixed precision/offload config, and distributed checkpointing. Use when models exceed single-GPU memory or when you need DTensor-based sharding with DeviceMesh. `skill`
- **pytorch-lightning** — High-level PyTorch framework with Trainer class, automatic distributed training (DDP/FSDP/DeepSpeed), callbacks system, and minimal boilerplate. Scales from laptop to supercomputer with same code. Use when you want clean training loops with built-in best practices. `skill`
- **ray-train** — Distributed training orchestration across clusters. Scales PyTorch/TensorFlow/HuggingFace from laptop to 1000s of nodes. Built-in hyperparameter tuning with Ray Tune, fault tolerance, elastic scaling. Use when training massive models across multiple machines or running distributed hyperparameter sweeps. `skill`
- **lambda-labs-gpu-cloud** — Reserved and on-demand GPU cloud instances for ML training and inference. Use when you need dedicated GPU instances with simple SSH access, persistent filesystems, or high-performance multi-node clusters for large-scale training. `skill`
- **modal-serverless-gpu** — Serverless GPU cloud platform for running ML workloads. Use when you need on-demand GPU access without infrastructure management, deploying ML models as APIs, or running batch jobs with automatic scaling. `skill`
- **skypilot-multi-cloud-orchestration** — Multi-cloud orchestration for ML workloads with automatic cost optimization. Use when you need to run training or batch jobs across multiple clouds, leverage spot instances with auto-recovery, or optimize GPU costs across providers. `skill`
- **awq-quantization** — Activation-aware weight quantization for 4-bit LLM compression with 3x speedup and minimal accuracy loss. Use when deploying large models (7B-70B) on limited GPU memory, when you need faster inference than GPTQ with better accuracy preservation, or for instruction-tuned and multimodal models. MLSys 2024 Best Paper Award winner. `skill`
- **quantizing-models-bitsandbytes** — Quantizes LLMs to 8-bit or 4-bit for 50-75% memory reduction with minimal accuracy loss. Use when GPU memory is limited, need to fit larger models, or want faster inference. Supports INT8, NF4, FP4 formats, QLoRA training, and 8-bit optimizers. Works with HuggingFace Transformers. `skill`
- **optimizing-attention-flash** — Optimizes transformer attention with Flash Attention for 2-4x speedup and 10-20x memory reduction. Use when training/running transformers with long sequences (>512 tokens), encountering GPU memory issues with attention, or need faster inference. Supports PyTorch native SDPA, flash-attn library, H100 FP8, and sliding window attention. `skill`
- **gguf-quantization** — GGUF format and llama.cpp quantization for efficient CPU/GPU inference. Use when deploying models on consumer hardware, Apple Silicon, or when needing flexible quantization from 2-8 bit without GPU requirements. `skill`
- **gptq** — Post-training 4-bit quantization for LLMs with minimal accuracy loss. Use for deploying large models (70B, 405B) on consumer GPUs, when you need 4× memory reduction with <2% perplexity degradation, or for faster inference (3-4× speedup) vs FP16. Integrates with transformers and PEFT for QLoRA fine-tuning. `skill`
- **hqq-quantization** — Half-Quadratic Quantization for LLMs without calibration data. Use when quantizing models to 4/3/2-bit precision without needing calibration datasets, for fast quantization workflows, or when deploying with vLLM or HuggingFace Transformers. `skill`
- **ml-training-recipes** — Battle-tested PyTorch training recipes for all domains — LLMs, vision, diffusion, medical imaging, protein/drug discovery, spatial omics, genomics. Covers training loops, optimizer selection (AdamW, Muon), LR scheduling, mixed precision, debugging, and systematic experimentation. Use when training or fine-tuning neural networks, debugging loss spikes or OOM, choosing architectures, or optimizing GPU throughput. `skill`
- **evaluating-code-models** — Evaluates code generation models across HumanEval, MBPP, MultiPL-E, and 15+ benchmarks with pass@k metrics. Use when benchmarking code models, comparing coding abilities, testing multi-language support, or measuring code generation quality. Industry standard from BigCode Project used by HuggingFace leaderboards. `skill`
- **evaluating-llms-harness** — Evaluates LLMs across 60+ academic benchmarks (MMLU, HumanEval, GSM8K, TruthfulQA, HellaSwag). Use when benchmarking model quality, comparing models, reporting academic results, or tracking training progress. Industry standard used by EleutherAI, HuggingFace, and major labs. Supports HuggingFace, vLLM, APIs. `skill`
- **nemo-evaluator-sdk** — Evaluates LLMs across 100+ benchmarks from 18+ harnesses (MMLU, HumanEval, GSM8K, safety, VLM) with multi-backend execution. Use when needing scalable evaluation on local Docker, Slurm HPC, or cloud platforms. NVIDIA's enterprise-grade platform with container-first architecture for reproducible benchmarking. `skill`
- **llama-cpp** — Runs LLM inference on CPU, Apple Silicon, and consumer GPUs without NVIDIA hardware. Use for edge deployment, M1/M2/M3 Macs, AMD/Intel GPUs, or when CUDA is unavailable. Supports GGUF quantization (1.5-8 bit) for reduced memory and 4-10× speedup vs PyTorch on CPU. `skill`
- **sglang** — Fast structured generation and serving for LLMs with RadixAttention prefix caching. Use for JSON/regex outputs, constrained decoding, agentic workflows with tool calls, or when you need 5× faster inference than vLLM with prefix sharing. Powers 300,000+ GPUs at xAI, AMD, NVIDIA, and LinkedIn. `skill`
- **tensorrt-llm** — Optimizes LLM inference with NVIDIA TensorRT for maximum throughput and lowest latency. Use for production deployment on NVIDIA GPUs (A100/H100), when you need 10-100x faster inference than PyTorch, or for serving models with quantization (FP8/INT4), in-flight batching, and multi-GPU scaling. `skill`
- **serving-llms-vllm** — Serves LLMs with high throughput using vLLM's PagedAttention and continuous batching. Use when deploying production LLM APIs, optimizing inference latency/throughput, or serving models with limited GPU memory. Supports OpenAI-compatible endpoints, quantization (GPTQ/AWQ/FP8), and tensor parallelism. `skill`
- **mlflow** — Track ML experiments, manage model registry with versioning, deploy models to production, and reproduce experiments with MLflow - framework-agnostic ML lifecycle platform `skill`
- **experiment-tracking-swanlab** — Provides guidance for experiment tracking with SwanLab. Use when you need open-source run tracking, local or self-hosted dashboards, and lightweight media logging for ML workflows. `skill`
- **tensorboard** — Visualize training metrics, debug models with histograms, compare experiments, visualize model graphs, and profile performance with TensorBoard - Google's ML visualization toolkit `skill`
- **weights-and-biases** — Track ML experiments with automatic logging, visualize training in real-time, optimize hyperparameters with sweeps, and manage model registry with W&B - collaborative MLOps platform `skill`
- **evolving-ai-agents** — Provides guidance for automatically evolving and optimizing AI agents across any domain using LLM-driven evolution algorithms. Use when building self-improving agents, optimizing agent prompts and skills against benchmarks, or implementing automated agent evaluation loops. `skill`
- **autogpt-agents** — Autonomous AI agent platform for building and deploying continuous agents. Use when creating visual workflow agents, deploying persistent autonomous agents, or building complex multi-step AI automation systems. `skill`
- **crewai-multi-agent** — Multi-agent orchestration framework for autonomous AI collaboration. Use when building teams of specialized agents working together on complex tasks, when you need role-based agent collaboration with memory, or for production workflows requiring sequential/hierarchical execution. Built without LangChain dependencies for lean, fast execution. `skill`
- **langchain** — Framework for building LLM-powered applications with agents, chains, and RAG. Supports multiple providers (OpenAI, Anthropic, Google), 500+ integrations, ReAct agents, tool calling, memory management, and vector store retrieval. Use for building chatbots, question-answering systems, autonomous agents, or RAG applications. Best for rapid prototyping and production deployments. `skill`
- **llamaindex** — Data framework for building LLM applications with RAG. Specializes in document ingestion (300+ connectors), indexing, and querying. Features vector indices, query engines, agents, and multi-modal support. Use for document Q&A, chatbots, knowledge retrieval, or building RAG pipelines. Best for data-centric LLM applications. `skill`
- **chroma** — Open-source embedding database for AI applications. Store embeddings and metadata, perform vector and full-text search, filter by metadata. Simple 4-function API. Scales from notebooks to production clusters. Use for semantic search, RAG applications, or document retrieval. Best for local development and open-source projects. `skill`
- **faiss** — Facebook's library for efficient similarity search and clustering of dense vectors. Supports billions of vectors, GPU acceleration, and various index types (Flat, IVF, HNSW). Use for fast k-NN search, large-scale vector retrieval, or when you need pure similarity search without metadata. Best for high-performance applications. `skill`
- **pinecone** — Managed vector database for production AI applications. Fully managed, auto-scaling, with hybrid search (dense + sparse), metadata filtering, and namespaces. Low latency (<100ms p95). Use for production RAG, recommendation systems, or semantic search at scale. Best for serverless, managed infrastructure. `skill`
- **qdrant-vector-search** — High-performance vector similarity search engine for RAG and semantic search. Use when building production RAG systems requiring fast nearest neighbor search, hybrid search with filtering, or scalable vector storage with Rust-powered performance. `skill`
- **sentence-transformers** — Framework for state-of-the-art sentence, text, and image embeddings. Provides 5000+ pre-trained models for semantic similarity, clustering, and retrieval. Supports multilingual, domain-specific, and multimodal models. Use for generating embeddings for RAG, semantic search, or similarity tasks. Best for production embedding generation. `skill`
- **dspy** — Build complex AI systems with declarative programming, optimize prompts automatically, create modular RAG systems and agents with DSPy - Stanford NLP's framework for systematic LM programming `skill`
- **guidance** — Control LLM output with regex and grammars, guarantee valid JSON/XML/code generation, enforce structured formats, and build multi-step workflows with Guidance - Microsoft Research's constrained generation framework `skill`
- **instructor** — Extract structured data from LLM responses with Pydantic validation, retry failed extractions automatically, parse complex JSON with type safety, and stream partial results with Instructor - battle-tested structured output library `skill`
- **outlines** — Guarantee valid JSON/XML/code structure during generation, use Pydantic models for type-safe outputs, support local models (Transformers, vLLM), and maximize inference speed with Outlines - dottxt.ai's structured generation library `skill`
- **langsmith-observability** — LLM observability platform for tracing, evaluation, and monitoring. Use when debugging LLM applications, evaluating model outputs against datasets, monitoring production systems, or building systematic testing pipelines for AI applications. `skill`
- **phoenix-observability** — Open-source AI observability platform for LLM tracing, evaluation, and monitoring. Use when debugging LLM applications with detailed traces, running evaluations on datasets, or monitoring production AI systems with real-time insights. `skill`
- **audiocraft-audio-generation** — PyTorch library for audio generation including text-to-music (MusicGen) and text-to-sound (AudioGen). Use when you need to generate music from text descriptions, create sound effects, or perform melody-conditioned music generation. `skill`
- **blip-2-vision-language** — Vision-language pre-training framework bridging frozen image encoders and LLMs. Use when you need image captioning, visual question answering, image-text retrieval, or multimodal chat with state-of-the-art zero-shot performance. `skill`
- **clip** — OpenAI's model connecting vision and language. Enables zero-shot image classification, image-text matching, and cross-modal retrieval. Trained on 400M image-text pairs. Use for image search, content moderation, or vision-language tasks without fine-tuning. Best for general-purpose image understanding. `skill`
- **evaluating-cosmos-policy** — Evaluates NVIDIA Cosmos Policy on LIBERO and RoboCasa simulation environments. Use when setting up cosmos-policy for robot manipulation evaluation, running headless GPU evaluations with EGL rendering, or profiling inference latency on cluster or local GPU machines. `skill`
- **llava** — Large Language and Vision Assistant. Enables visual instruction tuning and image-based conversations. Combines CLIP vision encoder with Vicuna/LLaMA language models. Supports multi-turn image chat, visual question answering, and instruction following. Use for vision-language chatbots or image understanding tasks. Best for conversational image analysis. `skill`
- **fine-tuning-serving-openpi** — Fine-tune and serve Physical Intelligence OpenPI models (pi0, pi0-fast, pi0.5) using JAX or PyTorch backends for robot policy inference across ALOHA, DROID, and LIBERO environments. Use when adapting pi0 models to custom datasets, converting JAX checkpoints to PyTorch, running policy inference servers, or debugging norm stats and GPU memory issues. `skill`
- **fine-tuning-openvla-oft** — Fine-tunes and evaluates OpenVLA-OFT and OpenVLA-OFT+ policies for robot action generation with continuous action heads, LoRA adaptation, and FiLM conditioning on LIBERO simulation and ALOHA real-world setups. Use when reproducing OpenVLA-OFT paper results, training custom VLA action heads (L1 or diffusion), deploying server-client inference for ALOHA, or debugging normalization, LoRA merge, and cross-GPU issues. `skill`
- **segment-anything-model** — Foundation model for image segmentation with zero-shot transfer. Use when you need to segment any object in images using points, boxes, or masks as prompts, or automatically generate all object masks in an image. `skill`
- **stable-diffusion-image-generation** — State-of-the-art text-to-image generation with Stable Diffusion models via HuggingFace Diffusers. Use when generating images from text prompts, performing image-to-image translation, inpainting, or building custom diffusion pipelines. `skill`
- **whisper** — OpenAI's general-purpose speech recognition model. Supports 99 languages, transcription, translation to English, and language identification. Six model sizes from tiny (39M params) to large (1550M params). Use for speech-to-text, podcast transcription, or multilingual audio processing. Best for robust, multilingual ASR. `skill`
- **knowledge-distillation** — Compress large language models using knowledge distillation from teacher to student models. Use when deploying smaller models with retained performance, transferring GPT-4 capabilities to open-source models, or reducing inference costs. Covers temperature scaling, soft targets, reverse KLD, logit distillation, and MiniLLM training strategies. `skill`
- **long-context** — Extend context windows of transformer models using RoPE, YaRN, ALiBi, and position interpolation techniques. Use when processing long documents (32k-128k+ tokens), extending pre-trained models beyond original context limits, or implementing efficient positional encodings. Covers rotary embeddings, attention biases, interpolation methods, and extrapolation strategies for LLMs. `skill`
- **model-merging** — Merge multiple fine-tuned models using mergekit to combine capabilities without retraining. Use when creating specialized models by blending domain-specific expertise (math + coding + chat), improving performance beyond single models, or experimenting rapidly with model variants. Covers SLERP, TIES-Merging, DARE, Task Arithmetic, linear merging, and production deployment strategies. `skill`
- **model-pruning** — Reduce LLM size and accelerate inference using pruning techniques like Wanda and SparseGPT. Use when compressing models without retraining, achieving 50% sparsity with minimal accuracy loss, or enabling faster inference on hardware accelerators. Covers unstructured pruning, structured pruning, N:M sparsity, magnitude pruning, and one-shot methods. `skill`
- **moe-training** — Train Mixture of Experts (MoE) models using DeepSpeed or HuggingFace. Use when training large-scale models with limited compute (5× cost reduction vs dense models), implementing sparse architectures like Mixtral 8x7B or DeepSeek-V3, or scaling model capacity without proportional compute increase. Covers MoE architectures, routing mechanisms, load balancing, expert parallelism, and inference optimization. `skill`
- **speculative-decoding** — Accelerate LLM inference using speculative decoding, Medusa multiple heads, and lookahead decoding techniques. Use when optimizing inference speed (1.5-3.6× speedup), reducing latency for real-time applications, or deploying models with limited compute. Covers draft models, tree-based attention, Jacobi iteration, parallel token generation, and production deployment strategies. `skill`
- **academic-plotting** — Generates publication-quality figures for ML papers from research context. Given a paper section or description, extracts system components and relationships to generate architecture diagrams via Gemini. Given experiment results or data, auto-selects chart type and generates data-driven figures via matplotlib/seaborn. Use when creating any figure for a conference paper. `skill`
- **ml-paper-writing** — Write publication-ready ML/AI papers for NeurIPS, ICML, ICLR, ACL, AAAI, COLM. Use when drafting papers from research repos, structuring arguments, verifying citations, or preparing camera-ready submissions. For systems venues (OSDI, NSDI, ASPLOS, SOSP), use systems-paper-writing instead. `skill`
- **presenting-conference-talks** — Generates conference presentation slides (Beamer LaTeX PDF and editable PPTX) from a compiled paper with speaker notes and talk script. Use when preparing oral talks, spotlight presentations, or invited talks for ML and systems conferences. `skill`
- **systems-paper-writing** — Comprehensive guide for writing systems papers targeting OSDI, SOSP, ASPLOS, NSDI, and EuroSys. Provides paragraph-level structural blueprints, writing patterns, venue-specific checklists, reviewer guidelines, LaTeX templates, and conference deadlines. Use this skill for all systems conference paper writing. `skill`
- **brainstorming-research-ideas** — Guides researchers through structured ideation frameworks to discover high-impact research directions. Use when exploring new problem spaces, pivoting between projects, or seeking novel angles on existing work. `skill`
- **creative-thinking-for-research** — Applies cognitive science frameworks for creative thinking to CS and AI research ideation. Use when seeking genuinely novel research directions by leveraging combinatorial creativity, analogical reasoning, constraint manipulation, and other empirically grounded creative strategies. `skill`
- **ara-compiler** — Compiles any research input — PDF papers, GitHub repositories, experiment logs, code directories, or raw notes — into a complete Agent-Native Research Artifact (ARA) with cognitive layer (claims, concepts, heuristics), physical layer (configs, code stubs), exploration graph, and grounded evidence. Use when ingesting a paper or codebase into a structured, machine-executable knowledge package, building an ARA from scratch, or converting research outputs into a falsifiable, agent-traversable form. `skill`
- **ara-research-manager** — Records research provenance as a post-task epilogue, scanning conversation history at the end of a coding or research session to extract decisions, experiments, dead ends, claims, heuristics, and pivots, and writing them into the ara/ directory with user-vs-AI provenance tags. Use as a session epilogue — never during execution — to maintain a faithful, auditable trace of how a research project actually evolved. `skill`
- **ara-rigor-reviewer** — Performs ARA Seal Level 2 semantic epistemic review on Agent-Native Research Artifacts, scoring six dimensions (evidence relevance, falsifiability, scope calibration, argument coherence, exploration integrity, methodological rigor) and producing a constructive, severity-ranked report with a Strong Accept-to-Reject recommendation. Use after Level 1 structural validation passes, when an ARA needs an objective epistemic critique before publication or release. `skill`

## Details

| Field | Value |
|---|---|
| Author | Orchestra Research |
| Original repository | https://github.com/Orchestra-Research/AI-Research-SKILLs |
| Version | `0.1.9` |
| Original commit | `28f2d29236f2bade2eb92cadb2585189589a5828` |
| License | MIT |
| Source platform | Claude Code marketplace skills |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |
| OpenClaw | Tested |
| Hermes | Tested |

## Dependencies

- None

---
*written by original source*

# AI Research `Skills` Library

> **The most comprehensive open-source skills library enabling AI agents to autonomously conduct AI research — from idea to paper**

> The original promo GIF is omitted from this ForgeCat package because it exceeds installable package size constraints.

> Repository artwork, three generated example PDFs, and the ICML historical chart PDF are omitted from the installed profile. The chart's figure block and later cross-reference are also removed from the ICML template; the rest of the template remains.

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <a href="https://www.npmjs.com/package/@orchestra-research/ai-research-skills"><img src="https://img.shields.io/npm/v/@orchestra-research/ai-research-skills.svg" alt="npm version"></a>
  <a href="https://www.orchestra-research.com/perspectives/ai-research-skills"><img src="https://img.shields.io/badge/Blog-Read%20More-orange.svg" alt="Blog Post"></a>
  <a href="https://join.slack.com/t/orchestrarese-efu1990/shared_invite/zt-3iu6gr8io-zJvpkZTPToEviQ9KFZvNSg"><img src="https://img.shields.io/badge/Slack-Join%20Community-4A154B.svg?logo=slack" alt="Slack"></a>
  <a href="https://x.com/orch_research"><img src="https://img.shields.io/badge/Twitter-Follow-1DA1F2.svg?logo=x" alt="Twitter"></a>
  <a href="https://www.linkedin.com/company/orchestra-research/"><img src="https://img.shields.io/badge/LinkedIn-Follow-0A66C2.svg?logo=linkedin" alt="LinkedIn"></a>
</p>

<div align="center">

### **98 Skills Powering AI Research in 2026**

</div>

<details>
<summary><b>View All 23 Categories</b></summary>

<div align="center">

| | | |
|:---:|:---:|:---:|
| **Autoresearch** (1) | **Ideation** (2) | **ML Paper Writing** (2) |
| **Model Architecture** (5) | **Fine-Tuning** (4) | **Post-Training** (8) |
| **Distributed Training** (6) | **Optimization** (6) | **Inference** (4) |
| **Tokenization** (2) | **Data Processing** (2) | **Evaluation** (3) |
| **Safety & Alignment** (4) | **Agents** (4) | **RAG** (5) |
| **Multimodal** (7) | **Prompt Engineering** (4) | **MLOps** (3) |
| **Observability** (2) | **Infrastructure** (3) | **Mech Interp** (4) |
| **Emerging Techniques** (6) | **Agent-Native Research Artifact** (3) | |

</div>

</details>

---

## Table of Contents

- [Our Mission](#our-mission)
- [Path Towards AI Research Agent](#path-towards-ai-research-agent)
- [Available AI Research Engineering Skills](#available-ai-research-engineering-skills)
- [Demos](#demos)
- [Skill Structure](#skill-structure)
- [Roadmap](#roadmap)
- [Repository Structure](#repository-structure)
- [Use Cases](#use-cases)
- [Contributors](#contributors)
- [Citation](#citation)
- [Community](#community)


## Our Mission

We enable AI agents to **autonomously conduct AI research** — from literature survey and idea generation through experiment execution to paper writing. The library provides both the **research orchestration layer** (autoresearch, ideation, paper writing) and the **engineering skills** (training, evaluation, deployment) needed at each stage.
## Path Towards AI Research Agent

Modern AI research requires mastering dozens of specialized tools and frameworks.
AI Researchers spend more time debugging infrastructure than testing hypotheses — slowing the pace of scientific discovery.
We provide a comprehensive skills library that enables AI agents to autonomously conduct the full research lifecycle — from brainstorming ideas to writing the paper.
  - Autonomous Research - The **autoresearch** skill orchestrates the entire research workflow using a two-loop architecture, routing to domain skills as needed
  - Specialized Expertise - Each domain skill provides deep, production-ready knowledge of a specific framework (Megatron-LM, vLLM, TRL, etc.)
  - End-to-End Coverage - 98 skills spanning the full AI research lifecycle, from ideation and literature survey to experiments and paper writing
  - Research-Grade Quality - Documentation sourced from official repos, real GitHub issues, and battle-tested production workflows

## Available AI Research Engineering Skills

**Quality over quantity**: Each skill provides comprehensive, expert-level guidance with real code examples, troubleshooting guides, and production-ready workflows.

### 📦 Quick Install (Recommended)

**For humans** — interactive installer with one command:

```bash
npx @orchestra-research/ai-research-skills
```

**For AI agents** — point your agent to the welcome doc and it handles the rest:

```
Read https://www.orchestra-research.com/ai-research-skills/welcome.md and follow the instructions to install and use AI Research Skills.
```

This installs all 98 skills, loads the **autoresearch** orchestration layer, and starts autonomous research.

<details>
<summary><b>What the installer does</b></summary>

- **Auto-detects** your installed coding agents (Claude Code, Hermes Agent, OpenCode, Cursor, Gemini CLI, etc.)
- **Installs** skills to `~/.orchestra/skills/` with symlinks to each agent (falls back to copy on Windows)
- **Offers** everything, quickstart bundle, by category, or individual skills
- **Updates** installed skills with latest versions
- **Uninstalls** all or selected skills

</details>

<details>
<summary><b>CLI Commands</b></summary>

```bash
# Interactive installer (recommended)
npx @orchestra-research/ai-research-skills

# Direct commands
npx @orchestra-research/ai-research-skills list      # View installed skills
npx @orchestra-research/ai-research-skills update    # Update installed skills
```

</details>

<details>
<summary><b>Claude Code Marketplace (Alternative)</b></summary>

Install skill categories directly using the **Claude Code CLI**:

```bash
# Add the marketplace
/plugin marketplace add orchestra-research/AI-research-SKILLs

# Install by category (23 categories available)
/plugin install fine-tuning@ai-research-skills        # Axolotl, LLaMA-Factory, PEFT, Unsloth
/plugin install post-training@ai-research-skills      # TRL, GRPO, OpenRLHF, SimPO, verl, slime, miles, torchforge
/plugin install inference-serving@ai-research-skills  # vLLM, TensorRT-LLM, llama.cpp, SGLang
/plugin install distributed-training@ai-research-skills
/plugin install optimization@ai-research-skills
```

</details>

### All 23 Categories (98 Skills)

| Category | Skills | Included |
|----------|--------|----------|
| **Autoresearch** | **1** | **Autonomous research orchestration — central layer that manages the full lifecycle and routes to all other skills** |
| Ideation | 2 | Research Brainstorming, Creative Thinking |
| ML Paper Writing | 2 | ML Paper Writing (LaTeX templates, citation verification), Academic Plotting |
| Model Architecture | 5 | LitGPT, Mamba, NanoGPT, RWKV, TorchTitan |
| Tokenization | 2 | HuggingFace Tokenizers, SentencePiece |
| Fine-Tuning | 4 | Axolotl, LLaMA-Factory, PEFT, Unsloth |
| Mech Interp | 4 | TransformerLens, SAELens, pyvene, nnsight |
| Data Processing | 2 | NeMo Curator, Ray Data |
| Post-Training | 8 | TRL, GRPO, OpenRLHF, SimPO, verl, slime, miles, torchforge |
| Safety | 4 | Constitutional AI, LlamaGuard, NeMo Guardrails, Prompt Guard |
| Distributed | 6 | DeepSpeed, FSDP, Accelerate, Megatron-Core, Lightning, Ray Train |
| Infrastructure | 3 | Modal, Lambda Labs, SkyPilot |
| Optimization | 6 | Flash Attention, bitsandbytes, GPTQ, AWQ, HQQ, GGUF |
| Evaluation | 3 | lm-eval-harness, BigCode, NeMo Evaluator |
| Inference | 4 | vLLM, TensorRT-LLM, llama.cpp, SGLang |
| MLOps | 3 | W&B, MLflow, TensorBoard |
| Agents | 4 | LangChain, LlamaIndex, CrewAI, AutoGPT |
| RAG | 5 | Chroma, FAISS, Pinecone, Qdrant, Sentence Transformers |
| Prompt Eng | 4 | DSPy, Instructor, Guidance, Outlines |
| Observability | 2 | LangSmith, Phoenix |
| Multimodal | 7 | CLIP, Whisper, LLaVA, BLIP-2, SAM, Stable Diffusion, AudioCraft |
| Emerging | 6 | MoE, Model Merging, Long Context, Speculative Decoding, Distillation, Pruning |
| Agent-Native Research Artifact | 3 | ARA Compiler, Research Manager, Rigor Reviewer |

<details>
<summary><b>View All 98 Skills in Details</b></summary>

### 🔬 Autoresearch (1 skill) — Central Orchestration Layer
- **[Autoresearch](skills/ai-research-skills/0-autoresearch-skill/)** - Autonomous research orchestration using a two-loop architecture (inner optimization + outer synthesis). Manages the full lifecycle from literature survey to paper writing, routing to all domain-specific skills. Supports Claude Code /loop and OpenClaw heartbeat for continuous operation (390 lines + 3 refs)

### 🏗️ Model Architecture (5 skills)
- **[LitGPT](skills/ai-research-skills/01-model-architecture/litgpt/)** - Lightning AI's 20+ clean LLM implementations with production training recipes (462 lines + 4 refs)
- **[Mamba](skills/ai-research-skills/01-model-architecture/mamba/)** - State-space models with O(n) complexity, 5× faster than Transformers (253 lines + 3 refs)
- **[RWKV](skills/ai-research-skills/01-model-architecture/rwkv/)** - RNN+Transformer hybrid, infinite context, Linux Foundation project (253 lines + 3 refs)
- **[NanoGPT](skills/ai-research-skills/01-model-architecture/nanogpt/)** - Educational GPT in ~300 lines by Karpathy (283 lines + 3 refs)
- **[TorchTitan](skills/ai-research-skills/01-model-architecture/torchtitan/)** - PyTorch-native distributed training for Llama 3.1 with 4D parallelism

### 🔤 Tokenization (2 skills)
- **[HuggingFace Tokenizers](skills/ai-research-skills/02-tokenization/huggingface-tokenizers/)** - Rust-based, <20s/GB, BPE/WordPiece/Unigram algorithms (486 lines + 4 refs)
- **[SentencePiece](skills/ai-research-skills/02-tokenization/sentencepiece/)** - Language-independent, 50k sentences/sec, used by T5/ALBERT (228 lines + 2 refs)

### 🎯 Fine-Tuning (4 skills)
- **[Axolotl](skills/ai-research-skills/03-fine-tuning/axolotl/)** - YAML-based fine-tuning with 100+ models (156 lines + 4 refs)
- **[LLaMA-Factory](skills/ai-research-skills/03-fine-tuning/llama-factory/)** - WebUI no-code fine-tuning (78 lines + 5 refs)
- **[Unsloth](skills/ai-research-skills/03-fine-tuning/unsloth/)** - 2x faster QLoRA fine-tuning (75 lines + 4 refs)
- **[PEFT](skills/ai-research-skills/03-fine-tuning/peft/)** - Parameter-efficient fine-tuning with LoRA, QLoRA, DoRA, 25+ methods (431 lines + 2 refs)

### 🔬 Mechanistic Interpretability (4 skills)
- **[TransformerLens](skills/ai-research-skills/04-mechanistic-interpretability/transformer-lens/)** - Neel Nanda's library for mech interp with HookPoints, activation caching (346 lines + 3 refs)
- **[SAELens](skills/ai-research-skills/04-mechanistic-interpretability/saelens/)** - Sparse Autoencoder training and analysis for feature discovery (386 lines + 3 refs)
- **[pyvene](skills/ai-research-skills/04-mechanistic-interpretability/pyvene/)** - Stanford's causal intervention library with declarative configs (473 lines + 3 refs)
- **[nnsight](skills/ai-research-skills/04-mechanistic-interpretability/nnsight/)** - Remote interpretability via NDIF, run experiments on 70B+ models (436 lines + 3 refs)


### 📊 Data Processing (2 skills)
- **[Ray Data](skills/ai-research-skills/05-data-processing/ray-data/)** - Distributed ML data processing, streaming execution, GPU support (318 lines + 2 refs)
- **[NeMo Curator](skills/ai-research-skills/05-data-processing/nemo-curator/)** - GPU-accelerated data curation, 16× faster deduplication (375 lines + 2 refs)

### 🎓 Post-Training (8 skills)
- **[TRL Fine-Tuning](skills/ai-research-skills/06-post-training/trl-fine-tuning/)** - Transformer Reinforcement Learning (447 lines + 4 refs)
- **[GRPO-RL-Training](skills/ai-research-skills/06-post-training/grpo-rl-training/)** (TRL) - Group Relative Policy Optimization with TRL (569 lines, **gold standard**)
- **[OpenRLHF](skills/ai-research-skills/06-post-training/openrlhf/)** - Full RLHF pipeline with Ray + vLLM (241 lines + 4 refs)
- **[SimPO](skills/ai-research-skills/06-post-training/simpo/)** - Simple Preference Optimization, no reference model needed (211 lines + 3 refs)
- **[verl](skills/ai-research-skills/06-post-training/verl/)** - ByteDance's HybridFlow RL framework, FSDP/Megatron + vLLM/SGLang backends (389 lines + 2 refs)
- **[slime](skills/ai-research-skills/06-post-training/slime/)** - THUDM's Megatron+SGLang framework powering GLM-4.x models (464 lines + 2 refs)
- **[miles](skills/ai-research-skills/06-post-training/miles/)** - Enterprise fork of slime with FP8, INT4, speculative RL for MoE training (315 lines + 2 refs)
- **[torchforge](skills/ai-research-skills/06-post-training/torchforge/)** - Meta's PyTorch-native RL with Monarch+TorchTitan+vLLM (380 lines + 2 refs)

### 🛡️ Safety & Alignment (4 skills)
- **[Constitutional AI](skills/ai-research-skills/07-safety-alignment/constitutional-ai/)** - AI-driven self-improvement via principles (282 lines)
- **[LlamaGuard](skills/ai-research-skills/07-safety-alignment/llamaguard/)** - Safety classifier for LLM inputs/outputs (329 lines)
- **[NeMo Guardrails](skills/ai-research-skills/07-safety-alignment/nemo-guardrails/)** - Programmable guardrails with Colang (289 lines)
- **[Prompt Guard](skills/ai-research-skills/07-safety-alignment/prompt-guard/)** - Meta's 86M prompt injection & jailbreak detector, 99%+ TPR, <2ms GPU (313 lines)

### ⚡ Distributed Training (6 skills)
- **[Megatron-Core](skills/ai-research-skills/08-distributed-training/megatron-core/)** - NVIDIA's framework for training 2B-462B param models with 47% MFU on H100 (359 lines + 4 refs)
- **[DeepSpeed](skills/ai-research-skills/08-distributed-training/deepspeed/)** - Microsoft's ZeRO optimization (137 lines + 9 refs)
- **[PyTorch FSDP2](skills/ai-research-skills/08-distributed-training/pytorch-fsdp2/)** - Fully Sharded Data Parallel v2 with `fully_shard` and DTensor (231 lines + 12 refs)
- **[Accelerate](skills/ai-research-skills/08-distributed-training/accelerate/)** - HuggingFace's 4-line distributed training API (324 lines + 3 refs)
- **[PyTorch Lightning](skills/ai-research-skills/08-distributed-training/pytorch-lightning/)** - High-level training framework with Trainer class (339 lines + 3 refs)
- **[Ray Train](skills/ai-research-skills/08-distributed-training/ray-train/)** - Multi-node orchestration and hyperparameter tuning (399 lines + 1 ref)

### 🚀 Optimization (6 skills)
- **[Flash Attention](skills/ai-research-skills/10-optimization/flash-attention/)** - 2-4x faster attention with memory efficiency (359 lines + 2 refs)
- **[bitsandbytes](skills/ai-research-skills/10-optimization/bitsandbytes/)** - 8-bit/4-bit quantization for 50-75% memory reduction (403 lines + 3 refs)
- **[GPTQ](skills/ai-research-skills/10-optimization/gptq/)** - 4-bit post-training quantization, 4× memory reduction, <2% accuracy loss (443 lines + 3 refs)
- **[AWQ](skills/ai-research-skills/10-optimization/awq/)** - Activation-aware weight quantization, 4-bit with minimal accuracy loss (310 lines + 2 refs)
- **[HQQ](skills/ai-research-skills/10-optimization/hqq/)** - Half-Quadratic Quantization, no calibration data needed, multi-backend (370 lines + 2 refs)
- **[GGUF](skills/ai-research-skills/10-optimization/gguf/)** - llama.cpp quantization format, K-quant methods, CPU/Metal inference (380 lines + 2 refs)

### 📊 Evaluation (3 skills)
- **[lm-evaluation-harness](skills/ai-research-skills/11-evaluation/lm-evaluation-harness/)** - EleutherAI's standard for benchmarking LLMs across 60+ tasks (482 lines + 4 refs)
- **[BigCode Evaluation Harness](skills/ai-research-skills/11-evaluation/bigcode-evaluation-harness/)** - Code model benchmarking with HumanEval, MBPP, MultiPL-E, pass@k metrics (406 lines + 3 refs)
- **[NeMo Evaluator](skills/ai-research-skills/11-evaluation/nemo-evaluator/)** - NVIDIA's enterprise platform for 100+ benchmarks across 18+ harnesses with multi-backend execution (454 lines + 4 refs)

### ☁️ Infrastructure (3 skills)
- **[Modal](skills/ai-research-skills/09-infrastructure/modal/)** - Serverless GPU cloud with Python-native API, T4-H200 on-demand (342 lines + 2 refs)
- **[SkyPilot](skills/ai-research-skills/09-infrastructure/skypilot/)** - Multi-cloud orchestration across 20+ providers with spot recovery (390 lines + 2 refs)
- **[Lambda Labs](skills/ai-research-skills/09-infrastructure/lambda-labs/)** - Reserved/on-demand GPU cloud with H100/A100, persistent filesystems (390 lines + 2 refs)

### 🔥 Inference & Serving (4 skills)
- **[vLLM](skills/ai-research-skills/12-inference-serving/vllm/)** - High-throughput LLM serving with PagedAttention (356 lines + 4 refs, **production-ready**)
- **[TensorRT-LLM](skills/ai-research-skills/12-inference-serving/tensorrt-llm/)** - NVIDIA's fastest inference, 24k tok/s, FP8/INT4 quantization (180 lines + 3 refs)
- **[llama.cpp](skills/ai-research-skills/12-inference-serving/llama-cpp/)** - CPU/Apple Silicon inference, GGUF quantization (251 lines + 3 refs)
- **[SGLang](skills/ai-research-skills/12-inference-serving/sglang/)** - Structured generation with RadixAttention, 5-10× faster for agents (435 lines + 3 refs)

### 🤖 Agents (4 skills)
- **[LangChain](skills/ai-research-skills/14-agents/langchain/)** - Most popular agent framework, 500+ integrations, ReAct pattern (658 lines + 3 refs, **production-ready**)
- **[LlamaIndex](skills/ai-research-skills/14-agents/llamaindex/)** - Data framework for LLM apps, 300+ connectors, RAG-focused (535 lines + 3 refs)
- **[CrewAI](skills/ai-research-skills/14-agents/crewai/)** - Multi-agent orchestration, role-based collaboration, autonomous workflows (498 lines + 3 refs)
- **[AutoGPT](skills/ai-research-skills/14-agents/autogpt/)** - Autonomous AI agent platform, visual workflow builder, continuous execution (400 lines + 2 refs)

### 🔍 RAG (5 skills)
- **[Chroma](skills/ai-research-skills/15-rag/chroma/)** - Open-source embedding database, local/cloud, 24k stars (385 lines + 1 ref)
- **[FAISS](skills/ai-research-skills/15-rag/faiss/)** - Facebook's similarity search, billion-scale, GPU acceleration (295 lines)
- **[Sentence Transformers](skills/ai-research-skills/15-rag/sentence-transformers/)** - 5000+ embedding models, multilingual, 15k stars (370 lines)
- **[Pinecone](skills/ai-research-skills/15-rag/pinecone/)** - Managed vector database, auto-scaling, <100ms latency (410 lines)
- **[Qdrant](skills/ai-research-skills/15-rag/qdrant/)** - High-performance vector search, Rust-powered, hybrid search with filtering (493 lines + 2 refs)

### 🎨 Multimodal (7 skills)
- **[CLIP](skills/ai-research-skills/18-multimodal/clip/)** - OpenAI's vision-language model, zero-shot classification, 25k stars (320 lines)
- **[Whisper](skills/ai-research-skills/18-multimodal/whisper/)** - Robust speech recognition, 99 languages, 73k stars (395 lines)
- **[LLaVA](skills/ai-research-skills/18-multimodal/llava/)** - Vision-language assistant, image chat, GPT-4V level (360 lines)
- **[Stable Diffusion](skills/ai-research-skills/18-multimodal/stable-diffusion/)** - Text-to-image generation via HuggingFace Diffusers, SDXL, ControlNet (380 lines + 2 refs)
- **[Segment Anything](skills/ai-research-skills/18-multimodal/segment-anything/)** - Meta's SAM for zero-shot image segmentation with points/boxes (500 lines + 2 refs)
- **[BLIP-2](skills/ai-research-skills/18-multimodal/blip-2/)** - Vision-language pretraining with Q-Former, image captioning, VQA (500 lines + 2 refs)
- **[AudioCraft](skills/ai-research-skills/18-multimodal/audiocraft/)** - Meta's MusicGen/AudioGen for text-to-music and text-to-sound (470 lines + 2 refs)

### 🎯 Prompt Engineering (4 skills)
- **[DSPy](skills/ai-research-skills/16-prompt-engineering/dspy/)** - Declarative prompt programming with optimizers, Stanford NLP, 22k stars (438 lines + 3 refs)
- **[Instructor](skills/ai-research-skills/16-prompt-engineering/instructor/)** - Structured LLM outputs with Pydantic validation, 15k stars (726 lines + 3 refs)
- **[Guidance](skills/ai-research-skills/16-prompt-engineering/guidance/)** - Constrained generation with regex/grammars, Microsoft Research, 18k stars (485 lines + 3 refs)
- **[Outlines](skills/ai-research-skills/16-prompt-engineering/outlines/)** - Structured text with FSM, zero-overhead, 8k stars (601 lines + 3 refs)

### 📊 MLOps (3 skills)
- **[Weights & Biases](skills/ai-research-skills/13-mlops/weights-and-biases/)** - Experiment tracking, sweeps, artifacts, model registry (427 lines + 3 refs)
- **[MLflow](skills/ai-research-skills/13-mlops/mlflow/)** - Model registry, tracking, deployment, autologging (514 lines + 3 refs)
- **[TensorBoard](skills/ai-research-skills/13-mlops/tensorboard/)** - Visualization, profiling, embeddings, scalars/images (538 lines + 3 refs)

### 👁️ Observability (2 skills)
- **[LangSmith](skills/ai-research-skills/17-observability/langsmith/)** - LLM observability, tracing, evaluation, monitoring for AI apps (422 lines + 2 refs)
- **[Phoenix](skills/ai-research-skills/17-observability/phoenix/)** - Open-source AI observability with OpenTelemetry tracing and LLM evaluation (380 lines + 2 refs)

### 🔬 Emerging Techniques (6 skills)
- **[MoE Training](skills/ai-research-skills/19-emerging-techniques/moe-training/)** - Mixture of Experts training with DeepSpeed, Mixtral 8x7B, 5× cost reduction (515 lines + 3 refs)
- **[Model Merging](skills/ai-research-skills/19-emerging-techniques/model-merging/)** - Combine models with TIES, DARE, SLERP using mergekit (528 lines + 3 refs)
- **[Long Context](skills/ai-research-skills/19-emerging-techniques/long-context/)** - Extend context windows with RoPE, YaRN, ALiBi, 32k-128k tokens (624 lines + 3 refs)
- **[Speculative Decoding](skills/ai-research-skills/19-emerging-techniques/speculative-decoding/)** - 1.5-3.6× faster inference with Medusa, Lookahead (379 lines)
- **[Knowledge Distillation](skills/ai-research-skills/19-emerging-techniques/knowledge-distillation/)** - Compress models 70B→7B with MiniLLM, temperature scaling (424 lines)
- **[Model Pruning](skills/ai-research-skills/19-emerging-techniques/model-pruning/)** - 50% sparsity with Wanda, SparseGPT, <1% accuracy loss (417 lines)

### 📝 ML Paper Writing (2 skills)
- **[ML Paper Writing](skills/ai-research-skills/20-ml-paper-writing/)** - Write publication-ready papers for NeurIPS, ICML, ICLR, ACL, AAAI, COLM with LaTeX templates, citation verification, and writing best practices (532 lines + 5 refs)
- **[Academic Plotting](skills/ai-research-skills/20-ml-paper-writing/academic-plotting/)** - Generate publication-quality figures for ML papers: architecture diagrams via Gemini AI and data-driven charts via matplotlib/seaborn with venue-specific styling (479 lines + 3 refs)

### 💡 Ideation (2 skills)
- **[Research Brainstorming](skills/ai-research-skills/21-research-ideation/brainstorming-research-ideas/)** - Structured ideation frameworks for discovering high-impact research directions with 10 complementary lenses (384 lines)
- **[Creative Thinking](skills/ai-research-skills/21-research-ideation/creative-thinking-for-research/)** - Cognitive science frameworks (bisociation, structure-mapping, constraint manipulation) for genuinely novel research ideas (366 lines)

### 🧬 Agent-Native Research Artifact (3 skills)
- **[ARA Compiler](skills/ai-research-skills/22-agent-native-research-artifact/compiler/)** - Compiles any research input (PDF papers, repos, experiment logs, raw notes) into a complete Agent-Native Research Artifact with claims, exploration graph, evidence, and code stubs (245 lines + 3 refs)
- **[ARA Research Manager](skills/ai-research-skills/22-agent-native-research-artifact/research-manager/)** - Post-task research recorder that runs at session end to extract decisions, experiments, dead ends, and pivots from conversation history into the `ara/` directory with user-vs-AI provenance tags (324 lines + 3 refs)
- **[ARA Rigor Reviewer](skills/ai-research-skills/22-agent-native-research-artifact/rigor-reviewer/)** - ARA Seal Level 2 semantic epistemic review scoring six dimensions of research rigor (evidence relevance, falsifiability, scope, coherence, exploration integrity, methodology) with severity-ranked findings (322 lines + 1 ref)


</details>

## Demos

All 87 skills in this repo are automatically synced to [Orchestra Research](https://www.orchestra-research.com/research-skills), where you can add them to your projects with one click and use them with AI research agents.

**See skills in action → [demos/](demos/README.md)**

We maintain a curated collection of demo repositories showing how to use skills for real AI research tasks:

| Demo | Skills Used | What It Does |
|------|-------------|--------------|
| **[Norm Heterogeneity → LoRA Brittleness](demos/autoresearch-norm-heterogeneity/)** | Autoresearch, ML Paper Writing, Ideation | Agent autonomously discovered norm heterogeneity predicts fine-tuning difficulty (r=-0.99), pivoting from a null result on ETF overlaps |
| **[RL Algorithm Brain Scan](demos/autoresearch-rl-brain-scan/)** | Autoresearch, GRPO, TRL, SAELens, TransformerLens, ML Paper Writing | Agent found DPO is a rank-1 perturbation (95.6% recovery from one SVD direction) while online RL is distributed and structure-preserving |
| **[NeMo Eval: GPQA Benchmark](https://github.com/zechenzhangAGI/Nemo-Eval-Skill-Demo)** | NeMo Evaluator | Compare Llama 8B/70B/405B on graduate-level science questions |
| **[LoRA Without Regret Reproduction](https://www.orchestra-research.com/perspectives/LLM-with-Orchestra)** | GRPO, TRL | Reproduce SFT + GRPO RL experiments via prompting |
| **[Layer-Wise Quantization Experiment](https://github.com/AmberLJC/llama-quantization-experiment)** | llama.cpp, GGUF | Investigate optimal layer precision allocation—early layers at Q8 achieve 1.9× compression with 1.3% perplexity loss |
| **[Cross-Lingual Alignment Analysis](https://github.com/AmberLJC/faiss-demo)** | FAISS | Quantify how well multilingual embeddings align semantic concepts across 8 languages using FAISS similarity search |
| **[Scientific Plotting Demo](demos/scientific-plotting-demo/)** | Academic Plotting | Generate publication-quality figures for the Andes QoE-aware LLM serving paper — Gemini AI architecture diagrams + matplotlib data charts (CDF, multi-panel grids, bar charts) |

**Featured Demos**: Two papers produced entirely by AI agents using the **autoresearch** skill. The [Norm Heterogeneity paper](demos/autoresearch-norm-heterogeneity/) demonstrates autonomous research pivoting — the agent refuted its own hypothesis and discovered a stronger finding. The [RL Brain Scan paper](demos/autoresearch-rl-brain-scan/) demonstrates multi-skill orchestration — the agent trained RL models, analyzed internals with interpretability tools, and synthesized the insight that "DPO is rank-1 alignment." Both papers written end-to-end by the agent.

## Skill Structure

Each skill follows a battle-tested format for maximum usefulness:

```
skill-name/
├── SKILL.md                    # Quick reference (50-150 lines)
│   ├── Metadata (name, description, version)
│   ├── When to use this skill
│   ├── Quick patterns & examples
│   └── Links to references
│
├── references/                 # Deep documentation (300KB+)
│   ├── README.md              # From GitHub/official docs
│   ├── api.md                 # API reference
│   ├── tutorials.md           # Step-by-step guides
│   ├── issues.md              # Real GitHub issues & solutions
│   ├── releases.md            # Version history & breaking changes
│   └── file_structure.md      # Codebase navigation
│
├── scripts/                    # Helper scripts (optional)
└── assets/                     # Templates & examples (optional)
```

<details>
<summary><b>Quality Standards</b></summary>

- 300KB+ documentation from official sources
- Real GitHub issues & solutions (when available)
- Code examples with language detection
- Version history & breaking changes
- Links to official docs

</details>

## Roadmap

We're building towards 80 comprehensive skills across the full AI research lifecycle. See our [detailed roadmap](skills/ai-research-skills/docs/ROADMAP.md) for the complete development plan.

[View Full Roadmap →](skills/ai-research-skills/docs/ROADMAP.md)

<details>
<summary><b>View Detailed Statistics</b></summary>

| Metric | Current | Target |
|--------|---------|--------|
| **Skills** | **87** (high-quality, standardized YAML) | 80 ✅ |
| **Avg Lines/Skill** | **420 lines** (focused + progressive disclosure) | 200-600 lines |
| **Documentation** | **~130,000 lines** total (SKILL.md + references) | 100,000+ lines |
| **Gold Standard Skills** | **65** with comprehensive references | 50+ |
| **Contributors** | 1 | 100+ |
| **Coverage** | Architecture, Tokenization, Fine-Tuning, Mechanistic Interpretability, Data Processing, Post-Training, Safety, Distributed, Optimization, Evaluation, Infrastructure, Inference, Agents, RAG, Multimodal, Prompt Engineering, MLOps, Observability, ML Paper Writing, Ideation, Autoresearch | Full Lifecycle ✅ |

**Recent Progress**: npm package `@orchestra-research/ai-research-skills` for one-command installation across all coding agents

**Philosophy**: Quality > Quantity. Following [Anthropic official best practices](skills/ai-research-skills/anthropic_official_docs/best_practices.md) - each skill provides 200-500 lines of focused, actionable guidance with progressive disclosure.

</details>



## Repository Structure

```
claude-ai-research-skills/
├── README.md                    ← You are here
├── CONTRIBUTING.md              ← Contribution guide
├── demos/                       ← Curated demo gallery (links to demo repos)
├── docs/
├── 0-autoresearch-skill/        (1 skill ✓ - Autonomous research orchestration)
├── 01-model-architecture/       (5 skills ✓ - LitGPT, Mamba, RWKV, NanoGPT, TorchTitan)
├── 02-tokenization/             (2 skills ✓ - HuggingFace Tokenizers, SentencePiece)
├── 03-fine-tuning/              (4 skills ✓ - Axolotl, LLaMA-Factory, Unsloth, PEFT)
├── 04-mechanistic-interpretability/ (4 skills ✓ - TransformerLens, SAELens, pyvene, nnsight)
├── 05-data-processing/          (2 skills ✓ - Ray Data, NeMo Curator)
├── 06-post-training/            (8 skills ✓ - TRL, GRPO, OpenRLHF, SimPO, verl, slime, miles, torchforge)
├── 07-safety-alignment/         (4 skills ✓ - Constitutional AI, LlamaGuard, NeMo Guardrails, Prompt Guard)
├── 08-distributed-training/     (6 skills ✓ - Megatron-Core, DeepSpeed, FSDP, Accelerate, Lightning, Ray Train)
├── 09-infrastructure/           (3 skills ✓ - Modal, SkyPilot, Lambda Labs)
├── 10-optimization/             (6 skills ✓ - Flash Attention, bitsandbytes, GPTQ, AWQ, HQQ, GGUF)
├── 11-evaluation/               (3 skills ✓ - lm-evaluation-harness, BigCode, NeMo Evaluator)
├── 12-inference-serving/        (4 skills ✓ - vLLM, TensorRT-LLM, llama.cpp, SGLang)
├── 13-mlops/                    (3 skills ✓ - Weights & Biases, MLflow, TensorBoard)
├── 14-agents/                   (4 skills ✓ - LangChain, LlamaIndex, CrewAI, AutoGPT)
├── 15-rag/                      (5 skills ✓ - Chroma, FAISS, Sentence Transformers, Pinecone, Qdrant)
├── 16-prompt-engineering/       (4 skills ✓ - DSPy, Instructor, Guidance, Outlines)
├── 17-observability/            (2 skills ✓ - LangSmith, Phoenix)
├── 18-multimodal/               (7 skills ✓ - CLIP, Whisper, LLaVA, Stable Diffusion, SAM, BLIP-2, AudioCraft)
├── 19-emerging-techniques/      (6 skills ✓ - MoE, Model Merging, Long Context, Speculative Decoding, Distillation, Pruning)
├── 20-ml-paper-writing/         (2 skills ✓ - ML Paper Writing with LaTeX templates, Academic Plotting)
├── 21-research-ideation/           (2 skills ✓ - Research Brainstorming, Creative Thinking)
├── 22-agent-native-research-artifact/ (3 skills ✓ - ARA Compiler, Research Manager, Rigor Reviewer)
└── packages/ai-research-skills/ (npm package for one-command installation)
```

## Use Cases

### For Researchers
"I need to fine-tune Llama 3 with custom data"
→ **03-fine-tuning/axolotl/** - YAML configs, 100+ model support

### For ML Engineers
"How do I optimize inference latency?"
→ **12-inference-serving/vllm/** - PagedAttention, batching

### For Students
"I want to learn how transformers work"
→ **01-model-architecture/litgpt/** - Clean implementations

### For Teams
"We need to scale training to 100 GPUs"
→ **08-distributed-training/deepspeed/** - ZeRO stages, 3D parallelism

## License

MIT License - See [LICENSE](LICENSE) for details.

**Note**: Individual skills may reference libraries with different licenses. Please check each project's license before use.

## Citation

If you use AI Research Skills in your work or find it helpful for a publication, we'd appreciate a citation:

**BibTeX**
```bibtex
@software{ai_research_skills,
  title     = {AI Research Skills Library},
  author    = {{Orchestra Research}},
  year      = {2025},
  url       = {https://github.com/orchestra-research/AI-research-SKILLs},
  note      = {Open-source skills library enabling AI agents to autonomously conduct AI research}
}
```

**APA**
> Orchestra Research. (2025). *AI Research Skills Library* [Computer software]. https://github.com/orchestra-research/AI-research-SKILLs

**Chicago**
> Orchestra Research. "AI Research Skills Library." GitHub, 2025. https://github.com/orchestra-research/AI-research-SKILLs.

**IEEE**
> Orchestra Research, "AI Research Skills Library," 2025. [Online]. Available: https://github.com/orchestra-research/AI-research-SKILLs

> **Tip**: You can also click **"Cite this repository"** in the GitHub sidebar for auto-formatted citations.

## Acknowledgments

Built with:
- **[Claude Code](https://www.claude.com/product/claude-code)** - AI pair programming
- **[Skill Seeker](https://github.com/yusufkaraaslan/Skill_Seekers)** - Automated doc scraping
- **Open Source AI Community** - For amazing tools and docs

Special thanks to:
- EleutherAI, HuggingFace, NVIDIA, Lightning AI, Meta AI, Anthropic
- All researchers who maintain excellent documentation
 
## Contributors

Thanks to all the people who have contributed to the AI Research Skills Library:

<a href="https://github.com/orchestra-research/AI-research-SKILLs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=orchestra-research/AI-research-SKILLs" />
</a> 

We welcome contributions from the AI research community! See [CONTRIBUTING.md](skills/ai-research-skills/CONTRIBUTING.md) for detailed guidelines on:

- Adding new skills
- Improving existing skills
- Quality standards and best practices
- Submission process

## Recent Updates

<details open>
<summary><b>April 2026 - v1.6.0 🧬 Agent-Native Research Artifact (ARA) — 23rd Category, 98 Skills</b></summary>

- 🧬 **NEW CATEGORY**: `22-agent-native-research-artifact/` (the 23rd category) — three skills that turn research outputs into a falsifiable, agent-traversable artifact:
  - 🛠️ **[ARA Compiler](skills/ai-research-skills/22-agent-native-research-artifact/compiler/)** — compiles any input (PDF papers, GitHub repos, experiment logs, raw notes) into a structured ARA with cognitive layer (claims, concepts, heuristics), physical layer (configs, code stubs), exploration graph (research DAG), and grounded evidence
  - 📋 **[ARA Research Manager](skills/ai-research-skills/22-agent-native-research-artifact/research-manager/)** — post-task epilogue that scans conversation history at session end and writes decisions, experiments, dead ends, claims, heuristics, and pivots into the `ara/` directory with `user` / `ai-suggested` / `ai-executed` / `user-revised` provenance tags
  - 🔍 **[ARA Rigor Reviewer](skills/ai-research-skills/22-agent-native-research-artifact/rigor-reviewer/)** — Seal Level 2 semantic epistemic review scoring six dimensions of research rigor (evidence relevance, falsifiability, scope calibration, argument coherence, exploration integrity, methodological rigor) and emitting a severity-ranked report with a Strong Accept-to-Reject recommendation
- 🔗 Sourced from the [Agent-Native-Research-Artifact-Init](https://github.com/Orchestra-Research/Agent-Native-Research-Artifact-Init) reference repo, restructured to AI-research-SKILLs standards (kebab-case names, third-person descriptions, Title-Case tags, one-level-deep references)
- 🧩 Plugin entry `agent-native-research-artifact` added to `.claude-plugin/marketplace.json`; CLI category registered as `22-agent-native-research-artifact` with three individual skill entries in the npm installer
- 🔄 Auto-syncs to Orchestra marketplace via `sync-skills.yml` on push; npm package republished as `@orchestra-research/ai-research-skills@1.6.0` via `publish-npm.yml` on version bump
- 📊 **98 total skills** across **23 categories** — full lifecycle from idea → paper → falsifiable, auditable artifact

</details>

<details>
<summary><b>March 2026 - v1.4.0 🔬 Autoresearch & 86 Skills — Full Research Lifecycle</b></summary>

- 🔬 **NEW SKILL**: **Autoresearch** — autonomous research orchestration using a two-loop architecture (inner optimization loop + outer synthesis loop)
- 🧠 Manages the full research lifecycle: literature survey → ideation → experiments → synthesis → paper writing
- 🔄 Routes to all 86 domain skills automatically — agents don't need to know which skill to use
- ⏰ Mandatory `/loop` (Claude Code) and cron job (OpenClaw) for continuous autonomous operation
- 📊 Generates research presentations (HTML/PDF) with optimization trajectory plots for human review
- 📝 Findings.md as persistent project memory across sessions with "Lessons and Constraints" tracking
- 🗂️ Structured workspace: research-state.yaml, findings.md, research-log.md, literature/, experiments/, src/, data/, to_human/
- 📄 **Two demo papers produced by autoresearch**: [Norm Heterogeneity → LoRA Brittleness](demos/autoresearch-norm-heterogeneity/) and [RL Algorithm Brain Scan](demos/autoresearch-rl-brain-scan/)
- 🚀 WELCOME.md for cold-start agent bootstrap — one URL to go from zero to autonomous research
- 📦 npm v1.4.x with Windows symlink fallback, all 22 categories installable
- 🤖 **Supported agents**: Claude Code, Hermes Agent, OpenCode, OpenClaw, Cursor, Codex, Gemini CLI, Qwen Code
- 📊 **87 total skills** across **22 categories** — complete research lifecycle coverage

</details>

<details>
<summary><b>February 2026 - v0.15.0 🛡️ Prompt Guard & 83 Skills</b></summary>

- 🛡️ **NEW SKILL**: Prompt Guard - Meta's 86M prompt injection & jailbreak detector
- ⚡ 99%+ TPR, <1% FPR, <2ms GPU latency, multilingual (8 languages)
- 🔒 3 workflows: user input filtering, third-party data filtering, batch RAG processing
- 📊 **83 total skills** across 20 categories

</details>

<details>
<summary><b>January 2026 - v0.14.0 📦 npm Package & 82 Skills</b></summary>

- 📦 **NEW**: `npx @orchestra-research/ai-research-skills` - One-command installation for all coding agents
- 🤖 **Supported agents**: Claude Code, OpenCode, Cursor, Codex, Gemini CLI, Qwen Code
- ✨ Interactive installer with category/individual skill selection
- 🔄 Update installed skills, selective uninstall
- 📊 **82 total skills** (5 new post-training skills: verl, slime, miles, torchforge + TorchTitan)
- 🏗️ Megatron-Core moved to Distributed Training category

</details>

<details>
<summary><b>January 2026 - v0.13.0 📝 ML Paper Writing & Demos Gallery</b></summary>

- 📝 **NEW CATEGORY**: ML Paper Writing (20th category, 77th skill)
- 🎯 Write publication-ready papers for NeurIPS, ICML, ICLR, ACL, AAAI, COLM
- 📚 Writing philosophy from top researchers (Neel Nanda, Farquhar, Gopen & Swan, Lipton, Perez)
- 🔬 Citation verification workflow - never hallucinate references
- 📄 LaTeX templates for 6 major conferences
- 🎪 **NEW**: Curated demos gallery (`demos/`) showcasing skills in action
- 🔗 Demo repos: NeMo Evaluator benchmark, LoRA Without Regret reproduction
- 📖 936-line comprehensive SKILL.md with 4 workflows

</details>

<details>
<summary><b>January 2026 - v0.12.0 📊 NeMo Evaluator SDK</b></summary>

- 📊 **NEW SKILL**: NeMo Evaluator SDK for enterprise LLM benchmarking
- 🔧 NVIDIA's evaluation platform with 100+ benchmarks from 18+ harnesses (MMLU, HumanEval, GSM8K, safety, VLM)
- ⚡ Multi-backend execution: local Docker, Slurm HPC, Lepton cloud
- 📦 Container-first architecture for reproducible evaluation
- 📝 454 lines SKILL.md + 4 comprehensive reference files (~48KB documentation)

</details>

<details>
<summary><b>December 2025 - v0.11.0 🔬 Mechanistic Interpretability</b></summary>

- 🔬 **NEW CATEGORY**: Mechanistic Interpretability (4 skills)
- 🔍 TransformerLens skill: Neel Nanda's library for mech interp with HookPoints, activation caching, circuit analysis
- 🧠 SAELens skill: Sparse Autoencoder training and analysis for feature discovery, monosemanticity research
- ⚡ pyvene skill: Stanford's causal intervention library with declarative configs, DAS, activation patching
- 🌐 nnsight skill: Remote interpretability via NDIF, run experiments on 70B+ models without local GPUs
- 📝 ~6,500 new lines of documentation across 16 files
- **76 total skills** (filling the missing 04 category slot)

</details>

<details>
<summary><b>November 25, 2025 - v0.10.0 🎉 70 Skills Complete!</b></summary>

- 🎉 **ROADMAP COMPLETE**: Reached 70-skill milestone!
- 🚀 Added 4 skills: Lambda Labs, Segment Anything (SAM), BLIP-2, AudioCraft
- ☁️ Lambda Labs skill: Reserved/on-demand GPU cloud with H100/A100, persistent filesystems, 1-Click Clusters
- 🖼️ SAM skill: Meta's Segment Anything for zero-shot image segmentation with points/boxes/masks
- 👁️ BLIP-2 skill: Vision-language pretraining with Q-Former, image captioning, VQA
- 🎵 AudioCraft skill: Meta's MusicGen/AudioGen for text-to-music and text-to-sound generation
- 📝 ~10,000 new lines of documentation across 12 files
- **70 total skills** (100% roadmap complete!)

</details>

<details>
<summary><b>November 25, 2025 - v0.9.0</b></summary>

- 🚀 Added 2 infrastructure skills: Modal, SkyPilot
- ☁️ Modal skill: Serverless GPU cloud with Python-native API, T4-H200 on-demand, auto-scaling
- 🌐 SkyPilot skill: Multi-cloud orchestration across 20+ providers with spot recovery
- ✨ New Infrastructure category (2 skills - serverless GPU and multi-cloud orchestration)
- 📝 ~2,500 new lines of documentation across 6 files
- **66 total skills** (94% towards 70-skill target)

</details>

<details>
<summary><b>November 25, 2025 - v0.8.0</b></summary>

- 🚀 Added 5 high-priority skills: HQQ, GGUF, Phoenix, AutoGPT, Stable Diffusion
- ⚡ HQQ skill: Half-Quadratic Quantization without calibration data, multi-backend support
- 📦 GGUF skill: llama.cpp quantization format, K-quant methods, CPU/Metal inference
- 👁️ Phoenix skill: Open-source AI observability with OpenTelemetry tracing and LLM evaluation
- 🤖 AutoGPT skill: Autonomous AI agent platform with visual workflow builder
- 🎨 Stable Diffusion skill: Text-to-image generation via Diffusers, SDXL, ControlNet, LoRA
- 📝 ~9,000 new lines of documentation across 15 files
- **64 total skills** (91% towards 70-skill target)

</details>

<details>
<summary><b>November 25, 2025 - v0.7.0</b></summary>

- 🚀 Added 5 high-priority skills: PEFT, CrewAI, Qdrant, AWQ, LangSmith
- ✨ New Observability category with LangSmith for LLM tracing and evaluation
- 🎯 PEFT skill: Parameter-efficient fine-tuning with LoRA, QLoRA, DoRA, 25+ methods
- 🤖 CrewAI skill: Multi-agent orchestration with role-based collaboration
- 🔍 Qdrant skill: High-performance Rust vector search with hybrid filtering
- ⚡ AWQ skill: Activation-aware 4-bit quantization with minimal accuracy loss
- 📝 ~8,000 new lines of documentation across 15 files
- **59 total skills** (84% towards 70-skill target)

</details>

<details>
<summary><b>November 15, 2025 - v0.6.0</b></summary>

- 📊 Added 3 comprehensive MLOps skills: Weights & Biases, MLflow, TensorBoard
- ✨ New MLOps category (3 skills - experiment tracking, model registry, visualization)
- 📝 ~10,000 new lines of documentation across 13 files
- 🔧 Comprehensive coverage: experiment tracking, hyperparameter sweeps, model registry, profiling, embeddings visualization
- **54 total skills** (77% towards 70-skill target)

</details>

<details>
<summary><b>November 12, 2025 - v0.5.0</b></summary>

- 🎯 Added 4 comprehensive prompt engineering skills: DSPy, Instructor, Guidance, Outlines
- ✨ New Prompt Engineering category (4 skills - DSPy, Instructor, Guidance, Outlines)
- 📝 ~10,000 new lines of documentation across 16 files
- 🔧 Comprehensive coverage: declarative programming, structured outputs, constrained generation, FSM-based generation
- **47 total skills** (67% towards 70-skill target)

</details>

<details>
<summary><b>November 9, 2025 - v0.4.0</b></summary>

- 🤖 Added 11 comprehensive skills: LangChain, LlamaIndex, Chroma, FAISS, Sentence Transformers, Pinecone, CLIP, Whisper, LLaVA
- ✨ New Agents category (2 skills - LangChain, LlamaIndex)
- 🔍 New RAG category (4 skills - Chroma, FAISS, Sentence Transformers, Pinecone)
- 🎨 New Multimodal category (3 skills - CLIP, Whisper, LLaVA)
- 📝 ~15,000 new lines of documentation
- **43 total skills** (61% towards 70-skill target)

</details>

<details>
<summary><b>November 8, 2025 - v0.3.0</b></summary>

- 🚀 Added 8 comprehensive skills: TensorRT-LLM, llama.cpp, SGLang, GPTQ, HuggingFace Tokenizers, SentencePiece, Ray Data, NeMo Curator
- ⚡ Completed Inference & Serving category (4/4 skills)
- 🔤 New Tokenization category (2 skills)
- 📊 New Data Processing category (2 skills)
- 📝 9,617 new lines of documentation across 30 files
- **32 total skills** (45% towards 70-skill target)

</details>

<details>
<summary><b>November 6, 2025 - v0.2.0</b></summary>

- Added 10 skills from GitHub (Megatron-Core, Lightning, Ray Train, etc.)
- Improved skill structure with comprehensive references
- Created strategic roadmap to 70 skills
- Added contribution guidelines

</details>

<details>
<summary><b>November 3, 2025 - v0.1.0</b></summary>

- 🎉 Initial release with 5 fine-tuning skills

</details>

## Community

Join our community to stay updated, ask questions, and connect with other AI researchers:

- **[SkillEvolve Meta-Skill](https://github.com/Skill-Evolve/meta-skill)** - Connect your agent to the collective intelligence of the community. Captures techniques discovered during sessions and shares them back as curated skills.
- **[Slack Community](https://join.slack.com/t/orchestrarese-efu1990/shared_invite/zt-3iu6gr8io-zJvpkZTPToEviQ9KFZvNSg)** - Chat with the team and other users
- **[Twitter/X](https://x.com/orch_research)** - Follow for updates and announcements
- **[LinkedIn](https://www.linkedin.com/company/orchestra-research/)** - Connect professionally

## Star History

<a href="https://star-history.com/#orchestra-research/AI-research-SKILLs&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=orchestra-research/AI-research-SKILLs&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=orchestra-research/AI-research-SKILLs&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=orchestra-research/AI-research-SKILLs&type=Date" />
 </picture>
</a>
