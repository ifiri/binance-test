import { configureStore  } from '@reduxjs/toolkit';
import slices from './slices';
import productsWebsocketMiddleware from './slices/products/middlewares';

const middlewares = [
  productsWebsocketMiddleware,
];

export default configureStore({
  reducer: {
    products: slices.products,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
