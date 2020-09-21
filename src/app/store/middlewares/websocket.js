const websocketMiddleware = ({ onMessage, prefix = null}) => {
  let websocket;

  return store => next => action => {
    const actionPrefix = prefix ? `${prefix}/Websocket` : 'websocket';

    switch (action.type) {
      case `${actionPrefix}/Connect`:
        websocket = new WebSocket(
          `wss://stream.binance.com/stream?streams=!miniTicker@arr`
        );

        websocket.onopen = result => {
          console.log('---> socket is opened with', result);
        };

        websocket.onerror = result => {
          console.log('---> socket is closed with', result);
          websocket.close();
        };

        websocket.onmessage = onMessage(store.dispatch);
        break;

      case `${actionPrefix}/Disconnect`:
        websocket.close();
        break;
    };

    return next(action);
  }
};

export default websocketMiddleware;
