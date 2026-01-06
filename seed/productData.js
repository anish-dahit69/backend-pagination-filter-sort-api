const categories = ["men", "women", "kids", "electronics"];

//generate random products

export const generateProducts = (count = 500) => {
  const products = [];

  for (let i = 0; i < count; i++) {
    products.push({
      name: `products-${i}`,
      price: Math.floor(Math.random() * 5000) + 500,
      category: categories[i % categories.length],
      description: `This is the description for product-${i}`,
    });
  }
  return products;
};
