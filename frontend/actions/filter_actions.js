import * as APIUtil from '../util/api_util';
import { filterTaskers } from '../reducers/selectors';
export const RECEIVE_FILTER_RESULTS = "RECEIVE_FILTER_RESULTS";
export const RECEIVE_FILTER = "RECEIVE_FILTER";

export const receiveFilter = parameter => {
  return {
    type: RECEIVE_FILTER,
    parameter
  };
};

export const receiveFilterResults = taskers => ({
  type: RECEIVE_FILTER_RESULTS,
  taskers
});


export const updateFilter = (parameter) => (dispatch) => {
  return dispatch(receiveFilter(parameter));
};


export const updateFilterResults = (filters, taskers, availabilities) => (dispatch) => {
  const filteredTaskers = filterTaskers(filters, taskers, availabilities);
  return dispatch(receiveFilterResults(filteredTaskers));
};
