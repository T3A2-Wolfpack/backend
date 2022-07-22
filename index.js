const app = require('./app')

const port = process.env.PORT || 4000;

// listen to port
app.listen(port, () => {
  console.log("listening for requests on port", port);
});

