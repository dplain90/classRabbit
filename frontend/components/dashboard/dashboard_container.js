import { connect } from 'react-redux';
import dashboard from './dashboard';
import { fetchCategories } from '../../actions/category_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    user: state.session.currentUser,
    categories: asArray(state.categories)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
