import * as service from "../services/businessPlan.service.js";
import { t } from "../utils/translator.js";

export const createPlan = async (req, res) => {
  try {
    console.log("📋 Business Plan Request received");
    const data = req.body;
    const lang = req.lang || req.body.lang || "en";

    console.log("Request data:", JSON.stringify(data).substring(0, 200));
    console.log("Language:", lang);
    console.log("User ID:", req.user?.id || req.user?._id);

    // Add farmer ID from authenticated user
    data.farmer = req.user?.id || req.user?._id;

    console.log("Calling service with farmer ID:", data.farmer);

    // Generate business plan via AI service
    const plan = await service.createBusinessPlan(data, lang);

    console.log("✅ Business plan created successfully");

    res.status(201).json({
      businessPlan: plan,
      message: "Business plan generated successfully",
    });
  } catch (err) {
    console.error("❌ BusinessPlan Controller Error:", err.message);
    console.error("Stack:", err.stack);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};
export const listPlans = async (req, res) => {
  try {
    const filter = {};
    // allow filtering by farmer id via query param
    if (req.query.farmer) filter.farmer = req.query.farmer;
    const plans = await service.getBusinessPlans(filter);
    res.json({ businessPlans: plans });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

export const getPlan = async (req, res) => {
  try {
    const plan = await service.getBusinessPlanById(req.params.id);
    if (!plan)
      return res
        .status(404)
        .json({ message: t(req.lang || "en", "not_found") });
    res.json({ businessPlan: plan });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

export const updatePlan = async (req, res) => {
  try {
    const updated = await service.updateBusinessPlan(req.params.id, req.body);
    res.json({ businessPlan: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

export const deletePlan = async (req, res) => {
  try {
    await service.deleteBusinessPlan(req.params.id);
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export default { createPlan, listPlans, getPlan, updatePlan, deletePlan };
