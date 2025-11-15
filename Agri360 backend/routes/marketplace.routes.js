import express from "express";
import marketplaceController from "../controllers/marketplace.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/listings", protect, marketplaceController.createListing);
router.get("/listings", marketplaceController.listListings);
router.post("/orders", protect, marketplaceController.createOrder);

export default router;
