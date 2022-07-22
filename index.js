require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const whiskeyRoutes = require("./routes/whiskeys");
const tastingRoutes = require("./routes/tastings");
const userRoutes = require("./routes/users");
const { tasting_user } = require("./controllers/tastingController");

const app = express();

const port = process.env.PORT || 4000;

const cors = require("cors");

app.use(express.json());

app.use(cors());

// global middleware to log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  console.log("---------------------------");
  next();
});

// routes
app.get("/api/tastings/:id/user", tasting_user); 
app.use("/api/whiskeys", whiskeyRoutes);
app.use("/api/whiskeys/:id/tastings", tastingRoutes);
app.use("/api/", userRoutes);

// database connection
mongoose
  .connect(process.env.ATLAS_DB_URL)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(port, () => {
      console.log("listening for requests on port", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
