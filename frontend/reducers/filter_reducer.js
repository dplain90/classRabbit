import merge from 'lodash/merge';
import { UPDATE_FILTER, SET_FILTER } from '../actions/filter_actions';
import { RECEIVE_TASKERS } from '../actions/user_actions';
import { asArray } from './selectors';
const _defaultFilter = Object.freeze({
  sort_by: "",
  date: "",
  time: "",
  results: []
});

const FilterReducer = (state = _defaultFilter, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER_RESULTS:
      const newResults =  { results: asArray(action.taskers)};
      return Object.assign({}, state, newResults);
    case UPDATE_FILTER:
      const newFilter = { [action.filter]: action.value };
      return merge({}, state, newFilter);
    default:
      return state;
  }
};

export default FilterReducer;
