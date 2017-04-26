import { connect } from 'react-redux';
import LocationForm from './location_form';
import { updateNewTask } from '../../../../../../actions/task_actions';
import { getTaskers } from '../../../../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
   task: state.task
 });

const mapDispatchToProps = (dispatch, ownProps) => ({
   updateNewTask: (task) => dispatch(updateNewTask(task)),
   getTaskers: (category_id, locality) => dispatch(getTaskers(category_id, locality))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
