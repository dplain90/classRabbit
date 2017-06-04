import { connect } from 'react-redux';
import Edit from './edit';
import {logout} from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser
  };

};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
