const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    capital: {
      type: String,
      trim: true,
    },

    region: {
      type: String,
      trim: true,
    },

    population: {
      type: Number,
      default: 0,
    },

    gdp: {
      type: Number,
      default: 0,
    },

    riskScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Country",
  countrySchema
);