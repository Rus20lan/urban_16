import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../redux/tasksSlice';
import showReducer from '../redux/showSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    show: showReducer,
  },
});
