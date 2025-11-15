import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import farmRoutes from "./routes/farm.routes.js";
import harvestRoutes from "./routes/harvestPlan.routes.js";
import businessRoutes from "./routes/businessPlan.routes.js";
import simplePlanRoutes from "./routes/simplePlan.routes.js";
import mockPlanRoutes from "./routes/mockPlan.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import marketplaceRoutes from "./routes/marketplace.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import detectLanguage from "./middleware/language.js";

dotenv.config();
await connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("🌿 Agri360 API is running"));

// language detection (sets req.lang) - must come before routes
app.use(detectLanguage);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/farms", farmRoutes);
app.use("/api/harvests", harvestRoutes);
app.use("/api/business", businessRoutes);
app.use("/api/simple", simplePlanRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/market", marketplaceRoutes);
app.use("/api/chat", chatRoutes);

// Backwards-compatible mounts without /api prefix
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/farms", farmRoutes);
app.use("/harvests", harvestRoutes);
app.use("/business", businessRoutes);
app.use("/simple", simplePlanRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/marketplace", marketplaceRoutes);
app.use("/market", marketplaceRoutes);
app.use("/chat", chatRoutes);

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
