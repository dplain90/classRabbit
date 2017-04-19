import { connect } from 'react-redux';
import sessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  return {
    loggedIn: state.session.currentUser,
    formType: formType,
    errors: state.session.errors
  };

};


const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: (data) => dispatch(processForm(data))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);
