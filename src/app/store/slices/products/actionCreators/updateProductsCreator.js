export const updateProductsCreator = (state, action) => {
  // Fastest way to iterate object
  for (let productKey in action.payload) {
    if (!state.data[productKey]) {
      continue;
    }

    state.data[productKey] = {
      ...state.data[productKey],
      ...action.payload[productKey],
    };
  }
};
