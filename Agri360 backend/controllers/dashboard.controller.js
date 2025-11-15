import DashboardStats from "../models/DashboardStats.js";
import priceService from "../services/priceService.js";
import forexService from "../services/forexService.js";
import newsService from "../services/newsService.js";
import weatherService from "../services/weatherService.js";
import faoService from "../services/faoService.js";
import oilService from "../services/oilService.js";
import { t } from "../utils/translator.js";
import { dbConnected, mockDB } from "../config/db.js";

export const getStats = async (req, res) => {
  try {
    let stats;

    if (dbConnected) {
      // Get latest dashboard stats from MongoDB
      stats = await DashboardStats.find().sort({ createdAt: -1 }).limit(1);
    } else {
      // Use mock dashboard data
      const mockData = await mockDB.getDashboardData(req.user?.id);
      stats = [mockData];
    }

    // Fetch current Mahsoly crop prices
    const mahscolyPrices = await priceService.getStockMarketPrices();

    const enrichedStats = {
      ...stats[0],
      cropPrices: mahscolyPrices.prices || [],
      pricesSource: mahscolyPrices.source,
      pricesLastUpdated: mahscolyPrices.lastUpdated,
    };

    res.json({ stats: enrichedStats });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

export const computeAndStore = async (req, res) => {
  try {
    const {
      crop = "wheat",
      cropCode = faoService.FAO_ITEMS.WHEAT,
      farm,
    } = req.body;

    // Fetch all data sources for AI analysis
    const [mahsolyData, fx, news, weather, faoData, oil] = await Promise.all([
      priceService.aggregateMahsolyData(crop),
      forexService.fetchExchangeRate(),
      newsService.getNewsSentiment(crop),
      farm ? weatherService.getForecastForFarm(farm) : Promise.resolve(null),
      faoService.aggregateAgriculturalData(cropCode),
      oilService.fetchOilPrice(),
    ]);

    // Calculate composite risk score
    const newsScore = (news?.score || 0) * -1;
    const riskScore = Math.max(
      0,
      Math.min(100, Math.abs(newsScore) + (weather?.alerts?.length || 0) * 10)
    );

    const stats = await DashboardStats.create({
      cropPriceTrends: mahsolyData,
      currencyImpact: fx,
      newsImpact: news,
      weatherImpact: weather,
      oilImpact: oil,
      faoDataForAI: faoData,
      riskScore,
      alerts: generateAlerts(news, weather, prices, oil, req.lang || "en"),
    });

    res.json({ stats });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

// Helper: generate alerts based on data
const generateAlerts = (news, weather, prices, oil, lang = "en") => {
  const alerts = [];

  if (news?.score < -5) alerts.push(t(lang, "alert_negative_market"));
  if (weather?.current?.humidity > 90)
    alerts.push(t(lang, "alert_high_humidity"));
  if (oil?.brent > 100) alerts.push(t(lang, "alert_oil_spike"));

  return alerts;
};

export default { getStats, computeAndStore };
