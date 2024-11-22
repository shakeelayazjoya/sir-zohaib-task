const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const itemRoutes = require("./routes/itemRoutes");

// Load environment variables from .env file
dotenv.config();

// Create an Express app instance
const app = express();

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse incoming JSON requests

// Setup routes
app.use("/api/items", itemRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful DB connection
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("MongoDB connection error:", err));
