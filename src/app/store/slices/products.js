import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    isLoading: false,
    // error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },

    loadingStart: state => {
      state.isLoading = true;
    },

    loadingEnd: state => {
      state.isLoading = false;
    },
  },
});

export const { setProducts, loadingStart, loadingEnd } = productsSlice.actions;

export const fetchProducts = () => async dispatch => {
  try {
    dispatch(loadingStart());

    const response = await axios.get('https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products');

    const { data } = response;

    if (data && data.success) {
      const adoptedProducts = data.data.map(product => ({
        'key': product.s,
        'pair': `${product.b}/${product.q}`,
        'lastPrice': product.c,
        'volume': product.v,
        'change': 0,
      }));

      dispatch(setProducts(adoptedProducts));
      return;
    }
    
    dispatch(setProducts([]));
  } catch(err) {
    throw err;
  } finally {
    dispatch(loadingEnd());
  }
};

export const selectProducts = state => state.products.data;
export const selectProductsExistence = state => state.products.data.length;
export const selectLoadingState = state => state.products.isLoading;

export default productsSlice.reducer;
