import { createSlice } from '@reduxjs/toolkit';
import { ActionType } from './actions';

const initialState = ActionType.SHOW_ALL;

export const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    showAll: () => ActionType.SHOW_ALL,
    showCompleted: () => ActionType.SHOW_COMPLETED,
    showUnfulfilled: () => ActionType.SHOW_UNFULFILLED,
  },
});

export const { showAll, showCompleted, showUnfulfilled } = showSlice.actions;

export default showSlice.reducer;
