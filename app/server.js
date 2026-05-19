require("dotenv").config();

const express = require("express");

const app = express();

const config = {
  port: process.env.PORT || 3000,
};

app.get("/", (req, res) => {
  res.send("AWS Final Project Running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});