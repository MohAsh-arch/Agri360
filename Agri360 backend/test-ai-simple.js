/**
 * Test AI Service Directly
 * Run: node test-ai-simple.js
 *
 * This tests if the AI API key and endpoint are working
 */

import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

console.log("🧪 Testing AI Service Configuration\n");

const baseUrl =
  process.env.AI_BASE_URL || "https://api-ap-southeast-1.modelarts-maas.com";
const key = process.env.AI_API_KEY;
const model = process.env.AI_MODEL_REASONING || "deepseek-v3.1";

console.log("Configuration:");
console.log("  Base URL:", baseUrl);
console.log("  API Key:", key ? key.substring(0, 10) + "..." : "NOT SET ❌");
console.log("  Model:", model);
console.log("");

if (!key) {
  console.error("❌ ERROR: AI_API_KEY is not set in .env file!");
  console.error("Please set AI_API_KEY in your .env file");
  process.exit(1);
}

console.log("Testing API connection...\n");

try {
  const payload = {
    model: model,
    messages: [
      {
        role: "user",
        content: "Say 'hello' in one word only",
      },
    ],
    temperature: 0.7,
    max_tokens: 10,
  };

  console.log("Request payload:", JSON.stringify(payload, null, 2));
  console.log("\nSending request...");

  const response = await axios.post(`${baseUrl}/v1/chat/completions`, payload, {
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  console.log("\n✅ SUCCESS! API is working!");
  console.log("Response status:", response.status);
  console.log(
    "Response data:",
    JSON.stringify(response.data, null, 2).substring(0, 500)
  );
} catch (err) {
  console.error("\n❌ ERROR: AI API Failed!");
  console.error("Error message:", err.message);

  if (err.response) {
    console.error("Response status:", err.response.status);
    console.error(
      "Response data:",
      JSON.stringify(err.response.data, null, 2).substring(0, 500)
    );
  }

  if (err.code === "ECONNREFUSED") {
    console.error("\n⚠️  Cannot connect to API endpoint. Check:");
    console.error("  1. Is AI_BASE_URL correct?");
    console.error("  2. Is internet connection working?");
    console.error("  3. Is the API service online?");
  }

  if (err.message.includes("401") || err.message.includes("403")) {
    console.error("\n⚠️  Authentication failed. Check:");
    console.error("  1. Is AI_API_KEY correct?");
    console.error("  2. Has the API key expired?");
    console.error("  3. Is the API key valid for this endpoint?");
  }

  if (err.message.includes("400")) {
    console.error("\n⚠️  Bad request. Check:");
    console.error("  1. Is the request format correct?");
    console.error("  2. Is the model name correct?");
    console.error("  3. Check if API requires different parameter format");
  }
}
