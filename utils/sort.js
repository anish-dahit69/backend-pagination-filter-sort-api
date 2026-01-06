export const buildSort = (query) => {
  if (!query.sortBy) {
    return {};
  }

  const order = query.order === "desc" ? -1 : 1;
  return { [query.sortBy]: order };
};
