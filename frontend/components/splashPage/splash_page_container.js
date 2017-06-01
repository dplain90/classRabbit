import { connect } from 'react-redux';
import SplashPage from './splash_page';
import { fetchCategories } from '../../actions/category_actions';
import { asArray } from '../../reducers/selectors';
import { receiveNewTask, updateNewTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser,
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    receiveNewTask: (task) => dispatch(receiveNewTask(task)),
    updateNewTask: (task) => dispatch(updateNewTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
