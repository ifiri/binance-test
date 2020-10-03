import { createSlice } from '@reduxjs/toolkit';

import {
  setFilterCreator,
} from './actionCreators';

export const slice = createSlice({
  name: 'filter',

  initialState: {
    filter: 'btc',
  },

  reducers: {
    setFilter: setFilterCreator,
  },
});

export const {
  setFilter,
} = slice.actions;

export default slice.reducer;
