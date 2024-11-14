import { ActionType } from './actions';

const initialState = {
  tasks: [],
  show: ActionType.SHOW_ALL,
};

export const reducer = (state = initialState, action) => {
  const { tasks } = state;
  switch (action.type) {
    case ActionType.ADD_TASK:
      return {
        ...state,
        tasks: [...tasks, action.payload],
      };

    case ActionType.DELETE_TASK:
      return {
        ...state,
        tasks: [
          ...tasks.slice(0, action.payload),
          ...tasks.slice(action.payload + 1, tasks.length),
        ],
      };

    case ActionType.IS_COMPLETE_TASK:
      return {
        ...state,
        tasks: tasks.map((task, i) => {
          if (i === action.payload) {
            task.isCompleted = !task.isCompleted;
            return task;
          }
          return task;
        }),
      };

    case ActionType.SHOW_ALL:
      return {
        ...state,
        show: ActionType.SHOW_ALL,
      };

    case ActionType.SHOW_COMPLETED:
      return {
        ...state,
        show: ActionType.SHOW_COMPLETED,
      };

    case ActionType.SHOW_UNFULFILLED:
      return {
        ...state,
        show: ActionType.SHOW_UNFULFILLED,
      };

    default:
      return state;
  }
};
