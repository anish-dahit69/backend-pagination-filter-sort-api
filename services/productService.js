import { pagination } from "../utils/pagination.js";
import { buildFilter } from "./../utils/filter.js";
import { buildSort } from "./../utils/sort.js";
import { productModel } from "../models/productModel.js";

export const getProducts = async (query) => {
  const filter = buildFilter(query);
  const sort = buildSort(query);
  const { page, limit, skip } = pagination(query);

  const total = await productModel.countDocuments(filter);

  // Fetch products with applied filter, sort, pagination
  const products = await productModel
    .find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit);

  return {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
    products,
  };
};
