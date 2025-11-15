import express from "express";
import farmController from "../controllers/farm.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, farmController.createFarm);
router.get("/:id", protect, farmController.getFarm);
router.post("/analyze-soil", protect, farmController.analyzeSoil);

export default router;
