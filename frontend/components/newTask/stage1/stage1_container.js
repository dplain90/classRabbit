import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  let taskerPresence;
  let newTask = getTask();
  if(state.task.present === 'true'){
    taskerPresence = "Good news! ClassRabbit is available in your area";
  } else if (state.task.present === 'false') {
    taskerPresence = "Sorry! ClassRabbit is not yet available in your area!";
  } else {
    taskerPresence = "";
  }

  return {
    taskers: state.taskers,
    filter: state.filter,
    task: newTask,
    present: taskerPresence,
    availabilities: state.availabilities
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilter: (potential_results) => dispatch(setFilter(potential_results)),
    updateFilter: (params) => dispatch(updateFilter(params)),
    calculateFilterResults: (filters, taskers, availabilities) => dispatch(calculateFilterResults(filters, taskers, availabilities)),
    updateTask: (task) => dispatch(updateNewTask(task)),
    getTaskers: (category_id, locality) => dispatch(getTaskers(category_id, locality))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Stage1);
