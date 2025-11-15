import express from "express";
import dashboardController from "../controllers/dashboard.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, dashboardController.getStats);
router.post("/compute", protect, dashboardController.computeAndStore);

export default router;
