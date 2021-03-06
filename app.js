require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const whiskeyRoutes = require("./routes/whiskeys");
const tastingRoutes = require("./routes/tastings");
const userRoutes = require("./routes/users");
const { tasting_user } = require("./controllers/tastingController");

const app = express();


const cors = require("cors");

app.use(express.json());

app.use(cors());

// global middleware to log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/whiskeys", whiskeyRoutes);
app.use("/api/whiskeys/:id/tastings", tastingRoutes);
app.get("/api/tastings/:id/user", tasting_user);
app.use("/api/users", userRoutes);


mongoose
  .connect(process.env.ATLAS_DB_URL)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app