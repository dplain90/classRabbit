import { connect } from 'react-redux';
import Stage2 from './Stage2';

const mapStateToProps = (state, ownProps) => ({ task: state.task });

export default connect(mapStateToProps)(Stage2);
