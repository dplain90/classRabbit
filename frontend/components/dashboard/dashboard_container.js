import { connect } from 'react-redux';
import dashboard from './dashboard';
import { fetchCategories } from '../../actions/category_actions';
import { asArray } from '../../reducers/selectors';
import { receiveNewTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser,
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    receiveNewTask: (task) => dispatch(receiveNewTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
