import { connect } from 'react-redux';
import TaskDescription from './task_description';
import { updateNewTask } from '../../../../../actions/task_actions';
import { updateFilterResults } from '../../../../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => ({
   task: state.task,
   taskers: state.taskers
 });

const mapDispatchToProps = (dispatch, ownProps) => ({
   updateNewTask: (task) => dispatch(updateNewTask(task)),
   updateFilterResults: (taskers) => dispatch(updateFilterResults(taskers))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDescription);
