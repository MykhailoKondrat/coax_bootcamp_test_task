import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './carSlice';

export default configureStore({
  reducer: {
    cars: carsReducer,
  },
});
