import { connect } from 'react-redux';
import Confirm from './confirm';
import { createTask } from '../../../../actions/task_actions';

const mapStateToProps = (state, ownProps) => ({
   task: state.task
 });

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTask: (task) => dispatch(createTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
