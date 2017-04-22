import * as APIUtil from '../util/api_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";

export const RECEIVE_NEW_TASK = 'RECEIVE_NEW_TASK';

export const receiveNewTask = task => {
return {
  type: RECEIVE_NEW_TASK,
  task
  };
};

export const receiveTasks = tasks => {
return {
  type: RECEIVE_TASKS,
  tasks
  };
};


export const receiveTask = task => {
  return {
    type: RECEIVE_TASK,
    task
  };
};

export const fetchTasks = () => dispatch => {
  return APIUtil.requestedTasks().then(tasks => {
    return dispatch(receiveTasks(tasks));
  });

};

export const createTask = (task) => dispatch => {
  return APIUtil.createTask(task).then((task) => {
    return dispatch(receiveTask(task));
  });

};
