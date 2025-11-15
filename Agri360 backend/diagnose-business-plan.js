/**
 * Diagnostic Script - Test Business Plan Creation
 * Run this to identify exactly what's failing
 *
 * Usage: node diagnose-business-plan.js
 */

import dotenv from "dotenv";
import mongoose from "mongoose";
import BusinessPlan from "./models/BusinessPlan.js";
import User from "./models/User.js";

dotenv.config();

console.log("🔍 Diagnostic Test for Business Plan Creation\n");

try {
  // Connect to DB
  console.log("Connecting to database...");
  await mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost:27017/agri360"
  );
  console.log("✅ Connected to database\n");

  // Get a test user
  console.log("Looking for test user...");
  let testUser = await User.findOne({ email: "test@example.com" });

  if (!testUser) {
    console.log("Creating test user...");
    testUser = await User.create({
      name: "Test User",
      email: "test@example.com",
      password: "hashedpassword123",
    });
    console.log("✅ Test user created\n");
  } else {
    console.log("✅ Test user found\n");
  }

  // Try to create a business plan with the schema
  console.log("Testing BusinessPlan schema...");
  const testPlan = {
    farmer: testUser._id,
    farm: null, // Optional
    crop: "wheat",
    investmentCost: 5000,
    expectedRevenue: 15000,
    aiAdvice: {
      businessPlan: "This is a test business plan for wheat...",
      costEstimate: { total: 5000 },
      fertilizer: { urea: 100 },
      waterPlan: { estimatedM3: 4500 },
      priceForecast: { forecast: "rising" },
      profitEstimate: { revenue: 15000, margin: 66.67 },
    },
    profitMargin: 66.67,
    timeline: { month1: "preparation", month2: "planting" },
  };

  console.log(
    "Creating plan with data:",
    JSON.stringify(testPlan, null, 2).substring(0, 300)
  );

  const plan = await BusinessPlan.create(testPlan);
  console.log("✅ BusinessPlan created successfully!");
  console.log("Plan ID:", plan._id);
  console.log("Plan data:", JSON.stringify(plan, null, 2).substring(0, 300));

  // Test retrieval
  console.log("\nRetrieving plan...");
  const retrieved = await BusinessPlan.findById(plan._id);
  console.log("✅ Plan retrieved successfully");
  console.log(
    "Retrieved:",
    JSON.stringify(retrieved, null, 2).substring(0, 300)
  );

  console.log("\n✅ All diagnostic tests PASSED!");
} catch (err) {
  console.error("❌ Error:", err.message);
  console.error("Stack:", err.stack);
} finally {
  await mongoose.disconnect();
  console.log("\nDatabase disconnected");
}
