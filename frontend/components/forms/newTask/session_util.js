export const getTask = () => JSON.parse(sessionStorage.getItem("newTask"));
export const setTask = (task) => sessionStorage.setItem("newTask", JSON.stringify(task));
export const clearTask = () => sessionStorage.clear("newTask");
