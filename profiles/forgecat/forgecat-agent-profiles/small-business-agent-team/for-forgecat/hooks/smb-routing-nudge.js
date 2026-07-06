#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function readInput() {
  try {
    const raw = fs.readFileSync(0, "utf8").trim();
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function textFrom(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(textFrom).join("\n");
  if (typeof value === "object") {
    if (typeof value.text === "string") return value.text;
    if (typeof value.content === "string") return value.content;
    return Object.values(value).map(textFrom).join("\n");
  }
  return "";
}

function promptText(input) {
  return [
    input.prompt,
    input.user_prompt,
    input.message,
    input.tool_input && input.tool_input.prompt,
  ].map(textFrom).join("\n").trim();
}

function workspaceRoot(input) {
  return input.cwd || process.env.CLAUDE_PROJECT_DIR || process.env.PWD || process.cwd();
}

function hasBusinessProfile(root) {
  return fs.existsSync(path.join(root, "docs/business-profile.md"));
}

const routes = [
  {
    agent: "smb-finance-agent",
    label: "finance",
    pattern: /\b(cash|cashflow|cash flow|payroll|invoice|invoices|overdue|margin|margins|pricing|price|month[- ]?end|close the month|tax|1099|bookkeep|accountant|quickbooks|runway)\b/i,
  },
  {
    agent: "smb-growth-agent",
    label: "growth",
    pattern: /\b(lead|leads|sales|pipeline|crm|hubspot|campaign|content|post|posts|marketing|canva|call list|follow[- ]?up|customers to call|promote)\b/i,
  },
  {
    agent: "smb-customer-ops-agent",
    label: "customer operations",
    pattern: /\b(customer|complaint|refund|support|ticket|review|dispute|response|reply|angry|order|sentiment|paypal dispute)\b/i,
  },
  {
    agent: "smb-people-legal-agent",
    label: "people/legal",
    pattern: /\b(hire|hiring|job post|job description|interview|offer letter|employee|contract|nda|msa|vendor agreement|docusign|redline|legal|hr)\b/i,
  },
  {
    agent: "smb-chief-of-staff",
    label: "chief-of-staff",
    pattern: /\b(help me with my business|what should i focus|catch me up|weekly check[- ]?in|monday brief|friday brief|set me up|get started|what can you do|run my business|priorit)/i,
  },
];

function chooseRoute(prompt) {
  const matches = routes.filter((route) => route.pattern.test(prompt));
  if (matches.length === 0) return null;
  if (matches.length > 1) {
    return {
      agent: "smb-chief-of-staff",
      label: "mixed",
      mixed: matches.map((match) => match.agent),
    };
  }
  return matches[0];
}

function emitContext(message) {
  const payload = {
    continue: true,
    priority: "IMPORTANT",
    message,
    hookSpecificOutput: {
      hookEventName: "UserPromptSubmit",
      additionalContext: message,
    },
  };
  process.stdout.write(`${JSON.stringify(payload)}\n`);
}

const input = readInput();
const prompt = promptText(input);
if (!prompt) process.exit(0);

const route = chooseRoute(prompt);
if (!route) process.exit(0);

const root = workspaceRoot(input);
const profileState = hasBusinessProfile(root)
  ? "A business profile exists; the selected agent should read `docs/business-profile.md` before working."
  : "No `docs/business-profile.md` exists; broad or first-session work should start onboarding through `smb-chief-of-staff`.";

const mixed = route.mixed ? ` Matched multiple departments (${route.mixed.join(", ")}), so coordinate through chief-of-staff first.` : "";
const message =
  `Small Business Agent Team routing hook: classify this as ${route.label} work and hand off to ` +
  `\`${route.agent}\` before doing department work from the root context.${mixed}\n\n` +
  `Claude Code: call the Task/Agent tool with \`subagent_type: "${route.agent}"\`. ` +
  `Cursor/Codex: use the nearest native agent handoff; if unavailable, state that limitation and follow the selected agent instructions exactly.\n\n` +
  `${profileState}`;

emitContext(message);

