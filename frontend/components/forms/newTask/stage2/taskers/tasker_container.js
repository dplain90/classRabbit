import { connect } from 'react-redux';
import Tasker from './tasker';
import { updateNewTask } from '../../../../../actions/task_actions';

const mapStateToProps = (state, ownProps) => ({
  task: state.task,
  tasker: ownProps.tasker
 });

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateNewTask: (task) => dispatch(updateNewTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasker);
