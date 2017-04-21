import * as APIUtil from '../util/api_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";

export const fetchTasks = () => dispatch => {
  return APIUtil.requestedTasks().then(tasks => {
    return dispatch(receiveTasks(tasks));
  });

};

export const receiveTasks = tasks => {
return {
  type: RECEIVE_TASKS,
  tasks
};
};
