import merge from 'lodash/merge';
import { UPDATE_FILTER, SET_FILTER } from '../actions/filter_actions';
const _defaultFilter = Object.freeze({
  parameters: {},
  results: [],
  potential_results: []
});

const SearchReducer = (state = _defaultSearch, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_FILTER:
      return action.filter;
    case UPDATE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

// need to update the update filter result
export default FilterReducer;
