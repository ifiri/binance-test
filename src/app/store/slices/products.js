import { createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

import middlewares from 'app/store/middlewares';

const openSocket = createAction('products/Websocket/Connect');
const closeSocket = createAction('products/Websocket/Disconnect');

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },

    updateProducts: (state, action) => {
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
    },

    loadingStart: state => {
      state.isLoading = true;
    },

    loadingEnd: state => {
      state.isLoading = false;
    },
  },

  extraReducers: {
    [openSocket]: (state, action) => {
      console.log(':: open socket');
    },

    [closeSocket]: (state, action) => {
      console.log(':: clsoe socket');
    },
  }
});

export const { setProducts, updateProducts, loadingStart, loadingEnd } = productsSlice.actions;




const onMessage = dispatch => message => {
  if (!message.data) {
    return;
  }

  const result = JSON.parse(message.data);

  if (result.data) {
    // TODO 1
    // const adoptedProducts = result.data.map(product => ({
    //   'symbol': product.s,
    //   'lastPrice': product.c,
    // }));

    const adoptedProducts = result.data.reduce((accumulator, product) => ({
      ...accumulator,
      [product.s]: {
        'lastPrice': product.c,
      }
    }), {});

    // console.log('::: adope', adoptedProducts);

    dispatch(updateProducts(adoptedProducts));
  }
}

export const productsWebsocketMiddleware = middlewares.websocket({
  prefix: 'products',
  onMessage,
});













export const fetchProducts = () => async dispatch => {
  try {
    dispatch(loadingStart());

    const response = await axios.get('https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products');

    const { data } = response;

    if (data && data.success) {

      // TODO 1
      const adoptedProducts = data.data.reduce((accumulator, product) => ({
        ...accumulator,
        [product.s]: {
          'pair': `${product.b}/${product.q}`,
          'lastPrice': product.c,
        }
      }), {});

      // console.log(':: adopt', adoptedProducts);

      dispatch(setProducts(adoptedProducts));

      dispatch(openSocket());
      return;
    }
    
    dispatch(setProducts([]));
  } catch(err) {
    throw err;
  } finally {
    dispatch(loadingEnd());
  }
};

export const selectProducts = state => Object.values(state.products.data);
export const selectProductsExistence = state => 
  Object.keys(state.products.data).length;
export const selectLoadingState = state => state.products.isLoading;

export default productsSlice.reducer;
