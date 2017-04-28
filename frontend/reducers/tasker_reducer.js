import { RECEIVE_TASKERS, CLEAR_TASKERS } from '../actions/user_actions';
import { setTaskers, clearTaskers } from '../components/forms/newTask/session_util';
const initialState = {
  present: ""
};

const TaskersReducer = (state = initialState, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASKERS:
      if(action.tasker_data.present === 'false') {
        return { present: action.tasker_data.present };
      } else {
        setTaskers(action.tasker_data.taskers);
        return action.tasker_data.taskers;
      }
    case CLEAR_TASKERS:
      clearTaskers();
      return initialState;
    default:
      return state;
  }
};

export default TaskersReducer;
