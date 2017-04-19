import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.currentUser,
  };

};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout())
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
