import * as APIUtil from '../util/api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const signup = user => dispatch => {
  return APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)));
};

export const login = credentials => dispatch => (
  APIUtil.login(credentials)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
