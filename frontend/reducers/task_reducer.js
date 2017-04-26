import { RECEIVE_TASK, RECEIVE_TASKS, CLEAR_NEW_TASK } from '../actions/task_actions';
import merge from 'lodash/merge';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      const newTaskState = Object.merge({}, state, action.task);
      return newTaskState;
    default:
      return state;
  }
};

export default tasksReducer;
