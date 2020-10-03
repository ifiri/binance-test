import { createSlice } from '@reduxjs/toolkit';

import {
  setProductsCreator,
  updateProductsCreator,
} from './actionCreators';

export const slice = createSlice({
  name: 'products',

  initialState: {
    data: null,
  },

  reducers: {
    setProducts: setProductsCreator,
    updateProducts: updateProductsCreator,
  },
});

export const {
  setProducts,
  updateProducts,
} = slice.actions;

export default slice.reducer;
