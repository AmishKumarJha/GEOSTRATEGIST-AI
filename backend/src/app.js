const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const countryRoutes = require("./routes/country.routes");
const newsRoutes = require("./routes/news.routes");
const conflictRoutes = require("./routes/conflict.routes");
const chatRoutes = require("./routes/chat.routes");
const reportRoutes = require("./routes/report.routes");
const alertRoutes = require("./routes/alert.routes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/countries", countryRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/conflicts", conflictRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/alerts", alertRoutes);

app.use(errorHandler);

module.exports = app;