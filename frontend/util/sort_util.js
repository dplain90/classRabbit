export const generateSort = (direction, field) => {
  const compareTaskers = (obj1, obj2, field) => {
    if(obj1[`${field}`] > obj2[`${field}`]){
      return -1;
    } else if (obj1[`${field}`] === obj2[`${field}`]) {
      return 0;
    } else {
      return 1;
    }
  };

  if(direction === "asc"){
    return (tasker1, tasker2) => compareTaskers(tasker2, tasker1, field);
  } else {
    return (tasker1, tasker2) => compareTaskers(tasker1, tasker2, field);
  }
}
