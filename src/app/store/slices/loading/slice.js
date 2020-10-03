import { createSlice } from '@reduxjs/toolkit';

import {
  loadingStartCreator,
  loadingEndCreator,
} from './actionCreators';

export const slice = createSlice({
  name: 'loading',

  initialState: {
    isLoading: false,
  },

  reducers: {
    loadingStart: loadingStartCreator,
    loadingEnd: loadingEndCreator,
  },
});

export const {
  loadingStart,
  loadingEnd,
} = slice.actions;

export default slice.reducer;
