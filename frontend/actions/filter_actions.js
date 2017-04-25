import * as APIUtil from '../util/api_util';
import { filterTaskers } from '../reducers/selectors';
export const UPDATE_FILTER_RESULTS = "UPDATE_FILTER_RESULTS";
export const UPDATE_FILTER = "UPDATE_FILTER";
export const SET_FILTER = "SET_FILTER";

export const updateFilter = parameter => {
  return {
    type: UPDATE_FILTER,
    parameter
  };
};

export const updateFilterResults = taskers => ({
  type: UPDATE_FILTER_RESULTS,
  taskers
})


export const UpdateFilter = (parameter) => dispatch => {
  return dispatch(updateFilter(parameter));
}


export const calculateFilterResults = (filters, taskers, availabilities) => dispatch => {
  const filteredTaskers = filterTaskers(filters, taskers, availabilities);
  return dispatch(updateFilterResults(filteredTaskers));
};
