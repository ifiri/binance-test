import { configureStore } from '@reduxjs/toolkit';
import slices from './slices';

export default configureStore({
  reducer: {
    connect: slices.connect,
  },
});