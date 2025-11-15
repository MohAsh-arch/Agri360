import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Mock database
const users = [
  {
    id: "507f1f77bcf86cd799439011",
    name: "Ahmed Farmer",
    email: "ahmed@example.com",
    phone: "0123456789",
    location: "Cairo, Egypt",
    password: "password123",
    profilePicture: "https://i.pravatar.cc/150?img=1",
    createdAt: new Date("2024-01-15"),
    farmSize: "50 acres",
    cropsGrown: ["Wheat", "Corn"],
    experience: "15 years"
  }
];

// Mock tokens
const validTokens = new Set();

// ==================== HEALTH CHECK ====================
app.get("/", (req, res) => {
  res.send("🌿 Agri360 API is running");
});

// ==================== AUTHENTICATION ====================
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  validTokens.add(token);

  const safeUser = { ...user };
  delete safeUser.password;

  res.json({ user: safeUser, token });
});

app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (users.find(u => u.email === email)) {
    return res.status(409).json({ message: "Email already registered" });
  }

  const newUser = {
    id: `id_${Date.now()}`,
    name,
    email,
    password,
    phone: "N/A",
    location: "Not set",
    profilePicture: "https://i.pravatar.cc/150?img=" + Math.floor(Math.random() * 70),
    createdAt: new Date(),
    farmSize: "Not set",
    cropsGrown: [],
    experience: "N/A"
  };

  users.push(newUser);

  const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  validTokens.add(token);

  const safeUser = { ...newUser };
  delete safeUser.password;

  res.status(201).json({ user: safeUser, token });
});

app.get("/api/auth/me", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token || !validTokens.has(token)) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = users[0]; // Return first user for demo
  const safeUser = { ...user };
  delete safeUser.password;

  res.json(safeUser);
});

// ==================== DASHBOARD ====================
app.get("/api/dashboard", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token || !validTokens.has(token)) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.json({
    stats: {
      kpis: {
        totalFarms: 3,
        totalArea: "128 acres",
        activeCrops: 7,
        revenue: "$45,230",
        revenueGrowth: "+12%",
        profitMargin: "28%"
      },
      activities: [
        { id: 1, type: "irrigation", crop: "Wheat", date: new Date().toISOString(), status: "completed" },
        { id: 2, type: "fertilizer", crop: "Corn", date: new Date().toISOString(), status: "in_progress" },
        { id: 3, type: "harvest", crop: "Cotton", date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), status: "scheduled" }
      ],
      weather: {
        current: 28,
        condition: "Sunny",
        humidity: "65%",
        windSpeed: "12 km/h"
      },
      topCrops: [
        { name: "Wheat", yield: "4.5 tons", revenue: "$12,500" },
        { name: "Corn", yield: "3.2 tons", revenue: "$8,900" },
        { name: "Cotton", yield: "2.1 tons", revenue: "$9,800" }
      ]
    }
  });
});

// ==================== FARMING/CROPS ====================
app.get("/api/farms", (req, res) => {
  res.json({
    farms: [
      {
        id: 1,
        name: "North Farm",
        area: "50 acres",
        crops: ["Wheat", "Corn"],
        lastHarvest: "2024-09-15",
        nextHarvest: "2024-12-20"
      },
      {
        id: 2,
        name: "South Farm",
        area: "35 acres",
        crops: ["Cotton", "Rice"],
        lastHarvest: "2024-08-10",
        nextHarvest: "2024-11-30"
      },
      {
        id: 3,
        name: "East Farm",
        area: "43 acres",
        crops: ["Vegetables", "Legumes"],
        lastHarvest: "2024-10-01",
        nextHarvest: "2024-12-10"
      }
    ]
  });
});

app.post("/api/farms", (req, res) => {
  const { name, area, crops } = req.body;
  res.status(201).json({
    id: Date.now(),
    name,
    area,
    crops,
    lastHarvest: "N/A",
    nextHarvest: "TBD"
  });
});

app.post("/api/crops/plan", (req, res) => {
  const { cropType, farmArea, season } = req.body;
  res.json({
    cropType,
    farmArea,
    season,
    recommendedPlantingDate: "2024-11-20",
    estimatedYield: "4.5 tons",
    estimatedRevenue: "$12,500",
    soilRequirements: "pH 6.5-7.5, Well-drained",
    waterNeeds: "600mm per season",
    fertiliserSchedule: [
      { stage: "Pre-planting", fertilizer: "NPK 10-10-10", amount: "500 kg" },
      { stage: "Growth", fertilizer: "NPK 5-15-10", amount: "300 kg" },
      { stage: "Flowering", fertilizer: "NPK 0-0-20", amount: "200 kg" }
    ]
  });
});

// ==================== BUSINESS PLANNING ====================
app.post("/api/business/plan", (req, res) => {
  const { cropType, farmArea, investmentAmount } = req.body;
  res.json({
    businessPlan: {
      title: `${cropType} Business Plan`,
      cropType,
      farmArea,
      investment: investmentAmount,
      projections: {
        year1: {
          revenue: "$45,000",
          costs: "$25,000",
          profit: "$20,000",
          roi: "80%"
        },
        year2: {
          revenue: "$52,000",
          costs: "$27,000",
          profit: "$25,000",
          roi: "93%"
        },
        year3: {
          revenue: "$61,000",
          costs: "$30,000",
          profit: "$31,000",
          roi: "103%"
        }
      },
      marketAnalysis: {
        demand: "High",
        priceRange: "$800-1200 per ton",
        competitors: "Medium",
        opportunities: ["Export market", "Direct sales", "Processing"]
      }
    }
  });
});

