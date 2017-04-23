import { RECEIVE_TASKERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const initialState = {};

const AvailabilitiesReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASKERS:
      return action.tasker_data.availabilities;
    default:
      return state;
  }
};

export default AvailabilitiesReducer;
