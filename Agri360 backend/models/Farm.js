import mongoose from "mongoose";

const farmSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String },
    location: {
      lat: Number,
      lon: Number,
      address: String,
    },
    soil: {
      ph: Number,
      nitrogen: Number,
      phosphorus: Number,
      potassium: Number,
      organicMatter: Number,
    },
    water: {
      availableM3: Number,
      source: String,
    },
    fieldSizeHectares: Number,
    cropHistory: [{ crop: String, year: Number, yield: Number }],
  },
  { timestamps: true }
);

export default mongoose.model("Farm", farmSchema);
