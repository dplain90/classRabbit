import * as APIUtil from '../util/api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const fetchCategories = () => dispatch => {
  return APIUtil.categories().then(categories => {
    return dispatch(receiveCategories(categories));
  });

};

export const receiveCategories = categories => {
return {
  type: RECEIVE_CATEGORIES,
  categories
};
};
