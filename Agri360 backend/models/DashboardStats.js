import mongoose from "mongoose";

const dashboardStatsSchema = new mongoose.Schema(
  {
    date: { type: Date, default: Date.now },
    cropPriceTrends: mongoose.Schema.Types.Mixed,
    waterUsageTrends: mongoose.Schema.Types.Mixed,
    fertilizerRecommendations: mongoose.Schema.Types.Mixed,
    currencyImpact: mongoose.Schema.Types.Mixed,
    oilImpact: mongoose.Schema.Types.Mixed,
    newsImpact: mongoose.Schema.Types.Mixed,
    weatherImpact: mongoose.Schema.Types.Mixed,
    riskScore: Number,
    alerts: [String],
  },
  { timestamps: true }
);

export default mongoose.model("DashboardStats", dashboardStatsSchema);
