import * as APIUtil from '../util/api_util';

export const UPDATE_FILTER = "UPDATE_FILTER";
export const SET_FILTER = "SET_FILTER";

export const updateFilter = parameters => {
return {
  type: UPDATE_FILTER,
  parameters
};
};

export const setFilter = parameters => {
return {
  type: SET_FILTER,
  parameters
};
};
