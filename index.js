const app = require('./app')

const { tasting_user } = require("./controllers/tastingController");
const port = process.env.PORT || 4000;

// listen to port
app.listen(port, () => {
  console.log("listening for requests on port", port);
});

