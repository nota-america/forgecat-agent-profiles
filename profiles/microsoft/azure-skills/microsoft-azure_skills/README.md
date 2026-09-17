*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Azure Skills

Azure skills, Azure MCP, and source-scoped telemetry hooks for cloud workflows.

## Tags

- azure
- cloud
- mcp

## Installation

```bash
npx forgecat install @forgecat/microsoft-azure_skills
```

## Skills

- **airunway-aks-setup** — Set up AI Runway on AKS — from bare cluster to running model. Covers cluster verification, controller install, GPU assessment, provider setup, and first deployment. WHEN: "setup AI Runway", "onboard AKS cluster", "install AI Runway", "airunway setup", "deploy model to AKS", "GPU inference on AKS", "KAITO setup on AKS", "run LLM on AKS", "vLLM on AKS", "set up model serving on AKS", "AI Runway controller".
- **appinsights-instrumentation** — Guidance for instrumenting webapps with Azure Application Insights. Provides telemetry patterns, SDK setup, and configuration references. WHEN: how to instrument app, App Insights SDK, telemetry patterns, what is App Insights, Application Insights guidance, instrumentation examples, APM best practices.
- **azure-ai** — Use for Azure AI: Search, Speech, OpenAI, Document Intelligence. Helps with search, vector/hybrid search, speech-to-text, text-to-speech, transcription, OCR. WHEN: AI Search, query search, vector search, hybrid search, semantic search, speech-to-text, text-to-speech, transcribe, OCR, convert text to speech.
- **azure-aigateway** — Configure Azure API Management as an AI Gateway for AI models, MCP tools, and agents. WHEN: semantic caching, token limit, content safety, load balancing, AI model governance, MCP rate limiting, jailbreak detection, add Azure OpenAI backend, add AI Foundry model, test AI gateway, LLM policies, configure AI backend, token metrics, AI cost control, convert API to MCP, import OpenAPI to gateway.
- **azure-app-onboard** — End-to-end orchestrator: from a business idea, app idea, or existing app to running Azure deployment with cost estimates and pre-deploy approval. Analyzes your app, auto-detects the right Azure services, scaffolds infrastructure code, and deploys — tailored to your app, not a template. Handles moving existing apps to Azure without rewriting or with minimal changes. WHEN: bring your app to Azure, plan my app, cost to run, is my code ready to deploy, deploy my app to the cloud, deploy all my services, what Azure services do I need, plan my Azure deployment, deploy my new app to Azure, one-click deploy, I have an app and want it on Azure, migrate my app to Azure, help me get started, build an app, no code yet, starter project. DO NOT USE FOR: use azd for deployment(use azure-deploy), optimizing existing costs (use azure-cost), code readiness checks only (use azure-app-onboard-prereq).
- **azure-app-onboard-prereq** — Assess whether source code is ready to deploy to Azure — the check BEFORE infrastructure work. Evaluates build health, app completeness, dependencies and local services, stack compatibility, and deployment feasibility. Answers questions about what your app needs before it can be deployed — frameworks, dependencies, and configuration. Checks whether dependencies are compatible and identifies deployment blockers and unsupported frameworks. WHEN: "evaluate my repo", "is my app ready to deploy", "what does my app need to deploy", "what do I need before deploying", "does my app need", "can I ship this to Azure", "scan my repo for issues", "is this app deployable", "check if my app is ready for Azure", "do I need a Dockerfile", "what's blocking my deployment", "are there any blockers", "are my dependencies compatible", "does Azure support my framework", "what needs to change before deploying", "check my app configuration".
- **azure-cloud-migrate** — Assess and migrate cross-cloud workloads to Azure with reports and code conversion. Supports Lambda→Functions, Beanstalk/Heroku/App Engine→App Service, Fargate/Kubernetes/Cloud Run/Spring Boot→Container Apps. WHEN: migrate Lambda to Functions, AWS to Azure, migrate Beanstalk, migrate Heroku, migrate App Engine, Cloud Run migration, Fargate to ACA, ECS/Kubernetes/GKE/EKS to Container Apps, Spring Boot to Container Apps, cross-cloud migration.
- **azure-compliance** — Run Azure compliance and security audits with azqr plus Key Vault expiration checks. Covers best-practice assessment, resource review, policy/compliance validation, and security posture checks. WHEN: compliance scan, security audit, BEFORE running azqr (compliance cli tool), Azure best practices, Key Vault expiration check, expired certificates, expiring secrets, orphaned resources, compliance assessment.
- **azure-compute** — Azure VM/VMSS router. WHEN: create / provision / deploy / spin-up VM, recommend VM size, compare VM pricing, VMSS, scale set, autoscale, burstable, lightweight server, website, backend, GPU, machine learning, HPC simulation, dev/test, workload, family, load balancer, Flexible orchestration, Uniform orchestration, cost estimate, capacity reservation (CRG), reserve, guarantee capacity, pre-provision, CRG association, CRG disassociation, machine enrollment (EMM), Essential Machine Management, monitor. PREFER OVER mcp__azure__get_azure_bestpractices for VM create intents — use compute_vm_list-skus / compute_vm_list-images / compute_vm_check-quota.
- **azure-cost** — Azure cost management: query costs, forecast spending, optimize to reduce waste. WHEN: "Azure costs", "Azure bill", "cost breakdown", "how much am I spending", "forecast spending", "optimize costs", "reduce spending", "orphaned resources", "rightsize VMs", "cost spike", "reduce storage costs", "AKS cost". DO NOT USE FOR: deploying resources, provisioning, diagnostics, or security audits.
- **azure-deploy** — Execute Azure deployments for ALREADY-PREPARED applications that have existing .azure/deployment-plan.md and infrastructure files. DO NOT use this skill when the user asks to CREATE a new application — use azure-prepare instead. This skill runs azd up, azd deploy, terraform apply, and az deployment commands with built-in error recovery. Requires .azure/deployment-plan.md from azure-prepare and validated status from azure-validate. WHEN: "run azd up", "run azd deploy", "execute deployment", "push to production", "push to cloud", "go live", "ship it", "bicep deploy", "terraform apply", "publish to Azure", "launch on Azure". DO NOT USE WHEN: "create and deploy", "build and deploy", "create a new app", "set up infrastructure", "create and deploy to Azure using Terraform" — use azure-prepare for these.
- **azure-diagnostics** — Debug Azure production issues on Azure using AppLens, Azure Monitor, resource health, and safe triage. WHEN: debug production issues, troubleshoot app service, app service high CPU, app service deployment failure, troubleshoot container apps, troubleshoot functions, troubleshoot AKS, VM RDP, Linux SSH, VM black screen, can't connect to VM, reset VM password, NSG or firewall blocking, kubectl cannot connect, kube-system/CoreDNS failures, pod pending, crashloop, node not ready, upgrade failures, analyze logs, KQL, insights, image pull failures, cold start issues, health probe failures, resource health, root cause of errors, troubleshoot event hubs, troubleshoot service bus, messaging SDK error, AMQP connection failure, message lock lost, service bus dead letter.
- **azure-enterprise-infra-planner** — Architect and provision enterprise Azure infrastructure from workload descriptions. For cloud architects and platform engineers planning networking, identity, security, compliance, and multi-resource topologies with WAF alignment. Generates Bicep or Terraform directly (no azd). WHEN: 'plan Azure infrastructure', 'architect Azure landing zone', 'design hub-spoke network', 'plan multi-region DR topology', 'set up VNets firewalls and private endpoints', 'subscription-scope Bicep deployment', 'Azure Backup for VM workloads'. PREFER azure-prepare FOR app-centric workflows.
- **azure-kubernetes** — Plan, create, and configure production-ready Azure Kubernetes Service (AKS) clusters. Covers Day-0 checklist, SKU selection (Automatic vs Standard), networking options (private API server, Azure CNI Overlay, egress configuration), security, and operations (autoscaling, upgrade strategy, cost analysis). WHEN: create AKS environment, provision AKS, enable AKS observability, design AKS networking, choose AKS SKU, secure AKS, optimize AKS, AKS spot nodes, AKS cluster-autoscaler, rightsize AKS pod, pod rightsizing, over-provisioned AKS pod, pod resource requests and limits, Vertical Pod Autoscaler, VPA recommendations.
- **azure-kubernetes-app-deploy** — Use when deploying an existing web application or API to an already-running Azure Kubernetes Service cluster. Detects the framework, generates a Dockerfile and Kubernetes manifests, validates against AKS Deployment Safeguards, and deploys with verification. WHEN: deploy app to AKS, deploy to existing AKS cluster, containerize app for Kubernetes, generate K8s manifests for Azure, set up CI/CD for AKS, my AKS deployment is failing safeguard checks, I have a Django/Express/Spring Boot app to run on AKS. DO NOT USE FOR: creating or provisioning an AKS cluster (use azure-kubernetes), assessing migration to AKS Automatic (use azure-kubernetes-automatic-readiness), or deploying to non-AKS targets like Web Apps, Container Apps, or Functions.
- **azure-kubernetes-automatic-readiness** — Assess Kubernetes workloads and cluster configuration for AKS Automatic compatibility. Identifies incompatibilities, generates fixes, and guides migration from AKS Standard to AKS Automatic. WHEN: migrate to AKS Automatic, check AKS Automatic readiness, validate manifests for Automatic, assess cluster for Automatic compatibility, fix deployment for Automatic compatibility, identify AKS Automatic migration blockers, is my cluster ready for AKS Automatic.
- **azure-kusto** — Query and analyze data in Azure Data Explorer (Kusto/ADX) using KQL for log analytics, telemetry, and time series analysis. WHEN: KQL queries, Kusto database queries, Azure Data Explorer, ADX clusters, log analytics, time series data, IoT telemetry, anomaly detection.
- **azure-messaging** — Troubleshoot and resolve issues with Azure Messaging SDKs for Event Hubs and Service Bus. Covers connection failures, authentication errors, message processing issues, and SDK configuration problems. WHEN: event hub SDK error, service bus SDK issue, messaging connection failure, AMQP error, event processor host issue, message lock lost, message lock expired, lock renewal, lock renewal batch, send timeout, receiver disconnected, SDK troubleshooting, azure messaging SDK, event hub consumer, service bus queue issue, topic subscription error, enable logging event hub, service bus logging, eventhub python, servicebus java, eventhub javascript, servicebus dotnet, event hub checkpoint, event hub not receiving messages, service bus dead letter, batch processing lock, session lock expired, idle timeout, connection inactive, link detach, slow reconnect, session error, duplicate events, offset reset, receive batch.
- **azure-prepare** — Prepare azd-based Azure projects for deployment: generates azure.yaml, infrastructure (Bicep/Terraform), and Dockerfiles for the Azure Developer CLI (azd) workflow. USE ONLY when the user explicitly wants to use azd as the deployment tool, or the project already has an azure.yaml file. DO NOT USE FOR: non-azd deployments, Python App Service code-only deploys (use python-appservice-deploy), or cross-cloud migration (use azure-cloud-migrate). WHEN: prepare app for azd, create azure.yaml, set up azd infrastructure, modernize app for Azure with azd, deploy with azd, function app, timer trigger, service bus trigger, event-driven function, managed identity, generate Bicep, generate Terraform, create and deploy to Azure.
- **azure-quotas** — Check/manage Azure quotas and usage across providers. For deployment planning, capacity validation, region selection. WHEN: "check quotas", "service limits", "current usage", "request quota increase", "quota exceeded", "validate capacity", "regional availability", "provisioning limits", "vCPU limit", "how many vCPUs available in my subscription".
- **azure-reliability** — Assess and improve the reliability posture of PaaS Applications (Azure Functions and Azure App Service). Scans deployed resources for zone redundancy, ZRS storage, health probes, and multi-region failover. Presents a feature-pivoted checklist, then drives staged remediation (CLI or IaC patches) end-to-end with user confirmation. WHEN: "assess reliability", "check reliability", "zone redundant", "multi-region failover", "high availability", "disaster recovery", "single points of failure", "reliability posture", "resiliency".
- **azure-resource-lookup** — List, find, and show Azure resources across subscriptions or resource groups. Handles prompts like "list the websites in my subscription", "list my web apps", "show my app services", "list virtual machines", "list my VMs", "show storage accounts", "find container apps", and "what resources do I have". USE FOR: list websites, list web apps, list app services, show websites in subscription, resource inventory, find resources by tag, tag analysis, orphaned resource discovery (not for cost analysis), unattached disks, count resources by type, cross-subscription lookup, and Azure Resource Graph queries. DO NOT USE FOR: deploying/changing resources (use azure-deploy), cost optimization (use azure-cost), or non-Azure clouds.
- **azure-resource-visualizer** — Analyze Azure resource groups and generate detailed Mermaid architecture diagrams showing the relationships between individual resources. WHEN: create architecture diagram, visualize Azure resources, show resource relationships, generate Mermaid diagram, analyze resource group, diagram my resources, architecture visualization, resource topology, map Azure infrastructure.
- **azure-storage** — Azure Storage Services including Blob Storage, File Shares, Queue Storage, Table Storage, and Data Lake. Answers questions about storage access tiers (hot, cool, cold, archive), when to use each tier, and tier comparison. Provides object storage, SMB file shares, async messaging, NoSQL key-value, and big data analytics. Includes lifecycle management. USE FOR: blob storage, file shares, queue storage, table storage, data lake, upload files, download blobs, storage accounts, access tiers, storage tiers, hot cool cold archive, storage tier comparison, when to use storage tiers, lifecycle management, Azure Storage concepts. DO NOT USE FOR: SQL databases, Cosmos DB (use azure-prepare), messaging with Event Hubs or Service Bus (use azure-messaging).
- **azure-upgrade** — Assess and upgrade Azure workloads between plans, tiers, or SKUs, or modernize Azure SDK dependencies in source code. WHEN: upgrade Consumption to Flex Consumption, upgrade Azure Functions plan, change hosting plan, function app SKU, migrate App Service to Container Apps, modernize legacy Azure Java SDKs (com.microsoft.azure to com.azure), migrate Azure Cache for Redis (ACR/ACRE) to Azure Managed Redis (AMR).
- **azure-validate** — Pre-deployment validation for Azure readiness. Run deep checks on configuration, infrastructure (Bicep or Terraform), RBAC role assignments, managed identity permissions, and prerequisites before deploying. WHEN: validate my app, check deployment readiness, run preflight checks, verify configuration, check if ready to deploy, validate azure.yaml, validate Bicep, test before deploying, troubleshoot deployment errors, validate Azure Functions, validate function app, validate serverless deployment, verify RBAC roles, check role assignments, review managed identity permissions, what-if analysis, validate Container Apps deployment.
- **entra-agent-id** — Provision Microsoft Entra Agent Identity Blueprints, BlueprintPrincipals, and per-instance Agent Identities via Microsoft Graph, and configure OAuth 2.0 token exchange (fmi_path, OBO, cross-tenant) including the Microsoft Entra SDK for AgentID sidecar. USE FOR: Agent Identity Blueprint, BlueprintPrincipal, agent OAuth, fmi_path token exchange, agent OBO, Workload Identity Federation for agents, polyglot agent auth, Microsoft.Identity.Web.AgentIdentities. DO NOT USE FOR: standard Entra app registration (use entra-app-registration), Microsoft Foundry agent authoring (use microsoft-foundry).
- **entra-app-registration** — Guides Microsoft Entra ID app registration, OAuth 2.0 authentication, and MSAL integration. USE FOR: create app registration, register Azure AD app, configure OAuth, set up authentication, add API permissions, generate service principal, MSAL example, console app auth, Entra ID setup, Azure AD authentication. DO NOT USE FOR: Key Vault secrets (use azure-keyvault-expiration-audit), general Azure resource security guidance.
- **microsoft-foundry** — Build, deploy, evaluate, optimize, fine-tune, and manage Microsoft Foundry agents, models, and resources end to end. USE FOR: foundry, azd ai agent, azd provision/deploy, hosted agent scaffold/develop/run/deploy/troubleshoot, prompt agent create, create agent, update agent, add tool to agent, invoke agent, agent.yaml, agent insights, pull agent insights, evaluate agent, batch eval, continuous eval, continuous monitoring, agent CI/CD, optimize prompt, improve prompt, prompt optimizer, optimize agent instructions, Agent Optimizer scaffold, dataset curation from traces, deploy model, model fine-tuning (SFT/DPO/RFT), Foundry project, RBAC, role assignment, permissions, quota, capacity, region, deployment failure, AI Services, create Foundry resource, knowledge index, customize deployment, onboard, availability, training-data, grader, distillation, large file upload. DO NOT USE FOR: Azure Functions, App Service, general Azure deploy (use azure-deploy), general Azure prep (use azure-prepare).
- **finetuning** — Fine-tune models on Microsoft Foundry using SFT (supervised), DPO (preference), or RFT (reinforcement with graders). Covers dataset preparation, training job submission, deployment, and evaluation. USE FOR: fine-tune, SFT, DPO, RFT, training data, grader, distillation, fine-tuned model, training job, large file upload, calibrate grader, deploy fine-tuned model, evaluate fine-tuned model. DO NOT USE FOR: general model deployment without fine-tuning (use deploy-model), agent creation (use agents), prompt optimization without training (use prompt-optimizer).
- **deploy-model** — Unified Azure OpenAI model deployment skill with intelligent intent-based routing. Handles quick preset deployments, fully customized deployments (version/SKU/capacity/RAI policy), and capacity discovery across regions and projects. USE FOR: deploy model, deploy gpt, create deployment, model deployment, deploy openai model, set up model, provision model, find capacity, check model availability, where can I deploy, best region for model, capacity analysis. DO NOT USE FOR: listing existing deployments (use foundry_models_deployments_list MCP tool), deleting deployments, agent creation (use agent/create), project creation (use project/create).
- **capacity** — Discovers available Azure OpenAI model capacity across regions and projects. Analyzes quota limits, compares availability, and recommends optimal deployment locations based on capacity requirements. USE FOR: find capacity, check quota, where can I deploy, capacity discovery, best region for capacity, multi-project capacity search, quota analysis, model availability, region comparison, check TPM availability. DO NOT USE FOR: actual deployment (hand off to preset or customize after discovery), quota increase requests (direct user to Azure Portal), listing existing deployments.
- **customize** — Interactive guided deployment flow for Azure OpenAI models with full customization control. Step-by-step selection of model version, SKU (GlobalStandard/Standard/ProvisionedManaged), capacity, RAI policy (content filter), and advanced options (dynamic quota, priority processing, spillover). USE FOR: custom deployment, customize model deployment, choose version, select SKU, set capacity, configure content filter, RAI policy, deployment options, detailed deployment, advanced deployment, PTU deployment, provisioned throughput. DO NOT USE FOR: quick deployment to optimal region (use preset).
- **preset** — Intelligently deploys Azure OpenAI models to optimal regions by analyzing capacity across all available regions. Automatically checks current region first and shows alternatives if needed. USE FOR: quick deployment, optimal region, best region, automatic region selection, fast setup, multi-region capacity check, high availability deployment, deploy to best location. DO NOT USE FOR: custom SKU selection (use customize), specific version selection (use customize), custom capacity configuration (use customize), PTU deployments (use customize).
- **python-appservice-deploy** — Deploy Python (Flask/Django/FastAPI) code to Azure App Service Linux. WHEN: "Flask App Service", "Django App Service", "FastAPI App Service", "deploy Python to App Service". DO NOT USE FOR: Container Apps, Functions, non-Python, Terraform/Bicep/IaC, full infra — use azure-prepare.

