import express from "express";
import harvestController from "../controllers/harvestPlan.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, harvestController.createHarvestPlan);
router.get("/", protect, harvestController.listHarvestPlans);

export default router;
