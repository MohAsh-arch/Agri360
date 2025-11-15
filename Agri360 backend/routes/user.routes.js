import express from "express";
import userController from "../controllers/user.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/me", protect, userController.getProfile);
router.put("/me", protect, userController.updateProfile);

export default router;
