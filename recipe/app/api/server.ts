import express from "express";
import mongoose from "mongoose";

// Environment variables (use dotenv for secure local development)
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "your-mongodb-uri";

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
