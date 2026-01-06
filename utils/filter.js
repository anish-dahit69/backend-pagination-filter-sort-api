export const buildFilter = (query) => {
  const filter = {};
  if (query.category) filter.category = query.category;

  // Price range filter
  if (query.price) {
    filter.price = {};
    if (query.price.gte) filter.price.$gte = Number(query.price.gte);
    if (query.price.lte) filter.price.$lte = Number(query.price.lte);
  }

  if (query.search) {
    filter.name = { $regex: query.search, $options: "i" };
  }
  return filter;
};
