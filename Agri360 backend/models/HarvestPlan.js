import mongoose from "mongoose";

const harvestPlanSchema = new mongoose.Schema(
  {
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    farm: { type: mongoose.Schema.Types.ObjectId, ref: "Farm" },
    crop: String,
    plantingDate: Date,
    harvestDate: Date,
    irrigationSchedule: mongoose.Schema.Types.Mixed,
    fertilizerSchedule: mongoose.Schema.Types.Mixed,
    expectedYield: Number,
    aiNotes: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

export default mongoose.model("HarvestPlan", harvestPlanSchema);
