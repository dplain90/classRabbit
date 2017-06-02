import { connect } from 'react-redux';
import EditForm from './edit_form';
import { editUser, receiveErrors } from '../../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser,
    errors: state.session.errors
  };

};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editUser: (user) => dispatch(editUser(user)),
    clearErrors: () => dispatch(receiveErrors({})),
    receiveError: (error) => dispatch(receiveErrors(error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
