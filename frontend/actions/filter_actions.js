import * as APIUtil from '../util/api_util';
import { filterTaskers } from '../reducers/selectors';

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

export const setFilter = parameters => {
  return {
    type: SET_FILTER,
    parameters
  };
};

export const calculateFilterResults = (filters, taskers) => dispatch => {
  const filteredTaskers = filterTaskers(filters, taskers);
  return dispatch(updateFilterResults(filteredTaskers));
};





updateFilter(timeFilterParams).then( () => updateFilterResults(filterTaskers(filterstate, this.props.taskers))))
