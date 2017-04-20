import { connect } from 'react-redux';
import Nav from './nav';
import { logout, login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.currentUser
  };

};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
