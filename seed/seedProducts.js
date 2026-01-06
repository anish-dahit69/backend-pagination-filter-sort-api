import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { generateProducts } from "./productData.js";
import { productModel } from "../models/productModel.js";
import { connectDB } from "../configs/db.js";

const seedProducts = async () => {
  try {
    await connectDB();

    // Clear existing data (optional but common)
    await productModel.deleteMany();

    const products = generateProducts(500);
    await productModel.insertMany(products);

    console.log("Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedProducts();
