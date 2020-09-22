export const setProductsCreator = (state, action) => {
  state.data = action.payload;
};

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

export const sortCreator = (state, action) => {
  state.sort = {
    column: action.payload.column,
    type: action.payload.type,
  };
};

export const setFilterCreator = (state, action) => {
  state.filter = action.payload;
};

export const setSearchCreator = (state, action) => {
  state.search = action.payload;
};

export const loadingStartCreator = state => {
  state.isLoading = true;
};

export const loadingEndCreator = state => {
  state.isLoading = false;
};
