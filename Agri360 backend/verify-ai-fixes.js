#!/usr/bin/env node

/**
 * Verification Script for AI Services Fixes
 * Run: node verify-ai-fixes.js
 */

import fs from "fs";
import path from "path";

const checks = [];

function verify(name, condition, details = "") {
  checks.push({ name, passed: condition, details });
  const icon = condition ? "✅" : "❌";
  console.log(`${icon} ${name}${details ? " - " + details : ""}`);
}

console.log("🔍 Verifying AI Services Fixes...\n");

// 1. Check businessPlan controller
try {
  const content = fs.readFileSync(
    path.join(process.cwd(), "controllers/businessPlan.controller.js"),
    "utf8"
  );
  verify(
    "businessPlan.controller.js - uses createBusinessPlan()",
    content.includes("service.createBusinessPlan(data, lang)"),
    "Line 9"
  );
  verify(
    "businessPlan.controller.js - passes lang parameter",
    content.includes("const lang = req.lang"),
    "Line 7"
  );
} catch (e) {
  verify("businessPlan.controller.js - readable", false, e.message);
}

// 2. Check chat controller
try {
  const content = fs.readFileSync(
    path.join(process.cwd(), "controllers/chat.controller.js"),
    "utf8"
  );
  verify(
    "chat.controller.js - imports from services",
    content.includes('import aiService from "../services/aiService.js"'),
    "Line 1"
  );
  verify(
    "chat.controller.js - no double parsing",
    !content.includes("resp.choices[0].message.content"),
    "Removed duplicate extraction"
  );
  verify(
    "chat.controller.js - passes lang to service",
    content.includes('aiService.chat(message, mode || "chat", lang)'),
    "Line 13"
  );
} catch (e) {
  verify("chat.controller.js - readable", false, e.message);
}

// 3. Check businessPlan service
try {
  const content = fs.readFileSync(
    path.join(process.cwd(), "services/businessPlan.service.js"),
    "utf8"
  );
  verify(
    "businessPlan.service.js - has lang parameter",
    content.includes("export const createBusinessPlan = async (data, lang"),
    "Line 11"
  );
  verify(
    "businessPlan.service.js - passes lang to AI",
    content.includes("aiService.generateBusinessPlan(aiContext, lang)"),
    "Line 46"
  );
  verify(
    "businessPlan.service.js - has JSON parsing logic",
    content.includes("JSON.parse(aiResult)"),
    "Error handling for string responses"
  );
} catch (e) {
  verify("businessPlan.service.js - readable", false, e.message);
}

// 4. Check aiService wrapper
try {
  const content = fs.readFileSync(
    path.join(process.cwd(), "services/aiService.js"),
    "utf8"
  );
  verify(
    "aiService wrapper - generateBusinessPlan has lang",
    content.includes(
      "export const generateBusinessPlan = async (context, lang"
    ),
    "Line 3"
  );
  verify(
    "aiService wrapper - chat has lang",
    content.includes('export const chat = async (message, mode = "chat", lang'),
    "Line 6"
  );
  verify(
    "aiService wrapper - planCrops has lang",
    content.includes("export const planCrops = async (context, lang"),
    "Line 9"
  );
} catch (e) {
  verify("aiService wrapper - readable", false, e.message);
}

// 5. Check AI service implementation
try {
  const content = fs.readFileSync(
    path.join(process.cwd(), "ai/aiService.js"),
    "utf8"
  );
  verify(
    "ai/aiService.js - uses aiClient not client",
    !content.includes("await client.call") &&
      content.includes("await aiClient.call"),
    "All references fixed"
  );
  verify(
    "ai/aiService.js - has logging in generateBusinessPlan",
    content.includes('console.log("generateBusinessPlan AI response:'),
    "Debug logging added"
  );
  verify(
    "ai/aiService.js - has logging in chat",
    content.includes('console.log("chat AI response:'),
    "Debug logging added"
  );
  verify(
    "ai/aiService.js - language support in generateBusinessPlan",
    content.includes("Respond in Arabic"),
    "Arabic prefix support"
  );
} catch (e) {
  verify("ai/aiService.js - readable", false, e.message);
}

// 6. Check environment
try {
  const envContent = fs.readFileSync(path.join(process.cwd(), ".env"), "utf8");
  verify(
    ".env - has AI_API_KEY",
    envContent.includes("AI_API_KEY="),
    "Line 41"
  );
  verify(
    ".env - AI_API_KEY is configured",
    envContent.includes("AI_API_KEY=") && !envContent.match(/AI_API_KEY=\s*$/m),
    "Not empty"
  );
} catch (e) {
  verify(".env - readable", false, e.message);
}

// Summary
console.log("\n" + "=".repeat(50));
const passed = checks.filter((c) => c.passed).length;
const total = checks.length;
console.log(`\nResults: ${passed}/${total} checks passed`);

if (passed === total) {
  console.log(
    "✅ All AI service fixes are correctly applied! You can now test the endpoints."
  );
  process.exit(0);
} else {
  console.log(
    `\n⚠️  ${total - passed} checks failed. Review the output above.`
  );
  process.exit(1);
}
