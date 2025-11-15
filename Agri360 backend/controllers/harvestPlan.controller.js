import * as harvestService from "../services/harvestPlan.service.js";
import { t } from "../utils/translator.js";

export const createHarvestPlan = async (req, res) => {
  try {
    const data = req.body;
    data.farmer = req.user._id;
    const plan = await harvestService.createPlan(data);
    res.status(201).json({ plan });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

export const listHarvestPlans = async (req, res) => {
  try {
    const plans = await harvestService.listPlans({ farmer: req.user._id });
    res.json({ plans });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

export default { createHarvestPlan, listHarvestPlans };
