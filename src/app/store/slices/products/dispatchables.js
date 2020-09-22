import { createAction } from '@reduxjs/toolkit';

// Here we should determine dispatchables objects, in this case, just for websocket.
// Because websocket middleware cannot export their actions, we can add it here.
export const openSocketDispatchable = createAction('products/Websocket/Connect');
export const closeSocketDispatchable = createAction('products/Websocket/Disconnect');
