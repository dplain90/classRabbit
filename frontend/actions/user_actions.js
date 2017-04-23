import * as APIUtil from '../util/api_util';

export const RECEIVE_TASKERS = "RECEIVE_TASKERS";
export const receiveTaskers = tasker_data => {
  return {
    type: RECEIVE_TASKERS,
    tasker_data
  };
};


export const getTaskers = (category_id, locality) => dispatch => (
  APIUtil.fetchTaskers(category_id, locality)
    .then(tasker_data => dispatch(receiveTaskers(tasker_data)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
