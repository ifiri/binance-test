import { createSlice } from '@reduxjs/toolkit';

import {
  setProductsCreator,
  updateProductsCreator,
  setFilterCreator,
  setSearchCreator,
  sortCreator,
  loadingStartCreator,
  loadingEndCreator,
} from './actionCreators';

export const productsSlice = createSlice({
  name: 'products',

  initialState: {
    data: null,
    search: null,
    filter: 'btc',
    sort: {
      column: null,
      direction: 'desc',
    },
    isLoading: false,
  },

  reducers: {
    setProducts: setProductsCreator,
    updateProducts: updateProductsCreator,
    setFilter: setFilterCreator,
    setSearch: setSearchCreator,
    sort: sortCreator,
    loadingStart: loadingStartCreator,
    loadingEnd: loadingEndCreator,
  },
});

export const {
  setProducts,
  setFilter,
  setSearch,
  updateProducts,
  sort,
  loadingStart,
  loadingEnd
} = productsSlice.actions;

export default productsSlice.reducer;
