import { connect } from 'react-redux';
import Edit from './edit';


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser
  };

};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
