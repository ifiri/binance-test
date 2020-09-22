import { createSlice } from '@reduxjs/toolkit';

import {
  setProductsCreator,
  updateProductsCreator,
  setFilterCreator,
  loadingStartCreator,
  loadingEndCreator,
} from './actionCreators';

export const productsSlice = createSlice({
  name: 'products',

  initialState: {
    data: null,
    search: {
      filter: 'btc',
      results: null,
    },
    isLoading: false,
  },

  reducers: {
    setProducts: setProductsCreator,
    updateProducts: updateProductsCreator,
    setFilter: setFilterCreator,
    loadingStart: loadingStartCreator,
    loadingEnd: loadingEndCreator,
  },
});

export const {
  setProducts,
  setFilter,
  updateProducts,
  loadingStart,
  loadingEnd
} = productsSlice.actions;

export default productsSlice.reducer;
