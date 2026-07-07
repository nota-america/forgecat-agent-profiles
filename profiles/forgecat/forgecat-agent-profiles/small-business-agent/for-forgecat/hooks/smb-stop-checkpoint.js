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

function workspaceRoot(input) {
  return input.cwd || process.env.CLAUDE_PROJECT_DIR || process.env.PWD || process.cwd();
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

function readTranscriptMessages(transcriptPath) {
  if (!transcriptPath || !fs.existsSync(transcriptPath)) return [];
  const lines = fs.readFileSync(transcriptPath, "utf8").split(/\r?\n/).filter(Boolean);
  const messages = [];
  for (const line of lines) {
    try {
      const entry = JSON.parse(line);
      const role = entry.message && entry.message.role;
      if (!role) continue;
      messages.push({ role, text: textFrom(entry.message.content) });
    } catch {
      // Ignore unknown transcript rows.
    }
  }
  return messages;
}

function lastByRole(messages, role) {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    if (messages[index].role === role && messages[index].text.trim()) {
      return messages[index].text.trim();
    }
  }
  return "";
}

function loadTurnText(input) {
  const directAssistant = textFrom(input.last_assistant_message || input.assistant_message).trim();
  const directUser = textFrom(input.prompt || input.user_prompt || input.last_user_message).trim();
  if (directAssistant || directUser) {
    return { assistant: directAssistant, user: directUser };
  }

  const messages = readTranscriptMessages(input.transcript_path);
  return {
    assistant: lastByRole(messages, "assistant"),
    user: lastByRole(messages, "user"),
  };
}

function statePath(root, input) {
  const sessionId = String(input.session_id || input.conversation_id || "default").replace(/[^a-zA-Z0-9_.-]/g, "_");
  return path.join(root, ".forgecat", "profiles", "@forgecat", "small-business-agent", "state", `stop-checkpoint-${sessionId}.json`);
}

function readState(root, input) {
  try {
    return JSON.parse(fs.readFileSync(statePath(root, input), "utf8"));
  } catch {
    return {};
  }
}

function markBlocked(root, input, kind) {
  const file = statePath(root, input);
  const state = readState(root, input);
  const counts = state.counts && typeof state.counts === "object" ? state.counts : {};
  counts[kind] = (Number(counts[kind]) || 0) + 1;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify({ blockedAt: new Date().toISOString(), counts }, null, 2));
}

function blockCount(root, input, kind) {
  const state = readState(root, input);
  const counts = state.counts && typeof state.counts === "object" ? state.counts : {};
  return Number(counts[kind]) || 0;
}

function looksLikeSmallBusinessWork(text) {
  return /\b(smb-|small business|business profile|business-operating-plan|business-agent-log|payroll|invoice|cash|customer|complaint|refund|lead|crm|campaign|hiring|contract|weekly check[- ]?in|owner|approval queue|operating plan|agent log)\b/i.test(text);
}

function hasCheckpoint(text) {
  return /\b(next step|next decision|owner's next|approval|blocked|blocker|operating plan|agent log|profile update|read-only|no files written|standing by|routed to|subagent|handoff)\b/i.test(text);
}

function isFirstSessionBroadPrompt(text) {
  return /\b(hi|hello|hey|what can you do|help me get started|help me with my business|set me up|get started|i'?m new|what should i focus)\b/i.test(text);
}

function looksLikeCapabilityMenu(text) {
  const categories = ["finance", "growth", "sales", "customer", "people", "legal", "hiring", "briefs"];
  const hitCount = categories.filter((category) => new RegExp(`\\b${category}\\b`, "i").test(text)).length;
  return hitCount >= 3 || /\b(here'?s what i can help|i can help with|what i can do|team of specialists|chief of staff plus|by department|example requests?|try one of these)\b/i.test(text);
}

function hasActualHandoff(text) {
  return /\b(subagent_type|Task tool|called? the Task|delegated to|handed off to|routed to)\b/i.test(text) ||
    /\b(smb-chief-of-staff|smb-finance-agent|smb-growth-agent|smb-customer-ops-agent|smb-people-legal-agent)\b/i.test(text);
}

function looksLikeOnboardingStart(text) {
  return /\?/.test(text) &&
    /\b(business|company|team|tools?|headaches?|challenge|customers?|sell|service|product|industry|cadence)\b/i.test(text) &&
    !looksLikeCapabilityMenu(text);
}

function looksLikeFirstSessionCapabilityAnswer(text) {
  return /\b(first session|first step|onboarding|set up|small business agent|capabilit|what i can do|what's on your plate)\b/i.test(text) &&
    looksLikeCapabilityMenu(text);
}

function emitBlock(reason) {
  const payload = {
    decision: "block",
    reason,
    systemMessage: "Small Business Agent checkpoint required",
  };
  process.stdout.write(`${JSON.stringify(payload)}\n`);
}

function emitNotice(message) {
  const payload = {
    continue: true,
    priority: "INFO",
    message,
    hookSpecificOutput: {
      hookEventName: "Stop",
      additionalContext: message,
    },
  };
  process.stdout.write(`${JSON.stringify(payload)}\n`);
}

const input = readInput();
const root = workspaceRoot(input);
const { assistant, user } = loadTurnText(input);
const turnText = `${user}\n${assistant}`;

if (!assistant) {
  process.exit(0);
}

if ((isFirstSessionBroadPrompt(user) && looksLikeCapabilityMenu(assistant) && !hasActualHandoff(assistant)) || looksLikeFirstSessionCapabilityAnswer(assistant)) {
  const kind = "broad-menu-without-handoff";
  if (blockCount(root, input, kind) < 2) {
    markBlocked(root, input, kind);
    emitBlock(
      "This first-session broad request was answered as a capability menu. Before ending, replace it with agent-led onboarding: use `smb-chief-of-staff` and ask exactly one concise question, \"What kind of business do you run, and what is the one operational headache you want fixed first?\" Do not add another menu, example list, or checkpoint-only response."
    );
  }
  process.exit(0);
}

if (isFirstSessionBroadPrompt(user) && (hasActualHandoff(assistant) || looksLikeOnboardingStart(assistant))) {
  process.exit(0);
}

if (!looksLikeSmallBusinessWork(turnText) || hasCheckpoint(assistant)) {
  process.exit(0);
}

const kind = "missing-checkpoint";
if (blockCount(root, input, kind) >= 1) {
  process.exit(0);
}

markBlocked(root, input, kind);

emitNotice(
  "Small Business checkpoint suggestion: include the selected agent/department, current blocker or safe local result, any approval-gated action, whether `docs/business-profile.md` or `docs/business-operating-plan.md` should be updated, and the single next owner decision. Keep it concise and do not take external action."
);
