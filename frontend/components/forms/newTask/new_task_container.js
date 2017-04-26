import { connect } from 'react-redux';
import newTask from './new_task';
import { getTask } from './session_util';

const mapStateToProps = (state, ownProps) => ({ task: getTask() });

export default connect(mapStateToProps)(newTask);
