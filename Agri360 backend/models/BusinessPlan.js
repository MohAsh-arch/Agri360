import mongoose from "mongoose";

const businessPlanSchema = new mongoose.Schema(
  {
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    farm: { type: mongoose.Schema.Types.ObjectId, ref: "Farm" },
    crop: String,
    investmentCost: Number,
    expectedRevenue: Number,
    aiAdvice: mongoose.Schema.Types.Mixed,
    profitMargin: Number,
    timeline: mongoose.Schema.Types.Mixed,
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("BusinessPlan", businessPlanSchema);
