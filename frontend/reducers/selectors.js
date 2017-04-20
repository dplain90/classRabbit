export const asArray = (categories) => {
  return Object.keys(categories).map((key) => {
    return categories[key];
  });
};
