import { RECEIVE_NEW_TASK } from '../actions/task_actions';
import { RECEIVE_TASKERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _initialNewTask = Object.freeze({
  stage: 1,
  present: "",
  toggles: {
    showDescription: false,
    showLocationForm: true,
    showErrors: false
  }
});


const newTaskReducer = (state = _initialNewTask, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NEW_TASK:
      const newTaskState = merge({}, state, action.task);
      return newTaskState;
    case RECEIVE_TASKERS:
      const present = {present: action.tasker_data.present};
      const newTaskStateWithTaskerPresence = Object.assign({}, state, present);
      return newTaskStateWithTaskerPresence;
    default:
      return state;
  }
};

export default newTaskReducer;
