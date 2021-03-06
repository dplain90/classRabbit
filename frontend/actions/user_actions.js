import * as APIUtil from '../util/api_util';
import { receiveErrors } from './session_actions';
export const RECEIVE_TASKERS = "RECEIVE_TASKERS";
export const CLEAR_TASKERS = "CLEAR_TASKERS";
export const receiveTaskers = tasker_data => {
  return {
    type: RECEIVE_TASKERS,
    tasker_data
  };
};

export const clearTaskers = () => {
  return {
    type: CLEAR_TASKERS
  };

};


export const getTaskers = (category_id, locality) => dispatch => (
  APIUtil.fetchTaskers(category_id, locality)
    .then(tasker_data => dispatch(receiveTaskers(tasker_data)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
