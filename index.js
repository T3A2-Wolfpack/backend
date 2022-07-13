require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const whiskeyRoutes = require("./routes/whiskeys");

const app = express();

app.use(express.json());

// global middleware to log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/whiskeys", whiskeyRoutes);

// database connection
mongoose
  .connect(process.env.ATLAS_DB_URL)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  }); 
