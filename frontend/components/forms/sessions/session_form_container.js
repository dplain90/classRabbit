import { connect } from 'react-redux';
import sessionForm from './session_form';
import { login, logout, signup, receiveErrors } from '../../../actions/session_actions';

const isSignUp = (formType) => Boolean(formType === 'signup');

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  return {
    isSignUp: isSignUp(formType),
    loggedIn: state.session.currentUser,
    formType: formType,
    errors: state.session.errors
  };

};


const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = isSignUp(formType) ? signup : login;
  return {
    signup: (user) => dispatch(signup(user)),
    login: (credentials) => dispatch(login(credentials)),
    clearErrors: () => dispatch(receiveErrors({})),
    receiveError: (error) => dispatch(receiveErrors(error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);
