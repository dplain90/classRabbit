import { RECEIVE_FILTER, RECEIVE_FILTER_RESULTS } from '../actions/filter_actions';
import { RECEIVE_TASKERS } from '../actions/user_actions';

import { generateSort } from '../util/sort_util';
import { asArray } from './selectors';

const _defaultFilter = Object.freeze({
  sorted_by: {
    direction: 'desc',
    val: 'price'
  },
  date: "2017-04-27",
  time: "Anytime",
  results: []
});

const FilterReducer = (state = _defaultFilter, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FILTER_RESULTS:
      const newResults = Object.assign({}, state);
      newResults.results = asArray(action.taskers);
      return newResults;
    case RECEIVE_FILTER:
      return Object.assign({}, state, action.parameter);
    case RECEIVE_TASKERS:
      if(action.tasker_data.present !== "false"){
      const updatedResults = Object.assign({}, state);
        updatedResults.results = asArray(action.tasker_data.taskers);
        return updatedResults;
      } else {
        return Object.assign({}, state);
      }
    default:
      return state;
  }
};

export default FilterReducer;
