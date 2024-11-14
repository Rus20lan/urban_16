import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdd: (state, action) => {
      state.push(action.payload);
    },
    taskDelete: (state, action) => {
      state.splice(action.payload, 1);
    },
    taskIsComplete: (state, action) => {
      state[action.payload].isCompleted = !state[action.payload].isCompleted;
    },
  },
});

export const { taskAdd, taskDelete, taskIsComplete } = tasksSlice.actions;

export default tasksSlice.reducer;
