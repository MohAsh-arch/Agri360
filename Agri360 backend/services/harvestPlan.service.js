import HarvestPlan from "../models/HarvestPlan.js";
import aiService from "./aiService.js";
import weatherService from "./weatherService.js";
import soilService from "./soilService.js";
import waterService from "./waterService.js";

export const createPlan = async (data) => {
  // gather context
  const { farm } = data;
  const weather = farm ? await weatherService.getForecastForFarm(farm) : null;
  const soilAnalysis = farm?.soil
    ? await soilService.analyzeSoil(farm.soil)
    : null;
  const waterEst = await waterService.estimateWaterNeeds({
    crop: data.crop,
    areaHectares: farm?.fieldSizeHectares,
  });

  const context = { ...data, weather, soilAnalysis, waterEst };
  const aiResult = await aiService.planCrops(context);

  const plan = await HarvestPlan.create({
    ...data,
    irrigationSchedule:
      aiResult.irrigation_plan || aiResult.irrigationSchedule || {},
    fertilizerSchedule: aiResult.fertilizer_plan || {},
    expectedYield: aiResult.expected_yield || null,
    aiNotes: aiResult,
  });

  return plan;
};

export const listPlans = async (filter = {}) => {
  return await HarvestPlan.find(filter).populate("farm").populate("farmer");
};

export default { createPlan, listPlans };
