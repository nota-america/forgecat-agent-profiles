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

function exists(root, relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function readFirstLines(root, relativePath, maxLines = 12) {
  const fullPath = path.join(root, relativePath);
  try {
    return fs.readFileSync(fullPath, "utf8").split(/\r?\n/).slice(0, maxLines).join("\n").trim();
  } catch {
    return "";
  }
}

function emitContext(eventName, message) {
  const payload = {
    continue: true,
    priority: "INFO",
    message,
    hookSpecificOutput: {
      hookEventName: eventName,
      additionalContext: message,
    },
  };
  process.stdout.write(`${JSON.stringify(payload)}\n`);
}

const input = readInput();
const root = workspaceRoot(input);

const profileExists = exists(root, "docs/business-profile.md");
const planExists = exists(root, "docs/business-operating-plan.md");
const logExists = exists(root, "docs/business-agent-log.md");

const status = [
  profileExists ? "business profile present" : "business profile missing",
  planExists ? "operating plan present" : "operating plan missing",
  logExists ? "agent log present" : "agent log missing",
].join("; ");

let context = `Small Business Agent Team startup: ${status}.`;

if (profileExists) {
  const profilePreview = readFirstLines(root, "docs/business-profile.md");
  if (profilePreview) {
    context += `\n\nCurrent business profile preview:\n${profilePreview}`;
  }
} else {
  context += "\n\nIf the owner asks a broad business question, route to `smb-chief-of-staff` for onboarding before guessing a department workflow.";
}

if (planExists) {
  const planPreview = readFirstLines(root, "docs/business-operating-plan.md", 16);
  if (planPreview) {
    context += `\n\nOperating plan preview:\n${planPreview}`;
  }
}

context += "\n\nUse this context only for routing and continuity. Do not write profile changes without explicit owner approval.";

emitContext("SessionStart", context);

