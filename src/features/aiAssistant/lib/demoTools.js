export const demoTools = [
  {
    name: "getFleetAvailability",
    description: "Check the current stock and availability for a vehicle class.",
  },
  {
    name: "findBestVehicle",
    description: "Recommend the best rental option based on trip type and budget.",
  },
  {
    name: "qualifyLead",
    description: "Review a lead and classify the intent level for sales follow-up.",
  },
  {
    name: "bookingSummary",
    description: "Summarize the booking details and pricing for a customer inquiry.",
  },
];

export function getDemoToolHints() {
  return demoTools.map((tool) => `${tool.name}: ${tool.description}`).join("\n");
}
