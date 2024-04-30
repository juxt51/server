const fs = require("fs");
const https = require("https");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

// Create Express app
const app = express();

// Security middleware
app.use(helmet()); // Set security HTTP headers
app.use(cors()); // Enable CORS with appropriate configuration
app.use(express.json()); // Parse JSON request bodies

app.post("/user", (req, res) => {
  const query = req?.query;
  const isSameUSerId = process.env[query?.userId];
  if (Boolean(isSameUSerId)) {

    res.json({ permission: true });
    res.end();
  } else {
    res.json({ permission: false });
    res.end();
  }
});


app.get("*", (req, res) => {
  res.sendStatus(403).end();
});

app.listen(process.env.PORT);
