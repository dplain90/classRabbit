import { RECEIVE_TASKERS } from '../actions/user_actions';

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
        return action.tasker_data.taskers;
      }
    default:
      return state;
  }
};

export default TaskersReducer;
