const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    riskScore: {
      type: Number,
      default: 50,
    },

    summary: String,

    activeConflicts: {
      type: Number,
      default: 0,
    },

    newsCount: {
      type: Number,
      default: 0,
    },

    forecast: {
      escalation: Number,
      stability: Number,
      deEscalation: Number,
    },

    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Region",
  regionSchema
);