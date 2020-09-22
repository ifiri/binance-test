const websocketMiddleware = ({ url, onMessage, prefix = null}) => {
  let websocket;

  return store => next => action => {
    // Required to be able create many middlewares and separate them
    const actionPrefix = prefix ? `${prefix}/Websocket` : 'websocket';

    switch (action.type) {
      case `${actionPrefix}/Connect`:
        websocket = new WebSocket(url);

        websocket.onerror = result => {
          websocket.close();
        };

        websocket.onmessage = onMessage(store.dispatch);
        break;

      case `${actionPrefix}/Disconnect`:
        websocket.close();
        break;

      // Empty rule for consistency
      default:
        break;
    };

    return next(action);
  }
};

export default websocketMiddleware;
