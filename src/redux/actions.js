export const ActionType = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  IS_COMPLETE_TASK: 'IS_COMPLETE_TASK',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_UNFULFILLED: 'SHOW_UNFULFILLED',
};

export const todoAdded = (task) => {
  return {
    type: ActionType.ADD_TASK,
    payload: task,
  };
};

export const todoDeleted = (index) => {
  return {
    type: ActionType.DELETE_TASK,
    payload: index,
  };
};

export const todoIsComplete = (index) => {
  return {
    type: ActionType.IS_COMPLETE_TASK,
    payload: index,
  };
};

export const showAll = () => {
  return {
    type: ActionType.SHOW_ALL,
  };
};

export const showCompleted = () => {
  return {
    type: ActionType.SHOW_COMPLETED,
  };
};
export const showUnfulfilled = () => {
  return {
    type: ActionType.SHOW_UNFULFILLED,
  };
};
