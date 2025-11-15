import ai from "../ai/aiService.js";

export const generateBusinessPlan = async (context, lang = "en") => {
  return await ai.generateBusinessPlan(context, lang);
};

export const chat = async (message, mode = "chat", lang = "en") => {
  return await ai.chat(message, mode, lang);
};

export const planCrops = async (context, lang = "en") => {
  return await ai.planCrops(context, lang);
};

export default { generateBusinessPlan, chat, planCrops };
