import BusinessPlan from "../models/BusinessPlan.js";
import aiService from "./aiService.js";
import priceService from "./priceService.js";
import forexService from "./forexService.js";
import weatherService from "./weatherService.js";
import faoService from "./faoService.js";
import oilService from "./oilService.js";
import soilService from "./soilService.js";
import waterService from "./waterService.js";

export const createBusinessPlan = async (data, lang = "en") => {
  try {
    // Gather comprehensive context for AI business plan generation
    const {
      farm,
      crop = "wheat",
      cropCode = faoService.FAO_ITEMS.WHEAT,
    } = data;

    // Fetch all data sources in parallel with error handling
    const [mahsolyData, fx, weather, faoData, oil, soilAnalysis, waterEst] =
      await Promise.all([
        priceService.aggregateMahsolyData(crop).catch((err) => {
          console.error("ERROR: aggregateMahsolyData failed:", err.message);
          return { error: err.message };
        }),
        forexService.fetchExchangeRate().catch((err) => {
          console.error("ERROR: fetchExchangeRate failed:", err.message);
          return { error: err.message };
        }),
        farm
          ? weatherService.getForecastForFarm(farm).catch((err) => {
              console.error("ERROR: getForecastForFarm failed:", err.message);
              return null;
            })
          : Promise.resolve(null),
        faoService.aggregateAgriculturalData(cropCode).catch((err) => {
          console.error(
            "ERROR: aggregateAgriculturalData failed:",
            err.message
          );
          return { error: err.message };
        }),
        oilService.fetchOilPrice().catch((err) => {
          console.error("ERROR: fetchOilPrice failed:", err.message);
          return { error: err.message };
        }),
        farm?.soil
          ? soilService.analyzeSoil(farm.soil).catch((err) => {
              console.error("ERROR: analyzeSoil failed:", err.message);
              return null;
            })
          : Promise.resolve(null),
        waterService
          .estimateWaterNeeds({
            crop,
            areaHectares: farm?.fieldSizeHectares,
          })
          .catch((err) => {
            console.error("ERROR: estimateWaterNeeds failed:", err.message);
            return { error: err.message };
          }),
      ]);

    // Construct rich context for AI
    const aiContext = {
      ...data,
      marketData: {
        mahsoly: mahsolyData,
        currency: fx,
        oilPrices: oil,
      },
      weatherData: weather,
      faoData,
      farmData: {
        soil: soilAnalysis,
        water: waterEst,
        fieldSize: farm?.fieldSizeHectares,
      },
    };

    // Call AI with reasoning model for business planning
    console.log("Calling AI service for business plan generation...");
    const aiResult = await aiService.generateBusinessPlan(aiContext, lang);

    // Parse or handle AI result - could be string or object
    let parsedResult = {};
    if (typeof aiResult === "string") {
      // If AI returned a string, try to parse as JSON, otherwise store as notes
      try {
        parsedResult = JSON.parse(aiResult);
      } catch (e) {
        parsedResult = { notes: aiResult };
      }
    } else {
      parsedResult = aiResult;
    }

    // Create plan with AI insights - map to correct schema fields
    // Create plan with AI insights - map to correct schema fields
    const plan = await BusinessPlan.create({
      farmer: data.farmer, // Must be provided in request (from JWT)
      farm: data.farmId || data.farm?._id || null, // Accept either farmId or farm._id, optional
      crop: data.crop || "wheat",
      investmentCost:
        parsedResult.investment_cost || parsedResult.costEstimate?.total,
      expectedRevenue:
        parsedResult.expected_revenue || parsedResult.profitEstimate?.revenue,
      aiAdvice: {
        businessPlan: aiResult,
        costEstimate: parsedResult.cost_estimate || {},
        fertilizer: parsedResult.fertilizer || {},
        waterPlan: parsedResult.water_plan || {},
        priceForecast: parsedResult.price_forecast || {},
        profitEstimate: parsedResult.profit_estimate || {},
      },
      profitMargin:
        parsedResult.profit_margin || parsedResult.profitEstimate?.margin,
      timeline: parsedResult.timeline || {},
    });

    return plan;
  } catch (err) {
    console.error("❌ createBusinessPlan error:", err.message || err);
    console.error("Stack trace:", err.stack);
    throw err;
  }
};

export const getBusinessPlans = async (filter = {}) => {
  const plans = await BusinessPlan.find(filter)
    .populate("farmer")
    .populate("crop");
  return plans;
};

export const getBusinessPlanById = async (id) => {
  return await BusinessPlan.findById(id).populate("farmer").populate("crop");
};

export const updateBusinessPlan = async (id, updates) => {
  return await BusinessPlan.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteBusinessPlan = async (id) => {
  return await BusinessPlan.findByIdAndDelete(id);
};