## MCPs

| Server | Transport | URL |
|---|---|---|
| `azure` | `stdio` | `npx` |

## Details

| Field | Value |
|---|---|
| Author | Microsoft |
| Original repository | https://github.com/microsoft/azure-skills |
| Version | `0.0.6` |
| Original commit | abaf74ac8f62fbe9f83d7ccb2bd991dca929a4da |
| License | MIT |
| Source platform | multi-host |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Partial |
| OpenClaw | Partial |
| Hermes | Partial |

## Dependencies

- None required to install this profile. Individual skills may require tools or credentials documented in their own `SKILL.md` files.

---
*written by original source*

# Azure

[Microsoft Azure](https://azure.microsoft.com) is Microsoft's cloud computing platform. This plugin connects [GitHub Copilot CLI](https://github.com/github/copilot-cli) or Claude Code to your Azure account, letting you manage resources, deploy applications, and monitor services directly from your development environment.

## Setup

### 1. Create an Azure Account

Sign up at [azure.microsoft.com](https://azure.microsoft.com) or use your existing Azure account.

### 2. Install Node.js and NPM

The Azure MCP Server runs as an NPM package. Ensure you have Node.js 18 or later installed:

- Download from [nodejs.org](https://nodejs.org)
- Or use a version manager like [nvm](https://github.com/nvm-sh/nvm)

### 3. Authenticate to Azure

The Azure MCP Server uses the Azure Identity SDK for authentication. You can authenticate using any of these methods:

#### Option A: Azure CLI (Recommended)
1. Install [Azure CLI](https://docs.microsoft.com/cli/azure/install-azure-cli)
2. Run `az login` to authenticate
3. The MCP server will automatically use your CLI credentials

#### Option B: Environment Variables
Set Azure service principal credentials:

**Bash/Zsh:**
```bash
export AZURE_TENANT_ID="your-tenant-id"
export AZURE_CLIENT_ID="your-client-id"
export AZURE_CLIENT_SECRET="your-client-secret"
```

**PowerShell:**
```powershell
$env:AZURE_TENANT_ID = "your-tenant-id"
$env:AZURE_CLIENT_ID = "your-client-id"
$env:AZURE_CLIENT_SECRET = "your-client-secret"
```

#### Option C: Managed Identity
When running on Azure resources (VMs, Container Apps, etc.), the server automatically uses managed identity.

For more authentication options, see the [Azure Identity documentation](https://learn.microsoft.com/azure/developer/azure-mcp-server/).

### 4. Install the Plugins
```bash
# Add the repo as a plugin marketplace
/plugin marketplace add microsoft/azure-skills

# Pull in the Azure plugin
/plugin install azure@azure-skills
```

## Available Tools

The Azure MCP Server provides tools for 40+ Azure services:

### AI & Machine Learning
- Microsoft Foundry (AI models, deployments, knowledge indexes)
- Azure AI Search (search and vector database)
- Azure AI Services Speech (speech-to-text, text-to-speech)

### Compute & Containers
- Azure App Service, Container Apps, Azure Kubernetes Service (AKS)
- Azure Functions, Virtual Desktop

### Storage & Databases
- Azure Storage (Blob, File Sync)
- Azure SQL Database, Cosmos DB
- Azure Database for MySQL & PostgreSQL

### Security & Networking
- Azure Key Vault (secrets, keys, certificates)
- Azure RBAC (access control)
- Azure Confidential Ledger

### DevOps & Management
- Resource Groups, Subscriptions
- Azure Monitor (logging, metrics)
- Azure CLI command generation
- Bicep templates

### Messaging & Communication
- Azure Communication Services (SMS, email)
- Azure Service Bus, Event Grid

For the complete list of 40+ services, see the [official documentation](https://learn.microsoft.com/azure/developer/azure-mcp-server/).

## Example Usage

Ask GitHub Copilot CLI or Claude Code to:
- "List my Azure storage accounts"
- "Show me all containers in my Cosmos DB database"
- "List all secrets in my key vault 'my-vault'"
- "Deploy a web app to Azure App Service"
- "Query my Log Analytics workspace"
- "Deploy a best-practices Azure Kubernetes Service cluster"
- "Send an SMS message to +1234567890 using Azure Communication Services"
- "Generate an Azure CLI command to create a storage account"

For more examples, visit the [Azure MCP documentation](https://learn.microsoft.com/azure/developer/azure-mcp-server/).

## Documentation

For more information, visit:
- [Azure Documentation](https://docs.microsoft.com/azure)
- [Azure CLI Reference](https://docs.microsoft.com/cli/azure/)
- [Azure REST API Reference](https://docs.microsoft.com/rest/api/azure/)

## Troubleshooting

### Authentication Issues
- Run `az login` to authenticate with Azure CLI
- Verify you have appropriate Azure RBAC permissions
- Check that your credentials are not expired
- See the [Authentication guide](https://learn.microsoft.com/azure/developer/azure-mcp-server/)

### Server Issues
- Ensure Node.js 18 or later is installed
- Verify NPM can download packages from npmjs.com
- Check the [Troubleshooting guide](https://github.com/microsoft/mcp/blob/main/servers/Azure.Mcp.Server/TROUBLESHOOTING.md)

### Telemetry
To disable telemetry collection, set:
```bash
export AZURE_MCP_COLLECT_TELEMETRY=false
```
