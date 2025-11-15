import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    listing: { type: mongoose.Schema.Types.ObjectId, ref: "MarketListing" },
    quantity: Number,
    totalPrice: Number,
    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "completed", "cancelled"],
      default: "pending",
    },
    paymentRef: String,
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
