import { configureStore  } from '@reduxjs/toolkit';
import slices from './slices';
import { productsWebsocketMiddleware } from './slices/products';

const middlewares = [
  productsWebsocketMiddleware,
];

export default configureStore({
  reducer: {
    connect: slices.connect,
    products: slices.products,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsWebsocketMiddleware),
});
