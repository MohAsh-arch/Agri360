import axios from "axios";
import fs from "fs";
import path from "path";

// AI client wrapper supporting unified provider (ModelArts / Hunyuan style API)
// Uses AI_BASE_URL, AI_API_KEY, AI_MODEL_DEFAULT, AI_MODEL_REASONING from env

export const callDeepSeek = async (prompt, options = {}) => {
  const baseUrl =
    process.env.AI_BASE_URL || "https://api-ap-southeast-1.modelarts-maas.com";
  const key = process.env.AI_API_KEY;
  const model = process.env.AI_MODEL_REASONING || "deepseek-v3.1";

  if (!key) throw new Error("AI_API_KEY not set");

  const resp = await axios.post(
    `${baseUrl}/v1/chat/completions`,
    { model, messages: [{ role: "user", content: prompt }], ...options },
    {
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
    }
  );
  return resp.data;
};

export const callQwen = async (prompt, options = {}) => {
  const baseUrl =
    process.env.AI_BASE_URL || "https://api-ap-southeast-1.modelarts-maas.com";
  const key = process.env.AI_API_KEY;
  const model = process.env.AI_MODEL_DEFAULT || "qwen3-32b";

  if (!key) throw new Error("AI_API_KEY not set");

  const resp = await axios.post(
    `${baseUrl}/v1/chat/completions`,
    { model, messages: [{ role: "user", content: prompt }], ...options },
    {
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
    }
  );
  return resp.data;
};

export default { callDeepSeek, callQwen };
