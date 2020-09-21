import { createSlice } from '@reduxjs/toolkit';

export const connectSlice = createSlice({
  name: 'connect',
  initialState: {
    pair: 'btc',
  },
  reducers: {
    changePair: (state, action) => {
      state.pair = action.payload;
    },
  },
});

export const { changePair } = connectSlice.actions;

export const selectPair = state => state.connect.pair;

export default connectSlice.reducer;
