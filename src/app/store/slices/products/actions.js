import axios from 'axios';

import { 
  loadingStart,
  loadingEnd,
  setProducts,
} from './slice';

import { openSocketDispatchable } from './dispatchables';

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

      dispatch(setProducts(adoptedProducts));
      dispatch(openSocketDispatchable());
      return;
    }
    
    dispatch(setProducts([]));
  } catch(err) {
    throw err;
  } finally {
    dispatch(loadingEnd());
  }
};
