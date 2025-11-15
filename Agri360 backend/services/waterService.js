// Water planning helpers
export const estimateWaterNeeds = async ({
  crop,
  areaHectares,
  stage = "growth",
}) => {
  // very simplified water need estimator (m3 per hectare)
  const base =
    { wheat: 4500, maize: 6000, rice: 12000 }[crop?.toLowerCase()] || 5000;
  const factor = stage === "germination" ? 0.2 : stage === "harvest" ? 0.1 : 1;
  const m3 = base * factor * (areaHectares || 1);
  return { estimatedM3: m3 };
};

export default { estimateWaterNeeds };
