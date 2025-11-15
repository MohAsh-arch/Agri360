import Farm from "../models/Farm.js";
import User from "../models/User.js";
import soilService from "../services/soilService.js";
import { t } from "../utils/translator.js";

export const createFarm = async (req, res) => {
  try {
    const data = req.body;
    data.owner = req.user._id;
    const farm = await Farm.create(data);
    // attach to user
    await User.findByIdAndUpdate(req.user._id, { farm: farm._id });
    res.status(201).json({ farm });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

export const getFarm = async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id || req.user.farm);
    if (!farm)
      return res
        .status(404)
        .json({ message: t(req.lang || "en", "not_found") });
    res.json({ farm });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

export const analyzeSoil = async (req, res) => {
  try {
    const { soil } = req.body;
    const r = await soilService.analyzeSoil(soil);
    res.json(r);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

export default { createFarm, getFarm, analyzeSoil };
