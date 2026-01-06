import express from "express";
import { getProductsController } from "../controllers/productController.js";

export const productRouter = express.Router();
productRouter.get("/", getProductsController);
