import MarketListing from "../models/MarketListing.js";
import Order from "../models/Order.js";
import priceService from "../services/priceService.js";
import { t } from "../utils/translator.js";

export const createListing = async (req, res) => {
  try {
    const data = req.body;
    data.farmer = req.user._id;

    // Fetch market price suggestion from Mahsoly
    const marketPrices = await priceService.fetchMahsolyPrices(data.crop);
    const suggestedPrice =
      marketPrices.prices?.[0]?.price ||
      marketPrices.price ||
      data.pricePerUnit;

    const listing = await MarketListing.create({
      ...data,
      suggestedPrice: suggestedPrice,
    });

    res.status(201).json({
      listing,
      marketPriceSuggestion: {
        price: suggestedPrice,
        currency: marketPrices.currency,
        source: marketPrices.source,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

export const listListings = async (req, res) => {
  try {
    const listings = await MarketListing.find({ status: "active" })
      .populate("farmer", "name email")
      .lean();

    // Enrich listings with Mahsoly market price data
    const enrichedListings = await Promise.all(
      listings.map(async (listing) => {
        const mahsolyPrices = await priceService.fetchMahsolyPrices(
          listing.crop
        );
        return {
          ...listing,
          marketPriceData: mahsolyPrices,
          priceComparison: {
            listingPrice: listing.pricePerUnit,
            marketPrice:
              mahsolyPrices.prices?.[0]?.price || mahsolyPrices.price,
            marketCurrency: mahsolyPrices.currency,
            source: mahsolyPrices.source,
          },
        };
      })
    );

    res.json({ listings: enrichedListings });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: t(req.lang || "en", "server_error") });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { listingId, quantity } = req.body;
    const listing = await MarketListing.findById(listingId);
    if (!listing)
      return res
        .status(404)
        .json({ message: t(req.lang || "en", "listing_not_found") });
    const total = listing.pricePerUnit * quantity;
    const order = await Order.create({
      buyer: req.user._id,
      listing: listingId,
      quantity,
      totalPrice: total,
    });
    res.status(201).json({ order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export default { createListing, listListings, createOrder };
