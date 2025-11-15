import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["farmer", "user"], default: "farmer" },
    lang: { type: String, enum: ["en", "ar"], default: "en" },
    country: { type: String },
    governorate: { type: String },
    farm: { type: mongoose.Schema.Types.ObjectId, ref: "Farm" },
    farmerProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FarmerProfile",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