// ==================== WATER MANAGEMENT ====================
app.post("/api/water/schedule", (req, res) => {
  const { cropType, soilType, temperature } = req.body;
  res.json({
    irrigationSchedule: [
      { week: 1, waterNeeded: "25mm", method: "Drip", frequency: "Every 2 days" },
      { week: 2, waterNeeded: "30mm", method: "Drip", frequency: "Every 2 days" },
      { week: 3, waterNeeded: "35mm", method: "Sprinkler", frequency: "Every 3 days" },
      { week: 4, waterNeeded: "40mm", method: "Drip", frequency: "Every 2 days" }
    ],
    totalWaterNeeded: "130mm per month",
    costEstimate: "$450 per hectare",
    savingsTips: [
      "Use mulching to retain soil moisture",
      "Install drip irrigation system",
      "Water early morning or late evening",
      "Monitor soil moisture regularly"
    ]
  });
});

// ==================== FERTILIZER RECOMMENDATIONS ====================
app.post("/api/fertilizer/recommendations", (req, res) => {
  const { cropType, soilTest, farmArea } = req.body;
  res.json({
    recommendations: [
      {
        fertilizer: "NPK 15-15-15",
        amount: "500 kg",
        applicationStage: "Pre-planting",
        cost: "$350"
      },
      {
        fertilizer: "Urea (46% N)",
        amount: "300 kg",
        applicationStage: "Growth Stage",
        cost: "$180"
      },
      {
        fertilizer: "Potassium Nitrate",
        amount: "200 kg",
        applicationStage: "Flowering",
        cost: "$240"
      },
      {
        fertilizer: "Organic Compost",
        amount: "2 tons",
        applicationStage: "Pre-planting",
        cost: "$400"
      }
    ],
    totalCost: "$1,170",
    soilHealth: {
      nitrogen: "Deficient - Needs boost",
      phosphorus: "Optimal",
      potassium: "Moderate - Top-up recommended"
    }
  });
});

// ==================== HARVEST PLANNING ====================
app.post("/api/harvests/plan", (req, res) => {
  const { cropType, plantingDate } = req.body;
  res.json({
    harvestPlan: {
      cropType,
      plantingDate,
      estimatedMaturityDate: new Date(Date.now() + 120 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      harvestWindow: "2-4 weeks",
      estimatedYield: "4.5 tons per hectare",
      harvestMethod: "Mechanical harvesting recommended",
      storageRequirements: "Cool, dry warehouse at 15-20°C",
      marketingStrategy: [
        "Direct sales to local markets",
        "Wholesale to distributors",
        "Processing into value-added products",
        "Export opportunities"
      ]
    }
  });
});

// ==================== MARKETPLACE ====================
app.get("/api/marketplace", (req, res) => {
  res.json({
    listings: [
      {
        id: 1,
        title: "Premium Wheat Harvest",
        seller: "North Farm",
        crop: "Wheat",
        quantity: "10 tons",
        price: "$1,200 per ton",
        quality: "Grade A",
        location: "Cairo, Egypt",
        image: "🌾"
      },
      {
        id: 2,
        title: "Organic Corn",
        seller: "Green Valley Farm",
        crop: "Corn",
        quantity: "8 tons",
        price: "$950 per ton",
        quality: "Organic Certified",
        location: "Giza, Egypt",
        image: "🌽"
      },
      {
        id: 3,
        title: "Cotton Harvest",
        seller: "South Farm",
        crop: "Cotton",
        quantity: "5 tons",
        price: "$2,100 per ton",
        quality: "Grade A",
        location: "Alexandria, Egypt",
        image: "🔶"
      }
    ],
    priceIndex: {
      wheat: { price: "$1,100-1,300", trend: "↑ +3%" },
      corn: { price: "$850-1,050", trend: "↓ -2%" },
      cotton: { price: "$1,900-2,200", trend: "↑ +5%" }
    }
  });
});

app.post("/api/marketplace/post", (req, res) => {
  const { crop, quantity, price, quality, description } = req.body;
  res.status(201).json({
    id: Date.now(),
    crop,
    quantity,
    price,
    quality,
    description,
    postedDate: new Date().toISOString(),
    status: "Active"
  });
});

// ==================== USER PROFILE ====================
app.get("/api/users/profile", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token || !validTokens.has(token)) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = users[0];
  const safeUser = { ...user };
  delete safeUser.password;

  res.json(safeUser);
});

app.put("/api/users/profile", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token || !validTokens.has(token)) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { name, phone, location, farmSize } = req.body;
  users[0] = { ...users[0], name, phone, location, farmSize };

  res.json({ message: "Profile updated successfully", user: users[0] });
});

// ==================== CHAT/NOTIFICATIONS ====================
app.get("/api/chat/messages", (req, res) => {
  res.json({
    messages: [
      {
        id: 1,
        sender: "Support Team",
        message: "Welcome to Agri360! How can we help you today?",
        timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString()
      },
      {
        id: 2,
        sender: "System",
        message: "Your wheat harvest is ready! Plan your harvesting now.",
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString()
      }
    ]
  });
});

app.post("/api/chat/send", (req, res) => {
  const { message } = req.body;
  res.status(201).json({
    id: Date.now(),
    message,
    timestamp: new Date().toISOString(),
    status: "sent"
  });
});

// ==================== ERROR HANDLING ====================
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`✅ Agri360 API Server running on http://localhost:${PORT}`);
  console.log("📊 All routes are fully functional with mock data");
  console.log("🔐 Test credentials:");
  console.log("   Email: ahmed@example.com");
  console.log("   Password: password123");
});
