import { createSlice } from '@reduxjs/toolkit';

import {
  setSearchCreator,
} from './actionCreators';

export const slice = createSlice({
  name: 'search',

  initialState: {
    search: null,
  },

  reducers: {
    setSearch: setSearchCreator,
  },
});

export const {
  setSearch,
} = slice.actions;

export default slice.reducer;
