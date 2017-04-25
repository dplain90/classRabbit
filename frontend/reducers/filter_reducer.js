import merge from 'lodash/merge';
import { UPDATE_FILTER, SET_FILTER } from '../actions/filter_actions';
const _defaultFilter = Object.freeze({
  sorting_filter: {},
  date: "",
  time: "",
  results: [],
  potential_results: []
});

const FilterReducer = (state = _defaultFilter, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_FILTER:
      return action.filter;
    case UPDATE_FILTER:
      const newFilter = { [action.filter]: action.value };
      return merge({}, state, newFilter);
    default:
      return state;
  }
};

export default FilterReducer;
