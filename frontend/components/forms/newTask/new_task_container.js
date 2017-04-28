import { connect } from 'react-redux';
import { updateNewTask } from '../../../actions/task_actions';
import newTask from './new_task';
import { getTask } from './session_util';
import { pencilIcon } from '../../helpers/icon_helper';
import { getTaskers } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return { task: state.task, pencil: pencilIcon(),  taskers: state.taskers }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
   updateNewTask: (task) => dispatch(updateNewTask(task)),
   getTaskers: (category_id, locality) => dispatch(getTaskers(category_id, locality))
});


export default connect(mapStateToProps, mapDispatchToProps)(newTask);
