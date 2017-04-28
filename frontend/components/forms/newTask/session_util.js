export const getTask = () => JSON.parse(sessionStorage.getItem("task"));

export const getStorageTaskers = () => JSON.parse(sessionStorage.getItem("taskers"));

export const setTask = (task) => sessionStorage.setItem("task", JSON.stringify(task));

export const setTaskers = (taskers) => sessionStorage.setItem("taskers", JSON.stringify(taskers));

export const clearTask = () => sessionStorage.clear("task");
export const clearTaskers = () => sessionStorage.clear("taskers");
