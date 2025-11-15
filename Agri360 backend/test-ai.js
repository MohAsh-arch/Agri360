import dotenv from "dotenv";
import aiClient from "./ai/aiClient.js";
import aiService from "./ai/aiService.js";

dotenv.config();

console.log("Testing AI Services...\n");
console.log("AI_API_KEY configured:", !!process.env.AI_API_KEY);
console.log("AI_BASE_URL:", process.env.AI_BASE_URL || "(using default)");
console.log(
  "AI_MODEL_REASONING:",
  process.env.AI_MODEL_REASONING || "(using default)"
);
console.log(
  "AI_MODEL_DEFAULT:",
  process.env.AI_MODEL_DEFAULT || "(using default)"
);

// Test 1: Direct client call
console.log("\n--- Test 1: Direct aiClient.callQwen ---");
try {
  const result = await aiClient.callQwen("Say hello");
  console.log("✅ Success:", JSON.stringify(result).substring(0, 200));
} catch (err) {
  console.error("❌ Error:", err.message);
}

// Test 2: AI Service chat
console.log("\n--- Test 2: aiService.chat ---");
try {
  const result = await aiService.chat("What is agriculture?", "chat", "en");
  console.log("✅ Success:", result.substring(0, 200));
} catch (err) {
  console.error("❌ Error:", err.message);
}

// Test 3: Business Plan
console.log("\n--- Test 3: aiService.generateBusinessPlan ---");
try {
  const result = await aiService.generateBusinessPlan(
    {
      crop: "wheat",
      fieldSizeHectares: 10,
      location: "Egypt",
    },
    "en"
  );
  console.log("✅ Success:", result.substring(0, 200));
} catch (err) {
  console.error("❌ Error:", err.message);
}

console.log("\n--- Tests Complete ---");
