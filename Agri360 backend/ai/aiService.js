import aiClient from "./aiClient.js";
import fs from "fs";
import path from "path";

const AI_MODEL_REASONING = "deepseek";
const AI_MODEL_DEFAULT = "qwen";

export const generateBusinessPlan = async (context, lang = "en") => {
  try {
    let prompt =
      fs.readFileSync(
        path.join(process.cwd(), "ai/prompts/business_plan.txt"),
        "utf8"
      ) +
      "\n" +
      JSON.stringify(context);
    if (lang && lang.startsWith("ar")) {
      prompt = "Respond in Arabic. " + prompt;
    }
    // Use reasoning model for planning
    const data = await aiClient.callDeepSeek(prompt, { temperature: 0.2 });
    console.log(
      "generateBusinessPlan AI response:",
      JSON.stringify(data).substring(0, 200)
    );
    // Extract text from API response
    if (data && data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content;
    }
    console.warn("generateBusinessPlan: Unexpected response format:", data);
    return data;
  } catch (err) {
    console.error("generateBusinessPlan error:", err.message || err);
    throw err;
  }
};

export const chat = async (message, mode = "chat", lang = "en") => {
  try {
    let prompt =
      fs.readFileSync(
        path.join(process.cwd(), "ai/prompts/chat_agent.txt"),
        "utf8"
      ) +
      "\n" +
      message;
    if (lang && lang.startsWith("ar")) {
      prompt = "Respond in Arabic. " + prompt;
    }
    let data;
    if (mode === "plan" || mode === "planning") {
      data = await aiClient.callDeepSeek(prompt);
    } else {
      data = await aiClient.callQwen(prompt);
    }
    console.log("chat AI response:", JSON.stringify(data).substring(0, 200));
    // Extract text from API response
    if (data && data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content;
    }
    console.warn("chat: Unexpected response format:", data);
    return data;
  } catch (err) {
    console.error("chat error:", err.message || err);
    throw err;
  }
};

export const planCrops = async (context, lang = "en") => {
  try {
    let prompt =
      fs.readFileSync(
        path.join(process.cwd(), "ai/prompts/crop_planning.txt"),
        "utf8"
      ) +
      "\n" +
      JSON.stringify(context);
    if (lang && lang.startsWith("ar")) {
      prompt = "Respond in Arabic. " + prompt;
    }
    const data = await aiClient.callDeepSeek(prompt, { temperature: 0.2 });
    // Extract text from API response
    if (data && data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content;
    }
    return data;
  } catch (err) {
    console.error("planCrops error:", err.message || err);
    throw err;
  }
};

// allow tests to swap the underlying client
let client = aiClient;
export const __setAiClient = (c) => {
  client = c;
};

export default { generateBusinessPlan, chat, planCrops, __setAiClient };
