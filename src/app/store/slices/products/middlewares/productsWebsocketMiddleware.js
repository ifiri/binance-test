import { BINANCE_WS_ENDPOINT } from 'app/config';
import middlewares from 'app/store/middlewares';

import { productsAdapter } from '../adapters';
import { updateProducts } from '../slice';

const onSocketMessage = dispatch => message => {
  if (!message.data) {
    return;
  }

  const result = JSON.parse(message.data);

  if (result.data) {
    const adoptedProducts = productsAdapter(result.data);

    dispatch(updateProducts(adoptedProducts));
  }
}

// We need to create private middleware. This is because application can have
// multiple websockets inside, so I can't use one global middleware, even
// if it is possible. Instead, we can create so much websockets as we need,
// with customizable action prefix and handler, and then register it in store.
export const productsWebsocketMiddleware = middlewares.websocket({
  url: BINANCE_WS_ENDPOINT,
  prefix: 'products',
  onMessage: onSocketMessage,
});
