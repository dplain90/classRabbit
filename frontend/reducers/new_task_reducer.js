import { RECEIVE_NEW_TASK } from '../actions/task_actions';
import merge from 'lodash/merge';

const _initialNewTask = Object.freeze({
  stage: 1
});


const newTaskReducer = (state = _initialNewTask, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NEW_TASK:
      const newTaskState = merge({}, state, action.task);
      return newTaskState;
    default:
      return state;
  }
};

export default newTaskReducer;