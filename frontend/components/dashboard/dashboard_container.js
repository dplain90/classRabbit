import { connect } from 'react-redux';
import dashboard from './dashboard';
import { fetchCategories } from '../../actions/category_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser,
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
