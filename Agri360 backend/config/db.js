import mongoose from "mongoose";
import mockDB from "./mockDB.js";

let dbConnected = false;

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI environment variable is not set");
    }
    
    console.log("🔗 Attempting to connect to MongoDB...");
    
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 15000, // 15 second timeout for replica set discovery
      connectTimeoutMS: 15000,
      socketTimeoutMS: 15000,
    });

    console.log("✅ Connected to MongoDB successfully");
    dbConnected = true;
  } catch (error) {
    console.warn("⚠️  MongoDB connection failed:", error.message);
    console.log("📝 Using in-memory database for development");
    console.log("⚠️  Note: Data will be lost when server restarts");
    dbConnected = false;
  }
};

export { connectDB, mockDB, dbConnected };
