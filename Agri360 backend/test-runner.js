import {
  testTranslatorArabic,
  testTemplateSubstitution,
} from "./tests/translator.test.js";
import {
  testChatUsesArabicInstruction,
  testGenerateBusinessPlanArabicInstruction,
} from "./tests/aiService.test.js";
import {
  testRegisterMissingFieldsArabic,
  testLoginMissingFieldsArabic,
} from "./tests/authController.test.js";
import {
  testControllerMessagesArabic,
  testNotFoundArabic,
  testListingNotFoundArabic,
  testHarvestPlanErrorArabic,
  testMarketplaceErrorArabic,
  testDashboardAlertsArabic,
  testUserControllerErrorArabic,
  testControllerEnglishFallback,
  testFarmControllerEnglishError,
  testBusinessPlanControllerEnglishError,
  testAiErrorArabic,
  testAiErrorEnglish,
  testEgyptianArabicVariant,
  testEgyptianArabicInvalidCredentials,
  testArEgFallback,
  testArEgDefault,
} from "./tests/integrationTranslations.test.js";
import {
  testCropPlanningArabicInstruction,
  testBusinessPlanArabicInstruction,
  testChatPlanningModeArabic,
  testChatChatModeArabic,
  testAiEnglishDefault,
  testArabicVariantCode,
} from "./tests/aiIntegration.test.js";
import {
  testDashboardCropPrices,
  testMarketplaceListingWithPriceSuggestion,
  testMarketplaceListingEnrichment,
  testDashboardStatsWithPrices,
  testFarmerPriceComparison,
} from "./tests/mahsolyIntegration.test.js";

const tests = [
  { name: "translator Arabic", fn: testTranslatorArabic },
  { name: "template substitution", fn: testTemplateSubstitution },
  { name: "ai chat Arabic instruction", fn: testChatUsesArabicInstruction },
  {
    name: "ai business plan Arabic instruction",
    fn: testGenerateBusinessPlanArabicInstruction,
  },
  {
    name: "auth register missing fields (ar)",
    fn: testRegisterMissingFieldsArabic,
  },
  { name: "auth login missing fields (ar)", fn: testLoginMissingFieldsArabic },
  { name: "controller messages Arabic", fn: testControllerMessagesArabic },
  { name: "not found Arabic", fn: testNotFoundArabic },
  { name: "listing not found Arabic", fn: testListingNotFoundArabic },
  { name: "harvestPlan error Arabic", fn: testHarvestPlanErrorArabic },
  { name: "marketplace error Arabic", fn: testMarketplaceErrorArabic },
  { name: "dashboard alerts Arabic", fn: testDashboardAlertsArabic },
  { name: "user controller error Arabic", fn: testUserControllerErrorArabic },
  { name: "controller English fallback", fn: testControllerEnglishFallback },
  { name: "farm controller English error", fn: testFarmControllerEnglishError },
  {
    name: "businessPlan controller English error",
    fn: testBusinessPlanControllerEnglishError,
  },
  { name: "AI error Arabic", fn: testAiErrorArabic },
  { name: "AI error English", fn: testAiErrorEnglish },
  { name: "crop planning AI Arabic", fn: testCropPlanningArabicInstruction },
  { name: "business plan AI Arabic", fn: testBusinessPlanArabicInstruction },
  { name: "chat planning mode Arabic", fn: testChatPlanningModeArabic },
  { name: "chat chat mode Arabic", fn: testChatChatModeArabic },
  { name: "AI English default", fn: testAiEnglishDefault },
  { name: "Arabic variant code (ar-SA)", fn: testArabicVariantCode },
  { name: "Egyptian Arabic variant (ar-EG)", fn: testEgyptianArabicVariant },
  {
    name: "Egyptian Arabic invalid credentials",
    fn: testEgyptianArabicInvalidCredentials,
  },
  { name: "ar-EG fallback", fn: testArEgFallback },
  { name: "ar-EG default for ar", fn: testArEgDefault },
  { name: "dashboard crop prices", fn: testDashboardCropPrices },
  {
    name: "marketplace listing with price suggestion",
    fn: testMarketplaceListingWithPriceSuggestion,
  },
  {
    name: "marketplace listing enrichment",
    fn: testMarketplaceListingEnrichment,
  },
  {
    name: "dashboard stats with prices",
    fn: testDashboardStatsWithPrices,
  },
  {
    name: "farmer price comparison",
    fn: testFarmerPriceComparison,
  },
];

let passed = 0;
for (const t of tests) {
  try {
    const maybePromise = t.fn();
    if (maybePromise && typeof maybePromise.then === "function")
      await maybePromise;
    console.log(`✅ ${t.name}`);
    passed++;
  } catch (err) {
    console.error(`❌ ${t.name}`);
    console.error(err.stack || err);
  }
}

console.log(`${passed}/${tests.length} tests passed`);
if (passed !== tests.length) process.exit(1);
