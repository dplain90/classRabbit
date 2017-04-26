import { connect } from 'react-redux';
import Stage3 from './stage3';

const mapStateToProps = (state, ownProps) => ({ task: state.task });

export default connect(mapStateToProps)(Stage3);
