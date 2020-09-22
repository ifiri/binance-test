import axios from 'axios';

import { BINANCE_REST_API_ENDPOINT } from 'app/config';
import { 
  loadingStart,
  loadingEnd,
  setProducts,
} from '../productsSlice';
import { openSocketDispatchable } from '../dispatchables';
import { productsAdapter } from '../adapters';

export const fetchProducts = () => async dispatch => {
  try {
    dispatch(loadingStart());

    const response = await axios.get(BINANCE_REST_API_ENDPOINT);

    const result = response.data;

    if (result && result.success) {

      // TODO 1
      const adoptedProducts = productsAdapter(result.data);

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
