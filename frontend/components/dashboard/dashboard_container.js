import { connect } from 'react-redux';
import dashboard from './dashboard';


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
