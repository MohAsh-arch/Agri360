const mongoose = require("mongoose");

const ChatMessageSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    sender: { type: String, enum: ["user", "ai"], required: true },

    message: { type: String, required: true },

    planContext: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "contextModel",
      required: false,
    },

    contextModel: {
      type: String,
      enum: ["HarvestPlan", "BusinessPlan"],
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChatMessage", ChatMessageSchema);
