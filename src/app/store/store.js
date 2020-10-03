import { configureStore  } from '@reduxjs/toolkit';
import slices from './slices';
import { productsWebsocketMiddleware } from './slices/products/middlewares';

const middlewares = [
  productsWebsocketMiddleware,
];

export default configureStore({
  reducer: {
    products: slices.products,
    filter: slices.filter,
    search: slices.search,
    sort: slices.sort,
    loading: slices.loading,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
