import merge from 'lodash/merge';
import { UPDATE_SEARCH } from '../actions/search_actions';
const _defaultSearch = Object.freeze({
  value: "",
  results: [],
  active: "hidden"
});

const SearchReducer = (state = _defaultSearch, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_SEARCH:
      return action.search;
    default:
      return state;
  }
};

export default SearchReducer;
