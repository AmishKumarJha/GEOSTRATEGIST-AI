const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const countryRoutes = require("./routes/country.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use("/api/countries", countryRoutes);

module.exports = app;