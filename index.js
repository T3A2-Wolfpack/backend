const app = require('./app')

const port = process.env.PORT || 4000;


const cors = require("cors")

app.use(express.json());

app.use(cors())

// global middleware to log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  console.log("---------------------------");
  next();
});

// routes
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

// listen to port
app.listen(port, () => {
  console.log("listening for requests on port", port);
});

