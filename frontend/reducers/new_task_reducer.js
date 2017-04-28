import { RECEIVE_NEW_TASK, CLEAR_NEW_TASK } from '../actions/task_actions';
import { RECEIVE_TASKERS } from '../actions/user_actions';
import merge from 'lodash/merge';
import { clearTask, setTask } from '../components/forms/newTask/session_util';
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
      const newTaskState = Object.assign({}, state, action.task);
      setTask({ task: newTaskState});
      return newTaskState;
    case RECEIVE_TASKERS:
      const present = {present: action.tasker_data.present};
      const newTaskStateWithTaskerPresence = Object.assign({}, state, present);
      return newTaskStateWithTaskerPresence;
    case CLEAR_NEW_TASK:
      clearTask();
      return _initialNewTask;

    default:
      return state;
  }
};

export default newTaskReducer;
