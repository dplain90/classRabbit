import { RECEIVE_CATEGORIES } from '../actions/category_actions';
import merge from 'lodash/merge';

const initialState = Object.freeze({
   1: "done"
});

const CategoriesReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default CategoriesReducer;
