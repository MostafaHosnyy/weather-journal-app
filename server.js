// #region Project Environment Setup
// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
const cors = require("cors");
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 4000;
const server = app.listen(port, () => {
  console.log("The server is running");
  console.log(`running on localhost:${port}`);
});
// #endregion

// #region //TODO: APIs and Routes
projectData = {};

// Return Endpoint Data
// GET Route I: Server Side
app.get("/test", (req, res) => {
  res.send(projectData);
  console.log("server sent data.");
});

// POST Route I : Server Side
app.post("/all", (req, res) => {
  const data = req.body;
  projectData = data;
  console.log("data was reserved successfully.");
  console.log(projectData);
});

