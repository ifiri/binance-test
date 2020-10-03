export const selectProductsExistence = state => {
  const { products } = state;

  return products.data && Object.keys(products.data).length;
};
