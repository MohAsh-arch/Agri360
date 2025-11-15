import aiService from "../services/aiService.js";
import { t } from "../utils/translator.js";

export const chat = async (req, res) => {
  try {
    const { message, mode } = req.body;
    const lang = req.lang || req.body.lang || "en";

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    const reply = await aiService.chat(message, mode || "chat", lang);

    res.json({ reply, message: "Chat response received" });
  } catch (err) {
    console.error("Chat Error:", err.message || err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

export default { chat };
