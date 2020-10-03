import { createSlice } from '@reduxjs/toolkit';

import {
  sortCreator,
} from './actionCreators';

export const slice = createSlice({
  name: 'sort',

  initialState: {
    sort: {
      column: null,
      direction: 'desc',
    },
  },

  reducers: {
    sort: sortCreator,
  },
});

export const {
  sort,
} = slice.actions;

export default slice.reducer;
