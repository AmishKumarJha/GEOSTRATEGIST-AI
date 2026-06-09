require("dotenv").config();

const connectDB =
  require("../config/db");

const Region =
  require("../models/Region");

const regions = [
  {
    name: "North America",
    riskScore: 35,
    summary:
      "Stable geopolitical environment with strong economic and military influence.",
    activeConflicts: 0,
    newsCount: 0,
    forecast: {
      escalation: 15,
      stability: 75,
      deEscalation: 10,
    },
  },

  {
    name: "South America",
    riskScore: 45,
    summary:
      "Political instability and economic volatility remain key concerns.",
    activeConflicts: 1,
    newsCount: 0,
    forecast: {
      escalation: 25,
      stability: 60,
      deEscalation: 15,
    },
  },

  {
    name: "Europe",
    riskScore: 62,
    summary:
      "Security concerns remain elevated due to regional conflicts and energy challenges.",
    activeConflicts: 2,
    newsCount: 0,
    forecast: {
      escalation: 40,
      stability: 45,
      deEscalation: 15,
    },
  },

  {
    name: "Africa",
    riskScore: 58,
    summary:
      "Several regions face security challenges, political instability and humanitarian crises.",
    activeConflicts: 4,
    newsCount: 0,
    forecast: {
      escalation: 45,
      stability: 40,
      deEscalation: 15,
    },
  },

  {
    name: "Middle East",
    riskScore: 88,
    summary:
      "Persistent regional tensions and active conflicts create elevated geopolitical risks.",
    activeConflicts: 6,
    newsCount: 0,
    forecast: {
      escalation: 70,
      stability: 20,
      deEscalation: 10,
    },
  },

  {
    name: "South Asia",
    riskScore: 68,
    summary:
      "Strategic competition and border disputes continue to influence regional stability.",
    activeConflicts: 2,
    newsCount: 0,
    forecast: {
      escalation: 50,
      stability: 35,
      deEscalation: 15,
    },
  },

  {
    name: "East Asia",
    riskScore: 75,
    summary:
      "Maritime disputes and military posturing remain significant security concerns.",
    activeConflicts: 3,
    newsCount: 0,
    forecast: {
      escalation: 60,
      stability: 30,
      deEscalation: 10,
    },
  },

  {
    name: "Oceania",
    riskScore: 28,
    summary:
      "Generally stable with growing strategic importance in Indo-Pacific dynamics.",
    activeConflicts: 0,
    newsCount: 0,
    forecast: {
      escalation: 10,
      stability: 80,
      deEscalation: 10,
    },
  },
];

async function seedRegions() {
  try {

    console.log(
      "MONGO_URI:",
      process.env.MONGO_URI
    );

    await connectDB();

    await Region.deleteMany({});

    await Region.insertMany(
      regions
    );

    console.log(
      "Regions seeded successfully"
    );

    process.exit(0);

  } catch (error) {

    console.error(error);

    process.exit(1);

  }
}

seedRegions();