import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import { connectDB } from "./configs/db.js";
import { productRouter } from "./routes/productRoutes.js";
import { corsOptions } from "./configs/cors.js";

const app = express();

// CORS middleware (MUST be before routes)
app.use(cors(corsOptions));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Routes
app.use("/api/products", productRouter);

// Start server
const startServer = async () => {
  try {
    await connectDB();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
