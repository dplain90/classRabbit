import merge from 'lodash/merge';
import { UPDATE_FILTER, SET_FILTER, UPDATE_FILTER_RESULTS } from '../actions/filter_actions';
import { RECEIVE_TASKERS } from '../actions/user_actions';
import { generateSort } from '../util/sort_util';
import { asArray } from './selectors';
const _defaultFilter = Object.freeze({
  sort_by: generateSort('desc', 'review_count'),
  date: "2017-04-25",
  time: "Morning",
  results: []
});

const FilterReducer = (state = _defaultFilter, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER_RESULTS:
      const newResults = Object.assign({}, state);
      newResults.results = asArray(action.taskers);
      debugger
      return newResults;
    case UPDATE_FILTER:
      return Object.assign({}, state, action.parameter);
    default:
      return state;
  }
};

export default FilterReducer;
