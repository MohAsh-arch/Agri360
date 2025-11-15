import mongoose from "mongoose";

const marketListingSchema = new mongoose.Schema(
  {
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    description: String,
    crop: String,
    quantity: Number,
    unit: String,
    pricePerUnit: Number,
    suggestedPrice: Number, // Market price suggestion from Mahsoly
    location: String,
    images: [String],
    status: {
      type: String,
      enum: ["active", "sold", "removed"],
      default: "active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("MarketListing", marketListingSchema);
