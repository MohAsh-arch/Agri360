/**
 * Debug Script - Simulate Business Plan Request
 * Run: node debug-business-plan.js
 */

import dotenv from "dotenv";
import aiService from "./services/aiService.js";
import priceService from "./services/priceService.js";
import forexService from "./services/forexService.js";
import weatherService from "./services/weatherService.js";
import faoService from "./services/faoService.js";
import oilService from "./services/oilService.js";
import soilService from "./services/soilService.js";
import waterService from "./services/waterService.js";

dotenv.config();

console.log("🧪 Testing Business Plan Service Components\n");

const testData = {
  farm: {
    name: "Test Farm",
    fieldSizeHectares: 20,
    location: {
      lat: 30.0444,
      lon: 31.2357,
    },
  },
  crop: "wheat",
  lang: "ar-EG",
};

// Test each service individually
console.log("Testing individual services...\n");

try {
  console.log("1️⃣ Testing Mahsoly Price Service...");
  const mahsolyData = await priceService.aggregateMahsolyData("wheat");
  console.log("✅ Mahsoly:", mahsolyData ? "OK" : "NULL");
} catch (err) {
  console.error("❌ Mahsoly Error:", err.message);
}

try {
  console.log("\n2️⃣ Testing Forex Service...");
  const fx = await forexService.fetchExchangeRate();
  console.log("✅ Forex:", fx ? "OK" : "NULL");
} catch (err) {
  console.error("❌ Forex Error:", err.message);
}

try {
  console.log("\n3️⃣ Testing Weather Service...");
  const weather = await weatherService.getForecastForFarm(testData.farm);
  console.log("✅ Weather:", weather ? "OK" : "NULL");
} catch (err) {
  console.error("❌ Weather Error:", err.message);
}

try {
  console.log("\n4️⃣ Testing FAO Service...");
  const faoData = await faoService.aggregateAgriculturalData(
    faoService.FAO_ITEMS.WHEAT
  );
  console.log("✅ FAO:", faoData ? "OK" : "NULL");
} catch (err) {
  console.error("❌ FAO Error:", err.message);
}

try {
  console.log("\n5️⃣ Testing Oil Service...");
  const oil = await oilService.fetchOilPrice();
  console.log("✅ Oil:", oil ? "OK" : "NULL");
} catch (err) {
  console.error("❌ Oil Error:", err.message);
}

try {
  console.log("\n6️⃣ Testing Soil Service...");
  const soil = await soilService.analyzeSoil(testData.farm.soil || {});
  console.log("✅ Soil:", soil ? "OK" : "NULL");
} catch (err) {
  console.error("❌ Soil Error:", err.message);
}

try {
  console.log("\n7️⃣ Testing Water Service...");
  const water = await waterService.estimateWaterNeeds({
    crop: "wheat",
    areaHectares: 20,
  });
  console.log("✅ Water:", water ? "OK" : "NULL");
} catch (err) {
  console.error("❌ Water Error:", err.message);
}

// Test AI Service
try {
  console.log("\n🤖 Testing AI Service...");
  const aiResult = await aiService.generateBusinessPlan(
    {
      crop: "wheat",
      task: "Create a business plan",
    },
    "en"
  );
  console.log("✅ AI Response (first 100 chars):", aiResult?.substring(0, 100));
} catch (err) {
  console.error("❌ AI Error:", err.message);
  console.error("Stack:", err.stack);
}

console.log("\n✨ Debug test complete!");
