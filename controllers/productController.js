import { getProducts } from "../services/productService.js";

export const getProductsController = async (req, res) => {
  try {
    const result = await getProducts(req.query);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
