import { createStore } from 'redux';

const initialState = {
  tasks: [{ task: 'Clean my Room', id: '2323232' }],
};

const todoReducer = (state = initialState, action: any) => {
  if (action.type === 'add') {
    return {
      tasks: [action.value, ...state.tasks],
    };
  }

  if (action.type === 'remove') {
    const newTasks = state.tasks.filter(item => item.id !== action.id);
    return {
      tasks: [...newTasks],
    };
  }

  if (action.type === 'update') {
    return {
      tasks: action.value,
    };
  }

  return state;
};

const store = createStore(todoReducer);

export default store;
