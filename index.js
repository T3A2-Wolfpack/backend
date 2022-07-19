require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const whiskeyRoutes = require("./routes/whiskeys");
const tastingRoutes = require("./routes/tastings");
const userRoutes = require("./routes/users");
const { expressjwt } = require('express-jwt')
const jwks = require('jwks-rsa')

const app = express();

const port = process.env.PORT || 4000;

const cors = require("cors")

app.use(express.json());

app.use(cors())

// Retrieve signing keys from JSON Web Key Set endpoint to check JSON Web Token
const jwtCheck = expressjwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://hwhiskey.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https://hwhiskey-api.com/',
issuer: 'https://hwhiskey.us.auth0.com/',
algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
res.send('Secured Resource');
});

// global middleware to log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/whiskeys", whiskeyRoutes);
app.use("/api/whiskeys/:id/tastings", tastingRoutes);
app.use("/api/users", userRoutes);

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
