import { connect } from 'react-redux';
import requestedTasks from './requested_tasks';
import { fetchTasks } from '../../actions/task_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser,
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTasks: () => dispatch(fetchTasks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(requestedTasks);
